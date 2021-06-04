window.addEventListener('DOMContentLoaded', () => {
    const btnStartQuiz = document.querySelector('.button_start_quiz');
    const firstScreen = document.querySelector('.main__screen');
    const quizScreen = document.querySelector('.quiz');

    btnStartQuiz.addEventListener('click', () => {
        firstScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
    });
})