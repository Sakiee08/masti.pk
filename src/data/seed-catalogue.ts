import { Product } from '@/types/store';

export const SEED_PRODUCTS: Product[] = [
  // ==========================================
  // 1. DUREX EUROPEAN PREMIUM CONDOMS
  // ==========================================
  {
    id: 'prod-dur-fetherlite',
    slug: 'durex-fetherlite-thin-feel',
    title: 'Durex Fetherlite Thin Feel Condoms',
    tagline: 'Ultra fine latex with Sensi-Fit contour for heightened skin-on-skin intimacy',
    brand: 'Durex',
    category: 'Condoms',
    texture: 'Ultra Thin',
    nominalWidthMm: 52.5,
    material: 'Natural Rubber Latex',
    rating: 4.9,
    reviewCount: 312,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 4,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Durex Fetherlite Thin Feel condoms are engineered with Sensi-Fit technology, making them 20% thinner than standard Durex condoms while delivering the exact same certified European CE and ISO safety thresholds. Designed to maximize warmth transfer and natural skin-on-skin touch.</p><p>Features an easy-on contoured profile with reservoir teat end, pre-coated with non-sticky premium silicone lubricant for an effortless glide.</p>`,
    highlights: [
      '20% thinner than standard Durex latex condoms',
      'Straight-walled, teat-ended with Sensi-Fit contour',
      '100% electronically tested for tear resistance and burst pressure',
      'Pre-lubricated with non-sticky silicone glide',
      'Discreet brown box shipment with zero exterior labels'
    ],
    usageInstructions: [
      'Tear wrapper open along jagged notch with clean hands.',
      'Check the roll is facing outward before putting on.',
      'Squeeze the reservoir tip to expel trapped air, then place onto erect penis.',
      'Roll smoothly down to the base before any physical contact.'
    ],
    variants: [
      {
        id: 'var-dur-feth-3',
        sku: 'DUR-FETH-03',
        barcodeGtin: '5010232964518',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 65000, // Rs. 650
        compareAtPriceInMinorUnits: 75000,
        inStock: true,
        stockQuantity: 180,
      },
      {
        id: 'var-dur-feth-12',
        sku: 'DUR-FETH-12',
        barcodeGtin: '5010232964525',
        title: 'Economy Box of 12',
        packSize: 12,
        priceInMinorUnits: 179500, // Rs. 1,795
        compareAtPriceInMinorUnits: 210000,
        inStock: true,
        stockQuantity: 95,
      },
    ],
    images: [
      {
        id: 'img-dur-feth-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/5010232964518_fe53cde3-f618-42f0-b4de-705c6aaf99cc.jpg?v=1757511605',
        altText: 'Durex Fetherlite Thin Feel Condoms Pack',
        isPrimary: true,
      },
      {
        id: 'img-dur-feth-2',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/5038483739020_689fafa6-bc8d-42ac-9124-30a47a6a9149.jpg?v=1766992390',
        altText: 'Durex Thin Feel 3s Pack',
      },
    ],
  },
  {
    id: 'prod-dur-ext-pleasure',
    slug: 'durex-extended-pleasure-delay',
    title: 'Durex Extended Pleasure Delay Condoms',
    tagline: 'Special Performa lubricant with 5% benzocaine to help him delay climax and last longer',
    brand: 'Durex',
    category: 'Delay & Climax',
    texture: 'Smooth',
    nominalWidthMm: 56,
    material: 'Natural Rubber Latex',
    rating: 4.9,
    reviewCount: 384,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 5,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Durex Extended Pleasure condoms contain heat-activated desensitising Performa lubricant containing 5% benzocaine inside the tip to help him delay climax and sustain intimacy.</p><p>Crafted with premium natural rubber latex, pleasant smelling, transparent, and contoured for a secure, comfortable fit.</p>`,
    highlights: [
      'Active Performa desensitising gel inside the tip for climax control',
      'Helps him balance climax timing and sustain mutual pleasure',
      'Contoured shape for easy roll-on application and snug grip',
      '100% electronically tested with certified leak-proof seals',
      'Zero mention of condoms or adult products on courier packaging'
    ],
    usageInstructions: [
      'Tear foil gently along notch. Note the active delay gel is concentrated inside the teat.',
      'Pinch the tip and roll down over erect penis.',
      'Allow 60-90 seconds for thermal activation of delay lubricant.',
      'Dispose responsibly in household waste after use.'
    ],
    variants: [
      {
        id: 'var-dur-ext-3',
        sku: 'DUR-EXT-03',
        barcodeGtin: '5010232964532',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 65000, // Rs. 650
        compareAtPriceInMinorUnits: 75000,
        inStock: true,
        stockQuantity: 120,
      },
      {
        id: 'var-dur-ext-12',
        sku: 'DUR-EXT-12',
        barcodeGtin: '5010232964549',
        title: 'Box of 12',
        packSize: 12,
        priceInMinorUnits: 179500, // Rs. 1,795
        compareAtPriceInMinorUnits: 220000,
        inStock: true,
        stockQuantity: 84,
      },
    ],
    images: [
      {
        id: 'img-dur-ext-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T151524.371.png?v=1732011335',
        altText: 'Durex Extended Pleasure 12 Pack Box Shot',
        isPrimary: true,
      },
      {
        id: 'img-dur-ext-2',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/5010232964532_6f22faef-ad20-4105-bd42-f831ae11fc02.jpg?v=1766992383',
        altText: 'Durex Extended Pleasure 3s Pack',
      },
    ],
  },
  {
    id: 'prod-dur-invisible',
    slug: 'durex-invisible-ultra-thin',
    title: 'Durex Invisible Extra Sensitive Ultra Thin Condoms',
    tagline: 'The ultimate pinnacle in latex thinness, maximizing mutual skin warmth and sensitivity',
    brand: 'Durex',
    category: 'Condoms',
    texture: 'Ultra Thin',
    nominalWidthMm: 52,
    material: 'Natural Rubber Latex',
    rating: 5.0,
    reviewCount: 420,
    badge: 'Ultra Thin',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 5,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 3,
    },
    descriptionHtml: `<p>Durex Invisible condoms are the thinnest ever developed by Durex, crafted to provide maximum sensitivity while maintaining the rigorous standard of European CE and ISO safety certifications.</p><p>Ultra-thin latex with straight walls and teat-ended form, designed for couples who prioritize uncompromised, unhindered skin-to-skin touch.</p>`,
    highlights: [
      'The thinnest latex condom created in the Durex engineering laboratory',
      'Delivers an almost imperceptible, skin-on-skin feel',
      'Enhanced transmission of natural body warmth and pulse',
      'Straight walls with smooth silicone lube coating'
    ],
    usageInstructions: [
      'Handle with gentle care given the ultra-sheer material.',
      'Squeeze reservoir tip gently and unroll smoothly down to base.',
      'Use immediately prior to contact.'
    ],
    variants: [
      {
        id: 'var-dur-inv-3',
        sku: 'DUR-INV-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 65000, // Rs. 650
        compareAtPriceInMinorUnits: 75000,
        inStock: true,
        stockQuantity: 150,
      },
      {
        id: 'var-dur-inv-12',
        sku: 'DUR-INV-12',
        title: 'Box of 12',
        packSize: 12,
        priceInMinorUnits: 179500, // Rs. 1,795
        compareAtPriceInMinorUnits: 220000,
        inStock: true,
        stockQuantity: 65,
      },
    ],
    images: [
      {
        id: 'img-dur-inv-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T151608.204.png?v=1732011382',
        altText: 'Durex Invisible 12 Pack Box Shot',
        isPrimary: true,
      },
      {
        id: 'img-dur-inv-2',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/5038483987179_18c50550-96ca-43bc-af71-8bc687002b8d.jpg?v=1766992383',
        altText: 'Durex Invisible 3 Pack',
      }
    ],
  },
  {
    id: 'prod-dur-extra-safe',
    slug: 'durex-extra-safe-thick-latex',
    title: 'Durex Extra Safe Thick Latex Condoms',
    tagline: 'Slightly thicker latex paired with extra lubrication for complete peace of mind and protection',
    brand: 'Durex',
    category: 'Condoms',
    texture: 'Smooth',
    nominalWidthMm: 56,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 198,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 2,
      delayRating: 2,
      textureIntensity: 1,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Durex Extra Safe condoms are specifically formulated for couples who prioritize reassurance and durability. Made from marginally thicker natural rubber latex and generously coated with extra silicone lubricant.</p><p>Easy-on shape with teat end for high comfort and ease of rolling.</p>`,
    highlights: [
      'Engineered with heavier gauge latex for superior tensile strength',
      'Pre-coated with abundant silicone lubrication for frictionless wear',
      'Contoured easy-on design prevents slippage and tight constriction',
      'Ideal for intense intimacy and complete psychological peace of mind'
    ],
    usageInstructions: [
      'Open package by tearing along edge notch.',
      'Pinch the teat and roll downward along erect shaft.',
      'Check secure fit before starting.'
    ],
    variants: [
      {
        id: 'var-dur-exsafe-3',
        sku: 'DUR-EXS-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 65000, // Rs. 650
        compareAtPriceInMinorUnits: 75000,
        inStock: true,
        stockQuantity: 140,
      },
      {
        id: 'var-dur-exsafe-12',
        sku: 'DUR-EXS-12',
        title: 'Box of 12',
        packSize: 12,
        priceInMinorUnits: 179500, // Rs. 1,795
        compareAtPriceInMinorUnits: 200000,
        inStock: true,
        stockQuantity: 70,
      },
    ],
    images: [
      {
        id: 'img-dur-exsafe-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T151740.160.png?v=1732011470',
        altText: 'Durex Extra Safe 12s Pack Box Shot',
        isPrimary: true,
      },
      {
        id: 'img-dur-exsafe-2',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/5010232964556_1fc8bdf5-d510-4c4f-9e7f-b6480b55502c.jpg?v=1766992383',
        altText: 'Durex Extra Safe 3 Pack',
      }
    ],
  },
  {
    id: 'prod-dur-mutual-climax',
    slug: 'durex-mutual-climax-dual-action',
    title: 'Durex Mutual Climax Dual-Action Condoms',
    tagline: 'Performa delay lube inside for him, intense ribs & dots outside to speed her up',
    brand: 'Durex',
    category: 'Delay & Climax',
    texture: 'Dotted & Ribbed',
    nominalWidthMm: 56,
    material: 'Natural Rubber Latex',
    rating: 4.9,
    reviewCount: 265,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 5,
      textureIntensity: 5,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Durex Mutual Climax is engineered to help synchronize couple intimacy. Formulated with Performa lubricant (5% benzocaine) inside the tip to help him last longer, while the outer surface features raised ridges and ribs designed to accelerate her stimulation.</p>`,
    highlights: [
      'Dual-action mechanics: delay lubricant inside + stimulating ridges outside',
      'Helps both partners reach harmony and climax simultaneously',
      'Durex Easy-on shape for rapid, comfortable application',
      'Rigorous triple electronic testing for ultimate leak resistance'
    ],
    usageInstructions: [
      'Note orientation before unrolling: active delay gel is on the inside.',
      'Squeeze reservoir teat and roll down to base.',
      'Allow active ingredients 1-2 minutes to initiate thermal delay effect.'
    ],
    variants: [
      {
        id: 'var-dur-mut-3',
        sku: 'DUR-MUT-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 65000, // Rs. 650
        compareAtPriceInMinorUnits: 75000,
        inStock: true,
        stockQuantity: 90,
      },
      {
        id: 'var-dur-mut-12',
        sku: 'DUR-MUT-12',
        title: 'Box of 12',
        packSize: 12,
        priceInMinorUnits: 179500, // Rs. 1,795
        compareAtPriceInMinorUnits: 220000,
        inStock: true,
        stockQuantity: 45,
      },
    ],
    images: [
      {
        id: 'img-dur-mut-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152737.525.png?v=1732012068',
        altText: 'Durex Mutual Climax Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-dur-intense',
    slug: 'durex-intense-dotted-ribbed',
    title: 'Durex Intense Dotted & Ribbed Stimulating Condoms',
    tagline: 'Desirex stimulating gel coating paired with concentric ribs and distinct pleasure dots',
    brand: 'Durex',
    category: 'Condoms',
    texture: 'Dotted & Ribbed',
    nominalWidthMm: 56,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 174,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 5,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Durex Intense condoms combine raised ribbed and dotted textures with a stimulating Desirex lubricant that introduces tingling, warming, and cooling sensations for intensified mutual satisfaction.</p>`,
    highlights: [
      'Raised textured dots and ribs for heightened physical friction',
      'Desirex minty stimulating gel delivers sensory tingling',
      'Easy-on ergonomic contour for effortless unrolling',
      'Tested to European ISO 4074 standards'
    ],
    usageInstructions: [
      'Tear pack gently.',
      'Pinch reservoir and roll smoothly onto erect shaft.',
      'Experience dynamic cooling/warming sensation immediately.'
    ],
    variants: [
      {
        id: 'var-dur-int-12',
        sku: 'DUR-INT-12',
        title: 'Box of 12',
        packSize: 12,
        priceInMinorUnits: 179500, // Rs. 1,795
        compareAtPriceInMinorUnits: 220000,
        inStock: true,
        stockQuantity: 50,
      }
    ],
    images: [
      {
        id: 'img-dur-int-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T151911.396.png?v=1732011562',
        altText: 'Durex Intense Condoms 12 Pack Box Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-dur-realfeel',
    slug: 'durex-real-feel-non-latex',
    title: 'Durex Real Feel Non-Latex Skin-to-Skin Condoms',
    tagline: 'Next-generation polyisoprene synthetic material for ultimate natural touch and allergy freedom',
    brand: 'Durex',
    category: 'Condoms',
    texture: 'Smooth',
    nominalWidthMm: 56,
    material: 'Polyisoprene',
    rating: 4.9,
    reviewCount: 142,
    badge: 'Ultra Thin',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 5,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Durex Real Feel is crafted from polyisoprene—a technologically advanced non-latex material that is softer, more elastic, and transfers body heat faster than conventional natural rubber latex.</p><p>Completely hypoallergenic, odorless, and ideal for individuals with natural latex sensitivities.</p>`,
    highlights: [
      'Polyisoprene synthetic formulation provides natural skin elasticity',
      'Clinically certified hypoallergenic: 100% natural rubber latex-free',
      'Rapid body heat conduction enhances intimacy realism',
      'Includes silicone lubricant glide'
    ],
    usageInstructions: [
      'Unroll over erect penis prior to intimacy.',
      'Safe to use with water-based and silicone-based intimate lubricants.'
    ],
    variants: [
      {
        id: 'var-dur-rf-6',
        sku: 'DUR-RF-06',
        title: 'Pack of 6',
        packSize: 6,
        priceInMinorUnits: 215000, // Rs. 2,150
        compareAtPriceInMinorUnits: 250000,
        inStock: true,
        stockQuantity: 38,
      }
    ],
    images: [
      {
        id: 'img-dur-rf-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T151829.418.png?v=1732011520',
        altText: 'Durex Real Feel Non Latex Condoms Pack Shot',
        isPrimary: true,
      }
    ],
  },

  // ==========================================
  // 2. DUREX & K-Y LUBRICANTS & INTIMATE GELS
  // ==========================================
  {
    id: 'prod-dur-play-aloe',
    slug: 'durex-play-aloe-vera-massage-gel-200ml',
    title: 'Durex Play 2-in-1 Soothing Aloe Vera Massage Gel & Lube (200ml)',
    tagline: 'Dual-purpose full body sensual massage gel and intimate personal lubricant with soothing Aloe Vera',
    brand: 'Durex',
    category: 'Lubricants',
    texture: 'Gel',
    material: 'Water-based Gel',
    rating: 4.9,
    reviewCount: 289,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 2,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Durex Play 2-in-1 Massage & Lubricant contains nourishing Aloe Vera extracts. Silky smooth, light, and non-greasy, it glides across full body skin for relaxing foreplay massage, while functioning as a premium water-soluble intimate lubricant.</p><p>Non-staining, easily rinses away with warm water, and 100% compatible with natural rubber latex and polyisoprene condoms.</p>`,
    highlights: [
      'Dual-purpose: All-over relaxing body massage and intimate lubricant',
      'Infused with calming natural Aloe Vera botanical extract',
      'Water-soluble, non-sticky formula leaves zero oily residues or stains',
      'Condom-safe (safe with Durex natural latex condoms)'
    ],
    usageInstructions: [
      'Twist open dispenser cap and squeeze desired quantity into hands.',
      'Smooth over full body for massage, or apply directly to intimate areas.',
      'Reapply freely as needed.'
    ],
    variants: [
      {
        id: 'var-dur-aloe-200',
        sku: 'DUR-PLAY-ALOE-200',
        title: 'Dispenser Bottle 200ml',
        packSize: 1,
        priceInMinorUnits: 225000, // Rs. 2,250
        compareAtPriceInMinorUnits: 260000,
        inStock: true,
        stockQuantity: 60,
      }
    ],
    images: [
      {
        id: 'img-dur-aloe-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152648.790.png?v=1732012019',
        altText: 'Durex Play 2-in-1 Aloe Vera Massage Gel 200ml Bottle',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-dur-play-cherry',
    slug: 'durex-play-cherry-flavoured-gel-50ml',
    title: 'Durex Play Very Cherry Flavoured Intimate Gel (50ml)',
    tagline: 'Deliciously sweet wild cherry flavour and fragrance for playful, sensual oral and intimate moments',
    brand: 'Durex',
    category: 'Lubricants',
    texture: 'Gel',
    flavour: 'Wild Cherry',
    material: 'Water-based Gel',
    rating: 4.8,
    reviewCount: 215,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 2,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Durex Play Very Cherry is a luscious, fruity intimate lubricant crafted to sweeten sensual playtime. Completely sugar-free, it provides a mouth-watering cherry flavour and aroma suitable for oral, vaginal, and playful skin exploration.</p>`,
    highlights: [
      'Rich, natural wild cherry fragrance and sweet taste',
      '100% sugar-free: completely tooth-friendly and safe for intimate pH balance',
      'Water-soluble, non-staining, and easy to wash off',
      'Compatible with condoms and intimate pleasure toys'
    ],
    usageInstructions: [
      'Flick open cap and squeeze a few drops onto fingertips.',
      'Gently massage over desired zones.',
      'Safe for oral consumption.'
    ],
    variants: [
      {
        id: 'var-dur-cherry-50',
        sku: 'DUR-PLAY-CHERRY-50',
        title: 'Bottle 50ml',
        packSize: 1,
        priceInMinorUnits: 109500, // Rs. 1,095
        compareAtPriceInMinorUnits: 130000,
        inStock: true,
        stockQuantity: 75,
      }
    ],
    images: [
      {
        id: 'img-dur-cherry-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152331.423.png?v=1732011821',
        altText: 'Durex Play Very Cherry Intimate Gel 50ml Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-dur-play-tingle',
    slug: 'durex-play-tingle-sensory-lube-50ml',
    title: 'Durex Play Tingling Sensation Lubricant (50ml)',
    tagline: 'Exciting minty tingling formula that awakens nerve endings with cooling, pulsing thrills',
    brand: 'Durex',
    category: 'Lubricants',
    texture: 'Gel',
    flavour: 'Cool Peppermint',
    material: 'Water-based Gel',
    rating: 4.7,
    reviewCount: 160,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 4,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Durex Play Tingling Lube delivers an electrifying cooling and tingling sensory thrill. Formulated with skin-safe mint agents that stimulate tactile nerve endings for heightened arousal and excitement.</p>`,
    highlights: [
      'Multi-sensory tingling effect stimulates local blood circulation and touch',
      'Crisp, refreshing peppermint aroma',
      'Water-based silky glide never feels sticky or gummy',
      'Fully safe to use with latex condoms'
    ],
    usageInstructions: [
      'Apply a dab to intimate areas.',
      'Breathe gently or blow on the area to accelerate the cooling pulse.'
    ],
    variants: [
      {
        id: 'var-dur-tingle-50',
        sku: 'DUR-PLAY-TINGLE-50',
        title: 'Bottle 50ml',
        packSize: 1,
        priceInMinorUnits: 109500, // Rs. 1,095
        compareAtPriceInMinorUnits: 130000,
        inStock: true,
        stockQuantity: 62,
      }
    ],
    images: [
      {
        id: 'img-dur-tingle-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152237.940.png?v=1732011767',
        altText: 'Durex Play Tingling Sensation Lubricant 50ml Bottle',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-dur-play-classic',
    slug: 'durex-play-classic-h2o-lube-100ml',
    title: 'Durex Play Classic H2O Water-Based Personal Lubricant (100ml)',
    tagline: 'Light, silky, natural water-soluble formula for effortless glide and comfort',
    brand: 'Durex',
    category: 'Lubricants',
    texture: 'Gel',
    material: 'Water-based Gel',
    rating: 4.9,
    reviewCount: 310,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Durex Play Classic is the quintessential water-based intimate lubricant. Designed to mimic natural biological moisture, it relieves friction, eases intimacy, and ensures silky comfort.</p>`,
    highlights: [
      'Pure water-based formulation mimics natural body lubrication',
      'Odorless, clear, and pH balanced for delicate intimate skin',
      'Water-soluble: washes away cleanly without staining bedsheets or fabrics',
      'Compatible with all condom materials'
    ],
    usageInstructions: [
      'Apply desired quantity to intimate areas or outside of condom.',
      'Reapply smoothly as desired.'
    ],
    variants: [
      {
        id: 'var-dur-classic-100',
        sku: 'DUR-PLAY-CLASSIC-100',
        title: 'Bottle 100ml',
        packSize: 1,
        priceInMinorUnits: 145000, // Rs. 1,450
        compareAtPriceInMinorUnits: 175000,
        inStock: true,
        stockQuantity: 80,
      }
    ],
    images: [
      {
        id: 'img-dur-classic-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152125.772.png?v=1732011696',
        altText: 'Durex Play Classic H2O Personal Lubricant 100ml Bottle',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-dur-play-warming',
    slug: 'durex-play-warming-intimate-lube-100ml',
    title: 'Durex Play Warming Sensation Intimate Lubricant (100ml)',
    tagline: 'Thermal contact lubricant that generates gentle soothing warmth upon skin touch',
    brand: 'Durex',
    category: 'Lubricants',
    texture: 'Gel',
    material: 'Water-based Gel',
    rating: 4.8,
    reviewCount: 188,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 3,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Durex Play Warming delivers an enticing heat effect that warms upon skin contact and intensifies with motion and gentle blowing, enhancing warmth transfer and mutual stimulation.</p>`,
    highlights: [
      'Thermal warming effect activates upon skin-to-skin touch',
      'Silky, non-greasy water-based consistency',
      'Condom-safe and toy-friendly',
      'Clean wash-off without residues'
    ],
    usageInstructions: [
      'Smooth over intimate areas.',
      'Blow softly on the lubricated skin to trigger a warm pulse.'
    ],
    variants: [
      {
        id: 'var-dur-warming-100',
        sku: 'DUR-PLAY-WARM-100',
        title: 'Bottle 100ml',
        packSize: 1,
        priceInMinorUnits: 145000, // Rs. 1,450
        compareAtPriceInMinorUnits: 175000,
        inStock: true,
        stockQuantity: 55,
      }
    ],
    images: [
      {
        id: 'img-dur-warm-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152017.202.png?v=1732011628',
        altText: 'Durex Play Warming Sensation Intimate Lubricant 100ml Bottle',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-ky-jelly-50g',
    slug: 'ky-jelly-sterile-water-based-50g',
    title: 'K-Y Jelly Sterile Water-Based Personal Lubricant (50g)',
    tagline: 'World-renowned medical-grade clear lubricant recommended by gynaecologists globally',
    brand: 'Durex',
    category: 'Lubricants',
    texture: 'Gel',
    material: 'Water-based Gel',
    rating: 4.9,
    reviewCount: 340,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>K-Y Jelly is the gold standard in water-based medical and personal lubrication. Formulated without fragrance or artificial colours, it provides sterile, hypoallergenic glide that quickly eliminates intimate dryness.</p>`,
    highlights: [
      'Doctor and gynaecologist recommended worldwide',
      'Fragrance-free, non-greasy, and rinses out effortlessly with clear water',
      'Safe for use with latex condoms and medical thermometers',
      'Gentle on sensitive intimate tissue'
    ],
    usageInstructions: [
      'Squeeze desired quantity from tube onto fingertips.',
      'Apply to external intimate area.'
    ],
    variants: [
      {
        id: 'var-ky-50g',
        sku: 'KY-JELLY-50G',
        title: 'Tube 50g',
        packSize: 1,
        priceInMinorUnits: 145000, // Rs. 1,450
        compareAtPriceInMinorUnits: 165000,
        inStock: true,
        stockQuantity: 90,
      }
    ],
    images: [
      {
        id: 'img-ky-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152509.308.png?v=1732011918',
        altText: 'K-Y Jelly Sterile Water Based Personal Lubricant 50g Tube',
        isPrimary: true,
      }
    ],
  },

  // ==========================================
  // 3. JOSH - PAKISTAN'S #1 SENSUAL BRAND
  // ==========================================
  {
    id: 'prod-josh-delay',
    slug: 'josh-climax-delay-condoms',
    title: 'Josh Climax Delay Condoms (3s)',
    tagline: 'Formulated with active desensitizing lubricant inside the tip to help him last longer and maximize pleasure',
    brand: 'Josh',
    category: 'Delay & Climax',
    texture: 'Smooth',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 520,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 5,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Josh Climax Delay condoms are engineered for men who want superior endurance and climax control. Contains a specialized desensitizing lubricant in the reservoir tip that extends intimate sessions while maintaining intense sensation.</p><p>Pakistan's most trusted intimacy delay condom, certified to international ISO testing standards.</p>`,
    highlights: [
      'Active desensitizing agent inside the reservoir tip prolongs intimacy',
      'High-grade premium natural rubber latex',
      'Electronic testing on each piece ensures 100% barrier safety',
      'Economical price point with premium performance'
    ],
    usageInstructions: [
      'Tear pack carefully along the notch.',
      'Unroll over erect penis, expelling air from reservoir tip.',
      'Allow 1 minute for delay lubricant to activate.'
    ],
    variants: [
      {
        id: 'var-josh-del-3',
        sku: 'JOSH-DEL-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 20000, // Rs. 200
        compareAtPriceInMinorUnits: 25000,
        inStock: true,
        stockQuantity: 250,
      },
      {
        id: 'var-josh-del-12',
        sku: 'JOSH-DEL-12',
        title: 'Value Pack of 12 (4 x 3s)',
        packSize: 12,
        priceInMinorUnits: 75000, // Rs. 750
        compareAtPriceInMinorUnits: 80000,
        inStock: true,
        stockQuantity: 110,
      }
    ],
    images: [
      {
        id: 'img-josh-del-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/Josh_max_copy.jpg?v=1441437854',
        altText: 'Josh Climax Delay Condoms 3s Pack',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-josh-ultra-thin',
    slug: 'josh-ultra-thin-condoms',
    title: 'Josh Ultra Thin Skin-on-Skin Condoms (3s)',
    tagline: 'Extra thin latex profile designed for heightened sensitivity and natural body warmth conduction',
    brand: 'Josh',
    category: 'Condoms',
    texture: 'Ultra Thin',
    nominalWidthMm: 52,
    material: 'Natural Rubber Latex',
    rating: 4.7,
    reviewCount: 310,
    badge: 'Ultra Thin',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 5,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Josh Ultra Thin condoms provide a barely-there feeling that brings couples closer. Crafted from ultra-sheer natural latex pre-lubricated with smooth silicone oil for effortless glide without compromising strength.</p>`,
    highlights: [
      'Ultra thin latex membrane enhances natural heat exchange',
      'Smooth straight-walled profile with comfortable teat end',
      'Electronic pinhole testing ensures complete leak-proof protection',
      'Unmarked plain packaging delivery across Pakistan'
    ],
    usageInstructions: [
      'Open gently with fingers.',
      'Place on tip of erect penis and roll down smoothly.'
    ],
    variants: [
      {
        id: 'var-josh-ut-3',
        sku: 'JOSH-UT-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 20000, // Rs. 200
        compareAtPriceInMinorUnits: 25000,
        inStock: true,
        stockQuantity: 220,
      },
      {
        id: 'var-josh-ut-12',
        sku: 'JOSH-UT-12',
        title: 'Value Pack of 12 (4 x 3s)',
        packSize: 12,
        priceInMinorUnits: 75000, // Rs. 750
        compareAtPriceInMinorUnits: 80000,
        inStock: true,
        stockQuantity: 95,
      }
    ],
    images: [
      {
        id: 'img-josh-ut-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/JoshUltrathin.jpg?v=1674726343',
        altText: 'Josh Ultra Thin Condoms 3s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-josh-dotted',
    slug: 'josh-dotted-pleasure-condoms',
    title: 'Josh Dotted Pleasure Condoms (3s)',
    tagline: 'Hundreds of elevated raised studs across the shaft for exhilarating mutual friction and stimulation',
    brand: 'Josh',
    category: 'Condoms',
    texture: 'Dotted',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 295,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 5,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Josh Dotted condoms feature hundreds of strategically molded raised circular studs covering the exterior surface. Specifically designed to stimulate female sensitive nerve endings and create thrilling physical texture.</p>`,
    highlights: [
      'Hundreds of raised circular dots provide targeted stimulation',
      'Pre-lubricated with non-drying silicone lubricant',
      'Reservoir teat end for safety and comfort',
      '100% electronically tested'
    ],
    usageInstructions: [
      'Tear pack carefully.',
      'Roll down over erect penis until fully unrolled.'
    ],
    variants: [
      {
        id: 'var-josh-dot-3',
        sku: 'JOSH-DOT-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 20000, // Rs. 200
        compareAtPriceInMinorUnits: 25000,
        inStock: true,
        stockQuantity: 200,
      },
      {
        id: 'var-josh-dot-12',
        sku: 'JOSH-DOT-12',
        title: 'Value Pack of 12 (4 x 3s)',
        packSize: 12,
        priceInMinorUnits: 75000, // Rs. 750
        compareAtPriceInMinorUnits: 80000,
        inStock: true,
        stockQuantity: 80,
      }
    ],
    images: [
      {
        id: 'img-josh-dot-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/Josh_dotted_copy_28178ac2-e5f2-4125-8c68-e9000e0c1c82.jpg?v=1441437804',
        altText: 'Josh Dotted Pleasure Condoms 3s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-josh-salajeet',
    slug: 'josh-salajeet-vitality-condoms',
    title: 'Josh Salajeet Herbal Formula Condoms (3s)',
    tagline: 'Infused with traditional Himalayan Shilajit herbal aroma and vitality essence for vigor and confidence',
    brand: 'Josh',
    category: 'Condoms',
    texture: 'Smooth',
    flavour: 'Himalayan Shilajit Essence',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 440,
    badge: 'Local Icon',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 3,
      textureIntensity: 2,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Josh Salajeet condoms combine modern latex engineering with the traditional reverence of Pakistani Himalayan Shilajit (Salajeet). Infused with an invigorating natural herbal essence that enhances romantic confidence and mood.</p>`,
    highlights: [
      'Unique Pakistani formulation infused with Himalayan Salajeet herbal aroma',
      'Crafted for vitality, enhanced vigor, and heightened intimacy',
      'Full electronic leak-proof safety certification',
      'Pre-lubricated with long-lasting glide'
    ],
    usageInstructions: [
      'Unroll over erect penis prior to intimacy.',
      'Store in cool, dry location out of direct sunlight.'
    ],
    variants: [
      {
        id: 'var-josh-sal-3',
        sku: 'JOSH-SAL-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 20000, // Rs. 200
        compareAtPriceInMinorUnits: 25000,
        inStock: true,
        stockQuantity: 190,
      }
    ],
    images: [
      {
        id: 'img-josh-sal-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/JoshSalajeet.png?v=1750829998',
        altText: 'Josh Salajeet Herbal Condoms 3s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-josh-sindhri',
    slug: 'josh-sindhri-sweet-mango-condoms',
    title: 'Josh Sindhri Sweet Mango Flavoured Condoms (3s)',
    tagline: 'Sweet, tropical aroma of authentic Pakistani Sindhri mangoes for luscious, playful intimacy',
    brand: 'Josh',
    category: 'Sensory & Flavours',
    texture: 'Smooth',
    flavour: 'Sindhri Mango',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.7,
    reviewCount: 210,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Celebrate love with the irresistible fragrance of Pakistan’s famed Sindhri mangoes. Josh Sindhri Condoms feature a sweet, aromatic mango scent that masks latex odor and turns intimacy into a fun, fragrant encounter.</p>`,
    highlights: [
      'Authentic Pakistani Sindhri mango fragrance',
      'Sugar-free, non-toxic, skin-safe aroma formulation',
      'Contoured natural latex with reservoir teat end',
      '100% electronically tested'
    ],
    usageInstructions: [
      'Roll on before intimacy.',
      'Safe for oral and mutual exploration.'
    ],
    variants: [
      {
        id: 'var-josh-sin-3',
        sku: 'JOSH-SIN-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 20000, // Rs. 200
        compareAtPriceInMinorUnits: 25000,
        inStock: true,
        stockQuantity: 160,
      }
    ],
    images: [
      {
        id: 'img-josh-sin-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/joshmango.jpg?v=1674726326',
        altText: 'Josh Sindhri Sweet Mango Flavoured Condoms Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-josh-fair-roughly',
    slug: 'josh-fair-roughly-studded',
    title: 'Josh Fair & Roughly Studded Friction Condoms (3s)',
    tagline: 'Deep contoured ribs and extra-prominent studs for intense tactile friction and sensation',
    brand: 'Josh',
    category: 'Condoms',
    texture: 'Dotted & Ribbed',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 260,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 5,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Josh Fair & Roughly combines prominent circular studs with alternating lateral ribs to produce maximum sensory contact. Crafted for partners who enjoy rugged, intensified friction during intimacy.</p>`,
    highlights: [
      'Dual texture profile: prominent studs + ribbed contours',
      'Maximizes tactile stimulation along full shaft',
      'Tear-resistant natural rubber latex',
      'Tested to stringent international quality norms'
    ],
    usageInstructions: [
      'Gently unroll onto erect shaft before contact.'
    ],
    variants: [
      {
        id: 'var-josh-fr-3',
        sku: 'JOSH-FR-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 20000, // Rs. 200
        compareAtPriceInMinorUnits: 25000,
        inStock: true,
        stockQuantity: 175,
      }
    ],
    images: [
      {
        id: 'img-josh-fr-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/JoshFairandRoughly_1152962d-a8c5-4d8f-9826-9e0b10f4015d.png?v=1755856599',
        altText: 'Josh Fair and Roughly Studded Condoms 3s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-josh-fantasy-lube',
    slug: 'josh-fantasy-silky-lube-30ml',
    title: 'Josh Fantasy Silky Intimate Lubricant (30ml)',
    tagline: 'Smooth, water-soluble personal glide designed for effortless comfort and heightened pleasure',
    brand: 'Josh',
    category: 'Lubricants',
    texture: 'Gel',
    material: 'Water-based Gel',
    rating: 4.7,
    reviewCount: 180,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Josh Fantasy Lube is a water-soluble personal lubricant that relieves dryness and eliminates friction. Clear, non-greasy, and rinses out easily with plain water.</p>`,
    highlights: [
      'Silky, long-lasting water-based glide',
      'Condom and toy safe',
      'Non-sticky, leaves zero oily film',
      'Handy pocket-sized 30ml squeeze bottle'
    ],
    usageInstructions: [
      'Dispense a small amount onto fingertips and apply directly.'
    ],
    variants: [
      {
        id: 'var-josh-fan-30',
        sku: 'JOSH-LUBE-FAN-30',
        title: 'Bottle 30ml',
        packSize: 1,
        priceInMinorUnits: 85000, // Rs. 850
        compareAtPriceInMinorUnits: 99000,
        inStock: true,
        stockQuantity: 110,
      }
    ],
    images: [
      {
        id: 'img-josh-fan-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/JoshFantasyLubecopy_c19e41d3-0fd0-40ba-99ef-25fcd12870dc.png?v=1770803797',
        altText: 'Josh Fantasy Silky Intimate Lubricant 30ml Bottle',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-josh-strawberry-lube',
    slug: 'josh-strawberry-fragrant-lube-30ml',
    title: 'Josh Strawberry Flavoured Intimate Lube (30ml)',
    tagline: 'Sweet, mouthwatering strawberry aroma for delicious, friction-free romantic play',
    brand: 'Josh',
    category: 'Lubricants',
    texture: 'Gel',
    flavour: 'Sweet Strawberry',
    material: 'Water-based Gel',
    rating: 4.8,
    reviewCount: 155,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Sweeten your bedroom moments with Josh Strawberry Flavoured Lube. Water-soluble, completely sugar-free, and safe for oral foreplay and intimate comfort.</p>`,
    highlights: [
      'Sweet strawberry fragrance and pleasant taste',
      '100% sugar-free, condom-safe water-based formula',
      'Washes away cleanly without staining',
      'Travel-friendly 30ml bottle'
    ],
    usageInstructions: [
      'Apply to intimate zones as desired.'
    ],
    variants: [
      {
        id: 'var-josh-str-30',
        sku: 'JOSH-LUBE-STR-30',
        title: 'Bottle 30ml',
        packSize: 1,
        priceInMinorUnits: 85000, // Rs. 850
        compareAtPriceInMinorUnits: 99000,
        inStock: true,
        stockQuantity: 95,
      }
    ],
    images: [
      {
        id: 'img-josh-str-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/JoshStrawberryLubecopy.png?v=1770803423',
        altText: 'Josh Strawberry Flavoured Intimate Lube 30ml Bottle',
        isPrimary: true,
      }
    ],
  },

  // ==========================================
  // 4. GREENSTAR / SATHI / TOUCH - NATIONAL CHAMPIONS
  // ==========================================
  {
    id: 'prod-sathi-danedar',
    slug: 'sathi-danedar-dotted-condoms',
    title: 'Sathi Danedar Circular Dotted Condoms (4s)',
    tagline: 'Pakistan’s household standard with textured surface studs for dependable safety and stimulation',
    brand: 'Sathi',
    category: 'Condoms',
    texture: 'Dotted',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 680,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 4,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Sathi Danedar has been Pakistan's most famous condom for generations, marketed by Greenstar Social Marketing. Features raised circular dots (dane) designed to stimulate while providing unmatched durability and safety.</p>`,
    highlights: [
      'Pakistan’s most widely recognized family health condom',
      'Textured raised dots for mutual pleasure',
      'ISO certified quality and electronically tested',
      'Unrivalled value for money'
    ],
    usageInstructions: [
      'Check foil integrity, open along tear line.',
      'Roll onto erect shaft.'
    ],
    variants: [
      {
        id: 'var-sathi-dan-4',
        sku: 'SATHI-DAN-04',
        title: 'Pack of 4',
        packSize: 4,
        priceInMinorUnits: 25000, // Rs. 250
        compareAtPriceInMinorUnits: 30000,
        inStock: true,
        stockQuantity: 300,
      },
      {
        id: 'var-sathi-dan-12',
        sku: 'SATHI-DAN-12',
        title: 'Economy 12s Pack (3 x 4s)',
        packSize: 12,
        priceInMinorUnits: 69000, // Rs. 690
        compareAtPriceInMinorUnits: 75000,
        inStock: true,
        stockQuantity: 140,
      }
    ],
    images: [
      {
        id: 'img-sathi-dan-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/SathiDanedar.png?v=1722670975',
        altText: 'Sathi Danedar Dotted Condoms 4s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-sathi-plus',
    slug: 'sathi-plus-sensitive-condoms',
    title: 'Sathi Plus Sensitive Natural Fit Condoms (5s)',
    tagline: 'Reliable smooth natural latex with reservoir tip and silicone lubricant for everyday peace of mind',
    brand: 'Sathi',
    category: 'Condoms',
    texture: 'Smooth',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.7,
    reviewCount: 390,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Sathi Plus offers proven barrier protection and gentle comfort. Each pack contains 5 premium condoms crafted under the stringent quality standards of Greenstar Social Marketing.</p>`,
    highlights: [
      '5 condoms per pack for superior economy',
      'Comfortable straight-walled shape with reservoir tip',
      'Pre-lubricated with non-sticky silicone oil',
      'Rigorous electronic batch testing'
    ],
    usageInstructions: [
      'Open gently and unroll smoothly.'
    ],
    variants: [
      {
        id: 'var-sathi-plus-5',
        sku: 'SATHI-PLUS-05',
        title: 'Pack of 5',
        packSize: 5,
        priceInMinorUnits: 30000, // Rs. 300
        compareAtPriceInMinorUnits: 35000,
        inStock: true,
        stockQuantity: 280,
      },
      {
        id: 'var-sathi-plus-15',
        sku: 'SATHI-PLUS-15',
        title: 'Value Pack of 15 (3 x 5s)',
        packSize: 15,
        priceInMinorUnits: 85000, // Rs. 850
        compareAtPriceInMinorUnits: 90000,
        inStock: true,
        stockQuantity: 120,
      }
    ],
    images: [
      {
        id: 'img-sathi-plus-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/Saathi-Plus.jpg?v=1501336741',
        altText: 'Sathi Plus Sensitive Condoms 5s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-touch-ribbed',
    slug: 'touch-ribbed-sensation-condoms',
    title: 'Touch Ribbed Sensation Condoms (5s)',
    tagline: 'Distinct horizontal ridges engineered for elevated pleasure and sensory friction',
    brand: 'Touch',
    category: 'Condoms',
    texture: 'Ribbed',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 310,
    badge: 'Best Seller',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 5,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Touch Ribbed condoms by Greenstar feature closely spaced horizontal ridges molded along the condom length to heighten partner stimulation. Excellent quality latex at a competitive Pakistani retail price.</p>`,
    highlights: [
      'Prominent ribbing along the shaft delivers intense physical feedback',
      'Generous 5s pack size',
      'Electronic pinhole tested for leak resistance',
      'Formulated with smooth silicone lubricant'
    ],
    usageInstructions: [
      'Unroll down to the base.'
    ],
    variants: [
      {
        id: 'var-touch-rib-5',
        sku: 'TOUCH-RIB-05',
        title: 'Pack of 5',
        packSize: 5,
        priceInMinorUnits: 25000, // Rs. 250
        compareAtPriceInMinorUnits: 30000,
        inStock: true,
        stockQuantity: 240,
      },
      {
        id: 'var-touch-rib-15',
        sku: 'TOUCH-RIB-15',
        title: 'Value Pack of 15 (3 x 5s)',
        packSize: 15,
        priceInMinorUnits: 69000, // Rs. 690
        compareAtPriceInMinorUnits: 75000,
        inStock: true,
        stockQuantity: 110,
      }
    ],
    images: [
      {
        id: 'img-touch-rib-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/touch-ribbed-3_s.jpg?v=1459926718',
        altText: 'Touch Ribbed Condoms 5s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-touch-delay',
    slug: 'touch-long-love-delay-condoms',
    title: 'Touch Long-Love Climax Delay Condoms (5s)',
    tagline: 'Special desensitizing gel lubricant inside to extend endurance and prolong romantic pleasure',
    brand: 'Touch',
    category: 'Delay & Climax',
    texture: 'Smooth',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 380,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 5,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Touch Delay condoms are formulated with specialized desensitizing lubricant inside the reservoir tip to help men delay ejaculation and maintain control. Delivers long-lasting satisfaction in an economical 5s pack.</p>`,
    highlights: [
      'Targeted delay lubricant inside the tip extends intercourse duration',
      'Value-packed 5 condoms per box',
      'Smooth natural rubber latex with ergonomic contour',
      '100% electronically tested'
    ],
    usageInstructions: [
      'Roll onto erect penis and wait 1 minute for delay activation.'
    ],
    variants: [
      {
        id: 'var-touch-del-5',
        sku: 'TOUCH-DEL-05',
        title: 'Pack of 5',
        packSize: 5,
        priceInMinorUnits: 35000, // Rs. 350
        compareAtPriceInMinorUnits: 40000,
        inStock: true,
        stockQuantity: 210,
      },
      {
        id: 'var-touch-del-15',
        sku: 'TOUCH-DEL-15',
        title: 'Value Pack of 15 (3 x 5s)',
        packSize: 15,
        priceInMinorUnits: 99000, // Rs. 990
        compareAtPriceInMinorUnits: 105000,
        inStock: true,
        stockQuantity: 85,
      }
    ],
    images: [
      {
        id: 'img-touch-del-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/touch-delay.jpg?v=1501336848',
        altText: 'Touch Long Love Delay Condoms 5s Pack Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-do-silk',
    slug: 'do-silk-ultra-thin-delay',
    title: 'DO Silk Ultra-Thin Delay Condoms (3s)',
    tagline: 'Dual performance: sheer ultra-thin latex skin feel combined with desensitizing climax delay gel',
    brand: 'Greenstar',
    category: 'Delay & Climax',
    texture: 'Ultra Thin',
    nominalWidthMm: 52.5,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 220,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 4,
      delayRating: 5,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>DO Silk combines two top consumer desires in one condom: ultra-thin latex for maximum warmth and skin sensation, infused with an active delay lubricant in the tip to extend performance.</p>`,
    highlights: [
      'Hybrid formulation: Ultra-thin sheath + climax delay lubricant',
      'Provides intense intimacy while helping him last longer',
      'Electronic batch testing certification',
      'Smooth silicone glide'
    ],
    usageInstructions: [
      'Unroll down to base and allow delay gel 1 minute to activate.'
    ],
    variants: [
      {
        id: 'var-do-silk-3',
        sku: 'DO-SILK-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 45000, // Rs. 450
        compareAtPriceInMinorUnits: 50000,
        inStock: true,
        stockQuantity: 150,
      }
    ],
    images: [
      {
        id: 'img-do-silk-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/dosilk.png?v=1584336614',
        altText: 'DO Silk Ultra Thin Delay Condoms Pack Shot',
        isPrimary: true,
      }
    ],
  },

  // ==========================================
  // 5. CLIMAX DELAY SPRAYS & PERFORMANCE
  // ==========================================
  {
    id: 'prod-dooz-14000',
    slug: 'dooz-14000-delay-spray-45ml',
    title: 'Dooz 14000 Climax Delay Spray with Vitamin E (45ml)',
    tagline: 'Topical endurance desensitizing spray engineered to delay climax, improve stamina, and nourish skin',
    brand: 'Dooz',
    category: 'Delay & Climax',
    texture: 'Spray',
    material: 'Water-based Gel',
    rating: 4.9,
    reviewCount: 560,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 5,
      textureIntensity: 1,
      lubricationLevel: 3,
    },
    descriptionHtml: `<p>Dooz 14000 is Germany’s world-renowned topical desensitizing spray. Formulated with Vitamin E to nourish delicate dermal tissues while rapidly desensitizing glans nerve endings. Enables men to control ejaculation timing and sustain intimacy with confidence.</p><p>Discreetly packaged in an unmarked parcel with zero external logos or indications.</p>`,
    highlights: [
      'High-potency topical formula for fast ejaculation control',
      'Enriched with Vitamin E to condition and soothe sensitive skin',
      'Fast-acting: works within 5-10 minutes of application',
      'Up to 100+ metered sprays per 45ml can'
    ],
    usageInstructions: [
      'Shake can well before application.',
      'Apply 2-3 short sprays to the head and underside of the erect penis 10 minutes before intercourse.',
      'Wipe off any excess before intimacy or put on a condom.'
    ],
    variants: [
      {
        id: 'var-dooz-45',
        sku: 'DOOZ-14000-45',
        title: 'Spray Can 45ml',
        packSize: 1,
        priceInMinorUnits: 199900, // Rs. 1,999
        compareAtPriceInMinorUnits: 250000,
        inStock: true,
        stockQuantity: 120,
      }
    ],
    images: [
      {
        id: 'img-dooz-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/Dooz_14000.jpg?v=1760610911',
        altText: 'Dooz 14000 Climax Delay Spray Can Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-largo-delay-spray',
    slug: 'largo-endurance-delay-spray-40ml',
    title: 'Largo Endurance Performance Delay Spray for Men (40ml)',
    tagline: 'Specialized German formula designed to boost endurance, reduce sensitivity, and extend satisfaction',
    brand: 'Largo',
    category: 'Delay & Climax',
    texture: 'Spray',
    material: 'Water-based Gel',
    rating: 4.8,
    reviewCount: 410,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 1,
      delayRating: 5,
      textureIntensity: 1,
      lubricationLevel: 3,
    },
    descriptionHtml: `<p>Largo Endurance Delay Spray provides men with clinical confidence and extended endurance. Absorbs rapidly into the epidermis to moderate hypersensitivity without numbing pleasure.</p>`,
    highlights: [
      'Proven German endurance formula',
      'Moderates sensitivity while preserving full pleasure sensation',
      'Absorbs cleanly without greasy or sticky residues',
      'Pocket-friendly discreet metal container'
    ],
    usageInstructions: [
      'Spray 2-3 times on the head of the penis 10-15 minutes prior to intimacy.',
      'Massage gently until absorbed.'
    ],
    variants: [
      {
        id: 'var-largo-40',
        sku: 'LARGO-SPRAY-40',
        title: 'Spray Can 40ml',
        packSize: 1,
        priceInMinorUnits: 185000, // Rs. 1,850
        compareAtPriceInMinorUnits: 220000,
        inStock: true,
        stockQuantity: 95,
      }
    ],
    images: [
      {
        id: 'img-largo-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/LargoDelaySpray.png?v=1719295097',
        altText: 'Largo Endurance Delay Spray Can Shot',
        isPrimary: true,
      }
    ],
  },
  {
    id: 'prod-rough-rider',
    slug: 'rough-rider-extra-studded',
    title: 'Rough Rider Studded Friction Condoms (3s)',
    tagline: 'Pioneering studded design featuring hundreds of raised rubber studs for unmatched intense stimulation',
    brand: 'Rough Rider',
    category: 'Condoms',
    texture: 'Dotted',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.8,
    reviewCount: 190,
    badge: 'Most Popular',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 1,
      textureIntensity: 5,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Rough Rider is the world’s original studded condom. Equipped with prominent rubber studs covering the shaft, delivering pronounced friction and stimulating satisfaction for your partner.</p>`,
    highlights: [
      'The original studded condom with hundreds of raised studs',
      'Heavy-duty natural rubber latex for security',
      'Silicone lubricant coating prevents drying',
      '100% electronically tested'
    ],
    usageInstructions: [
      'Roll on before contact.'
    ],
    variants: [
      {
        id: 'var-rr-3',
        sku: 'RR-STUD-03',
        title: 'Pack of 3',
        packSize: 3,
        priceInMinorUnits: 30000, // Rs. 300
        compareAtPriceInMinorUnits: 35000,
        inStock: true,
        stockQuantity: 140,
      }
    ],
    images: [
      {
        id: 'img-rr-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/rough_rider_new_copy_286f2266-b9d4-4b90-9d08-cdcafa345d86.jpg?v=1441607118',
        altText: 'Rough Rider Studded Friction Condoms Pack Shot',
        isPrimary: true,
      }
    ],
  },

  // ==========================================
  // 6. CURATED DISCOVERY BUNDLES (MAUDE / RO STYLE)
  // ==========================================
  {
    id: 'prod-bundle-sensual-explorer',
    slug: 'the-sensual-explorer-bundle',
    title: 'The Sensual Explorer Bundle (Condoms + Massage Gel + Lube)',
    tagline: 'Curated luxury discovery set: Durex Invisible 12s + Aloe Vera Massage Gel 200ml + Cherry Lube 50ml',
    brand: 'Combo Kits',
    category: 'Value Packs',
    texture: 'Ultra Thin',
    nominalWidthMm: 52,
    material: 'Natural Rubber Latex',
    rating: 5.0,
    reviewCount: 460,
    badge: 'Value Pack',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 5,
      delayRating: 1,
      textureIntensity: 2,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>Inspired by international D2C intimacy collections like Maude and Ro. The Sensual Explorer Bundle provides the ultimate complete bedroom journey: our sheerest Durex Invisible condoms (12s), the soothing Durex Aloe Vera 2-in-1 Body Massage Gel (200ml), and the playful sweet Wild Cherry Intimate Gel (50ml).</p><p>Ships in an unbranded, seal-protected luxury presentation box.</p>`,
    highlights: [
      'Complete 3-piece luxury set with 18% bundled cost savings',
      'Includes 12x Durex Invisible ultra-thin condoms for bare touch',
      'Includes 1x 200ml Durex Aloe Vera Massage Gel for all-over relaxation',
      'Includes 1x 50ml Wild Cherry flavoured lubricant for sweet foreplay',
      'Guaranteed 100% discreet packaging with zero external marking'
    ],
    usageInstructions: [
      'Begin by warming hands with the Aloe Vera gel for full-body massage.',
      'Transition to the Invisible condom for skin-on-skin intimacy.',
      'Add drops of Cherry gel to elevate moisture and sweet sensory play.'
    ],
    variants: [
      {
        id: 'var-bun-sen-1',
        sku: 'BUN-SEN-01',
        title: 'Full 3-Piece Discovery Set',
        packSize: 14,
        priceInMinorUnits: 425000, // Rs. 4,250 (Retail Rs. 5,140 - Save Rs. 890)
        compareAtPriceInMinorUnits: 514000,
        inStock: true,
        stockQuantity: 40,
      }
    ],
    images: [
      {
        id: 'img-bun-sen-1',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T151608.204.png?v=1732011382',
        altText: 'The Sensual Explorer Bundle Luxury Presentation',
        isPrimary: true,
      },
      {
        id: 'img-bun-sen-2',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T152648.790.png?v=1732012019',
        altText: 'Durex Aloe Vera Massage Gel',
      }
    ],
  },
  {
    id: 'prod-bundle-maximum-stamina',
    slug: 'the-maximum-stamina-endurance-kit',
    title: 'The Maximum Stamina & Endurance Kit (Extended 12s + Dooz Spray + Josh Delay)',
    tagline: 'The ultimate climax control stack: Durex Extended Pleasure 12s + Dooz 14000 Spray 45ml + Josh Delay 3s',
    brand: 'Combo Kits',
    category: 'Value Packs',
    texture: 'Smooth',
    nominalWidthMm: 56,
    material: 'Natural Rubber Latex',
    rating: 4.9,
    reviewCount: 380,
    badge: 'Max Delay',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 5,
      textureIntensity: 1,
      lubricationLevel: 4,
    },
    descriptionHtml: `<p>Engineered for men who prioritize supreme endurance, timing control, and stamina. This curated bundle brings together the world's most trusted delay technologies:</p><ul><li>1x Durex Extended Pleasure Box of 12 (active Performa delay lubricant)</li><li>1x Dooz 14000 Delay Spray 45ml (fast-acting topical desensitizing spray with Vitamin E)</li><li>1x Josh Climax Delay 3s (Pakistani local favorite with desensitizing tip)</li></ul>`,
    highlights: [
      'Comprehensive triple delay protocol for maximum intimate stamina',
      'Over Rs. 650 in bundle savings vs purchasing separately',
      'Dual mechanism: topical pre-intercourse spray + active delay condom lubricant',
      'Discreet delivery in plain unmarked parcel'
    ],
    usageInstructions: [
      'Option A: Apply 2 sprays of Dooz 14000 to glans 10 minutes before intercourse.',
      'Option B: Use Durex Extended Pleasure or Josh Delay condom during intercourse for extended duration.'
    ],
    variants: [
      {
        id: 'var-bun-stam-1',
        sku: 'BUN-STAM-01',
        title: 'Full 3-Piece Endurance Stack',
        packSize: 16,
        priceInMinorUnits: 335000, // Rs. 3,350 (Retail Rs. 3,994 - Save Rs. 644)
        compareAtPriceInMinorUnits: 399400,
        inStock: true,
        stockQuantity: 50,
      }
    ],
    images: [
      {
        id: 'img-bun-stam-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/Dooz_14000.jpg?v=1760610911',
        altText: 'The Maximum Stamina and Endurance Kit',
        isPrimary: true,
      },
      {
        id: 'img-bun-stam-2',
        url: 'https://cdn.shopify.com/s/files/1/0777/0954/1664/files/NewProject-2024-11-19T151524.371.png?v=1732011335',
        altText: 'Durex Extended Pleasure Condoms 12s',
      }
    ],
  },
  {
    id: 'prod-bundle-heritage-discovery',
    slug: 'the-pakistani-heritage-discovery-pack',
    title: 'The Pakistani Heritage Discovery Pack (Josh + Sathi + Touch + Lube)',
    tagline: 'Experience Pakistan’s most celebrated intimacy icons: Josh Salajeet + Sindhri Mango + Sathi Danedar + Touch Ribbed + Fantasy Lube',
    brand: 'Combo Kits',
    category: 'Value Packs',
    texture: 'Dotted & Ribbed',
    nominalWidthMm: 53,
    material: 'Natural Rubber Latex',
    rating: 4.9,
    reviewCount: 520,
    badge: 'Local Icon',
    discreetPackagingGuaranteed: true,
    sensoryProfile: {
      thinnessRating: 3,
      delayRating: 3,
      textureIntensity: 5,
      lubricationLevel: 5,
    },
    descriptionHtml: `<p>A fun, celebrated variety pack featuring Pakistan’s home-grown bestsellers:</p><ul><li>1x Josh Salajeet 3s (Himalayan Shilajit herbal vitality)</li><li>1x Josh Sindhri Sweet Mango 3s (sweet tropical aroma)</li><li>1x Sathi Danedar 4s (circular studded stimulation)</li><li>1x Touch Ribbed 5s (intense friction ridges)</li><li>1x Josh Fantasy Lube 30ml (silky water-based personal glide)</li></ul><p>Total 15 condoms + 1 personal lubricant bottle at a remarkable bundled price.</p>`,
    highlights: [
      '15 condoms across 4 distinct sensations + 1 bottle of personal lubricant',
      'Combines Salajeet vigor, Sindhri mango aroma, raised studs, and ribbed textures',
      'Over 20% discount compared to individual single pack retail prices',
      'Packaged in discreet bubble mailer with zero product markings'
    ],
    usageInstructions: [
      'Explore a new sensation each night with your partner.',
      'Use Josh Fantasy Lube with any condom in the pack for friction-free glide.'
    ],
    variants: [
      {
        id: 'var-bun-her-1',
        sku: 'BUN-HER-01',
        title: 'Complete 5-Item Variety Pack',
        packSize: 16,
        priceInMinorUnits: 145000, // Rs. 1,450 (Retail Rs. 1,800 - Save Rs. 350)
        compareAtPriceInMinorUnits: 180000,
        inStock: true,
        stockQuantity: 70,
      }
    ],
    images: [
      {
        id: 'img-bun-her-1',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/files/JoshSalajeet.png?v=1750829998',
        altText: 'The Pakistani Heritage Discovery Pack',
        isPrimary: true,
      },
      {
        id: 'img-bun-her-2',
        url: 'https://cdn.shopify.com/s/files/1/0232/3963/products/joshmango.jpg?v=1674726326',
        altText: 'Josh Sindhri Mango Condoms',
      }
    ],
  },
  // ==========================================
  // HEALTH & WELLNESS SUPPLEMENTS (PAKISTAN)
  // ==========================================
  {
    "id": "supp-osteo-orig-30",
    "slug": "vitabiotics-osteocare-original-30-tablets",
    "title": "UK Vitabiotics Osteocare Original (30 Tablets)",
    "tagline": "The UK’s No. 1 bone health formula scientifically developed with Calcium, Magnesium, Vitamin D3 & Zinc",
    "brand": "Vitabiotics",
    "category": "Bone & Joint Health",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 380,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "2 Tablets Daily",
      "servingsPerContainer": 15,
      "keyNutrients": [
        "Calcium Carbonate 800mg (100% NRV)",
        "Magnesium 300mg",
        "Vitamin D3 400IU (10µg)",
        "Zinc 10mg"
      ],
      "healthTarget": "Bone Health"
    },
    "descriptionHtml": "<p>Vitabiotics Osteocare Original is the UK’s number-one bone health supplement, manufactured to British Pharmacopoeia and European GMP standards. Provides an optimal, balanced combination of Calcium, Magnesium, Vitamin D3, and Zinc to maintain strong bones and teeth in men and women of all ages.</p><p>Formulated with premium pharmaceutical grade vitamin D3 in its preferred cholecalciferol format for superior intestinal calcium absorption.</p>",
    "highlights": [
      "The UK’s #1 bone health formula, imported and certified in Pakistan",
      "Provides 800mg elemental calcium balanced with 300mg magnesium",
      "Infused with Vitamin D3 (Cholecalciferol) and Zinc for maximum bone mineralization",
      "100% vegetarian, gluten-free, and free from artificial preservatives"
    ],
    "usageInstructions": [
      "Take 2 tablets daily with your main meal.",
      "Swallow with water or a cold drink. Do not chew.",
      "Do not exceed the recommended daily intake."
    ],
    "variants": [
      {
        "id": "var-osteo-30",
        "sku": "VITA-OSTEO-30",
        "title": "Pack of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 499900,
        "compareAtPriceInMinorUnits": 550000,
        "inStock": true,
        "stockQuantity": 45
      }
    ],
    "images": [
      {
        "id": "img-osteo-1",
        "url": "https://cdn.shopify.com/s/files/1/0558/4892/7404/products/osteocareoriginal_8e22e41b-a9be-4454-bc74-324438b30ca0.jpg?v=1617799358",
        "altText": "UK Vitabiotics Osteocare Original 30 Tablets Pack Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-bonex-d-30",
    "slug": "nutrifactor-bonex-d-calcium-vitamin-d3",
    "title": "Nutrifactor Bonex-D Calcium & Vitamin D3 (30 Tablets)",
    "tagline": "Pakistan’s leading clinically formulated Calcium 600mg + Vitamin D3 400IU for bone density and joint mobility",
    "brand": "Nutrifactor",
    "category": "Bone & Joint Health",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 520,
    "badge": "Local Icon",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1-2 Tablets Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "Calcium Carbonate 600mg",
        "Vitamin D3 (Cholecalciferol) 400IU"
      ],
      "healthTarget": "Bone Health"
    },
    "descriptionHtml": "<p>Nutrifactor’s Bonex-D is Pakistan’s top-prescribed dietary supplement for strong bones, teeth, and muscles. Combines Calcium Carbonate with Vitamin D3 to facilitate active calcium absorption and maintain peak bone mass density.</p><p>Manufactured in Pakistan under DRAP cGMP certified pharmaceutical facilities.</p>",
    "highlights": [
      "Pakistan’s most trusted daily bone strength formulation",
      "Contains 600mg high-potency Calcium plus 400IU Vitamin D3 per tablet",
      "Helps prevent calcium deficiency, osteoporosis, and bone fragility",
      "Economical price point with pharmaceutical-grade potency"
    ],
    "usageInstructions": [
      "Take 1 to 2 tablets daily as a dietary supplement after meals, or as directed by a healthcare professional."
    ],
    "variants": [
      {
        "id": "var-bonex-30",
        "sku": "NUTRI-BONEXD-30",
        "title": "Bottle of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 69000,
        "compareAtPriceInMinorUnits": 80000,
        "inStock": true,
        "stockQuantity": 180
      }
    ],
    "images": [
      {
        "id": "img-bonex-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Bonex-D.webp?v=1785844555",
        "altText": "Nutrifactor Bonex-D 30 Tablets Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-jointace-orig",
    "slug": "vitabiotics-jointace-original-glucosamine-chondroitin",
    "title": "UK Vitabiotics Jointace Original (30 Tablets)",
    "tagline": "Expert joint support combining USP-grade Glucosamine, Chondroitin, Ginger Root Extract & Trace Minerals",
    "brand": "Vitabiotics",
    "category": "Bone & Joint Health",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 290,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "2 Tablets Daily",
      "servingsPerContainer": 15,
      "keyNutrients": [
        "Glucosamine Sulphate 1000mg",
        "Chondroitin Sulphate 400mg",
        "Ginger Extract 80mg",
        "Vitamin D3 20µg",
        "Vitamin C 60mg"
      ],
      "healthTarget": "Bone Health"
    },
    "descriptionHtml": "<p>Vitabiotics Jointace Original provides a comprehensive formula to support joint cartilage health and flexibility. Combines high-purity Glucosamine Sulphate with Chondroitin Sulphate, Ginger root extract, and essential trace minerals to maintain joint mobility.</p>",
    "highlights": [
      "Formulated with pharmaceutical-grade Glucosamine and Chondroitin",
      "Enriched with botanical Ginger extract to naturally soothe joint stiffness",
      "Provides Vitamin C to support normal collagen synthesis for joint cartilage",
      "Imported directly from Vitabiotics UK"
    ],
    "usageInstructions": [
      "Take 2 tablets daily with your main meal. Swallow with water."
    ],
    "variants": [
      {
        "id": "var-jointace-30",
        "sku": "VITA-JOINTACE-30",
        "title": "Pack of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 799900,
        "compareAtPriceInMinorUnits": 880000,
        "inStock": true,
        "stockQuantity": 35
      }
    ],
    "images": [
      {
        "id": "img-jointace-1",
        "url": "https://cdn.shopify.com/s/files/1/0558/4892/7404/products/jointaceoriginal.jpg?v=1617805407",
        "altText": "UK Vitabiotics Jointace Original Pack Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-jointin-d",
    "slug": "nutrifactor-jointin-d-joint-mobility",
    "title": "Nutrifactor Jointin-D Joint Mobility Formula (30 Tablets)",
    "tagline": "Glucosamine, Chondroitin & Vitamin D3 complex to rebuild cartilage, lubricate joints and relieve morning stiffness",
    "brand": "Nutrifactor",
    "category": "Bone & Joint Health",
    "texture": "Tablets",
    "rating": 4.7,
    "reviewCount": 340,
    "badge": "Most Popular",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "2 Tablets Daily",
      "servingsPerContainer": 15,
      "keyNutrients": [
        "Glucosamine HCl 750mg",
        "Chondroitin Sulfate 600mg",
        "Vitamin D3 200IU"
      ],
      "healthTarget": "Bone Health"
    },
    "descriptionHtml": "<p>Nutrifactor Jointin-D is designed to support healthy joints, connective tissue, and cartilage repair. Glucosamine and Chondroitin work synergistically to cushion joint cartilage and stimulate synovial fluid production.</p>",
    "highlights": [
      "Contains clinical doses of Glucosamine and Chondroitin for cartilage cushion",
      "Supports painless knee, hip, and spinal mobility",
      "Enriched with Vitamin D3 for bone mineral density",
      "DRAP approved and tested in Pakistan"
    ],
    "usageInstructions": [
      "Take 2 tablets daily as a dietary supplement after meals."
    ],
    "variants": [
      {
        "id": "var-jointin-30",
        "sku": "NUTRI-JOINTIN-30",
        "title": "Bottle of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 115000,
        "compareAtPriceInMinorUnits": 135000,
        "inStock": true,
        "stockQuantity": 90
      }
    ],
    "images": [
      {
        "id": "img-jointin-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Jointin-D.webp?v=1785912440",
        "altText": "Nutrifactor Jointin-D 30 Tablets Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-nb-cal-mag-zinc",
    "slug": "natures-bounty-calcium-magnesium-zinc-d3",
    "title": "Nature's Bounty Calcium Magnesium Zinc with D3 (100 Caplets)",
    "tagline": "Imported USA high-potency mineral triad with Vitamin D3 to support cellular bone matrix and muscle relaxation",
    "brand": "Nature's Bounty",
    "category": "Bone & Joint Health",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 270,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1-3 Caplets Daily",
      "servingsPerContainer": 100,
      "keyNutrients": [
        "Calcium 1000mg",
        "Magnesium 400mg",
        "Zinc 25mg",
        "Vitamin D3 600IU"
      ],
      "healthTarget": "Bone Health"
    },
    "descriptionHtml": "<p>Nature's Bounty Calcium Magnesium Zinc provides a full-spectrum bone and nerve health support complex. Calcium builds strong bones and teeth, Magnesium aids in calcium absorption while relieving muscle cramps, and Zinc fosters bone collagen synthesis.</p>",
    "highlights": [
      "USA imported 100-caplet economy size",
      "1000mg Calcium + 400mg Magnesium + 25mg Zinc per daily serving",
      "Aids in relieving nocturnal leg cramps and muscular tension",
      "Non-GMO, no artificial flavors, laboratory tested"
    ],
    "usageInstructions": [
      "For adults, take one (1) to three (3) caplets daily, preferably with meals."
    ],
    "variants": [
      {
        "id": "var-nb-cal-100",
        "sku": "NB-CAL-MAG-100",
        "title": "Bottle of 100 Caplets",
        "packSize": 100,
        "priceInMinorUnits": 470000,
        "compareAtPriceInMinorUnits": 520000,
        "inStock": true,
        "stockQuantity": 40
      }
    ],
    "images": [
      {
        "id": "img-nb-cal-1",
        "url": "https://cdn.shopify.com/s/files/1/0558/4892/7404/files/Nature-bounty-calcium-magnesium-zinc-550x550h.jpg?v=1692778192",
        "altText": "Nature's Bounty Calcium Magnesium Zinc 100 Caplets Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-suncell-5000",
    "slug": "nutrifactor-suncell-5000-iu-vitamin-d3",
    "title": "Nutrifactor Suncell 5000 IU Vitamin D3 (30 Softgels)",
    "tagline": "High-potency Cholecalciferol softgels for rapid bone replenishment, immune strength and mood elevation",
    "brand": "Nutrifactor",
    "category": "Bone & Joint Health",
    "texture": "Gel",
    "rating": 4.9,
    "reviewCount": 460,
    "badge": "Most Popular",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Softgel Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "Vitamin D3 (Cholecalciferol) 5000 IU (125µg)"
      ],
      "healthTarget": "Bone Health"
    },
    "descriptionHtml": "<p>Nutrifactor Suncell 5000 provides high-potency Vitamin D3 in liquid softgel format for superior bioavailability. Vitamin D3 is essential for regulating blood calcium levels, maintaining dense skeletal structures, and optimizing immune defense.</p>",
    "highlights": [
      "5000 IU high-potency Vitamin D3 per softgel",
      "Oil-based liquid softgel ensures optimal lipid absorption",
      "Crucial for urban populations with low sunlight exposure",
      "Certified Halal and DRAP registered"
    ],
    "usageInstructions": [
      "Take 1 softgel daily with a fat-containing meal, or as directed by your physician."
    ],
    "variants": [
      {
        "id": "var-suncell-30",
        "sku": "NUTRI-SUNCELL-30",
        "title": "Bottle of 30 Softgels",
        "packSize": 30,
        "priceInMinorUnits": 59000,
        "compareAtPriceInMinorUnits": 70000,
        "inStock": true,
        "stockQuantity": 150
      }
    ],
    "images": [
      {
        "id": "img-suncell-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Suncell5000_848a3a3a-ce07-4c94-a3f7-29faaea404dc.webp?v=1785913601",
        "altText": "Nutrifactor Suncell 5000 IU Vitamin D3 Softgels Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-qarshi-suranjan",
    "slug": "qarshi-majoon-suranjan-joint-care",
    "title": "Qarshi Majoon Suranjan Herbal Joint Care (100g)",
    "tagline": "Classical Unani herbal paste with Colchicum autumnale for soothing joint inflammation, gout and uric acid discomfort",
    "brand": "Qarshi",
    "category": "Bone & Joint Health",
    "texture": "Smooth",
    "rating": 4.8,
    "reviewCount": 310,
    "badge": "Local Icon",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "5g (Half Teaspoon) Twice Daily",
      "servingsPerContainer": 20,
      "keyNutrients": [
        "Suranjan Shirin (Colchicum)",
        "Asgand Nagori (Ashwagandha)",
        "Zanjabeel (Ginger)",
        "Shehd (Honey base)"
      ],
      "healthTarget": "Bone Health"
    },
    "descriptionHtml": "<p>Qarshi Majoon Suranjan is a celebrated Unani herbal formulation trusted across Pakistan for centuries. Formulated with Suranjan (Colchicum), Asgand (Ashwagandha), and warming botanical herbs that eliminate joint stiffness, regulate uric acid levels, and relieve rheumatic discomfort.</p>",
    "highlights": [
      "Traditional 100% natural Unani formulation with zero synthetic chemicals",
      "Targeted for joint aches, muscular cramps, and gout relief",
      "Naturally aids in the excretion of excess uric acid crystals",
      "Prepared in pure honey and natural herbal extracts"
    ],
    "usageInstructions": [
      "Take 5g (approx. half teaspoon) in the morning and evening with warm milk or water."
    ],
    "variants": [
      {
        "id": "var-suranjan-100",
        "sku": "QAR-SURAN-100",
        "title": "Jar of 100g",
        "packSize": 1,
        "priceInMinorUnits": 22000,
        "compareAtPriceInMinorUnits": 25000,
        "inStock": true,
        "stockQuantity": 120
      }
    ],
    "images": [
      {
        "id": "img-suranjan-1",
        "url": "https://cdn.shopify.com/s/files/1/0514/9422/4052/products/Majoon-Suranjan-Web-Banner_fa62c1b5-c29b-4c28-8e8a-739c78400e75.png?v=1629456201",
        "altText": "Qarshi Majoon Suranjan 100g Jar Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-wellman-concep",
    "slug": "vitabiotics-wellman-conception-30-tablets",
    "title": "UK Vitabiotics Wellman Conception (30 Tablets)",
    "tagline": "The UK’s expert male reproductive fertility & vitality formula with Zinc, Maca, Siberian Ginseng & Selenium",
    "brand": "Vitabiotics",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 5,
    "reviewCount": 430,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Tablet Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "Zinc 15mg (150% NRV)",
        "Selenium 150µg",
        "Peruvian Maca Extract 250mg",
        "Siberian Ginseng 30mg",
        "CoQ10 2mg",
        "L-Arginine 10mg"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Vitabiotics Wellman Conception is specifically designed to support male fertility, reproductive vitality, and healthy testosterone synthesis. Contains Zinc which contributes to normal fertility and reproduction, alongside Peruvian Maca, Siberian Ginseng, L-Carnitine, and essential micronutrients.</p>",
    "highlights": [
      "The UK’s #1 specialist formulation for male reproductive vitality",
      "Provides high-potency Zinc and Selenium for normal sperm motility and testosterone",
      "Enriched with adaptogenic Peruvian Maca and Siberian Ginseng for physical stamina",
      "100% vegetarian formula with no artificial colours or preservatives"
    ],
    "usageInstructions": [
      "Take 1 tablet per day with your main meal. Swallow with water."
    ],
    "variants": [
      {
        "id": "var-well-concep-30",
        "sku": "VITA-WELL-CON-30",
        "title": "Pack of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 750000,
        "compareAtPriceInMinorUnits": 820000,
        "inStock": true,
        "stockQuantity": 40
      }
    ],
    "images": [
      {
        "id": "img-well-concep-1",
        "url": "https://cdn.shopify.com/s/files/1/0558/4892/7404/products/wellmanconception.jpg?v=1617715581",
        "altText": "UK Vitabiotics Wellman Conception 30 Tablets Pack Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-tryception-men",
    "slug": "nutrifactor-tryception-men-vitality",
    "title": "Nutrifactor Tryception Men Reproductive Health (30 Tablets)",
    "tagline": "Pakistan’s top male reproductive support formula with 20 key bio-active nutrients, L-Arginine, Zinc & Lycopene",
    "brand": "Nutrifactor",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 390,
    "badge": "Most Popular",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Tablet Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "L-Arginine 50mg",
        "L-Carnitine 50mg",
        "CoQ10 5mg",
        "Zinc 15mg",
        "Lycopene 2mg",
        "Panax Ginseng 60mg"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Nutrifactor Tryception is a clinical dietary supplement specifically formulated to promote male reproductive health, sperm vitality, and stamina. Packed with vital antioxidants, minerals, and amino acids that shield cells from oxidative stress and enhance vigor.</p>",
    "highlights": [
      "Comprehensive male fertility & virility formula designed for Pakistani men",
      "Contains L-Arginine, L-Carnitine, CoQ10, and Panax Ginseng extract",
      "Supports healthy testosterone levels and muscular stamina",
      "Manufactured in cGMP-certified facilities with DRAP approval"
    ],
    "usageInstructions": [
      "Take 1 tablet daily as a dietary supplement with food, or as directed by a healthcare professional."
    ],
    "variants": [
      {
        "id": "var-trycep-30",
        "sku": "NUTRI-TRYCEP-30",
        "title": "Bottle of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 169000,
        "compareAtPriceInMinorUnits": 195000,
        "inStock": true,
        "stockQuantity": 110
      }
    ],
    "images": [
      {
        "id": "img-trycep-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Tryception.webp?v=1785911092",
        "altText": "Nutrifactor Tryception Men 30 Tablets Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-duron-plus",
    "slug": "nutrifactor-duron-plus-testosterone-stamina",
    "title": "Nutrifactor Duron Plus Testosterone & Stamina (30 Tablets)",
    "tagline": "Potent botanical matrix of Tribulus Terrestris, Maca Root, and Eurycoma Longifolia for men’s physical performance",
    "brand": "Nutrifactor",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 480,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Tablet Twice Daily",
      "servingsPerContainer": 15,
      "keyNutrients": [
        "Tribulus Terrestris Extract 250mg",
        "Maca Root Extract 100mg",
        "Eurycoma Longifolia (Tongkat Ali) 50mg",
        "Horny Goat Weed 50mg"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Duron Plus is a specialized natural supplement formulated for men looking to boost natural testosterone production, elevate bedroom confidence, and overcome daily fatigue. Features a high-potency synergy of Tribulus, Maca, and Tongkat Ali.</p>",
    "highlights": [
      "Advanced herbal testosterone and energy catalyst",
      "Synergistic combination of Tribulus, Maca, Tongkat Ali, and Horny Goat Weed",
      "Improves libido, bedroom stamina, and muscular recovery",
      "Safe, non-hormonal botanical formulation"
    ],
    "usageInstructions": [
      "Take 1 tablet morning and evening with water after meals."
    ],
    "variants": [
      {
        "id": "var-duron-30",
        "sku": "NUTRI-DURON-30",
        "title": "Bottle of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 199000,
        "compareAtPriceInMinorUnits": 230000,
        "inStock": true,
        "stockQuantity": 95
      }
    ],
    "images": [
      {
        "id": "img-duron-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/DuronPlus.webp?v=1785911401",
        "altText": "Nutrifactor Duron Plus 30 Tablets Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-tribulus-500",
    "slug": "nutrifactor-tribulus-terrestris-500mg",
    "title": "Nutrifactor Tribulus Terrestris 500mg (30 Tablets)",
    "tagline": "Standardized Tribulus fruit extract with active saponins to naturally optimize male vigor and libido",
    "brand": "Nutrifactor",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 320,
    "badge": "Most Popular",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Tablet Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "Tribulus Terrestris Fruit Extract 500mg (min. 45% Saponins)"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Nutrifactor Tribulus Terrestris provides 500mg of standardized natural extract known to support reproductive health, lean muscle maintenance, and healthy male vitality. Saponins in Tribulus stimulate natural luteinizing hormone signals.</p>",
    "highlights": [
      "Standardized to minimum 45% active steroidal saponins",
      "Supports healthy sexual drive, performance, and stamina",
      "Aids in post-workout muscle vitality and fatigue resistance",
      "100% pure herbal extract"
    ],
    "usageInstructions": [
      "Take 1 tablet daily with a meal."
    ],
    "variants": [
      {
        "id": "var-trib-30",
        "sku": "NUTRI-TRIB-30",
        "title": "Bottle of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 145000,
        "compareAtPriceInMinorUnits": 165000,
        "inStock": true,
        "stockQuantity": 120
      }
    ],
    "images": [
      {
        "id": "img-trib-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Tribulus.webp?v=1785831679",
        "altText": "Nutrifactor Tribulus Terrestris 500mg Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-l-arginine-500",
    "slug": "nutrifactor-l-arginine-500mg-nitric-oxide",
    "title": "Nutrifactor L-Arginine 500mg (30 Tablets)",
    "tagline": "Pure free-form L-Arginine to stimulate Nitric Oxide production, healthy blood flow and penile firmness",
    "brand": "Nutrifactor",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 260,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Tablet Twice Daily",
      "servingsPerContainer": 15,
      "keyNutrients": [
        "L-Arginine (Free Form) 500mg"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Nutrifactor L-Arginine is an essential precursor for Nitric Oxide (NO) synthesis, which dilates blood vessels and promotes robust arterial circulation throughout the cardiovascular and genital vascular systems.</p>",
    "highlights": [
      "High-purity free-form L-Arginine for direct assimilation",
      "Promotes vasodilation and firm, sustained blood flow",
      "Enhances cardiovascular performance and intimate endurance",
      "Clean formulation with zero sugar or gluten"
    ],
    "usageInstructions": [
      "Take 1 tablet two times daily on an empty stomach or before physical activity."
    ],
    "variants": [
      {
        "id": "var-larginine-30",
        "sku": "NUTRI-ARGIN-30",
        "title": "Bottle of 30 Tablets",
        "packSize": 30,
        "priceInMinorUnits": 199000,
        "compareAtPriceInMinorUnits": 220000,
        "inStock": true,
        "stockQuantity": 80
      }
    ],
    "images": [
      {
        "id": "img-larginine-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/LArginine.webp?v=1785829050",
        "altText": "Nutrifactor L-Arginine 500mg Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-qarshi-genxing",
    "slug": "qarshi-gen-xing-panax-ginseng-capsules",
    "title": "Qarshi Gen-Xing Panax Ginseng Capsules (30s)",
    "tagline": "Authentic Korean Panax Ginseng formulated by Qarshi Laboratories for supreme vigor, nervous stamina and romantic drive",
    "brand": "Qarshi",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 410,
    "badge": "Local Icon",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Capsule Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "Extract of Red Panax Ginseng 250mg (Standardized Ginsenosides)"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Qarshi Gen-Xing is Pakistan’s leading natural herbal energizer. Standardized Korean Ginseng extract revitalizes the entire central nervous system, relieves mental fatigue, and restores youthful physical and sexual stamina.</p>",
    "highlights": [
      "Pakistan’s most famous red Panax Ginseng restorative capsule",
      "Combats exhaustion, stress-induced erectile weakness, and lethargy",
      "Boosts blood flow, mental focus, and sexual responsiveness",
      "Produced by Qarshi under strict ISO and cGMP standards"
    ],
    "usageInstructions": [
      "Take 1 capsule daily after breakfast with water or warm milk."
    ],
    "variants": [
      {
        "id": "var-genxing-30",
        "sku": "QAR-GENXING-30",
        "title": "Pack of 30 Capsules",
        "packSize": 30,
        "priceInMinorUnits": 99000,
        "compareAtPriceInMinorUnits": 115000,
        "inStock": true,
        "stockQuantity": 140
      }
    ],
    "images": [
      {
        "id": "img-genxing-1",
        "url": "https://cdn.shopify.com/s/files/1/0514/9422/4052/products/Gen-Xing-Capsules-Web-Banner_19ab6bab-c16e-425f-9eb0-995a099e63df.png?v=1629455923",
        "altText": "Qarshi Gen-Xing Panax Ginseng 30 Capsules Pack Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-qarshi-shahi",
    "slug": "qarshi-shahi-royal-vitality-capsules",
    "title": "Qarshi Shahi Royal Vitality Capsules (10s)",
    "tagline": "Regal Unani formulation featuring Amber, Pearl, and invigorating herbal aphrodisiacs for masculine strength",
    "brand": "Qarshi",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 360,
    "badge": "Local Icon",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Capsule As Needed",
      "servingsPerContainer": 10,
      "keyNutrients": [
        "Amber (Ambra Grisea)",
        "Marwareed (Pearl)",
        "Zafran (Saffron)",
        "Musk Herbal Base"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Qarshi Shahi is a premium, time-tested restorative tonic formulated according to the classic royal recipes of Eastern herbal medicine. Combines precious Amber, Pearl, and Zafran to generate rapid vitality and elevate libido.</p>",
    "highlights": [
      "Infused with rare natural ingredients: Amber, Pearl, and Zafran",
      "Rapid restorative action for physical and sexual confidence",
      "100% natural, non-addictive traditional formulation",
      "Individually sealed blister pack"
    ],
    "usageInstructions": [
      "Take 1 capsule 1-2 hours before intimacy with warm milk, or as directed by a Tabib."
    ],
    "variants": [
      {
        "id": "var-shahi-10",
        "sku": "QAR-SHAHI-10",
        "title": "Pack of 10 Capsules",
        "packSize": 10,
        "priceInMinorUnits": 48000,
        "compareAtPriceInMinorUnits": 55000,
        "inStock": true,
        "stockQuantity": 110
      }
    ],
    "images": [
      {
        "id": "img-shahi-1",
        "url": "https://cdn.shopify.com/s/files/1/0514/9422/4052/files/Shahi_002_3e788046-376a-46cc-b3cb-25516c0e5100.png?v=1698659047",
        "altText": "Qarshi Shahi Royal Vitality 10 Capsules Pack Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-qarshi-momiai",
    "slug": "qarshi-hab-e-amber-momiai-shilajit",
    "title": "Qarshi Hab-e-Amber Momiai Pure Shilajit (10 Pills)",
    "tagline": "Classical Himalayan Momiai & Amber complex renowned for rejuvenating male nerve force and endurance",
    "brand": "Qarshi",
    "category": "Sexual Health & Vitality",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 290,
    "badge": "Local Icon",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Pill Daily",
      "servingsPerContainer": 10,
      "keyNutrients": [
        "Momiai (Pure Himalayan Shilajit Extract)",
        "Amber",
        "Musk Willow",
        "Regal Herbal Minerals"
      ],
      "healthTarget": "Sexual Health"
    },
    "descriptionHtml": "<p>Qarshi Hab-e-Amber Momiai is recognized as one of the most potent revitalizers in Unani medicine. Himalayan Momiai (Salajeet/Shilajit) combined with Amber nourishes the reproductive organs, strengthens the nervous system, and combats early exhaustion.</p>",
    "highlights": [
      "Classical formulation containing genuine Himalayan Momiai (Shilajit)",
      "Recharges vital organs, heart, brain, and reproductive nerves",
      "Provides sustained, calm physical power and heightened desire",
      "Produced by Qarshi Research Laboratories"
    ],
    "usageInstructions": [
      "Take 1 pill at night with a cup of warm milk."
    ],
    "variants": [
      {
        "id": "var-momiai-10",
        "sku": "QAR-MOMIAI-10",
        "title": "Pack of 10 Pills",
        "packSize": 10,
        "priceInMinorUnits": 72000,
        "compareAtPriceInMinorUnits": 80000,
        "inStock": true,
        "stockQuantity": 85
      }
    ],
    "images": [
      {
        "id": "img-momiai-1",
        "url": "https://cdn.shopify.com/s/files/1/0514/9422/4052/products/HabeAmberMomiai_1b74b6e4-c495-443c-9766-c4355ca88a15.png?v=1629456225",
        "altText": "Qarshi Hab-e-Amber Momiai Shilajit Pack Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-nutri-liverovit",
    "slug": "nutrifactor-liverovit-milk-thistle-hepatic",
    "title": "Nutrifactor Liverovit Hepatic Care (30 Capsules)",
    "tagline": "Standardized Silymarin Milk Thistle (80%) + Artichoke, Dandelion Root & B-Complex for cellular liver repair",
    "brand": "Nutrifactor",
    "category": "Liver Health & Detox",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 410,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Capsule Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "Milk Thistle Extract 250mg (Silymarin 80%)",
        "Artichoke Extract 50mg",
        "Dandelion Root 50mg",
        "Turmeric Extract 50mg",
        "Vitamin B Complex"
      ],
      "healthTarget": "Liver Health"
    },
    "descriptionHtml": "<p>Nutrifactor Liverovit is a premium botanical formulation engineered to detoxify the liver, protect hepatocyte cells, and promote bile flow. High-potency Milk Thistle Extract standardized to 80% Silymarin shields liver membranes from toxin damage and accelerates cellular regeneration.</p>",
    "highlights": [
      "Standardized to 80% Silymarin for maximum clinical hepatic efficacy",
      "Synergistic synergy of Artichoke, Dandelion Root, and Turmeric extracts",
      "Supports fat metabolism and liver enzyme normalization (SGPT/ALT)",
      "100% vegetarian capsule formulation with DRAP licensing"
    ],
    "usageInstructions": [
      "Take 1 capsule daily after a meal with water."
    ],
    "variants": [
      {
        "id": "var-liverovit-30",
        "sku": "NUTRI-LIVERO-30",
        "title": "Bottle of 30 Capsules",
        "packSize": 30,
        "priceInMinorUnits": 185000,
        "compareAtPriceInMinorUnits": 215000,
        "inStock": true,
        "stockQuantity": 90
      }
    ],
    "images": [
      {
        "id": "img-liverovit-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Liverovit.webp?v=1785828043",
        "altText": "Nutrifactor Liverovit Hepatic Care Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-nutri-glutazon",
    "slug": "nutrifactor-glutazon-l-glutathione-500mg",
    "title": "Nutrifactor Glutazon L-Glutathione 500mg (30 Capsules)",
    "tagline": "Master antioxidant with Vitamin C and Alpha Lipoic Acid for deep hepatic detoxification and cellular renewal",
    "brand": "Nutrifactor",
    "category": "Liver Health & Detox",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 370,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Capsule Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "L-Glutathione (Reduced) 500mg",
        "Vitamin C (Ascorbic Acid) 50mg",
        "Alpha Lipoic Acid 50mg"
      ],
      "healthTarget": "Liver Health"
    },
    "descriptionHtml": "<p>Glutathione is the human body's master intracellular antioxidant, highly concentrated in liver tissues to neutralize free radicals, heavy metals, and metabolic toxins. Nutrifactor Glutazon provides 500mg of pharmaceutical-grade Reduced L-Glutathione.</p>",
    "highlights": [
      "500mg Reduced L-Glutathione for superior cellular bioavailability",
      "Enriched with Vitamin C and Alpha Lipoic Acid to recycle glutathione",
      "Supports Phase II liver detoxification pathways",
      "Promotes clear skin complexion as an additional benefit"
    ],
    "usageInstructions": [
      "Take 1 capsule daily on an empty stomach with a glass of water."
    ],
    "variants": [
      {
        "id": "var-gluta-30",
        "sku": "NUTRI-GLUTA-30",
        "title": "Bottle of 30 Capsules",
        "packSize": 30,
        "priceInMinorUnits": 450000,
        "compareAtPriceInMinorUnits": 520000,
        "inStock": true,
        "stockQuantity": 60
      }
    ],
    "images": [
      {
        "id": "img-gluta-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Glutazon.webp?v=1785832293",
        "altText": "Nutrifactor Glutazon L-Glutathione 500mg Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-qarshi-livakseer",
    "slug": "qarshi-livakseer-hepatic-protector",
    "title": "Qarshi Livakseer Hepatic Protector Tablets (50s)",
    "tagline": "Herbal liver and digestive regulator formulated to relieve sluggish liver, jaundice tendencies and indigestion",
    "brand": "Qarshi",
    "category": "Liver Health & Detox",
    "texture": "Tablets",
    "rating": 4.7,
    "reviewCount": 280,
    "badge": "Local Icon",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "2 Tablets Twice Daily",
      "servingsPerContainer": 25,
      "keyNutrients": [
        "Kasni (Chicory Extract)",
        "Makoh (Solanum Nigrum)",
        "Badyan (Fennel Seed)",
        "Tukhm-e-Kasni"
      ],
      "healthTarget": "Liver Health"
    },
    "descriptionHtml": "<p>Qarshi Livakseer is a natural Unani hepatoprotective medicine. Formulated with Kasni (Chicory) and Makoh to soothe inflamed liver tissues, promote natural secretion of bile, and relieve sluggish digestion and abdominal heaviness.</p>",
    "highlights": [
      "Natural herbal liver decongestant and bile flow stimulator",
      "Contains Kasni and Makoh, traditional herbs for liver disorders",
      "Aids in relieving anorexia, sluggish digestion, and fatty liver discomfort",
      "Affordable everyday herbal healthcare"
    ],
    "usageInstructions": [
      "Take 2 tablets in the morning and evening with water after meals."
    ],
    "variants": [
      {
        "id": "var-livak-50",
        "sku": "QAR-LIVAK-50",
        "title": "Bottle of 50 Tablets",
        "packSize": 50,
        "priceInMinorUnits": 33000,
        "compareAtPriceInMinorUnits": 38000,
        "inStock": true,
        "stockQuantity": 150
      }
    ],
    "images": [
      {
        "id": "img-livak-1",
        "url": "https://cdn.shopify.com/s/files/1/0514/9422/4052/products/Untitled-5_4a35a43b-c367-43db-b482-fc2cada4a012.png?v=1629456142",
        "altText": "Qarshi Livakseer 50 Tablets Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-seven-seas-cod",
    "slug": "seven-seas-omega-3-cod-liver-oil-90s",
    "title": "Seven Seas Omega-3 Plus Multivitamin Cod Liver Oil (90 Capsules)",
    "tagline": "Pure golden Icelandic cod liver oil rich in EPA, DHA, Vitamin A and Vitamin D for heart, liver and vision vitality",
    "brand": "Seven Seas",
    "category": "Liver Health & Detox",
    "texture": "Gel",
    "rating": 4.9,
    "reviewCount": 340,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Capsule Daily",
      "servingsPerContainer": 90,
      "keyNutrients": [
        "Pure Cod Liver Oil 500mg",
        "Omega-3 Fatty Acids (EPA & DHA) 120mg",
        "Vitamin A 400µg",
        "Vitamin D3 5µg (200IU)"
      ],
      "healthTarget": "Liver Health"
    },
    "descriptionHtml": "<p>Seven Seas has been the world standard for pure Cod Liver Oil since 1935. Naturally packed with Omega-3 fatty acids and essential vitamins A & D, it supports liver lipid metabolism, cardiovascular elasticity, and joint lubrication.</p>",
    "highlights": [
      "World-famous British cod liver oil brand",
      "Purified from wild Arctic cold-water cod to eliminate heavy metals",
      "Supports healthy liver function and balanced blood lipid profiles",
      "Convenient 90-capsule 3-month supply"
    ],
    "usageInstructions": [
      "Take 1 capsule daily with a cold drink during meals."
    ],
    "variants": [
      {
        "id": "var-sevenseas-90",
        "sku": "SS-COD-90",
        "title": "Bottle of 90 Capsules",
        "packSize": 90,
        "priceInMinorUnits": 899000,
        "compareAtPriceInMinorUnits": 990000,
        "inStock": true,
        "stockQuantity": 30
      }
    ],
    "images": [
      {
        "id": "img-sevenseas-1",
        "url": "https://cdn.shopify.com/s/files/1/0558/4892/7404/products/sevenseasomega-3plusmultivitamin.jpg?v=1629904950",
        "altText": "Seven Seas Cod Liver Oil 90 Capsules Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-nutri-cranflo",
    "slug": "nutrifactor-cranflo-cranberry-extract-vitamin-c",
    "title": "Nutrifactor Cranflo Cranberry Extract 500mg + Vitamin C (30s)",
    "tagline": "High-concentration PACs Cranberry extract to prevent bacterial adhesion in urinary tract and support kidney hygiene",
    "brand": "Nutrifactor",
    "category": "Kidney & Urinary Health",
    "texture": "Tablets",
    "rating": 4.9,
    "reviewCount": 510,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Capsule Twice Daily",
      "servingsPerContainer": 15,
      "keyNutrients": [
        "Cranberry Extract 500mg (Standardized PACs)",
        "Vitamin C (Ascorbic Acid) 50mg",
        "Vitamin E 10IU"
      ],
      "healthTarget": "Kidney Health"
    },
    "descriptionHtml": "<p>Nutrifactor Cranflo provides concentrated Cranberry extract rich in Proanthocyanidins (PACs), which clinically inhibit E. coli bacteria from attaching to the bladder and urinary tract walls. Supports healthy renal filtration and protects against recurrent UTIs.</p>",
    "highlights": [
      "Clinically standardized Cranberry Extract (PACs) with Vitamin C",
      "Provides effective, non-antibiotic protection against urinary infections",
      "Maintains healthy acidic bladder pH and assists kidney flushing",
      "Safe for daily ongoing consumption by both men and women"
    ],
    "usageInstructions": [
      "Take 1 capsule twice daily with plenty of water, preferably after meals."
    ],
    "variants": [
      {
        "id": "var-cranflo-30",
        "sku": "NUTRI-CRAN-30",
        "title": "Bottle of 30 Capsules",
        "packSize": 30,
        "priceInMinorUnits": 99000,
        "compareAtPriceInMinorUnits": 115000,
        "inStock": true,
        "stockQuantity": 140
      }
    ],
    "images": [
      {
        "id": "img-cranflo-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Cranflo.webp?v=1785831740",
        "altText": "Nutrifactor Cranflo 30 Capsules Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-nutri-norik",
    "slug": "nutrifactor-norik-uric-acid-kidney-cleanse",
    "title": "Nutrifactor Norik Uric Acid & Kidney Cleanse (30 Capsules)",
    "tagline": "Targeted botanical kidney formula with Celery Seed, Tart Cherry and Turmeric to maintain normal uric acid balance",
    "brand": "Nutrifactor",
    "category": "Kidney & Urinary Health",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 320,
    "badge": "Most Popular",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1 Capsule Twice Daily",
      "servingsPerContainer": 15,
      "keyNutrients": [
        "Tart Cherry Extract 250mg",
        "Celery Seed Extract 150mg",
        "Turmeric Extract 100mg",
        "Citric Acid 50mg"
      ],
      "healthTarget": "Kidney Health"
    },
    "descriptionHtml": "<p>Nutrifactor Norik is formulated to support optimal kidney filtration and balance uric acid levels in the bloodstream. Combines Tart Cherry and Celery Seed extracts which aid the kidneys in flushing metabolic byproducts.</p>",
    "highlights": [
      "Targeted for individuals dealing with elevated uric acid or joint crystallization",
      "Features high-antioxidant Tart Cherry and Celery Seed extracts",
      "Assists kidney nephrons in normal glomerular filtration",
      "100% herbal and free from synthetic diuretics"
    ],
    "usageInstructions": [
      "Take 1 capsule twice daily with a full glass of water."
    ],
    "variants": [
      {
        "id": "var-norik-30",
        "sku": "NUTRI-NORIK-30",
        "title": "Bottle of 30 Capsules",
        "packSize": 30,
        "priceInMinorUnits": 119000,
        "compareAtPriceInMinorUnits": 140000,
        "inStock": true,
        "stockQuantity": 95
      }
    ],
    "images": [
      {
        "id": "img-norik-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/Norik.webp?v=1785828367",
        "altText": "Nutrifactor Norik Kidney Cleanse 30 Capsules Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-nutri-prostamen",
    "slug": "nutrifactor-prostamen-prostate-urinary-flow",
    "title": "Nutrifactor Prostamen Prostate & Urinary Flow (30 Capsules)",
    "tagline": "Clinical herbal synergy of Saw Palmetto, Pygeum Bark, Pumpkin Seed & Lycopene for healthy urinary flow and bladder emptying",
    "brand": "Nutrifactor",
    "category": "Kidney & Urinary Health",
    "texture": "Tablets",
    "rating": 4.8,
    "reviewCount": 290,
    "badge": "Best Seller",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "1-2 Capsules Daily",
      "servingsPerContainer": 30,
      "keyNutrients": [
        "Saw Palmetto Berry Extract 160mg",
        "Pygeum Africanum Bark 50mg",
        "Pumpkin Seed Extract 50mg",
        "Lycopene 5mg",
        "Zinc 15mg"
      ],
      "healthTarget": "Kidney Health"
    },
    "descriptionHtml": "<p>Nutrifactor Prostamen is specifically engineered for men to support healthy prostate function, ease urinary hesitancy, and reduce frequent nighttime urination. Contains standardized Saw Palmetto and Pygeum.</p>",
    "highlights": [
      "Standardized Saw Palmetto and Pygeum bark extracts",
      "Supports smooth, strong urinary flow and complete bladder emptying",
      "Reduces frequent nighttime awakenings (nocturia)",
      "Enriched with Zinc and Lycopene for prostate cell health"
    ],
    "usageInstructions": [
      "Take 1 to 2 capsules daily as a dietary supplement after meals."
    ],
    "variants": [
      {
        "id": "var-prosta-30",
        "sku": "NUTRI-PROST-30",
        "title": "Bottle of 30 Capsules",
        "packSize": 30,
        "priceInMinorUnits": 99000,
        "compareAtPriceInMinorUnits": 120000,
        "inStock": true,
        "stockQuantity": 85
      }
    ],
    "images": [
      {
        "id": "img-prosta-1",
        "url": "https://cdn.shopify.com/s/files/1/0310/5472/5260/files/ProstamenNew.webp?v=1788172726",
        "altText": "Nutrifactor Prostamen 30 Capsules Bottle Shot",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "supp-qarshi-zarooni",
    "slug": "qarshi-jawarish-zarooni-kidney-bladder-tonic",
    "title": "Qarshi Jawarish Zarooni Kidney & Bladder Tonic (100g)",
    "tagline": "Renowned classical Unani semi-solid tonic to strengthen renal vitality, relieve weak bladder and control urinary frequency",
    "brand": "Qarshi",
    "category": "Kidney & Urinary Health",
    "texture": "Smooth",
    "rating": 4.8,
    "reviewCount": 380,
    "badge": "Local Icon",
    "discreetPackagingGuaranteed": true,
    "supplementFacts": {
      "servingSize": "5g (Half Teaspoon) Twice Daily",
      "servingsPerContainer": 20,
      "keyNutrients": [
        "Tukhm-e-Gazar (Wild Carrot Seed)",
        "Tukhm-e-Karafs (Celery Seed)",
        "Filfil Siyah (Black Pepper)",
        "Shehd (Honey)"
      ],
      "healthTarget": "Kidney Health"
    },
    "descriptionHtml": "<p>Qarshi Jawarish Zarooni is an authentic traditional Unani medicine prescribed for renal and urinary bladder debility. Formulated with Tukhm-e-Gazar, Celery, and natural warming herbs, it strengthens the kidneys and helps relieve involuntary urinary dribbling or excessive urination.</p>",
    "highlights": [
      "Time-honoured Unani medicine for kidney and bladder strength",
      "Helps relieve involuntary urination and frequent nocturnal micturition",
      "Nourishes pelvic muscles and kidney nephron vitality",
      "Prepared in natural honey and pure botanical seeds"
    ],
    "usageInstructions": [
      "Take 5g (half teaspoon) morning and evening with water after meals."
    ],
    "variants": [
      {
        "id": "var-zarooni-100",
        "sku": "QAR-ZAROON-100",
        "title": "Jar of 100g",
        "packSize": 1,
        "priceInMinorUnits": 26000,
        "compareAtPriceInMinorUnits": 30000,
        "inStock": true,
        "stockQuantity": 130
      }
    ],
    "images": [
      {
        "id": "img-zarooni-1",
        "url": "https://cdn.shopify.com/s/files/1/0514/9422/4052/products/Jawarish-Zarooni-Web-Banner_66997ed1-9344-4837-b8f5-e9fe635e4ea3.png?v=1629456267",
        "altText": "Qarshi Jawarish Zarooni 100g Jar Shot",
        "isPrimary": true
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return SEED_PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return SEED_PRODUCTS.slice(0, 8);
}

export function getProductsByCategory(category: string): Product[] {
  return SEED_PRODUCTS.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(SEED_PRODUCTS.map((p) => p.category)));
}

export function getAllBrands(): string[] {
  return Array.from(new Set(SEED_PRODUCTS.map((p) => p.brand)));
}
