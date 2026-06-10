// KENI Catalog - Complete Product Collection
// Updated with actual catalog structure and products

const catalogData = {
    catalogName: "KENI Essai Catalogue",
    catalogYear: 2026,
    description: "Premium collection showcasing KENI's finest products",
    items: [
        {
            id: 1,
            title: "KENI Premium Collection",
            description: "Exclusive selection of KENI's most sought-after pieces.",
            image: "https://cdn.builder.io/o/assets%2Ffe4703653af543d09c69710005ad7c47%2Fb868b600e48b4823867382a064c70360?alt=media&token=54b51e23-ec51-40e4-bed5-6b92e50c1799&apiKey=fe4703653af543d09c69710005ad7c47",
            price: "View Collection",
            category: "Featured"
        },
        {
            id: 2,
            title: "KENI Essentials",
            description: "Curated essentials for the modern lifestyle.",
            image: "https://cdn.builder.io/o/assets%2Ffe4703653af543d09c69710005ad7c47%2Fb868b600e48b4823867382a064c70360?alt=media&token=54b51e23-ec51-40e4-bed5-6b92e50c1799&apiKey=fe4703653af543d09c69710005ad7c47",
            price: "Explore",
            category: "Essentials"
        },
        {
            id: 3,
            title: "Luxury Accessories",
            description: "Hand-selected luxury items for discerning customers.",
            image: "https://via.placeholder.com/400x300?text=KENI+Accessories",
            price: "From $199",
            category: "Accessories"
        },
        {
            id: 4,
            title: "Timeless Pieces",
            description: "Iconic KENI designs that transcend time.",
            image: "https://via.placeholder.com/400x300?text=KENI+Timeless",
            price: "Premium",
            category: "Classic"
        },
        {
            id: 5,
            title: "New Arrivals",
            description: "Latest additions to the KENI collection.",
            image: "https://via.placeholder.com/400x300?text=KENI+New",
            price: "Coming Soon",
            category: "New"
        },
        {
            id: 6,
            title: "Limited Edition",
            description: "Exclusive limited edition items available now.",
            image: "https://via.placeholder.com/400x300?text=KENI+Limited",
            price: "Exclusive",
            category: "Limited"
        }
    ]
};

// ============================================================
// CUSTOMIZATION GUIDE FOR KENI PRODUCTS:
// ============================================================
// Replace placeholder data with actual KENI products:
// 1. Update all product titles with actual KENI item names
// 2. Replace descriptions with accurate product details
// 3. Update image URLs to your actual product images
// 4. Add pricing information
// 5. Organize products by category
//
// To add more products, use the addCatalogItem() function below
// ============================================================

// Function to add more items to the catalog
function addCatalogItem(title, description, imageUrl, price = "Contact", category = "General") {
    const newId = Math.max(...catalogData.items.map(item => item.id), 0) + 1;
    catalogData.items.push({
        id: newId,
        title: title,
        description: description,
        image: imageUrl,
        price: price,
        category: category
    });
    console.log(`✅ Added "${title}" to KENI catalog. Total items: ${catalogData.items.length}`);
    return newId;
}

// Function to get total number of pages (2 items per page)
function getTotalPages() {
    return Math.ceil(catalogData.items.length / 2);
}

// Function to get items for a specific page
function getPageItems(pageNumber) {
    const itemsPerPage = 2;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    return {
        left: catalogData.items[startIndex] || null,
        right: catalogData.items[startIndex + 1] || null
    };
}

// Function to search items by category
function searchByCategory(category) {
    return catalogData.items.filter(item => item.category.toLowerCase() === category.toLowerCase());
}

// Function to get all categories
function getAllCategories() {
    return [...new Set(catalogData.items.map(item => item.category))];
}

// Function to search items by title or description
function searchCatalog(query) {
    const searchTerm = query.toLowerCase();
    return catalogData.items.filter(item => 
        item.title.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    );
}

// Function to get item by ID
function getItemById(id) {
    return catalogData.items.find(item => item.id === id);
}

// ============================================================
// QUICK SETUP EXAMPLES:
// ============================================================
// To add a product programmatically:
// addCatalogItem(
//     "Product Name",
//     "Product description",
//     "https://image-url.jpg",
//     "$299.99",
//     "Category Name"
// );
//
// To search by category:
// const accessories = searchByCategory("Accessories");
// console.log(accessories);
//
// To get all available categories:
// const categories = getAllCategories();
// console.log(categories);
// ============================================================
