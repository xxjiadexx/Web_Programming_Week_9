// Quiz Questions Database - Advanced Web Security & Performance
const quizQuestions = [
    {
        question: "What does OWASP stand for and what is its primary purpose?",
        options: [
            "Online Web Application Security Platform - A commercial security service",
            "Open Web Application Security Project - A non-profit improving software security",
            "Organized Web Authentication Security Protocol - A security standard",
            "Official Web Application Security Policy - A government initiative"
        ],
        correct: 1,
        explanation: "OWASP stands for the Open Web Application Security Project. It's a non-profit organization dedicated to improving the security of software applications and the World Wide Web, providing free and open resources, tools, and guidelines.",
        importance: "high"
    },
    {
        question: "Which HTTP header is the most basic form of identifying a web framework during black-box testing?",
        options: [
            "Server",
            "X-Powered-By",
            "Content-Type",
            "User-Agent"
        ],
        correct: 1,
        explanation: "The X-Powered-By field in the HTTP response header is the most basic form of identifying a web framework. Many tools can fingerprint a target by examining this header field.",
        importance: "high"
    },
    {
        question: "When fingerprinting web applications, which of these is considered a 'somewhat more reliable' method than HTTP headers?",
        options: [
            "HTML source code analysis",
            "Framework-specific cookies",
            "File extension detection",
            "Error message analysis"
        ],
        correct: 1,
        explanation: "Framework-specific cookies are considered a somewhat more reliable way to determine the current web framework compared to HTTP headers, as they are less likely to be modified or hidden.",
        importance: "medium"
    },
    {
        question: "Which file extension is associated with Java Server Pages?",
        options: [
            ".php",
            ".aspx",
            ".jsp",
            ".html"
        ],
        correct: 2,
        explanation: "The .jsp extension is associated with Java Server Pages, while .php is for PHP, .aspx is for Microsoft ASP.NET, and .html is for standard HTML files.",
        importance: "medium"
    },
    {
        question: "What command can be used in Linux to recursively list file permissions?",
        options: [
            "ls -la",
            "chmod -R",
            "namei -l",
            "find -perm"
        ],
        correct: 2,
        explanation: "The 'namei -l' command can be used to recursively list file permissions in Linux. While 'ls -la' shows permissions, namei can recursively check permissions for a path.",
        importance: "medium"
    },
    {
        question: "Which directories are mentioned as requiring file permission testing for web security?",
        options: [
            "Only web files and configuration directories",
            "Web files, config files, sensitive files, logs, executables, database, temp, and upload directories",
            "Just configuration and log directories",
            "Only executable and database directories"
        ],
        correct: 1,
        explanation: "File permission testing should include web files/directory, configuration files/directory, sensitive files, log files, executables, database files, temp files, and upload files/directories.",
        importance: "high"
    },
    {
        question: "What curl command is used to test the ability to read an object from cloud storage?",
        options: [
            "curl -X POST https://<cloud-storage-service>/<object>",
            "curl -X GET https://<cloud-storage-service>/<object>",
            "curl -X PUT https://<cloud-storage-service>/<object>",
            "curl -X DELETE https://<cloud-storage-service>/<object>"
        ],
        correct: 1,
        explanation: "The command 'curl -X GET https://<cloud-storage-service>/<object>' is used to test the ability to read an object from cloud storage services.",
        importance: "medium"
    },
    {
        question: "Which web performance optimization technique involves loading images and assets only when they appear in the viewport?",
        options: [
            "Caching",
            "Code Splitting",
            "Lazy Loading",
            "Compression"
        ],
        correct: 2,
        explanation: "Lazy Loading is the technique of loading images and other assets only as they appear in the viewport, which significantly improves initial page load performance.",
        importance: "high"
    },
    {
        question: "What are the two main compression algorithms mentioned for optimizing web performance?",
        options: [
            "ZIP and RAR",
            "Gzip and Brotli",
            "JPEG and PNG",
            "LZ4 and Snappy"
        ],
        correct: 1,
        explanation: "Gzip and Brotli are the two main compression algorithms mentioned for compressing files to optimize web performance. Brotli generally provides better compression ratios than Gzip.",
        importance: "medium"
    },
    {
        question: "Which JavaScript loading attributes are mentioned for preventing render blocking?",
        options: [
            "sync and defer",
            "async and defer",
            "lazy and eager",
            "blocking and non-blocking"
        ],
        correct: 1,
        explanation: "The 'async' and 'defer' attributes are used for loading JavaScript scripts to prevent blocking the rendering process, improving page load performance.",
        importance: "high"
    },
    {
        question: "What is the primary purpose of implementing Content Security Policy (CSP) headers?",
        options: [
            "To improve website performance",
            "To mitigate XSS (Cross-Site Scripting) risks",
            "To enable HTTPS connections",
            "To manage user authentication"
        ],
        correct: 1,
        explanation: "Content Security Policy (CSP) headers are primarily used to mitigate XSS (Cross-Site Scripting) risks by controlling which resources can be loaded and executed on a web page.",
        importance: "high"
    },
    {
        question: "Which type of attack does CSRF protection specifically defend against?",
        options: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Cross-Site Request Forgery",
            "Man-in-the-Middle attacks"
        ],
        correct: 2,
        explanation: "CSRF protection specifically defends against Cross-Site Request Forgery attacks by implementing anti-CSRF tokens in forms to ensure requests are legitimate.",
        importance: "high"
    },
    {
        question: "What is a key advantage of microservices architecture over monolithic architecture?",
        options: [
            "Simpler to develop and deploy",
            "Easier to test",
            "Highly scalable with fault isolation",
            "Less complex to manage"
        ],
        correct: 2,
        explanation: "Microservices are highly scalable and provide fault isolation, meaning if one service fails, it doesn't bring down the entire application. They also allow easier deployment of changes and use of different technologies for different services.",
        importance: "medium"
    },
    {
        question: "Which database optimization technique involves splitting large databases into smaller, more manageable pieces?",
        options: [
            "Indexing",
            "Query Optimization",
            "Database Partitioning",
            "Connection Pooling"
        ],
        correct: 2,
        explanation: "Database Partitioning involves splitting large databases into smaller, more manageable pieces to improve performance and manageability.",
        importance: "medium"
    },
    {
        question: "What is the primary security concern addressed by input validation and sanitization?",
        options: [
            "Poor performance",
            "SQL injection and XSS attacks",
            "Unauthorized file access",
            "Network intrusion"
        ],
        correct: 1,
        explanation: "Input validation and sanitization primarily address SQL injection and XSS attacks by ensuring that user inputs are properly validated and cleaned before processing.",
        importance: "high"
    },
    {
        question: "Which HTTP security headers are specifically mentioned for web application security?",
        options: [
            "Content-Type and Cache-Control",
            "X-Content-Type-Options and X-Frame-Options",
            "Accept and Authorization",
            "Host and Referer"
        ],
        correct: 1,
        explanation: "X-Content-Type-Options and X-Frame-Options are specifically mentioned as important HTTP security headers for protecting web applications from various attacks.",
        importance: "high"
    },
    {
        question: "What is connection pooling used for in database performance optimization?",
        options: [
            "To encrypt database connections",
            "To manage database connections efficiently",
            "To backup database data",
            "To partition database tables"
        ],
        correct: 1,
        explanation: "Connection pooling is used to manage database connections efficiently by reusing existing connections instead of creating new ones for each request, which improves performance.",
        importance: "medium"
    },
    {
        question: "When might denormalization be used in database optimization?",
        options: [
            "To improve data integrity",
            "To reduce storage space",
            "To optimize read performance",
            "To simplify database structure"
        ],
        correct: 2,
        explanation: "Denormalization is sometimes used to optimize read performance by duplicating data across tables, even though it goes against normal database design principles.",
        importance: "medium"
    }
];

