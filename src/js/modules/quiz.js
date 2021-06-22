export default () => {
    try {

        const progressBarLine = $('[data-bar]'),
            progressBarText = $('[data-bar-count]'),
            scoreCount = $('[data-count]');


        const images = [

                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-top gift__sticker-violet"><img src="icons/percent_icon.png" alt="скидка"><span>Цена снижена<br>
                            на-30%</span></div>
                        
                    </div>
                    <img  src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div data-img-descr2 class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Deka 5
                    </div>
                </div>
                <div data-img-relev2 class="quiz__content_gift-bottom ">и ещё <span class="fw700">37</span> станций</div>`,

                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-top gift__sticker-red"><img src="icons/star_icon.png" alt="сезон"><span>Лидер по <br>
                        отзывам 5.0</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                    </div>
                    <img  src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Юнилос Астра 4
                    </div>
                </div>
                <div class="quiz__content_gift-bottom ">и ещё <span class="fw700">28</span> станций</div>`,

                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-top gift__sticker-violet"><img src="icons/percent_icon.png" alt="скидка"><span>Цена снижена<br>
                        на-30%</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-green"><img src="icons/sun_icon.png" alt="сезон"><span>Идеально подходит <br>
                        для сезонного <br>проживания</span></div>
                        
                    </div>
                    <img  src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Genesis 1200
                    </div>
                </div>
                <div  class="quiz__content_gift-bottom ">и ещё <span class="fw700">35</span> станций</div>`,

                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-top gift__sticker-orange"><img src="icons/fire_icon.png" alt="сезон"><span>Хит продаж <br>
                        2021 года</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Deka 8
                    </div>
                </div>
                <div class="quiz__content_gift-bottom ">и ещё <span class="fw700">17</span> станций</div>`,
                
                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Deka T-700
                    </div>
                </div>
                <div class="quiz__content_gift-bottom ">и ещё <span class="fw700">16</span> станций</div>`,

                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-top gift__sticker-orange"><img src="icons/fire_icon.png" alt="сезон"><span>Хит продаж <br>
                        2021 года</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        <div class="gift__sticker gift__sticker-bottom gift__sticker-violet"><img src="icons/percent_icon.png" alt="скидка"><span>Цена снижена<br>
                        на-30%</span></div>
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Deka T-900
                    </div>
                </div>
                <div class="quiz__content_gift-bottom ">и ещё <span class="fw700">15</span> станций</div>`,

                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-top gift__sticker-red"><img src="icons/fire_icon.png" alt="сезон"><span>Хит продаж <br>
                        2021 года</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-green"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Юнилос Пион 3
                    </div>
                </div>
                <div class="quiz__content_gift-bottom ">и ещё <span class="fw700">9</span> станций</div>`,

                `<div class="quiz__content_gift-wrapper ">
                    <div class="quiz__content_gift-stickers ">
                        <div class="gift__sticker gift__sticker-top gift__sticker-blue"><img src="icons/fire_icon.png" alt="сезон"><span>Хит продаж <br>
                        2021 года</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-red"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top  fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Septa 14
                    </div>
                </div>
                <div class="quiz__content_gift-bottom ">и ещё <span class="fw700">7</span> станций</div>`,

                

        ];

        const arr = [
            {
                isChecked: false,
                bar: "25%",
                description: `По количеству проживающих<br>
                определяем <span class="fw700">суточный<br>
                объём стоков.</span>`
                
            },
            {
                isChecked: false,
                bar: "40%",
                description: `По количеству точек<br>
                определяем <span class="fw700">суточный<br>
                объём стоков.</span>`
            },
            {
                isChecked: false,
                bar: "55%",
                description: `Определяем <span class="fw700">риск<br>
                выдавливания</span> станции<br>
                из почвы.`
                

            },
            {
                isChecked: false,
                bar: "70%",
                description: `Выясняем <span class="fw700">потребуется<br>
                ли консервация</span> станции<br>
                на зиму.`
                
            },
            {
                isChecked: false,
                bar: "85%",
                description: `Уточняем, <span class="fw700">какой необходим<br>
                отвод стоков</span> - принудительный<br>
                или самотёчный`
                
            },
            {
                isChecked: false,
                bar: "99%",
                description: `<span class="fw700">Выберите подарок,</span><br>
                который вы получите, если закажите<br>
                установку септика у нас.`
                            
            }
        ];

        const imagesGift = [

            {
                img: `img/gift_installation.png`,
                text: `Скидка&nbsp;на&nbsp;монтаж <br>
                        5 000 рублей`
            },
            {
                img: `img/trees.png`,
                text: `5 роскошных туй`
            },
            
        ];

        const counts = [
            {
                id: '#first',
                forward: $('[data-btn-forward1]'),
                back: null,

            },
            {
                id: '#second',
                forward: $('[data-btn-forward2]'),
                back: $('[data-btn-back2]'),

            },
            {
                id: '#third',
                forward: $('[data-btn-forward3]'),
                back: $('[data-btn-back3]'),

            },
            {
                id: '#fourth',
                forward: $('[data-btn-forward4]'),
                back: $('[data-btn-back4]'),

            },
            {
                id: '#fifth',
                forward: $('[data-btn-forward5]'),
                back: $('[data-btn-back5]'),

            },
            {
                id: '#sixth',
                forward: $('[data-btn-forward6]'),
                back: $('[data-btn-back6]'),

            },
        ];

        const inputs = {
            control_21: 0,
            control_22: 1,
            control_23: 2,
            control_24: 3,
            control_25: 4,
            control_26: 5,
        };
        

        // are inputs checked
        for(let i = 0, length = counts.length; i < length; i++) {
            if(i == 1) {
                checkInputsCount(document.querySelector(counts[i].id), i, counts[i].forward);
            } else if (i == 5) {
                checkInputs(document.querySelector(counts[i].id), i, counts[i].forward, switchImgGift);
            } else {
                checkInputs(document.querySelector(counts[i].id), i, counts[i].forward);
            }
        }

        function checkInputs(screenSel, count, btnSel, cb = switchImg) {
            screenSel.addEventListener('click', () => {
                screenSel.querySelectorAll('input').forEach((item, i) => {
                    if(item.checked) {
                        changeObj(count, btnSel);
                        arr[count].value = item.value;
                        cb(i);
                        // setTimeout(() => {
                        //     btnSel.click();
                        // }, 1200);
                    }
                });
            });
            
        }

        // switch picture first-fifth screens
        function switchImg(i) {
            $('[data-img]').html(images[i]);
        }

        // switch picture sixth screen
        function switchImgGift(i) {
            $('[data-img-gift]').attr('src', imagesGift[i].img);
            $('[data-descr-gift]').text('Ваш подарок');
            $('[data-text-gift]').html(imagesGift[i].text);
        }

        // for second screen
        function checkInputsCount(screenSel, count, btnSel, cb = switchImg) {
            let inputValue;
            let inputId;            
            function initVars(varInput, num = inputId) {
                inputValue = varInput.value;
                inputId = inputs[varInput.getAttribute('id')];
                cb(num);
            }

            // check if at least one input checked
            const array = Array.from(screenSel.getElementsByTagName('input'));
            let isInputChecked = false;
            function initIsInputChecked() {
                isInputChecked = array.some((item) => item.value !== '0');
            }

            // backup second screen if all values are zero
            function reverseChangeObj(count, btn) {
                arr[count].isChecked = false;
                btn.css('cursor', 'no-drop');
                btn.removeClass('btn-flare');
            }

            screenSel.addEventListener('input', (e) => {
                initIsInputChecked();
                if(e.target && e.target.classList.contains('quantity') && e.target.value > 0) {

                    if( e.target.value < 3 ) {
                        initVars(e.target);
                    } else if ( e.target.value >= 3 ){
                        initVars(e.target, inputId + 2);
                    }
                    changeObj(count, btnSel);

                } else if(!isInputChecked) {

                    reverseChangeObj(count, btnSel);
                }
            });

            screenSel.addEventListener('click', (e) => {
                initIsInputChecked();
                if((e.target.classList.contains('bt_minus') || e.target.classList.contains('bt_plus')) && isInputChecked) {
                    
                    let clickInput = e.target.parentElement.querySelector('input');
                    if( clickInput.value == 1 ) {
                        initVars(clickInput);
                    } else if ( clickInput.value == 3 ){
                        initVars(clickInput, inputId + 2);
                    }
                    changeObj(count, btnSel);
                    
                } else if(!isInputChecked) {

                    reverseChangeObj(count, btnSel);
                }
            });
            
        }
        // second screen end

        // change data in main array
        function changeObj(count, btn) {
            arr[count].isChecked = true;
            btn.css('cursor', 'pointer');
            btn.addClass('btn-flare');
            progressBarLine.css('width', arr[count].bar);
            progressBarText.text(arr[count].bar);
        }
        
        // initialize forward buttons first-fifth screens
        for(let i = 0, length = counts.length - 1; i < length; i++) {
            handleForward(counts[i].forward, i, counts[i].id, counts[i+1].id);
        }
        
        function handleForward(btnSel, count, current, next) {
            btnSel.on('click', (e) => {
                e.preventDefault();

                if(!arr[count].isChecked) {

                    showHelp($(`${current} .quiz__btn_forward-help`));

                } else {
                    changeDescription(count + 1);
                    scoreCount.text(count + 2);
                    $(current).addClass('hide');
                    $(next).removeClass('hide');
                    $('[data-aside-description]').addClass('animate__bounce');
                    $('html,body').animate({ scrollTop: $('body').offset().top  }, 1000);
                }
            });
        }

        
        // popup help
        function showHelp(sel) {
            let newHelp;
            if(newHelp !== undefined) {
                clearInterval(newHelp);
            } else {
                sel.removeClass('no_opacity');
                newHelp = setTimeout(() => {
                    sel.addClass('no_opacity')
                }, 2000);
            }
        }

        // aside description
        function changeDescription(count) {
            $('[data-aside-description]').html(arr[count].description);
        }
        // aside description animation 
        $('[data-aside-description]').on('animationend', () => {
            $('[data-aside-description]').removeClass('animate__bounce');
        })

        
        // buttons back initialize
        for(let i = 1, length = counts.length; i < length; i++) {
            handleBack(counts[i].back, i, counts[i].id, counts[i-1].id);
        }

        function handleBack(btnSel, count, current, prev) {
            btnSel.on('click', () => {

                changeDescription(count - 1);
                scoreCount.text(count);

                $(current).addClass('hide');
                $(prev).removeClass('hide');
                
            });
        }

    
        // sixth screen button forward action
        counts[5].forward.on('click', (e) => {
            e.preventDefault();
            if(!arr[5].isChecked) {

                showHelp($(`#sixth .quiz__btn_forward-help`));

            } else {
                $('.quiz').addClass('hide');
                $('.loading').removeClass('hide');
                showLoader();
            }
        });

        function showLoader() {
            setTimeout(() => {
                $('.loading__loader').addClass('hide');
                
            }, 2500);
            setTimeout(showMainForm, 2500);
        }

        function showMainForm() {
            $('.loading__inner').removeClass('hide');
            $('.catalog__knocking').removeClass('hide');
        }

    } catch(e) {}

}