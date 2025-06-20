/**
 * HSSPL Search Functionality
 * Advanced search system for Heinrich Safety Solutions products
 */

// Global search configuration
const HSSPL_SEARCH = {  // Product database with comprehensive information
  products: [
    // Personal Protective Equipment (17 products - all included)
    {
      id: 'reflective-jacket',
      title: "Reflective Jacket",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "High-visibility safety jacket with reflective strips for enhanced visibility in low-light conditions",
      features: ["ANSI/ISEA 107 compliant", "Machine washable", "Breathable fabric"],
      keywords: ["reflective", "jacket", "high visibility", "safety", "ppe", "clothing", "workwear", "ansi"],
      url: "/ppe.html#reflective-jacket",
      image: "/assets/images/reflective_jacket.png"
    },
    {
      id: 'reflective-strap',
      title: "Reflective Strap",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "High-visibility safety straps for enhanced visibility and improved safety protocols",
      features: ["Adjustable fit", "Durable construction", "Multiple color options"],
      keywords: ["reflective", "strap", "visibility", "safety", "adjustable", "ppe"],
      url: "/ppe.html#reflective-strap",
      image: "/assets/images/reflective-strap.png"
    },
    {
      id: 'face-shield',
      title: "Face Shield",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Impact-resistant protective face shield designed for industrial work environments",
      features: ["Anti-fog coating", "UV protection", "Scratch resistant"],
      keywords: ["face", "shield", "protection", "safety", "industrial", "anti-fog", "ppe"],
      url: "/ppe.html#face-shield",
      image: "/assets/images/face_sheild.png"
    },
    {
      id: 'safety-gloves-rubber',
      title: "Safety Gloves (Rubber)",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Heavy-duty rubber gloves providing excellent hand protection against chemicals and cuts",
      features: ["Chemical resistant", "Non-slip grip", "Multiple sizes"],
      keywords: ["gloves", "rubber", "safety", "chemical resistant", "hand protection", "ppe"],
      url: "/ppe.html#safety-gloves-rubber",
      image: "/assets/images/safety_gloves_rubber.png"
    },
    {
      id: 'safety-mask',
      title: "Safety Mask",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Professional respiratory protection for hazardous environments and dust particles",
      features: ["N95 filtration", "Comfortable fit", "Disposable/reusable"],
      keywords: ["mask", "respiratory", "protection", "n95", "dust", "safety", "ppe"],
      url: "/ppe.html#safety-mask",
      image: "/assets/images/face_musk.png"
    },
    {
      id: 'safety-gloves-leather',
      title: "Safety Gloves (Leather)",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Durable leather gloves for general purpose hand protection in industrial settings",
      features: ["Genuine leather", "Reinforced palm", "Comfortable fit"],
      keywords: ["gloves", "leather", "safety", "hand protection", "durable", "industrial", "ppe"],
      url: "/ppe.html#safety-gloves-leather",
      image: "/assets/images/safety_gloves_leather.png"
    },
    {
      id: 'safety-eye-glass',
      title: "Safety Eye Glass",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Impact-resistant safety glasses providing comprehensive eye protection",
      features: ["Impact resistant", "UV protection", "Anti-scratch coating"],
      keywords: ["glasses", "eye protection", "safety", "impact resistant", "uv protection", "ppe"],
      url: "/ppe.html#safety-eye-glass",
      image: "/assets/images/safety_eye_glass.png"
    },
    {
      id: 'safety-helmet',
      title: "Safety Helmet",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Industrial grade safety helmet for head protection in construction and industrial environments",
      features: ["ANSI Z89.1 compliant", "Adjustable suspension", "Ventilation slots"],
      keywords: ["helmet", "head protection", "safety", "construction", "industrial", "ansi", "ppe", "hard hat"],
      url: "/ppe.html#safety-helmet",
      image: "/assets/images/safety_helmet.png"
    },
    {
      id: 'safety-shoes',
      title: "Safety Shoes",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Steel-toe safety shoes providing foot protection against impact and puncture hazards",
      features: ["Steel toe protection", "Slip-resistant sole", "Electrical hazard protection"],
      keywords: ["shoes", "safety", "steel toe", "foot protection", "slip resistant", "ppe", "boots"],
      url: "/ppe.html#safety-shoes",
      image: "/assets/images/safety_shoes.png"
    },
    {
      id: 'eyewash-500ml',
      title: "Eyewash Bottle (500ml)",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Portable eyewash solution for emergency eye irrigation and chemical splash incidents",
      features: ["500ml capacity", "Sterile solution", "Easy to use"],
      keywords: ["eyewash", "emergency", "eye", "irrigation", "chemical", "safety", "ppe"],
      url: "/ppe.html#eyewash-500ml",
      image: "/assets/images/eyewash_500ml.png"
    },
    {
      id: 'eyewash-1liter',
      title: "Eyewash Bottle (1 Liter)",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Large capacity eyewash solution for emergency eye irrigation in industrial settings",
      features: ["1 liter capacity", "Sterile solution", "Extended use"],
      keywords: ["eyewash", "emergency", "eye", "irrigation", "1 liter", "industrial", "ppe"],
      url: "/ppe.html#eyewash-1liter",
      image: "/assets/images/eyewash_1liter.png"
    },
    {
      id: 'ppe-bag',
      title: "Waist Tools cum PPE Bag",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Multi-compartment bag for organizing and carrying personal protective equipment and tools",
      features: ["Multiple compartments", "Adjustable waist belt", "Durable construction"],
      keywords: ["bag", "tools", "ppe", "storage", "waist", "organization", "belt"],
      url: "/ppe.html#ppe-bag",
      image: "/assets/images/ppe_bag.png"
    },
    {
      id: 'bump-cap',
      title: "Bump Cap",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Lightweight head protection for minor bump and scrape protection in low-risk environments",
      features: ["Lightweight design", "Ventilation holes", "Adjustable fit"],
      keywords: ["bump cap", "head protection", "lightweight", "minor impact", "ppe"],
      url: "/ppe.html#bump-cap",
      image: "/assets/images/bump_cap.png"
    },
    {
      id: 'davit-arm',
      title: "Davit Arm System",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Mechanical lifting device for safe entry and retrieval from confined spaces",
      features: ["360-degree rotation", "Easy setup", "High load capacity"],
      keywords: ["davit", "arm", "lifting", "confined space", "rescue", "mechanical", "ppe"],
      url: "/ppe.html#davit-arm",
      image: "/assets/images/davit_arm.png"
    },
    {
      id: 'painting-kit',
      title: "Painting Kit",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Complete protective equipment set for painting and coating applications",
      features: ["Respirator included", "Chemical resistant", "Complete kit"],
      keywords: ["painting", "kit", "respirator", "coating", "chemical", "protection", "ppe"],
      url: "/ppe.html#painting-kit",
      image: "/assets/images/painting_kit.png"
    },
    {
      id: 'parapet-anchor',
      title: "Parapet Wall Anchor",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Secure anchorage point designed for attachment to parapet walls and building edges",
      features: ["Corrosion resistant", "High strength", "Easy installation"],
      keywords: ["parapet", "wall", "anchor", "anchorage", "building", "edge", "ppe"],
      url: "/ppe.html#parapet-anchor",
      image: "/assets/images/parapet_anchor.png"
    },
    {
      id: 'tripod',
      title: "Tripod",
      category: "ppe",
      categoryName: "Personal Protective Equipment",
      description: "Portable tripod system for confined space entry and rescue operations",
      features: ["Adjustable height", "Stable base", "Lightweight aluminum"],
      keywords: ["tripod", "confined space", "rescue", "portable", "aluminum", "ppe"],
      url: "/ppe.html#tripod",
      image: "/assets/images/tripod.png"
    },

    // Life Line System Main Categories (4 systems)
    {
      id: 'horizontal-lifeline',
      title: "Horizontal Life Line System",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Provides continuous anchorage for horizontal movement along a structure",
      features: ["Continuous protection", "Multiple user capability", "Flexible installation"],
      keywords: ["horizontal", "lifeline", "life line", "anchorage", "continuous", "movement"],
      url: "/horizontal-life-line-system.html",
      image: "/assets/images/horizontal_life_line_system.png"
    },
    {
      id: 'vertical-lifeline',
      title: "Vertical Life Line System",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Ensures safe vertical access and protection for elevated work areas",
      features: ["Vertical protection", "Ladder safety", "Self-retracting"],
      keywords: ["vertical", "lifeline", "life line", "ladder", "climbing", "elevation"],
      url: "/vertical-life-line-system.html",
      image: "/assets/images/vertical_life_line_system.png"
    },
    {
      id: 'overhead-lifeline',
      title: "Overhead Life Line System",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Overhead anchorage system for maximum mobility and protection",
      features: ["Overhead installation", "Maximum mobility", "Reduced trip hazards"],
      keywords: ["overhead", "lifeline", "life line", "mobility", "anchorage", "ceiling"],
      url: "/overhead-life-line-system.html",
      image: "/assets/images/overhead_life_line_system.png"
    },
    {
      id: 'custom-lifeline',
      title: "Custom Life Line System",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Tailored lifeline solutions designed for specific workplace requirements",
      features: ["Custom design", "Site-specific", "Engineered solution"],
      keywords: ["custom", "lifeline", "tailored", "specific", "engineered", "bespoke"],
      url: "/custom-life-line-system.html",
      image: "/assets/images/custom_life_line_system.png"
    },

    // Horizontal Lifeline Components (12 components)
    {
      id: 'anchor-attachment-plate',
      title: "Anchor Attachment Plate",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Universal attachment plate for various anchor point configurations in horizontal lifeline systems",
      features: ["Universal compatibility", "Multiple configurations", "Versatile design"],
      keywords: ["anchor", "attachment", "plate", "universal", "versatile", "configuration", "horizontal"],
      url: "/anchor-attachment-plate.html",
      image: "/assets/images/anchor_attachment_plate.png"
    },
    {
      id: 'end-anchor',
      title: "End Anchor",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Terminal anchor point for lifeline system ends and terminations",
      features: ["Terminal point", "End connection", "Secure termination"],
      keywords: ["end", "anchor", "terminal", "termination", "final", "point"],
      url: "/end-anchor.html",
      image: "/assets/images/end_anchor.png"
    },
    {
      id: 'shock-absorber-spring',
      title: "Shock Absorber (Spring)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Spring-loaded shock absorbing device to reduce fall arrest forces in lifeline systems",
      features: ["Spring mechanism", "Force reduction", "Energy absorption"],
      keywords: ["shock", "absorber", "spring", "force", "reduction", "energy"],
      url: "/shock-absorber-spring.html",
      image: "/assets/images/shock_absorber_spring.png"
    },
    {
      id: 'tensioner',
      title: "Tensioner",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Mechanical device for maintaining proper tension in lifeline systems",
      features: ["Adjustable tension", "Weather resistant", "Easy maintenance"],
      keywords: ["tensioner", "tension", "adjustment", "mechanical", "lifeline", "maintenance"],
      url: "/tensioner.html",
      image: "/assets/images/tensioner.png"
    },
    {
      id: 'intermediate-anchor',
      title: "Intermediate Anchor",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Mid-span anchor points for additional support in long lifeline runs",
      features: ["Mid-span support", "Additional anchor", "Long run support"],
      keywords: ["intermediate", "anchor", "mid", "span", "support", "additional"],
      url: "/intermediate-anchor.html",
      image: "/assets/images/intermediate_anchor.png"
    },
    {
      id: 'corner-unit',
      title: "Corner Unit",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Specialized corner connection unit for lifeline system direction changes",
      features: ["Corner installation", "Direction change", "Smooth operation"],
      keywords: ["corner", "unit", "direction", "change", "turn", "connection"],
      url: "/corner-unit.html",
      image: "/assets/images/corner_unit.png"
    },
    {
      id: 'wire-end-connector',
      title: "Wire End Connector",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Secure connection hardware for wire rope termination in lifeline systems",
      features: ["Secure connection", "Easy installation", "Corrosion resistant"],
      keywords: ["wire", "connector", "end", "termination", "hardware", "connection"],
      url: "/wire-end-connector.html",
      image: "/assets/images/wire_end_connector.png"
    },
    {
      id: 'eye-connector',
      title: "Eye Connector",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Loop-style connector for secure attachment points in lifeline systems",
      features: ["Loop design", "Secure attachment", "Easy connection"],
      keywords: ["eye", "connector", "loop", "attachment", "connection", "hardware"],
      url: "/eye-connector.html",
      image: "/assets/images/eye_connector.png"
    },
    {
      id: 'wire-rope',
      title: "Wire Rope",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "High-strength steel wire rope for lifeline system construction",
      features: ["High tensile strength", "Corrosion resistant", "Various diameters"],
      keywords: ["wire", "rope", "steel", "cable", "strength", "lifeline", "component"],
      url: "/wire-rope.html",
      image: "/assets/images/wire_rope.png"
    },
    {
      id: 'traveler-glider',
      title: "Traveler Glider",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Mobile connection device that travels along lifeline systems with the user",
      features: ["Mobile connection", "Smooth travel", "Automatic locking"],
      keywords: ["traveler", "glider", "mobile", "travel", "smooth", "automatic"],
      url: "/traveler-glider.html",
      image: "/assets/images/traveler_glider.png"
    },
    {
      id: 'carabiner-hook',
      title: "Carabiner Hook",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Quick-connect carabiner hooks for temporary and permanent lifeline connections",
      features: ["Quick connect", "Self-locking", "High strength"],
      keywords: ["carabiner", "hook", "quick", "connect", "locking", "attachment"],
      url: "/carabiner-hook.html",
      image: "/assets/images/carabiner_hook.png"
    },
    {
      id: 'fasteners-horizontal',
      title: "Fasteners",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Various fastening hardware for horizontal lifeline system installation and maintenance",
      features: ["Various types", "Installation hardware", "Maintenance parts"],
      keywords: ["fasteners", "hardware", "bolts", "screws", "installation", "maintenance", "horizontal"],
      url: "/fasteners.html",
      image: "/assets/images/fastner_hhs.jpg"
    },

    // Vertical Lifeline Components (10 components)
    {
      id: 'rope-suspension-clamp-bottom',
      title: "Rope Suspension Clamp (Bottom)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Bottom-mounted clamp for rope suspension system termination in vertical lifelines",
      features: ["Bottom mounting", "Termination point", "Secure hold"],
      keywords: ["rope", "suspension", "clamp", "bottom", "termination", "hold", "vertical"],
      url: "/rope-suspension-clamp-bottom.html",
      image: "/assets/images/rope_suspension_clamp_bottom.png"
    },
    {
      id: 'anchor-plate-bottom',
      title: "Anchor Plate (Bottom)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Bottom-mounted anchor plate for ground-level lifeline connections",
      features: ["Bottom mounting", "Ground level", "Secure connection"],
      keywords: ["anchor", "plate", "bottom", "ground", "mounting", "connection"],
      url: "/anchor-plate-bottom.html",
      image: "/assets/images/anchor_plate_bottom.png"
    },
    {
      id: 'shock-absorber-suspension',
      title: "Shock Absorber (Suspension)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Suspension-type shock absorber for controlled fall arrest deceleration in vertical systems",
      features: ["Suspension type", "Controlled deceleration", "Progressive absorption"],
      keywords: ["shock", "absorber", "suspension", "deceleration", "controlled", "progressive", "vertical"],
      url: "/shock-absorber-suspension.html",
      image: "/assets/images/shock_absorber_suspension.png"
    },
    {
      id: 'anchor-plate-top',
      title: "Anchor Plate (Top)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Top-mounted anchor plate for secure lifeline attachment points",
      features: ["Top mounting", "High load capacity", "Galvanized finish"],
      keywords: ["anchor", "plate", "top", "mounting", "attachment", "point"],
      url: "/anchor-plate-top.html",
      image: "/assets/images/anchor_plate_top.png"
    },
    {
      id: 'rope-suspension-clamp-top',
      title: "Rope Suspension Clamp (Top)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Top-mounted clamp for securing rope suspension systems in vertical lifelines",
      features: ["Top mounting", "Rope suspension", "Secure grip"],
      keywords: ["rope", "suspension", "clamp", "top", "mounting", "grip", "vertical"],
      url: "/rope-suspension-clamp-top.html",
      image: "/assets/images/rope_suspension_clamp_top.png"
    },
    {
      id: 'vertical-fall-arrester',
      title: "Vertical Fall Arrester",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Vertical climbing protection device for ladder and vertical access safety",
      features: ["Vertical climbing", "Ladder safety", "Climbing protection"],
      keywords: ["vertical", "fall", "arrester", "climbing", "ladder", "access"],
      url: "/vertical-fall-arrester.html",
      image: "/assets/images/vertical_fall_arrester.png"
    },
    {
      id: 'fasteners-vertical',
      title: "Fasteners (Vertical)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Specialized fastening hardware for vertical lifeline system installation",
      features: ["Vertical specific", "Installation hardware", "High strength"],
      keywords: ["fasteners", "hardware", "vertical", "installation", "maintenance"],
      url: "/fasteners.html",
      image: "/assets/images/fasteners_vertical.png"
    },

    // Overhead Lifeline Components (10 components)
    {
      id: 'tandem-speed-pulley',
      title: "Tandem Speed Pulley",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Dual pulley system for controlled descent and lifting operations in overhead systems",
      features: ["Dual pulley", "Controlled descent", "Lifting capability"],
      keywords: ["tandem", "speed", "pulley", "descent", "lifting", "controlled", "overhead"],
      url: "/tandem-speed-pulley.html",
      image: "/assets/images/tandem_speed_pulley.png"
    },
    {
      id: 'retractable-fall-arrester',
      title: "Retractable Fall Arrester",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Self-retracting lifeline device for continuous fall protection in overhead systems",
      features: ["Self-retracting", "Continuous protection", "Automatic locking"],
      keywords: ["retractable", "fall", "arrester", "self", "retracting", "automatic", "overhead"],
      url: "/retractable-fall-arrester.html",
      image: "/assets/images/retractable_fall_arrester.png"
    },
    {
      id: 'fasteners-overhead',
      title: "Fasteners (Overhead)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Specialized fastening hardware for overhead lifeline system installation",
      features: ["Overhead specific", "Installation hardware", "Ceiling mounting"],
      keywords: ["fasteners", "hardware", "overhead", "ceiling", "installation"],
      url: "/fasteners.html",
      image: "/assets/images/fasteners_overhead.png"
    },

    // Vertical Anchor Plate (additional component)
    {
      id: 'vertical-anchor-plate-bottom',
      title: "Vertical Anchor Plate (Bottom)",
      category: "lifeline",
      categoryName: "Life Line System",
      description: "Vertical mounting anchor plate for bottom connections in lifeline systems",
      features: ["Vertical mounting", "Bottom connection", "Strong attachment"],
      keywords: ["vertical", "anchor", "plate", "bottom", "mounting", "connection"],
      url: "/vertical-anchor-plate-bottom.html",
      image: "/assets/images/vertical_anchor_plate_bottom.png"
    },

    // Fall Arrest System Products (4 main products)
    {
      id: 'fall-arrest-system',
      title: "Fall Arrest System",
      category: "fall-arrest",
      categoryName: "Fall Arrest System", 
      description: "Complete fall arrest system for personal fall protection at height",
      features: ["Complete system", "Personal protection", "Height safety"],
      keywords: ["fall", "arrest", "system", "protection", "height", "safety", "harness"],
      url: "/fall-arrest-system.html",
      image: "/assets/images/fall_arrest_system.png"
    },
    {
      id: 'retractable-fall-arrester-block',
      title: "Retractable Fall Arrester Block",
      category: "fall-arrest",
      categoryName: "Fall Arrest System",
      description: "Self-retracting lifeline block device for continuous fall protection",
      features: ["Self-retracting", "Continuous protection", "Automatic locking"],
      keywords: ["retractable", "fall", "arrester", "block", "self", "retracting", "automatic"],
      url: "/retractable-fall-arrester.html",
      image: "/assets/images/retractable_fall_arrester.png"
    },
    {
      id: 'ascender-descender',
      title: "Ascender & Descender",
      category: "fall-arrest",
      categoryName: "Fall Arrest System",
      description: "Professional rope access equipment for controlled climbing and descent operations",
      features: ["Controlled ascent", "Safe descent", "Professional grade"],
      keywords: ["ascender", "descender", "rope", "access", "climbing", "descent", "professional"],
      url: "/fall-arrest-system.html#ascender-descender",
      image: "/assets/images/ascender_descender.png"
    },
    {
      id: 'spiderman-kits',
      title: "Spiderman Kits",
      category: "fall-arrest",
      categoryName: "Fall Arrest System",
      description: "Complete rope access and fall protection kits for professional rope technicians",
      features: ["Complete kit", "Professional grade", "Rope access"],
      keywords: ["spiderman", "kit", "rope", "access", "professional", "technician", "complete"],
      url: "/fall-arrest-system.html#spiderman-kits",
      image: "/assets/images/spiderman_kits.png"
    },

    // Rooftop Guardrail (1 product)
    {
      id: 'rooftop-guardrail',
      title: "Rooftop Guardrail",
      category: "guardrail",
      categoryName: "Rooftop Guardrail",
      description: "Complete guardrail system for rooftop edge protection and fall prevention",
      features: ["Edge protection", "Fall prevention", "OSHA compliant", "Easy installation"],
      keywords: ["rooftop", "guardrail", "edge", "protection", "fall", "prevention", "osha", "roof"],
      url: "/roof-top-guardrail.html",
      image: "/assets/images/roof_top_guardrail.png"
    },

    // Skylight Protection (1 product)
    {
      id: 'skylight-protection',
      title: "Skylight Protection Cover",
      category: "skylight",
      categoryName: "Skylight Protection Cover",
      description: "Protective covers and screens for skylight openings to prevent falls",
      features: ["Fall prevention", "Skylight coverage", "Weather resistant", "Easy installation"],
      keywords: ["skylight", "protection", "cover", "screen", "opening", "fall", "prevention"],
      url: "/skylight-protection-cover.html",
      image: "/assets/images/skylight_protection_cover.png"
    }
  ],
  // Search suggestions for autocomplete
  suggestions: [
    // PPE suggestions
    'Safety Helmet', 'Safety Gloves', 'Reflective Jacket', 'Face Shield', 'Safety Shoes',
    'Safety Mask', 'Eye Protection', 'Bump Cap', 'Hard Hat', 'Steel Toe Boots',
    'Eyewash Bottle', 'PPE Bag', 'Davit Arm', 'Painting Kit', 'Tripod',
    
    // Lifeline System suggestions
    'Lifeline System', 'Horizontal Lifeline', 'Vertical Lifeline', 'Overhead Lifeline',
    'Custom Lifeline', 'Wire Rope', 'Anchor Plate', 'End Anchor', 'Intermediate Anchor',
    'Corner Unit', 'Tensioner', 'Eye Connector', 'Wire End Connector',
    'Carabiner Hook', 'Traveler Glider', 'Rope Suspension Clamp', 'Fasteners',
    
    // Fall Arrest suggestions
    'Fall Arrest', 'Retractable Fall Arrester', 'Vertical Fall Arrester',
    'Shock Absorber', 'Ascender Descender', 'Spiderman Kit', 'Tandem Pulley',
    
    // General safety terms
    'Rooftop Guardrail', 'Skylight Protection', 'PPE', 'Personal Protective Equipment',
    'Anchor', 'Safety Equipment', 'Height Safety', 'Fall Protection',
    
    // Material and feature keywords
    'Chemical Resistant', 'Anti-fog', 'Steel Toe', 'N95', 'ANSI Compliant',
    'Corrosion Resistant', 'High Visibility', 'Self Retracting', 'Spring Loaded'
  ],

  // Search function
  search: function(query, options = {}) {
    if (!query || typeof query !== 'string') {
      return [];
    }

    const searchQuery = query.trim().toLowerCase();
    const { category = 'all', limit = 50, exactMatch = false } = options;

    let results = this.products.filter(product => {
      // Category filter
      if (category !== 'all' && product.category !== category) {
        return false;
      }

      // Search matching
      const searchTerms = searchQuery.split(' ').filter(term => term.length > 0);
      
      if (exactMatch) {
        return searchTerms.every(term => 
          product.title.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
        );
      } else {
        return searchTerms.some(term => 
          product.title.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.categoryName.toLowerCase().includes(term) ||
          product.keywords.some(keyword => keyword.toLowerCase().includes(term)) ||
          product.features.some(feature => feature.toLowerCase().includes(term))
        );
      }
    });

    // Sort results by relevance
    results.sort((a, b) => {
      const aScore = this.calculateRelevanceScore(a, searchQuery);
      const bScore = this.calculateRelevanceScore(b, searchQuery);
      return bScore - aScore;
    });

    return results.slice(0, limit);
  },

  // Calculate relevance score for sorting
  calculateRelevanceScore: function(product, query) {
    let score = 0;
    const searchTerms = query.toLowerCase().split(' ');

    searchTerms.forEach(term => {
      // Title matches (highest weight)
      if (product.title.toLowerCase().includes(term)) {
        score += 10;
        if (product.title.toLowerCase().startsWith(term)) {
          score += 5; // Bonus for starts with
        }
      }

      // Category matches
      if (product.categoryName.toLowerCase().includes(term)) {
        score += 8;
      }

      // Description matches
      if (product.description.toLowerCase().includes(term)) {
        score += 5;
      }

      // Keyword matches
      product.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(term)) {
          score += 3;
        }
      });

      // Feature matches
      product.features.forEach(feature => {
        if (feature.toLowerCase().includes(term)) {
          score += 2;
        }
      });
    });

    return score;
  },

  // Get search suggestions based on input
  getSuggestions: function(query, limit = 8) {
    if (!query || query.length < 1) {
      return this.suggestions.slice(0, limit);
    }

    const searchQuery = query.toLowerCase();
    const filtered = this.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(searchQuery)
    );

    return filtered.slice(0, limit);
  },

  // Get products by category
  getByCategory: function(category) {
    if (category === 'all') {
      return this.products;
    }
    return this.products.filter(product => product.category === category);
  }
};