// Quiz state management
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizCompleted = false;
let answeredQuestions = [];

// DOM elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');
const questionNumber = document.getElementById('question-number');
const totalQuestions = document.getElementById('total-questions');
const scoreContainer = document.getElementById('score-container');
const finalScore = document.getElementById('final-score');
const totalScore = document.getElementById('total-score');
const scorePercentage = document.getElementById('score-percentage');
const scoreMessage = document.getElementById('score-message');
const highImportanceSummary = document.getElementById('high-importance-summary');
const importanceBadge = document.getElementById('importance-badge');
const explanationContainer = document.getElementById('explanation-container');
const explanationText = document.getElementById('explanation-text');

// Initialize quiz
function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizCompleted = false;
    answeredQuestions = [];
    
    // Update total questions count
    totalQuestions.textContent = quizQuestions.length;
    totalScore.textContent = quizQuestions.length;
    
    // Hide score container and explanation
    scoreContainer.style.display = 'none';
    explanationContainer.style.display = 'none';
    
    // Show/hide buttons
    nextBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
    
    // Load first question
    loadQuestion();
}

// Load current question
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    
    // Update question number and progress
    questionNumber.textContent = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + '%';
    
    // Show/hide importance badge
    if (question.importance === 'high') {
        importanceBadge.style.display = 'block';
    } else {
        importanceBadge.style.display = 'none';
    }
    
    // Set question text
    questionText.textContent = question.question;
    
    // Clear options container
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionBtn);
    });
    
    // Reset selected answer and next button
    selectedAnswer = null;
    nextBtn.disabled = true;
    
    // Hide explanation
    explanationContainer.style.display = 'none';
}

