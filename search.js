// 1. Define your products here (add more as needed)
const products = [
    // PPE Category (ppe.html)
    {
        name: "PPE (Personal Protective Equipment)",
        description: "Essential gear designed to protect workers from workplace hazards, ensuring safety and compliance in every environment.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Safety Helmets & Hard Hats",
        description: "Protects the head from impact, falling objects, and electrical hazards.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Protective Eyewear & Face Shields",
        description: "Shields eyes and face from flying debris, chemicals, and splashes.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Hearing Protection",
        description: "Reduces exposure to loud noises with earplugs and earmuffs.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Respiratory Protection",
        description: "Masks and respirators for protection against dust, fumes, and gases.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Hand Gloves",
        description: "Cut, chemical, and heat-resistant gloves for hand safety.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Protective Clothing & Coveralls",
        description: "Full-body protection against chemicals, heat, and contaminants.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Safety Shoes & Footwear",
        description: "Protects feet from impact, punctures, and slips.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    {
        name: "Fall Protection Equipment",
        description: "Harnesses, lanyards, and lifelines for working at heights.",
        image: "images/ppe.jpg",
        link: "ppe.html"
    },
    // Inline Safety Equipment Category (inline-safety-equipment.html)
    {
        name: "Inline Safety Equipment",
        description: "Comprehensive selection of inline safety equipment to address emergencies and maintain a safe workplace.",
        image: "images/in_line.jpg",
        link: "inline-safety-equipment.html"
    },
    {
        name: "Attachment Plate",
        description: "Provides a secure mounting point for safety systems and equipment.",
        image: "images/attachment_plate.jpg",
        link: "inline-safety-equipment.html"
    },
    {
        name: "Clevis Connector",
        description: "Connects components in safety lines, allowing flexible and strong joints.",
        image: "images/clevis_connector.jpg",
        link: "inline-safety-equipment.html"
    },
    {
        name: "Crimping Body and Connector",
        description: "Ensures secure cable terminations for reliable inline safety systems.",
        image: "images/crimping_body_connector.jpg",
        link: "inline-safety-equipment.html"
    },
    {
        name: "End Anchor",
        description: "Acts as a fixed point for securing safety lines and equipment ends.",
        image: "images/end_anchor.jpg",
        link: "inline-safety-equipment.html"
    },
    {
        name: "Shock Absorber Spring",
        description: "Reduces impact forces in the event of a fall, enhancing user safety.",
        image: "images/shock_absorber_spring.jpg",
        link: "inline-safety-equipment.html"
    },
    {
        name: "Tensioner Assembly",
        description: "Maintains proper cable tension for effective inline safety operation.",
        image: "images/tensioner_assembly.jpg",
        link: "inline-safety-equipment.html"
    },
    {
        name: "Tensioner Body",
        description: "Core component of the tensioning system for safety cables.",
        image: "images/tensioner_body.jpg",
        link: "inline-safety-equipment.html"
    }
    // ...add more products if needed...
];

// 2. Handle search form submission
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('site-search-form');
    const searchInput = document.getElementById('site-search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchForm || !searchInput || !searchResults) return;

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            searchResults.style.display = "none";
            searchResults.innerHTML = "";
            return;
        }
        // 3. Search for matching products
        const matches = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            (p.description && p.description.toLowerCase().includes(query))
        );
        // 4. Display results
        if (matches.length > 0) {
            searchResults.innerHTML = matches.map(p => `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${p.image}" class="img-fluid rounded-start" alt="${p.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"><a href="${p.link}" style="text-decoration:none;">${p.name}</a></h5>
                                <p class="card-text">${p.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            searchResults.innerHTML = `<div class="alert alert-warning">Product not found.</div>`;
        }
        searchResults.style.display = "block";
    });

    // Optional: Hide results when input is cleared
    searchInput.addEventListener('input', function() {
        if (!this.value.trim()) {
            searchResults.style.display = "none";
            searchResults.innerHTML = "";
        }
    });
});
