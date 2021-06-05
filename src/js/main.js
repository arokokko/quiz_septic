window.addEventListener('DOMContentLoaded', () => {

    // mobile menu
    const btnMobileMenu = document.querySelector('.menu');
    const btnCloseMobileMenu = document.querySelector('.header__mobile_close');
    const headerSelector = document.querySelector('header');

    btnMobileMenu.addEventListener('click', () => {
        headerSelector.classList.add('mobile');
    });

    btnCloseMobileMenu.addEventListener('click', () => {
        headerSelector.classList.remove('mobile');
    });


    // side bar and footer
    const btnSideBar = document.querySelector('.side__bar_toggle');
    const selectorSideBar = document.querySelector('.side__bar_wrapper');
    const btnFooter = document.querySelector('.footer__toggle');
    const selectorFooter = document.querySelector('.footer');

    toggleClasses(btnFooter, selectorFooter, 'hidden');
    toggleClasses(btnSideBar, selectorSideBar, 'hidden');

    function toggleClasses(trigger, element, classActive) {
        trigger.addEventListener('click', () => {
            element.classList.toggle(classActive);
        });
    }
    


    // start quiz
    const btnStartQuiz = document.querySelector('.button_start_quiz');
    const firstScreen = document.querySelector('.main__screen');
    const quizScreen = document.querySelector('.quiz');

    btnStartQuiz.addEventListener('click', () => {
        firstScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
    });
})