// Handle answer selection
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    selectedAnswer = answerIndex;
    const question = quizQuestions[currentQuestionIndex];
    const options = optionsContainer.querySelectorAll('.option');
    
    // Mark correct and incorrect answers
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && index !== question.correct) {
            option.classList.add('incorrect');
        }
        if (index === selectedAnswer) {
            option.classList.add('selected');
        }
    });
    
    // Update score
    if (selectedAnswer === question.correct) {
        score++;
    }
    
    // Store answer
    answeredQuestions.push({
        question: question.question,
        selectedAnswer: selectedAnswer,
        correctAnswer: question.correct,
        isCorrect: selectedAnswer === question.correct,
        importance: question.importance
    });
    
    // Show explanation
    explanationText.textContent = question.explanation;
    explanationContainer.style.display = 'block';
    
    // Enable next button
    nextBtn.disabled = false;
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Show quiz results
function showResults() {
    quizCompleted = true;
    
    // Hide question container
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.quiz-controls').style.display = 'none';
    
    // Show results
    scoreContainer.style.display = 'block';
    finalScore.textContent = score;
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    scorePercentage.textContent = percentage + '%';
    
    // Show appropriate message
    let message = '';
    if (percentage >= 90) {
        message = '🔥 Exceptional! You\'re a web security expert!';
    } else if (percentage >= 80) {
        message = '🎯 Excellent! Strong security knowledge!';
    } else if (percentage >= 70) {
        message = '👍 Good job! Solid understanding of security concepts.';
    } else if (percentage >= 60) {
        message = '📖 Not bad, but review the security fundamentals.';
    } else {
        message = '🔄 Keep studying! Security is crucial for web development.';
    }
    scoreMessage.textContent = message;
    
    // High importance summary
    const highImportanceQuestions = answeredQuestions.filter(q => q.importance === 'high');
    const highImportanceCorrect = highImportanceQuestions.filter(q => q.isCorrect).length;
    const highImportanceTotal = highImportanceQuestions.length;
    
    highImportanceSummary.innerHTML = `
        <h4>🔥 Critical Security Concepts Performance</h4>
        <p>You got ${highImportanceCorrect} out of ${highImportanceTotal} critical security questions correct.</p>
        <p>Focus on mastering these high-importance concepts for web security!</p>
    `;
    
    // Show restart button
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
}

// Restart quiz
function restartQuiz() {
    // Reset display
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.quiz-controls').style.display = 'block';
    
    // Initialize quiz
    initializeQuiz();
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (quizCompleted) return;
    
    // Number keys 1-4 for option selection
    if (event.key >= '1' && event.key <= '4') {
        const optionIndex = parseInt(event.key) - 1;
        const options = optionsContainer.querySelectorAll('.option');
        if (optionIndex < options.length && selectedAnswer === null) {
            selectAnswer(optionIndex);
        }
    }
    
    // Enter or Space for next question
    if ((event.key === 'Enter' || event.key === ' ') && !nextBtn.disabled) {
        event.preventDefault();
        nextQuestion();
    }
    
    // R for restart (when quiz is completed)
    if (event.key.toLowerCase() === 'r' && quizCompleted) {
        restartQuiz();
    }
});

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);
