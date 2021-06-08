import hideElems from "./modules/hideElems";
import tabs from "./modules/tabs";
import count from "./modules/count";
import form from "./modules/form";
import popup from "./modules/popup";

window.addEventListener('DOMContentLoaded', () => {
    hideElems();
    count();
    tabs();
    form();
    popup();


    // start quiz
    $('.button_start_quiz').on('click', () => {
        $('.main__screen').addClass('hide');
        $('.quiz').removeClass('hide');
    });

 
})