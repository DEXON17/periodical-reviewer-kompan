const answers = {
    q1: 'C',
    q2: 'A',
    q3: 'B',
    q4: 'A',
    q5: 'A',
    q6: 'B',
    q7: 'A',
    q8: 'D',
    q9: 'C',
    q10: 'A',
    q11: 'C',
    q12: 'B',
    q13: 'A',
    q14: 'C',
    q15: 'B',
    q16: 'A',
    q17: 'A',
    q18: 'B',
    q19: 'B',
    q20: 'A',
    q21: 'C',
    q22: 'B',
    q23: 'B',
    q24: 'A',
    q25: 'B',
    q26: 'B',
    q27: 'A',
    q28: 'B',
    q29: 'A',
    q30: 'C',
    q31: 'A',
    q32: 'B',
    q33: 'A',
    q34: 'A',
    q35: 'D',
    q36: 'A',
    q37: 'A',
    q38: 'B',
    q39: 'B',
    q40: 'D'
};


function submitQuiz() {
    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    
    for (const [question, answer] of Object.entries(answers)) {
        const selectedAnswer = formData.get(question);
        if (selectedAnswer === answer) {
            score++;
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Your score is ${score} out of ${Object.keys(answers).length}.<br>
        moeww trisha pretty iloveyou
    `;
}
