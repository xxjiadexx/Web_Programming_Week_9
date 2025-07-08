// Navigation functionality for Advanced Web Security & Performance Study App
class NavigationManager {
    constructor() {
        this.currentTab = 'quiz';
        this.initializeNavigation();
    }
    
    initializeNavigation() {
        // Get navigation elements
        this.navTabs = document.querySelectorAll('.nav-tab');
        this.sections = document.querySelectorAll('.section');
        
        // Add click listeners to navigation tabs
        this.navTabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                const tabName = event.target.getAttribute('data-tab');
                this.switchTab(tabName);
            });
        });
        
        // Initialize with quiz tab active
        this.switchTab('quiz');
        
        // Add keyboard shortcuts for tab switching
        document.addEventListener('keydown', (event) => {
            // Ctrl/Cmd + 1 for Quiz, Ctrl/Cmd + 2 for Flashcards
            if ((event.ctrlKey || event.metaKey)) {
                switch(event.key) {
                    case '1':
                        event.preventDefault();
                        this.switchTab('quiz');
                        break;
                    case '2':
                        event.preventDefault();
                        this.switchTab('flashcards');
                        break;
                }
            }
        });
    }
    
    switchTab(tabName) {
        if (this.currentTab === tabName) return;
        
        // Update navigation tabs
        this.navTabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Update sections
        this.sections.forEach(section => {
            if (section.id === `${tabName}-section`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        
        // Update current tab
        this.currentTab = tabName;
        
        // Refresh flashcard manager if switching to flashcards
        if (tabName === 'flashcards' && window.flashcardManager) {
            window.flashcardManager.refresh();
        }
        
        // Add transition effect
        const activeSection = document.querySelector(`#${tabName}-section`);
        if (activeSection) {
            activeSection.style.opacity = '0';
            activeSection.style.transform = 'translateY(20px)';
            
            // Trigger animation
            setTimeout(() => {
                activeSection.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                activeSection.style.opacity = '1';
                activeSection.style.transform = 'translateY(0)';
            }, 50);
        }
    }
    
    getCurrentTab() {
        return this.currentTab;
    }
}

// Initialize navigation when DOM is loaded
let navigationManager;

document.addEventListener('DOMContentLoaded', () => {
    navigationManager = new NavigationManager();
    
    // Make flashcard manager available globally for navigation
    window.flashcardManager = flashcardManager;
});

// Add some visual enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add hover effects to cards and buttons
    const addHoverEffect = (selector, hoverClass) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add(hoverClass);
            });
            element.addEventListener('mouseleave', () => {
                element.classList.remove(hoverClass);
            });
        });
    };
    
    // Add ripple effect to buttons
    const addRippleEffect = (selector) => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    };
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .hover-glow {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.6) !important;
        }
        
        .hover-lift {
            transform: translateY(-5px) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Apply effects
    addRippleEffect('.btn');
    addHoverEffect('.nav-tab', 'hover-glow');
    addHoverEffect('.flashcard', 'hover-lift');
});

// Keyboard shortcuts help
document.addEventListener('keydown', (event) => {
    // Show help with F1 or ?
    if (event.key === 'F1' || (event.shiftKey && event.key === '?')) {
        event.preventDefault();
        showKeyboardHelp();
    }
});

function showKeyboardHelp() {
    const helpContent = `
    <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 500px;
        z-index: 1000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    ">
        <h3 style="margin-bottom: 20px; color: #ffeb3b;">⌨️ Keyboard Shortcuts</h3>
        <div style="margin-bottom: 15px;">
            <strong>Navigation:</strong><br>
            Ctrl+1 / Cmd+1 - Switch to Quiz<br>
            Ctrl+2 / Cmd+2 - Switch to Flashcards
        </div>
        <div style="margin-bottom: 15px;">
            <strong>Quiz Mode:</strong><br>
            1-4 - Select answer option<br>
            Enter/Space - Next question<br>
            R - Restart quiz
        </div>
        <div style="margin-bottom: 15px;">
            <strong>Flashcard Mode:</strong><br>
            ← → - Navigate cards<br>
            Space/Enter - Flip card<br>
            S - Shuffle cards<br>
            I - Toggle important only<br>
            R - Reset cards
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: linear-gradient(45deg, #ff6b6b, #ffa500);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                cursor: pointer;
            ">Close</button>
        </div>
    </div>
    <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    " onclick="this.nextElementSibling.remove(); this.remove();"></div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', helpContent);
}
