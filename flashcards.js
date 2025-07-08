// Flashcards functionality for Advanced Web Security & Performance
class FlashcardManager {
    constructor() {
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.originalQuestions = [...quizQuestions];
        this.currentQuestions = [...quizQuestions];
        this.showImportantOnly = false;
        
        this.initializeElements();
        this.setupEventListeners();
        this.loadCard();
    }
    
    initializeElements() {
        // Get DOM elements
        this.cardNumber = document.getElementById('card-number');
        this.totalCards = document.getElementById('total-cards');
        this.flashcard = document.getElementById('flashcard');
        this.flashcardQuestion = document.getElementById('flashcard-question');
        this.flashcardAnswer = document.getElementById('flashcard-answer');
        this.cardImportanceBadge = document.getElementById('card-importance-badge');
        
        // Control buttons
        this.prevCardBtn = document.getElementById('prev-card');
        this.nextCardBtn = document.getElementById('next-card');
        this.flipCardBtn = document.getElementById('flip-card');
        this.shuffleCardsBtn = document.getElementById('shuffle-cards');
        this.importantOnlyBtn = document.getElementById('important-only');
        this.resetCardsBtn = document.getElementById('reset-cards');
    }
    
    setupEventListeners() {
        // Navigation buttons
        this.prevCardBtn.addEventListener('click', () => this.previousCard());
        this.nextCardBtn.addEventListener('click', () => this.nextCard());
        this.flipCardBtn.addEventListener('click', () => this.flipCard());
        
        // Card click to flip
        this.flashcard.addEventListener('click', () => this.flipCard());
        
        // Option buttons
        this.shuffleCardsBtn.addEventListener('click', () => this.shuffleCards());
        this.importantOnlyBtn.addEventListener('click', () => this.toggleImportantOnly());
        this.resetCardsBtn.addEventListener('click', () => this.resetCards());
        
        // Keyboard navigation
        document.addEventListener('keydown', (event) => {
            // Only handle keyboard events when flashcards section is active
            const flashcardsSection = document.getElementById('flashcards-section');
            if (!flashcardsSection.classList.contains('active')) return;
            
            switch(event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    this.previousCard();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    this.nextCard();
                    break;
                case ' ':
                case 'Enter':
                    event.preventDefault();
                    this.flipCard();
                    break;
                case 's':
                case 'S':
                    event.preventDefault();
                    this.shuffleCards();
                    break;
                case 'i':
                case 'I':
                    event.preventDefault();
                    this.toggleImportantOnly();
                    break;
                case 'r':
                case 'R':
                    event.preventDefault();
                    this.resetCards();
                    break;
            }
        });
    }
    
    loadCard() {
        if (this.currentQuestions.length === 0) {
            this.flashcardQuestion.textContent = "No cards available. Try resetting or changing filters.";
            this.flashcardAnswer.textContent = "Click 'Reset' to reload all cards.";
            return;
        }
        
        const question = this.currentQuestions[this.currentCardIndex];
        
        // Update card counter
        this.cardNumber.textContent = this.currentCardIndex + 1;
        this.totalCards.textContent = this.currentQuestions.length;
        
        // Show/hide importance badge
        if (question.importance === 'high') {
            this.cardImportanceBadge.style.display = 'block';
        } else {
            this.cardImportanceBadge.style.display = 'none';
        }
        
        // Set question text
        this.flashcardQuestion.textContent = question.question;
        
        // Set answer text (correct option + explanation)
        const correctAnswer = question.options[question.correct];
        this.flashcardAnswer.innerHTML = `
            <strong>Correct Answer:</strong><br>
            ${correctAnswer}<br><br>
            <strong>Explanation:</strong><br>
            ${question.explanation}
        `;
        
        // Reset flip state
        this.isFlipped = false;
        this.flashcard.classList.remove('flipped');
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }
    
    updateNavigationButtons() {
        this.prevCardBtn.disabled = this.currentCardIndex === 0;
        this.nextCardBtn.disabled = this.currentCardIndex === this.currentQuestions.length - 1;
    }
    
    flipCard() {
        this.isFlipped = !this.isFlipped;
        if (this.isFlipped) {
            this.flashcard.classList.add('flipped');
        } else {
            this.flashcard.classList.remove('flipped');
        }
    }
    
    nextCard() {
        if (this.currentCardIndex < this.currentQuestions.length - 1) {
            this.currentCardIndex++;
            this.loadCard();
        }
    }
    
    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.loadCard();
        }
    }
    
    shuffleCards() {
        // Fisher-Yates shuffle algorithm
        for (let i = this.currentQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentQuestions[i], this.currentQuestions[j]] = [this.currentQuestions[j], this.currentQuestions[i]];
        }
        
        this.currentCardIndex = 0;
        this.loadCard();
        
        // Visual feedback
        this.shuffleCardsBtn.textContent = '✅ Shuffled!';
        setTimeout(() => {
            this.shuffleCardsBtn.textContent = '🔀 Shuffle Cards';
        }, 1500);
    }
    
    toggleImportantOnly() {
        this.showImportantOnly = !this.showImportantOnly;
        
        if (this.showImportantOnly) {
            this.currentQuestions = this.originalQuestions.filter(q => q.importance === 'high');
            this.importantOnlyBtn.textContent = '📚 Show All';
            this.importantOnlyBtn.style.background = 'linear-gradient(45deg, #ff4757, #ff3838)';
        } else {
            this.currentQuestions = [...this.originalQuestions];
            this.importantOnlyBtn.textContent = '🔥 Critical Only';
            this.importantOnlyBtn.style.background = '';
        }
        
        // Reset to first card
        this.currentCardIndex = 0;
        this.loadCard();
    }
    
    resetCards() {
        this.currentQuestions = [...this.originalQuestions];
        this.currentCardIndex = 0;
        this.showImportantOnly = false;
        this.importantOnlyBtn.textContent = '🔥 Critical Only';
        this.importantOnlyBtn.style.background = '';
        this.loadCard();
        
        // Visual feedback
        this.resetCardsBtn.textContent = '✅ Reset!';
        setTimeout(() => {
            this.resetCardsBtn.textContent = '🔄 Reset';
        }, 1500);
    }
    
    // Method to update cards when switching to flashcard mode
    refresh() {
        this.loadCard();
    }
}

// Initialize flashcard manager when DOM is loaded
let flashcardManager;

document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure quiz questions are loaded
    setTimeout(() => {
        flashcardManager = new FlashcardManager();
    }, 100);
});
