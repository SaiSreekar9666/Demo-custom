document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const burgerBtn = document.querySelector('.burger-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    const themeToggle = document.querySelector('.theme-toggle');
    const productImageContainer = document.querySelector('.product-image-container');
    
    // Sample JSON data image (in a real app, this would be from an API)
    const productImageData = {
        name: "JSON Pro Vision",
        version: "2.5",
        features: [
            "Real-time parsing",
            "Visual editor",
            "Multi-format export",
            "Collaboration tools",
            "API integration"
        ],
        rating: 4.8,
        price: 179.99
    };
    
    
    // Create and insert the product image
    function createProductImage() {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'json-visualization';
        
        // Create a visual representation of JSON data
        imageWrapper.innerHTML = `
            <div class="json-container">
                <div class="json-header">
                    <div class="json-circle red"></div>
                    <div class="json-circle yellow"></div>
                    <div class="json-circle green"></div>
                    <span class="json-title">${productImageData.name} v${productImageData.version}</span>
                </div>
                <div class="json-content">
                    <div class="json-object">
                        <span class="json-brace">{</span>
                        <div class="json-property">
                            <span class="json-key">"name"</span>: 
                            <span class="json-string">"${productImageData.name}"</span>,
                        </div>
                        <div class="json-property">
                            <span class="json-key">"version"</span>: 
                            <span class="json-number">${productImageData.version}</span>,
                        </div>
                        <div class="json-property">
                            <span class="json-key">"features"</span>: 
                            <span class="json-bracket">[</span>
                            <div class="json-array">
                                ${productImageData.features.map(feat => 
                                    `<div class="json-item">
                                        <span class="json-string">"${feat}"</span>,
                                    </div>`
                                ).join('')}
                            </div>
                            <span class="json-bracket">]</span>,
                        </div>
                        <div class="json-property">
                            <span class="json-key">"rating"</span>: 
                            <span class="json-number">${productImageData.rating}</span>,
                        </div>
                        <div class="json-property">
                            <span class="json-key">"price"</span>: 
                            <span class="json-number">${productImageData.price}</span>
                        </div>
                        <span class="json-brace">}</span>
                    </div>
                </div>
            </div>
        `;
        
        productImageContainer.appendChild(imageWrapper);
        
        // Add styles for the JSON visualization
        const style = document.createElement('style');
        style.textContent = `
            .json-visualization {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2rem;
            }
            
            .json-container {
                width: 100%;
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                font-family: 'Courier New', monospace;
                font-size: 14px;
                line-height: 1.5;
                color: #333;
            }
            
            .json-header {
                background-color: #f5f5f5;
                padding: 8px 15px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e0e0e0;
            }
            
            .json-circle {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                margin-right: 8px;
            }
            
            .json-circle.red {
                background-color: #ff5f56;
            }
            
            .json-circle.yellow {
                background-color: #ffbd2e;
            }
            
            .json-circle.green {
                background-color: #27c93f;
            }
            
            .json-title {
                margin-left: 10px;
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                font-size: 12px;
                color: #666;
            }
            
            .json-content {
                padding: 15px;
                background-color: white;
            }
            
            .json-object {
                padding-left: 20px;
            }
            
            .json-property {
                padding-left: 20px;
                margin: 5px 0;
            }
            
            .json-array {
                padding-left: 20px;
            }
            
            .json-item {
                padding-left: 20px;
                margin: 3px 0;
            }
            
            .json-key {
                color: #d63384;
            }
            
            .json-string {
                color: #20a8d8;
            }
            
            .json-number {
                color: #4dbd74;
            }
            
            .json-brace, .json-bracket {
                color: #333;
                font-weight: bold;
            }
            
            .dark-mode .json-container {
                background-color: #1e1e1e;
                color: #d4d4d4;
            }
            
            .dark-mode .json-header {
                background-color: #2d2d2d;
                border-bottom-color: #252525;
            }
            
            .dark-mode .json-title {
                color: #858585;
            }
            
            .dark-mode .json-content {
                background-color: #1e1e1e;
            }
            
            .dark-mode .json-key {
                color: #9cdcfe;
            }
            
            .dark-mode .json-string {
                color: #ce9178;
            }
            
            .dark-mode .json-number {
                color: #b5cea8;
            }
            
            .dark-mode .json-brace, 
            .dark-mode .json-bracket {
                color: #d4d4d4;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }
    
    // Close sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        burgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        themeToggle.innerHTML = isDarkMode 
            ? '<i class="fas fa-sun"></i> Light Mode' 
            : '<i class="fas fa-moon"></i> Dark Mode';
    }
    
    // Event listeners
    burgerBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    themeToggle.addEventListener('click', toggleDarkMode);
    
    // Close sidebar when clicking on nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        toggleDarkMode();
    }
    
    // Create the product image visualization
    createProductImage();
    
    // Add hover effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });
    
    // Add animation to product details on scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-details > *').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // Add delay to each child element
    document.querySelectorAll('.product-details > *').forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.1}s`;
    });
});