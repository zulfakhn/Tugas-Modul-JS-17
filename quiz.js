const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        answer: "Jakarta"
    },
    {
        question: "Siapa Presiden pertama Indonesia?",
        options: ["Soekarno", "Soeharto", "SBY", "Megawati"],
        answer: "Soekarno"
    },
    {
        question: "Apa makanan khas Brebes?",
        options: ["Telur Asin", "Rendang", "Gudeg", "Babad"],
        answer: "Telur Asin"
    },
    {
        question: "Dimana letak candi Borobudur?",
        options: ["Brebes", "Tegal", "Semarang", "Magelang"],
        answer: "Magelang"
    },
    {
        question: "Apakah Kota Tua ada di Semarang?",
        options: ["Iya", "Salah, di Jakarta"],
        answer: "Salah, di Jakarta"
    },
    
    ];

    let currentQuestionValue = 0;
    let score = 0;

    const quizColumn = document.getElementById('quiz');
    const scoreColumn = document.getElementById('score-column');
    const scoreValue = document.getElementById('score');

    function showQuestions() {
        const currentQuestion = questions[currentQuestionValue];
        quizColumn.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
            <ul class="options">
                ${currentQuestion.options.map((option, index) => `
                    <li class="option">
                        <input type="radio" id="option${index}" name="answer" value="${option}">
                        <label for="option${index}">${option}</label>
                    </li>
                `).join('')}
            </ul>
            <button onclick="submitAnswer()">Submit Jawaban</button>
         `;
    }

    function submitAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            const answer = selectedOption.value;
            const currentQuestion = questions[currentQuestionValue];
            if (answer === currentQuestion.answer) {
                score++;
            }
            currentQuestionValue++;
                if (currentQuestionValue < questions.length) {
                    showQuestions();
                } else {
                    showScore();
                }
        } else {
            alert('Silakan pilih jawaban yang benar terlebih dahulu, ya!');
        }
    }

    function showScore() {
        quizColumn.style.display = 'none';
        scoreColumn.style.display = 'block';
        scoreValue.textContent = `Skor kamu adalah ${score} dari ${questions.length}`;
    }

    function restartQuiz() {
        currentQuestionValue = 0;
        score = 0;
        quizColumn.style.display = 'block';
        scoreColumn.style.display = 'none';
        showQuestions();
    }

    showQuestions();