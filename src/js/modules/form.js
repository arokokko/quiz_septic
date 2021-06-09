import { on } from "gulp";

const form = () => {

    $('input[name=phone]').mask("+7999-999-99-99");

    toggleActiveSocial($('[data-social]'));

    function toggleActiveSocial(sel) {
        $(sel).on('click', '.social:not(.active)', function() {
            const inputPhone = $(this).closest('form').find('input[name=phone]');
            const inputEmail = $(this).closest('form').find('input[name=email]');

            $(this).addClass('active').siblings().removeClass('active');
            

            if ($(this).hasClass('social_email')) {
                inputEmail.removeAttr('hidden').attr('required', true);
                inputPhone.attr('required', null);
            } else {
                if($(this).hasClass('social_whatsapp')) {
                    inputPhone.attr('placeholder', "Ваш телефон в Whatsapp");
                } else if ($(this).hasClass('social_viber')) {
                    inputPhone.attr('placeholder', "Ваш телефон в Viber");
                } else if ($(this).hasClass('social_telegram')) {
                    inputPhone.attr('placeholder', "Ваш телефон в Telegram");
                }
                inputPhone.attr('required', true);
                inputEmail.attr('hidden', true);
                inputEmail.attr('required', null);
            }
            
        });
    }

    $('[data-main-form-submit]').on('click', (e) => {
        e.preventDefault();
        // window.location.href="./thanks.html";
    })
    
}

export default form;