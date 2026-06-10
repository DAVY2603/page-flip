// St Page Flip Integration - Catalogue KENI

// Sample catalog data - Replace with your own product images
const catalogData = [
    {
        title: "Produit 1",
        description: "Description du produit 1 - Qualité premium",
        image: "https://via.placeholder.com/400x500?text=Produit+1"
    },
    {
        title: "Produit 2",
        description: "Description du produit 2 - Design innovant",
        image: "https://via.placeholder.com/400x500?text=Produit+2"
    },
    {
        title: "Produit 3",
        description: "Description du produit 3 - Exclusivité KENI",
        image: "https://via.placeholder.com/400x500?text=Produit+3"
    },
    {
        title: "Produit 4",
        description: "Description du produit 4 - Collection limitée",
        image: "https://via.placeholder.com/400x500?text=Produit+4"
    },
    {
        title: "Produit 5",
        description: "Description du produit 5 - Made with passion",
        image: "https://via.placeholder.com/400x500?text=Produit+5"
    }
];

let pageFlip = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page chargée - Initialisation');
    initializePageFlip();
    setupEventListeners();
});

function initializePageFlip() {
    const bookElement = document.getElementById('book');
    
    // Create pages for the catalog
    createPages(bookElement);
    
    // Initialize PageFlip
    pageFlip = new PageFlip(bookElement, {
        width: 500,
        height: 400,
        size: "stretch",
        maxShadowOpacity: 0.5,
        showCover: true,
        flippingTime: 1000,
        useMouseEvents: true,
        usePortrait: true,
        autoSize: true
    });
    
    // Load the book
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    
    // Update page counter on flip
    pageFlip.on('flip', function(object) {
        updatePageCounter();
    });
    
    updatePageCounter();
    console.log('St Page Flip initialisé avec succès');
}

function createPages(container) {
    // Create cover page
    const coverPage = document.createElement('div');
    coverPage.className = 'page page-cover';
    coverPage.innerHTML = `
        <div class="page-content">
            <h2 style="font-size: 2.5rem; color: white; margin-bottom: 20px;">KENI</h2>
            <p style="font-size: 1.3rem; color: rgba(255,255,255,0.9); margin-bottom: 40px;">Catalogue Interactif</p>
            <p style="color: rgba(255,255,255,0.7); font-style: italic;">Découvrez nos collections exclusives</p>
        </div>
    `;
    container.appendChild(coverPage);
    
    // Create product pages
    catalogData.forEach((product, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.innerHTML = `
            <div class="page-content">
                <h3 style="color: #e94560; margin-bottom: 15px; font-size: 1.3rem;">${product.title}</h3>
                <img src="${product.image}" alt="${product.title}" class="page-image">
                <p class="page-text">${product.description}</p>
            </div>
            <span class="page-number ${index % 2 === 0 ? 'left-page-number' : 'right-page-number'}">${index + 2}</span>
        `;
        container.appendChild(page);
    });
    
    // Create back cover
    const backCover = document.createElement('div');
    backCover.className = 'page page-back-cover';
    backCover.innerHTML = `
        <div class="page-content">
            <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin-bottom: 30px;">Merci de votre visite</p>
            <p style="color: rgba(255,255,255,0.8); margin-bottom: 20px;">Visitez notre site web pour plus d'informations</p>
            <p style="color: white; font-weight: bold;">https://www.keni-sa.com</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-top: 40px;">&copy; 2026 KENI</p>
        </div>
    `;
    container.appendChild(backCover);
}

function setupEventListeners() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const jumpBtn = document.getElementById('jumpBtn');
    const pageInput = document.getElementById('pageInput');
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        if (pageFlip && pageFlip.getCurrentPageIndex() > 0) {
            pageFlip.turnToPrevPage();
        }
    });
    
    // Next button
    nextBtn.addEventListener('click', function() {
        if (pageFlip && pageFlip.getCurrentPageIndex() < pageFlip.getPageCount() - 1) {
            pageFlip.turnToNextPage();
        }
    });
    
    // Jump to page
    jumpBtn.addEventListener('click', function() {
        const pageNum = parseInt(pageInput.value);
        if (pageFlip && pageNum > 0 && pageNum <= pageFlip.getPageCount()) {
            pageFlip.turnToPage(pageNum - 1);
            pageInput.value = '';
        } else {
            alert('Veuillez entrer un numéro de page valide');
        }
    });
    
    // Enter key on page input
    pageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            jumpBtn.click();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
}

function updatePageCounter() {
    if (pageFlip) {
        const currentPage = pageFlip.getCurrentPageIndex() + 1;
        const totalPages = pageFlip.getPageCount();
        
        document.getElementById('currentPage').textContent = currentPage;
        document.getElementById('totalPages').textContent = totalPages;
        
        // Update button disabled states
        document.getElementById('prevBtn').disabled = pageFlip.getCurrentPageIndex() === 0;
        document.getElementById('nextBtn').disabled = pageFlip.getCurrentPageIndex() === pageFlip.getPageCount() - 1;
    }
}

window.addEventListener('load', function() {
    console.log('Toutes les ressources sont chargées');
});
