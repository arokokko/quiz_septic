export default () => {

    // mobile menu
    $('.burger').on('click', () => {
        $('header').addClass('mobile');
    });

    $('.header__mobile_close').on('click', () => {
        $('header').removeClass('mobile');
    })

   
    // side bar and footer
    toggleClasses($('.footer__toggle'), $('.footer'), 'hidden');
    toggleClasses($('.side__bar_toggle'), $('.side__bar_wrapper'), 'hidden');

    function toggleClasses(trigger, element, classActive) {
        trigger.on('click', () => {
            element.toggleClass(classActive);
        });
    }

}