// Initialize search functionality when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize header search if elements exist
    const searchInput = document.getElementById('headerSearchInput');
    const searchForm = document.getElementById('headerSearchForm');
    
    if (searchInput && searchForm) {
      initializeHeaderSearch(searchInput, searchForm);
    }
  });
}

function initializeHeaderSearch(searchInput, searchForm) {
  // Create suggestions dropdown
  const suggestionsContainer = createSuggestionsDropdown();
  searchForm.appendChild(suggestionsContainer);

  // Event listeners
  searchInput.addEventListener('input', handleSearchInput);
  searchInput.addEventListener('focus', handleSearchFocus);
  searchInput.addEventListener('blur', handleSearchBlur);
  searchInput.addEventListener('keydown', handleSearchKeydown);

  function handleSearchInput(e) {
    const query = e.target.value.trim();
    if (query.length > 0) {
      const suggestions = HSSPL_SEARCH.getSuggestions(query);
      displaySuggestions(suggestions, query);
    } else {
      hideSuggestions();
    }
  }

  function handleSearchFocus(e) {
    const query = e.target.value.trim();
    if (query.length > 0) {
      const suggestions = HSSPL_SEARCH.getSuggestions(query);
      displaySuggestions(suggestions, query);
    }
  }

  function handleSearchBlur() {
    // Delay hiding to allow clicking on suggestions
    setTimeout(() => {
      hideSuggestions();
    }, 200);
  }

  function handleSearchKeydown(e) {
    const suggestions = suggestionsContainer.querySelectorAll('.search-suggestion');
    const activeSuggestion = suggestionsContainer.querySelector('.search-suggestion.active');
    
    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault();
        navigateSuggestions(suggestions, activeSuggestion, 'down');
        break;
      case 'ArrowUp':
        e.preventDefault();
        navigateSuggestions(suggestions, activeSuggestion, 'up');
        break;
      case 'Enter':
        if (activeSuggestion) {
          e.preventDefault();
          selectSuggestion(activeSuggestion.textContent);
        }
        break;
      case 'Escape':
        hideSuggestions();
        searchInput.blur();
        break;
    }
  }

  function createSuggestionsDropdown() {
    const container = document.createElement('div');
    container.className = 'search-suggestions-dropdown';
    container.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ddd;
      border-top: none;
      border-radius: 0 0 8px 8px;
      max-height: 300px;
      overflow-y: auto;
      z-index: 1000;
      display: none;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    `;
    return container;
  }

  function displaySuggestions(suggestions, query) {
    if (suggestions.length === 0) {
      hideSuggestions();
      return;
    }

    suggestionsContainer.innerHTML = suggestions.map(suggestion => `
      <div class="search-suggestion" style="
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 1px solid #f0f0f0;
        transition: background-color 0.2s;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
      " onclick="selectSuggestion('${suggestion}')">
        <i class="fas fa-search text-muted me-2" style="font-size: 0.8rem;"></i>
        <span>${highlightMatch(suggestion, query)}</span>
      </div>
    `).join('');

    // Add hover effects
    suggestionsContainer.querySelectorAll('.search-suggestion').forEach(item => {
      item.addEventListener('mouseenter', function() {
        // Remove active class from all items
        suggestionsContainer.querySelectorAll('.search-suggestion').forEach(s => s.classList.remove('active'));
        // Add active class to hovered item
        this.classList.add('active');
        this.style.backgroundColor = '#f8f9fa';
      });
      item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
      });
    });

    suggestionsContainer.style.display = 'block';
  }

  function hideSuggestions() {
    suggestionsContainer.style.display = 'none';
  }

  function navigateSuggestions(suggestions, activeSuggestion, direction) {
    // Remove active class from all
    suggestions.forEach(s => {
      s.classList.remove('active');
      s.style.backgroundColor = '';
    });

    let newActive;
    if (direction === 'down') {
      if (activeSuggestion && activeSuggestion.nextElementSibling) {
        newActive = activeSuggestion.nextElementSibling;
      } else {
        newActive = suggestions[0];
      }
    } else {
      if (activeSuggestion && activeSuggestion.previousElementSibling) {
        newActive = activeSuggestion.previousElementSibling;
      } else {
        newActive = suggestions[suggestions.length - 1];
      }
    }

    if (newActive) {
      newActive.classList.add('active');
      newActive.style.backgroundColor = '#f8f9fa';
    }
  }

  function selectSuggestion(suggestion) {
    searchInput.value = suggestion;
    hideSuggestions();
    searchForm.submit();
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  // Make selectSuggestion globally available for onclick
  window.selectSuggestion = selectSuggestion;
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.HSSPL_SEARCH = HSSPL_SEARCH;
}
