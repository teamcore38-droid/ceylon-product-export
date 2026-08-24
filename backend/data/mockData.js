const sampleProducts = [
  {
    _id: 'prod_1',
    name: 'Fresh Whole King Coconut (Ceylon Thembili)',
    slug: 'fresh-whole-king-coconut',
    category: 'King Coconut',
    badge: 'Flagship Export',
    shortDescription: 'Naturally sweet, electrolyte-dense unhusked King Coconut harvested from organic groves in Sri Lanka.',
    fullDescription: 'Sri Lankan King Coconut (Cocos nucifera var. aurantiaca) is nature’s masterwork of natural hydration. Unlike standard green coconuts, King Coconut is endemic to Sri Lanka and naturally contains a rich concentration of free electrolytes (Potassium, Magnesium, Sodium, and Calcium) with zero cholesterol and natural sucrose-free sweetness (5.8° Brix). Hand-picked at optimal 7-8 month maturity.',
    brix: '5.5° - 6.5° Brix',
    origin: 'Kurunegala & Gampaha, Sri Lanka',
    shelfLife: '28-35 Days in Controlled Cold Chain (12°C - 14°C)',
    temperature: '12°C - 14°C (Relative Humidity 85-90%)',
    specs: [
      { key: 'Nut Weight', value: '1.2 kg - 1.8 kg per nut' },
      { key: 'Water Volume', value: '350 ml - 480 ml per nut' },
      { key: 'pH Level', value: '5.0 - 5.4 (Mildly acidic, smooth taste)' },
      { key: 'Fat & Cholesterol', value: '0% Fat, 0% Cholesterol' },
      { key: 'Maturity Stage', value: '7 to 8 Months (Optimal Hydration Stage)' }
    ],
    nutritionalHighlights: [
      { nutrient: 'Potassium (K)', amount: '290', unit: 'mg/100ml', benefit: 'Relieves muscle cramps & balances blood pressure' },
      { nutrient: 'Vitamin C', amount: '15', unit: 'mg/100ml', benefit: 'Boosts immune system & collagen synthesis' },
      { nutrient: 'Magnesium (Mg)', amount: '12', unit: 'mg/100ml', benefit: 'Supports cellular energy & nervous system' },
      { nutrient: 'Sodium (Na)', amount: '42', unit: 'mg/100ml', benefit: 'Essential fluid rehydration electrolyte' }
    ],
    packaging: [
      { type: '12-Nut Corrugated Carton', capacity: '12 Nuts per box', weight: '16.5 kg gross', dimensions: '40 x 30 x 26 cm' },
      { type: '6-Nut Executive Retail Box', capacity: '6 Nuts per box', weight: '8.5 kg gross', dimensions: '30 x 20 x 26 cm' }
    ],
    containerLoading: [
      { containerType: '20ft Reefer Container', cartonCount: '850 Cartons', grossWeight: '14,025 kg', netWeight: '12,500 kg' },
      { containerType: '40ft High Cube Reefer', cartonCount: '1,750 Cartons', grossWeight: '28,875 kg', netWeight: '25,500 kg' }
    ],
    uses: ['Direct Natural Hydration', 'High-end Hotel & Resort Beverage', 'Post-workout Isotonic Drink', 'Ayurvedic & Wellness Formulations'],
    images: [
      '/images/king_coconut.webp',
      '/images/king_coconut.webp'
    ],
    isFeatured: true
  },
  {
    _id: 'prod_2',
    name: 'Diamond Cut Trimmed King Coconut',
    slug: 'diamond-cut-king-coconut',
    category: 'King Coconut',
    badge: 'Retail Ready',
    shortDescription: 'Precision trimmed, outer husk stripped, diamond-cut shaped King Coconut sealed in food-grade wrapping for international supermarket chains.',
    fullDescription: 'Designed specifically for global retail displays and luxury supermarket produce aisles, our Diamond Cut King Coconuts undergo hygienic mechanical husk trimming. The outer fibrous layer is removed, leaving a uniform, elegant hexagonal diamond shape with an exposed flat base for easy shelf positioning. Stem-treated and food-grade vacuum wrapped to prevent moisture loss and mold formation.',
    brix: '5.8° - 6.4° Brix',
    origin: 'Puttalam & Gampaha, Sri Lanka',
    shelfLife: '30 Days in Refrigerated Display (4°C - 8°C)',
    temperature: '4°C - 8°C (Sealed Retail Cold Chain)',
    specs: [
      { key: 'Unit Weight', value: '750g - 950g trimmed' },
      { key: 'Water Volume', value: '350 ml - 420 ml' },
      { key: 'Wrap Finish', value: 'Biodegradable shrink wrap + Easy-pull cap sticker' },
      { key: 'Quality Standard', value: 'Zero husk blemishes, 100% mold treated' }
    ],
    nutritionalHighlights: [
      { nutrient: 'Potassium (K)', amount: '310', unit: 'mg/100ml', benefit: 'Instant natural isotonic balance' },
      { nutrient: 'Natural Sugars', amount: '4.2', unit: 'g/100ml', benefit: 'Pure unrefined sucrose-free energy' }
    ],
    packaging: [
      { type: '9-Nut Retail Display Tray Box', capacity: '9 Trimmed Nuts', weight: '8.2 kg gross', dimensions: '38 x 28 x 20 cm' }
    ],
    containerLoading: [
      { containerType: '20ft Reefer Container', cartonCount: '1,200 Trays', grossWeight: '9,840 kg', netWeight: '8,500 kg' },
      { containerType: '40ft High Cube Reefer', cartonCount: '2,400 Trays', grossWeight: '19,680 kg', netWeight: '17,200 kg' }
    ],
    uses: ['Supermarket Produce Aisles', 'Gourmet Juice Bars', 'Flight Catering & Luxury Lounges'],
    images: [
      '/images/diamond_cut_king_coconut.webp'
    ],
    isFeatured: true
  },
  {
    _id: 'prod_3',
    name: 'Fresh Organic Green Papaya (Raw Culinary Grade)',
    slug: 'fresh-organic-green-papaya',
    category: 'Green Papaya',
    badge: 'High Fiber',
    shortDescription: 'Crisp, firm, deep-green unripe papaya harvested for Asian culinary dishes, salads, pickling, and food processing.',
    fullDescription: 'Our Fresh Organic Green Papaya is cultivated in tropical agricultural belts in Sri Lanka under strict Good Agricultural Practices (GAP). Harvested at the dark green, unripened stage when the flesh is dense, pale-white to light ivory, and rich in natural papain enzymes. Highly prized across Thai, Vietnamese, and South Asian cuisines for Som Tum salads, savory curries, and natural meat tenderization.',
    brix: 'N/A (Unripe Culinary Stage)',
    origin: 'Monaragala & Anuradhapura, Sri Lanka',
    shelfLife: '21-25 Days in Controlled Reefer (10°C - 12°C)',
    temperature: '10°C - 12°C (Relative Humidity 85-90%)',
    specs: [
      { key: 'Fruit Size', value: '800g - 1.6kg per fruit' },
      { key: 'Flesh Texture', value: 'Crisp, firm, seedless/pale white seed core' },
      { key: 'Maturity Index', value: '100% Green Skin (Zero yellow blush)' },
      { key: 'Residue Standard', value: 'Zero chemical residue, GAP Certified' }
    ],
    nutritionalHighlights: [
      { nutrient: 'Papain Enzyme', amount: 'High', unit: 'active UI', benefit: 'Supports protein digestion & anti-inflammatory health' },
      { nutrient: 'Dietary Fiber', amount: '2.8', unit: 'g/100g', benefit: 'Promotes gut motility & digestive wellness' },
      { nutrient: 'Vitamin C', amount: '62', unit: 'mg/100g', benefit: 'Powerful antioxidant defense' }
    ],
    packaging: [
      { type: '10kg Export Corrugated Box', capacity: '8 - 12 Papayas', weight: '10.5 kg gross', dimensions: '50 x 30 x 20 cm' },
      { type: '15kg Heavy-Duty Export Carton', capacity: '12 - 16 Papayas', weight: '15.8 kg gross', dimensions: '55 x 35 x 24 cm' }
    ],
    containerLoading: [
      { containerType: '20ft Reefer Container', cartonCount: '1,100 Cartons (10kg)', grossWeight: '11,550 kg', netWeight: '10,500 kg' },
      { containerType: '40ft High Cube Reefer', cartonCount: '2,200 Cartons (10kg)', grossWeight: '23,100 kg', netWeight: '21,000 kg' }
    ],
    uses: ['Asian Supermarkets & Restaurants', 'Som Tum & Green Papaya Salad Processing', 'Pickling & Food Dehydration', 'Meat Tenderizing Industry'],
    images: [
      '/images/green_papaya.webp'
    ],
    isFeatured: true
  },
  {
    _id: 'prod_4',
    name: 'Industrial Papain Grade Green Papaya',
    slug: 'industrial-papain-green-papaya',
    category: 'Green Papaya',
    badge: 'Pharma Grade',
    shortDescription: 'High-latex green papaya cultivated specifically for industrial papain enzyme extraction, cosmetics, and digestive supplements.',
    fullDescription: 'Sri Lanka produces some of the highest potency crude and refined papain enzymes globally. Our Industrial Papain Grade Green Papaya is grown from high-yield cultivars optimized for enzyme latex concentration. Supplied to pharmaceutical manufacturers, brewery clarification plants, meat processing industries, and skincare formulators worldwide.',
    brix: 'N/A',
    origin: 'Dambulla & Kurunegala, Sri Lanka',
    shelfLife: '14-18 Days (Cold Transit)',
    temperature: '10°C - 12°C',
    specs: [
      { key: 'Enzyme Potency', value: 'High Proteolytic Activity' },
      { key: 'Form Factor', value: 'Fresh Whole Fruit or Vacuum Slab Slices' },
      { key: 'Purity Grade', value: 'Non-GMO, 100% Pesticide Free' }
    ],
    nutritionalHighlights: [
      { nutrient: 'Proteolytic Papain', amount: 'Maximum', unit: 'USP/mg', benefit: 'Enzymatic protein breakdown & clarifying agent' }
    ],
    packaging: [
      { type: '20kg Industrial Plastic Vent Crate / Heavy Box', capacity: 'Bulk', weight: '21 kg gross', dimensions: '60 x 40 x 30 cm' }
    ],
    containerLoading: [
      { containerType: '40ft Reefer Container', cartonCount: '1,200 Crates', grossWeight: '25,200 kg', netWeight: '24,000 kg' }
    ],
    uses: ['Brewery Chill-proofing & Clarification', 'Pharmaceutical Digestive Aids', 'Cosmetic Exfoliating Creams', 'Industrial Meat Tenderizer'],
    images: [
      '/images/green_papaya.webp'
    ],
    isFeatured: false
  },
  {
    _id: 'prod_5',
    name: 'Fresh Whole Tapioca Root (Ceylon Cassava)',
    slug: 'fresh-whole-tapioca-root',
    category: 'Tapioca',
    badge: 'Non-GMO Staple',
    shortDescription: 'Hand-harvested fresh cassava roots with clean firm white tubers, ideal for fresh produce markets and food manufacturing.',
    fullDescription: 'Ceylon Tapioca (Manihot esculenta), locally known as "Manyokka", is a nutrient-rich, carbohydrate-dense root staple cultivated in tropical sandy loam soils. Harvested with utmost care to avoid root damage, washed, wax-coated or refrigerated to maintain fresh starch integrity. Naturally gluten-free, low GI complex carbohydrate powerhouse.',
    brix: 'N/A',
    origin: 'Ratnapura & Kalutara, Sri Lanka',
    shelfLife: '20-25 Days (Wax Coated Cold Chain 12°C)',
    temperature: '12°C - 14°C (Relative Humidity 85%)',
    specs: [
      { key: 'Root Length', value: '25cm - 40cm' },
      { key: 'Diameter', value: '4cm - 8cm' },
      { key: 'Starch Content', value: '28% - 34% Dry Matter Starch' },
      { key: 'Cyanogenic Potential', value: 'Low Sweet Variety (<50 mg HCN/kg)' }
    ],
    nutritionalHighlights: [
      { nutrient: 'Complex Carbohydrates', amount: '38', unit: 'g/100g', benefit: 'Sustained low-GI energy release' },
      { nutrient: 'Dietary Fiber', amount: '1.8', unit: 'g/100g', benefit: 'Supports digestive satiety' },
      { nutrient: 'Gluten Content', amount: '0', unit: '%', benefit: '100% Gluten-free hypoallergenic staple' }
    ],
    packaging: [
      { type: '15kg Export Mesh Bags / Corrugated Boxes', capacity: 'Whole Roots', weight: '15.5 kg gross', dimensions: '60 x 40 x 20 cm' }
    ],
    containerLoading: [
      { containerType: '20ft Reefer Container', cartonCount: '900 Cartons', grossWeight: '13,950 kg', netWeight: '12,600 kg' },
      { containerType: '40ft High Cube Reefer', cartonCount: '1,800 Cartons', grossWeight: '27,900 kg', netWeight: '25,200 kg' }
    ],
    uses: ['Fresh Food Produce Markets', 'Tapioca Chips & Snack Manufacturing', 'Gluten-Free Flour Processing'],
    images: [
      'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },
  {
    _id: 'prod_6',
    name: 'IQF Frozen Peeled Tapioca / Cassava Chunks',
    slug: 'iqf-frozen-peeled-tapioca',
    category: 'Tapioca',
    badge: '18-Month Shelf Life',
    shortDescription: 'Individually Quick Frozen (IQF) peeled cassava chunks, vacuum sealed for international retail and foodservice.',
    fullDescription: 'Our IQF Frozen Peeled Tapioca eliminates prep labor for commercial kitchens and retail consumers. Fresh cassava roots are peeled, washed, cut into uniform 4-6cm chunks, steam-blanched, and rapidly blast-frozen at -35°C. Retains 100% natural texture, bright white color, and nutritional profile with zero added preservatives.',
    brix: 'N/A',
    origin: 'Gampaha Processing Plant, Sri Lanka',
    shelfLife: '18 Months at -18°C Frozen Storage',
    temperature: '-18°C Deep Frozen Reefer',
    specs: [
      { key: 'Cut Size', value: '4cm - 6cm uniform chunks' },
      { key: 'Freezing Tech', value: 'IQF Blast Frozen (-35°C)' },
      { key: 'Additive Status', value: '100% Pure Tapioca, No Sulfites' }
    ],
    nutritionalHighlights: [
      { nutrient: 'Carbohydrates', amount: '36', unit: 'g/100g', benefit: 'Gluten-free energy source' },
      { nutrient: 'Calcium', amount: '16', unit: 'mg/100g', benefit: 'Bone density support' }
    ],
    packaging: [
      { type: '1kg Retail Polybag (10 Bags per Master Carton)', capacity: '10 x 1kg', weight: '10.6 kg gross', dimensions: '40 x 30 x 22 cm' }
    ],
    containerLoading: [
      { containerType: '20ft Frozen Reefer', cartonCount: '1,100 Cartons', grossWeight: '11,660 kg', netWeight: '11,000 kg' },
      { containerType: '40ft High Cube Frozen Reefer', cartonCount: '2,200 Cartons', grossWeight: '23,320 kg', netWeight: '22,000 kg' }
    ],
    uses: ['Ethnic Supermarkets (Europe, Middle East, USA)', 'Hotel & Foodservice Chain Supply', 'Ready-to-Boil Convenience Meals'],
    images: [
      'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  }
];

const sampleRFQs = [
  {
    _id: 'rfq_1001',
    companyName: 'Al-Jazeera Tropical Trading LLC',
    contactPerson: 'Tariq Al-Mansoor',
    email: 'tmansoor@aljazeeratrading.ae',
    phone: '+971 50 892 4112',
    country: 'United Arab Emirates',
    product: 'Fresh Whole King Coconut (Ceylon Thembili)',
    productCategory: 'King Coconut',
    quantity: 2,
    unit: '40ft High Cube Reefer Container',
    packagingType: '12-Nut Export Corrugated Box',
    incoterms: 'CIF Jebel Ali Port, Dubai',
    destinationPort: 'Jebel Ali Port, Dubai',
    targetDeliveryDate: '2026-09-15',
    additionalNotes: 'Require CDA inspection certificates and phytosanitary seals.',
    status: 'Under Review',
    createdAt: new Date('2026-08-18')
  },
  {
    _id: 'rfq_1002',
    companyName: 'BioNaturals Import GmbH',
    contactPerson: 'Greta Weber',
    email: 'g.weber@bionaturals.de',
    phone: '+49 89 2411 908',
    country: 'Germany',
    product: 'Fresh Organic Green Papaya (Raw Culinary Grade)',
    productCategory: 'Green Papaya',
    quantity: 1,
    unit: '20ft Reefer Container',
    packagingType: '10kg Export Corrugated Box',
    incoterms: 'FOB Colombo Port',
    destinationPort: 'Hamburg Port, Germany',
    targetDeliveryDate: '2026-09-30',
    additionalNotes: 'USDA & EU Organic certificates strictly required.',
    status: 'New Lead',
    createdAt: new Date('2026-08-20')
  }
];

const sampleBlogs = [
  {
    _id: 'blog_1',
    title: 'Why Sri Lankan King Coconut Outperforms Synthetic Isotonic Beverages',
    slug: 'king-coconut-vs-synthetic-isotonic-drinks',
    category: 'Nutritional Science',
    summary: 'Discover the natural biochemical superiority of Ceylon Thembili, featuring high free potassium, zero sucrose, and instant cellular rehydration.',
    content: `Sri Lanka’s King Coconut (Cocos nucifera var. aurantiaca) is widely regarded by nutritionists as nature’s ultimate isotonic fluid. Unlike common green coconuts or commercially processed sports drinks loaded with high-fructose corn syrup and artificial dyes, King Coconut water is naturally rich in free electrolytes.

Key Bio-chemical Advantages:
1. High Free Potassium (290-310 mg/100ml): Prevents post-workout muscle cramping and regulates cellular fluid balance.
2. Natural Sucrose-Free Sugar Profile: Contains predominantly natural glucose and fructose, ensuring smooth digestion without blood sugar spikes (Low GI).
3. Zero Cholesterol & Fat: 100% natural, unadulterated hydration direct from the nut.

For global importers, Sri Lankan King Coconuts represent the golden standard of wellness beverages.`,
    author: 'Dr. N. Jayawardena, Agricultural Biochemist',
    readTime: '5 min read',
    image: '/images/king_coconut.webp',
    publishedAt: new Date('2026-08-10')
  },
  {
    _id: 'blog_2',
    title: 'Export Logistics Guide: Cold-Chain Management for Fresh Produce',
    slug: 'cold-chain-logistics-king-coconut-papaya-tapioca',
    category: 'Export Logistics',
    summary: 'A technical deep-dive into temperature zoning (12°C - 14°C), relative humidity control (85-90%), and atmosphere control during maritime transit.',
    content: `Shipping fresh tropical produce like King Coconut, Green Papaya, and Tapioca root across international oceans requires strict adherence to cold-chain dynamics.

Temperature & Humidity Requirements:
- King Coconut: 12°C to 14°C with 85-90% Relative Humidity (28-35 days shelf life).
- Green Papaya: 10°C to 12°C (prevents premature ripening while avoiding chilling injury).
- Tapioca Roots: 12°C with anti-fungal stem treatment and wax coating.

Proper pre-cooling down to the target transit temperature before loading into maritime Reefer containers is critical to ensuring zero cargo loss upon port arrival.`,
    author: 'K. Bandara, Senior Supply Chain Director',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    publishedAt: new Date('2026-08-15')
  }
];

module.exports = {
  sampleProducts,
  sampleRFQs,
  sampleBlogs
};
