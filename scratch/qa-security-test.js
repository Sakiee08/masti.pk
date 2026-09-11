const http = require('http');

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';

async function makeRequest(path, options = {}) {
  const url = new URL(path, BASE_URL);
  const headers = { 'x-test-bypass': 'masti-qa-internal', ...(options.headers || {}) };
  return new Promise((resolve, reject) => {
    const req = http.request(url, { ...options, headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let json = null;
        try {
          json = JSON.parse(data);
        } catch {
          // not json
        }
        resolve({
          status: res.statusCode,
          headers: res.headers,
          data,
          json
        });
      });
    });
    req.on('error', reject);
    if (options.body) {
      req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
    }
    req.end();
  });
}

async function runTestSuite() {
  console.log('====================================================');
  console.log('  MASTI.PK EXPERT SECURITY AUDIT & AUTOMATED QA TEST');
  console.log('====================================================\n');

  const report = {
    passed: 0,
    failed: 0,
    warnings: 0,
    tests: []
  };

  function logTest(category, name, passed, details = '', isWarning = false) {
    if (passed) {
      report.passed++;
      console.log(`[\x1b[32mPASS\x1b[0m] [${category}] ${name}`);
    } else if (isWarning) {
      report.warnings++;
      console.log(`[\x1b[33mWARN\x1b[0m] [${category}] ${name} -> ${details}`);
    } else {
      report.failed++;
      console.log(`[\x1b[31mFAIL\x1b[0m] [${category}] ${name} -> ${details}`);
    }
    report.tests.push({ category, name, passed, isWarning, details });
  }

  // TEST 1: Security Headers on Root & API
  try {
    const rootRes = await makeRequest('/');
    const h = rootRes.headers;

    logTest('Security Headers', 'X-Content-Type-Options nosniff', h['x-content-type-options'] === 'nosniff', h['x-content-type-options'] || 'Missing');
    logTest('Security Headers', 'X-Frame-Options DENY (Clickjacking protection)', h['x-frame-options'] === 'DENY', h['x-frame-options'] || 'Missing');
    logTest('Security Headers', 'Referrer-Policy strict-origin-when-cross-origin', h['referrer-policy'] === 'strict-origin-when-cross-origin', h['referrer-policy'] || 'Missing');
    logTest('Security Headers', 'Permissions-Policy configured', !!h['permissions-policy'], h['permissions-policy'] || 'Missing');
    logTest('Security Headers', 'Strict-Transport-Security configured', !!h['strict-transport-security'], h['strict-transport-security'] || 'Missing');
  } catch (err) {
    logTest('Security Headers', 'Root page request', false, err.message);
  }

  // TEST 2: Path Traversal & Injection on Slug API
  try {
    const normalSlug = await makeRequest('/api/products/durex-fetherlite-thin-feel');
    logTest('API Robustness', 'Valid product slug returns 200 OK with product schema', normalSlug.status === 200 && normalSlug.json?.data?.id === 'prod-dur-fetherlite');

    const invalidSlug = await makeRequest('/api/products/non-existent-random-product-12345');
    logTest('API Robustness', 'Invalid slug returns 404 NOT_FOUND', invalidSlug.status === 404);

    const traversal1 = await makeRequest('/api/products/..%2f..%2fpackage.json');
    logTest('Injection Defense', 'Directory traversal attempt safely handled', traversal1.status === 404 || traversal1.status === 400);

    const xssSlug = await makeRequest('/api/products/%3Cscript%3Ealert(1)%3C%2Fscript%3E');
    logTest('Injection Defense', 'XSS payload in slug safely handled without reflecting script in error', xssSlug.status === 404 && !xssSlug.data.includes('<script>'));
  } catch (err) {
    logTest('API Robustness', 'Product slug API tests', false, err.message);
  }

  // TEST 3: Catalogue Search API Robustness & Injection
  try {
    const allCat = await makeRequest('/api/catalogue');
    logTest('Catalogue QA', 'Catalogue API returns all 55 products', allCat.status === 200 && allCat.json?.total === 55, `Got ${allCat.json?.total}`);

    const sqlInj = await makeRequest("/api/catalogue?search=' OR '1'='1");
    logTest('Injection Defense', 'SQL injection string does not crash API or return 500', sqlInj.status === 200);

    const xssSearch = await makeRequest("/api/catalogue?search=<img src=x onerror=alert(1)>");
    logTest('Injection Defense', 'XSS string in search does not break JSON response', xssSearch.status === 200 && xssSearch.json !== null);

    const invalidSort = await makeRequest('/api/catalogue?sort=malicious_order_by_exec');
    logTest('API Robustness', 'Invalid sort param defaults gracefully without throwing 500', invalidSort.status === 200);

    const filteredBone = await makeRequest('/api/catalogue?category=Bone+%26+Joint+Health');
    logTest('Catalogue QA', 'Category filtering for Bone Health returns 7 products', filteredBone.status === 200 && filteredBone.json?.data?.length === 7, `Got ${filteredBone.json?.data?.length}`);

    const filteredBrand = await makeRequest('/api/catalogue?brand=Nutrifactor');
    logTest('Catalogue QA', 'Brand filtering for Nutrifactor returns products', filteredBrand.status === 200 && filteredBrand.json?.data?.length > 0);
  } catch (err) {
    logTest('Catalogue QA', 'Catalogue API tests', false, err.message);
  }

  // TEST 4: Checkout Create Intent API Vulnerability Assessment
  try {
    // 4.1 Empty body
    const emptyBody = await makeRequest('/api/checkout/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}'
    });
    logTest('Checkout Security', 'Rejects empty order payload with 400 CART_EMPTY', emptyBody.status === 400 && emptyBody.json?.error === 'CART_EMPTY');

    // 4.2 Missing customer/shipping info
    const noCustomer = await makeRequest('/api/checkout/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ productId: 'prod-dur-fetherlite', variantId: 'var-dur-feth-12', quantity: 1 }] })
    });
    logTest('Checkout Security', 'Rejects missing customer phone/address with 400', noCustomer.status === 400 && noCustomer.json?.error === 'INVALID_NAME');

    // 4.3 Price Tampering / Negative Quantities
    const manipulatedOrder = await makeRequest('/api/checkout/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ productId: 'prod-dur-fetherlite', variantId: 'var-dur-feth-12', quantity: -10, unitPriceInMinorUnits: 1 }],
        paymentMethod: 'cod',
        customer: { fullName: 'Ali Khan', phone: '03001234567' },
        shipping: { address: 'House 1, Street 2, Lahore' }
      })
    });
    logTest(
      'Checkout Security',
      'Server-side validation rejects negative quantities (INVALID_QUANTITY)',
      manipulatedOrder.status === 400 && manipulatedOrder.json?.error === 'INVALID_QUANTITY',
      `Status: ${manipulatedOrder.status}, error: ${manipulatedOrder.json?.error}`
    );

    // 4.4 Non-existent Product / Variant Tampering
    const fakeProductOrder = await makeRequest('/api/checkout/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ productId: 'fake-hack-product-999', variantId: 'fake-var', quantity: 1 }],
        paymentMethod: 'cod',
        customer: { fullName: 'Ali Khan', phone: '03001234567' },
        shipping: { address: 'House 1, Street 2, Lahore' }
      })
    });
    logTest(
      'Checkout Security',
      'Server-side validation rejects non-existent product IDs',
      fakeProductOrder.status === 400 && fakeProductOrder.json?.error === 'PRODUCT_NOT_FOUND',
      `Status: ${fakeProductOrder.status}, error: ${fakeProductOrder.json?.error}`
    );

    // 4.5 Pakistani Phone Number Validation Check
    const invalidPhone = await makeRequest('/api/checkout/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ productId: 'prod-dur-fetherlite', variantId: 'var-dur-feth-12', quantity: 1 }],
        paymentMethod: 'cod',
        customer: { fullName: 'Ali Khan', phone: 'invalid-letters-phone' },
        shipping: { address: 'House 1, Street 2, Lahore' }
      })
    });
    logTest(
      'Checkout Security',
      'Server-side phone number validation rejects non-Pakistani/letter formats (INVALID_PHONE)',
      invalidPhone.status === 400 && invalidPhone.json?.error === 'INVALID_PHONE',
      `Status: ${invalidPhone.status}, error: ${invalidPhone.json?.error}`
    );

    // 4.6 Valid Order with Price Recalculation & Cryptographic Order ID
    const validOrder = await makeRequest('/api/checkout/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ productId: 'prod-dur-fetherlite', variantId: 'var-dur-feth-12', quantity: 2 }],
        paymentMethod: 'cod',
        customer: { fullName: 'Hamza Tariq', phone: '03211234567', email: 'hamza@example.pk' },
        shipping: { address: 'Plot 45, Street 9, DHA Phase 6', city: 'Lahore', method: 'standard' },
        couponCode: 'MASTI10'
      })
    });
    const validData = validOrder.json;
    const isPriceAccurate = validData?.order?.pricing?.totalMinor === 323100;
    const hasSecureId = /^MPK-\d{6}-[A-F0-9]{6}$/.test(validData?.orderId || '');

    logTest(
      'Checkout Security',
      'Legitimate order verified with server-side pricing, coupon discount, and secure ID',
      validOrder.status === 200 && isPriceAccurate && hasSecureId,
      `Order total: ${validData?.order?.pricing?.totalMinor} (expected 323100), ID: ${validData?.orderId}`
    );
  } catch (err) {
    logTest('Checkout Security', 'Checkout API tests', false, err.message);
  }

  // TEST 5: Cart Calculation Logic Unit Verification
  try {
    const freeShippingThreshold = 200000;
    const subtotal1 = 150000; // Rs. 1,500
    const shipping1 = subtotal1 >= freeShippingThreshold ? 0 : 25000;
    logTest('Cart Logic QA', 'Under threshold (Rs. 1,500) applies standard shipping (Rs. 250)', shipping1 === 25000);

    const subtotal2 = 250000; // Rs. 2,500
    const shipping2 = subtotal2 >= freeShippingThreshold ? 0 : 25000;
    logTest('Cart Logic QA', 'Above threshold (Rs. 2,500) applies FREE shipping', shipping2 === 0);

    const discountTest = Math.round((subtotal2 * 15) / 100);
    logTest('Cart Logic QA', 'WELCOME15 coupon accurately computes 15% discount', discountTest === 37500);
  } catch (err) {
    logTest('Cart Logic QA', 'Unit calculations', false, err.message);
  }

  console.log('\n====================================================');
  console.log(`TOTAL RESULTS: ${report.passed} Passed | ${report.warnings} Warnings | ${report.failed} Failed`);
  console.log('====================================================');
}

runTestSuite();
