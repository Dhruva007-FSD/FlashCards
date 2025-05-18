const subjectKeywords = {
    "Python": ["interpreted language", "dynamicallytyped", "opensource", "versatility", "origins"],
    "Chemistry": ["atoms", "periodic table", "chemicals", "acids", "base"],
    "Biology": ["photosynthesis", "cell", "tissues", "blood cells", "plants"],
    "Mathematics": ["addition", "integers", "decimals", "real numbers", "prime numbers"],
    "Physics": ["sound", "magnetic fields", "mass", "velocity", "force"],
};


function getSubject (question) {
    const lowerCq = question.toLowerCase();
    const subjects = Object.keys(subjectKeywords);
    const foundSubject = subjects.find(subject => {
        const keywords = subjectKeywords[subject];
        return keywords.some(keyword => lowerCq.includes(keyword));
    });
    return foundSubject || "General";
}

function saveFlashcard (flashcard) {
    const flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    flashcards.push(flashcard);
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

function getFlashcardsByStudent (studentId) {
    const flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    return flashcards.filter(f => f.student_id === studentId);
}


function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor (Math.random () * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


document.getElementById ('flashcard-form') .addEventListener ('submit', function (e) {
    e.preventDefault ();

    const studentIdValue = document.getElementById ('studentId') .value.trim();
    const question = document.getElementById ('question') .value.trim();
    const answer = document.getElementById ('answer') .value.trim();
    const addFlashcardStatus = document.getElementById ('add-flashcard-status');

    addFlashcardStatus.textContent = '';

    if (!studentIdValue || !question || !answer) {
        alert ('Please fill all fields.');
        return;
    }

    const subject = getSubject (question);

    const newFlashcard = {
        student_id: studentIdValue,
        question: question,
        answer: answer,
        subject: subject
    };

    saveFlashcard (newFlashcard);

    addFlashcardStatus.textContent = `Flashcard added successfully. Subject: ${subject}.`;
    document.getElementById ('flashcard-form').reset ()

    setTimeout ( () => {
        addFlashcardStatus.textContent = '';
    }, 5000);
});



document.getElementById('get-flashcards-btn').addEventListener('click', function() {
    const studentsId = document.getElementById ('studentsId').value.trim ();
    const limit = parseInt(document.getElementById ('limit').value);
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';

    if (!studentsId) {
        alert('Please enter Student ID to retrieve flashcards.');
        return;
    }

    const allFlashcards = getFlashcardsByStudent(studentsId);
    shuffleArray(allFlashcards);

    const selectedFlashcards = limit > 0 ? allFlashcards.slice(0, limit) : allFlashcards;

    if (selectedFlashcards.length === 0) {
        if (allFlashcards.length === 0) {
            container.innerHTML = '<p>No flashcards found for this student.</p>';
        } else {
            container.innerHTML = '<p>No flashcards to display based on the current limit. Try increasing the limit or setting it to 0 to see all.</p>';
        }
        return;
    }


    selectedFlashcards.forEach(f => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'flashcard';

    cardDiv.innerHTML = `
            <h3>Subject: ${f.subject}</h3>
            <p><strong>Question:</strong> ${f.question}</p>
            <p><strong>Answer:</strong> ${f.answer}</p>
        `;
    container.appendChild(cardDiv);
    });
});