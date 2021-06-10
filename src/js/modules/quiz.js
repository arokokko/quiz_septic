export default () => {
    try {
        const first = document.querySelector('#first'),
            firstBtnFor = $('[data-btn-forward1]');

        const second = document.querySelector('#second'),
            secondBtnFor = $('[data-btn-forward2]'),
            secondBtnBack = $('[data-btn-back2]');

        const third = document.querySelector('#third'),
            thirdBtnFor = $('[data-btn-forward3]'),
            thirdBtnBack = $('[data-btn-back3]');

        const fourth = document.querySelector('#fourth'),
            fourthBtnFor = $('[data-btn-forward4]'),
            fourthBtnBack = $('[data-btn-back4]');

        const fifth = document.querySelector('#fifth'),
            fifthBtnFor = $('[data-btn-forward5]'),
            fifthBtnBack = $('[data-btn-back5]');

        const sixth = document.querySelector('#sixth'),
            sixthBtnFor = $('[data-btn-forward6]'),
            sixthBtnBack = $('[data-btn-back6]');



        const progressBarLine = $('[data-bar]'),
            progressBarText = $('[data-bar-count]'),
            scoreCount = $('[data-count]');


        const images = [

                `<div class="quiz__content_gift-wrapper fz14">
                <div class="quiz__content_gift-stickers fz8">
                    <div class="gift__sticker gift__sticker-top gift__sticker-violet"><img src="icons/percent_icon.png" alt="скидка"><span>Цена снижена<br>
                        на-30%</span></div>
                    
                </div>
                <img data-img2 src="img/septic_tank_single.png" alt="септический бак">
                <div class="quiz__content_gift-wrapper_text gift_text-top fz10 fcb">
                    Промежуточный результат
                </div>
                <div class="quiz__content_gift-wrapper_text gift_text-middle">
                    Вам подходит станция
                </div>
                <div data-img-descr2 class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                    Deka 5
                </div>
            </div>
                <div data-img-relev2 class="quiz__content_gift-bottom fz13">и ещё 37 станций</div>`,

                `<div class="quiz__content_gift-wrapper fz14">
                    <div class="quiz__content_gift-stickers fz8">
                        <div class="gift__sticker gift__sticker-top gift__sticker-red"><img src="icons/star_icon.png" alt="сезон"><span>Лидер по <br>
                        отзывам 5.0</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                    </div>
                    <img src="img/astra-septic.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top fz10 fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Юнилос Астра 4
                    </div>
                </div>
                <div class="quiz__content_gift-bottom fz13">и ещё 18 станций</div>`,

                `<div class="quiz__content_gift-wrapper fz14">
                    <div class="quiz__content_gift-stickers fz8">
                        <div class="gift__sticker gift__sticker-top gift__sticker-violet"><img src="icons/percent_icon.png" alt="скидка"><span>Цена снижена<br>
                        на-30%</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-green"><img src="icons/sun_icon.png" alt="сезон"><span>Идеально подходит <br>
                        для сезонного <br>проживания</span></div>
                        
                    </div>
                    <img data-img2 src="img/genesis.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top fz10 fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Genesis 1200
                    </div>
                </div>
                <div  class="quiz__content_gift-bottom fz13">и ещё 11 станций</div>`,

                `<div class="quiz__content_gift-wrapper fz14">
                    <div class="quiz__content_gift-stickers fz8">
                        <div class="gift__sticker gift__sticker-top gift__sticker-orange"><img src="icons/fire_icon.png" alt="сезон"><span>Хит продаж <br>
                        2021 года</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top fz10 fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Deka 8
                    </div>
                </div>
                <div class="quiz__content_gift-bottom fz13">и ещё 11 станций</div>`,
                
                `<div class="quiz__content_gift-wrapper fz14">
                    <div class="quiz__content_gift-stickers fz8">
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top fz10 fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Deka T-700
                    </div>
                </div>
                <div class="quiz__content_gift-bottom fz13">и ещё 9 станций</div>`,

                `<div class="quiz__content_gift-wrapper fz14">
                    <div class="quiz__content_gift-stickers fz8">
                        <div class="gift__sticker gift__sticker-top gift__sticker-orange"><img src="icons/fire_icon.png" alt="сезон"><span>Хит продаж <br>
                        2021 года</span></div>
                        <div class="gift__sticker gift__sticker-middle gift__sticker-blue"><img src="icons/water_icon.png" alt="сезон"><span>Идеально подходит <br>
                        при высоком уровне <br>грунтовых вод</span></div>
                        <div class="gift__sticker gift__sticker-bottom gift__sticker-violet"><img src="icons/percent_icon.png" alt="скидка"><span>Цена снижена<br>
                        на-30%</span></div>
                        
                    </div>
                    <img src="img/septic_tank_single.png" alt="септический бак">
                    <div class="quiz__content_gift-wrapper_text gift_text-top fz10 fcb">
                        Промежуточный результат
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-middle">
                        Вам подходит станция
                    </div>
                    <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700">
                        Deka T-900
                    </div>
                </div>
                <div class="quiz__content_gift-bottom fz13">и ещё 9 станций</div>`,

                

        ];

        const arr = [
            {
                isChecked: false,
                bar: "15%",
                description: `По количеству проживающих<br>
                определяем <span class="fw700">суточный<br>
                объём стоков.</span>`
                
            },
            {
                isChecked: false,
                bar: "30%",
                description: `По количеству точек<br>
                определяем <span class="fw700">суточный<br>
                объём стоков.</span>`
            },
            {
                isChecked: false,
                bar: "45%",
                description: `Определяем <span class="fw700">риск<br>
                выдавливания</span> станции<br>
                из почвы.`
                

            },
            {
                isChecked: false,
                bar: "60%",
                description: `Выясняем <span class="fw700">потребуется<br>
                ли консервация</span> станции<br>
                на зиму.`
                
            },
            {
                isChecked: false,
                bar: "75%",
                description: `Уточняем, <span class="fw700">какой необходим<br>
                отвод стоков</span> - принудительный<br>
                или самотёчный`
                
            },
            {
                isChecked: false,
                bar: "90%",
                description: `<span class="fw700">Выберите подарок,</span><br>
                который вы получите, если закажите<br>
                установку септика у нас.`
                            
            }
        ];

        const imagesGift = [

            `<img data-img="true" src="img/gift_installation.png" alt="подарок">
            <div class="quiz__content_gift-wrapper_text gift_text-top ">
                
            </div>
            <div class="quiz__content_gift-wrapper_text gift_text-middle">
                Ваш подарок
            </div>
            <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700 ttu">
                Скидка на монтаж <br>
                5 000 рублей
            </div>`,

            `<img data-img="true" src="img/trees.png" alt="подарок">
            <div class="quiz__content_gift-wrapper_text gift_text-top ">
                
            </div>
            <div class="quiz__content_gift-wrapper_text gift_text-middle">
                Ваш подарок
            </div>
            <div class="quiz__content_gift-wrapper_text gift_text-bottom fw700 ttu">
                5 роскошных туй
            </div>`,

        
        ];
        

        // is inputs checked
        checkInputs(first, 0, firstBtnFor);
        checkInputsCustom(second, 1, secondBtnFor, changeImgSecond);
        checkInputs(third, 2, thirdBtnFor);
        checkInputs(fourth, 3, fourthBtnFor);
        checkInputs(fifth, 4, fifthBtnFor);
        checkInputs(sixth, 5, sixthBtnFor, changeImgGift);


        function checkInputs(screenSel, count, btnSel, cb = changeImg) {
            screenSel.addEventListener('click', () => {
                screenSel.querySelectorAll('input').forEach((item, i) => {
                    if(item.checked) {
                        changeObj(count, btnSel);
                        arr[count].value = item.value;
                        cb(i);
                        
                    }
                });
            });
            
        }

        // change picture first screen
        function changeImg(i) {
            $('[data-img').html(images[i]);
        }

        //change picture second screen
        function changeImgSecond() {
            $('[data-img').html(images[5]);
        }

        // change picture sixth screen
        function changeImgGift(i) {
            $('[data-img-gift').html(imagesGift[i]);
        }

        // for second screen
        function checkInputsCustom(screenSel, count, btnSel, cb) {
            screenSel.addEventListener('click', () => {
                let array = Array.from(screenSel.getElementsByTagName('input'));
                let arraySome = array.some(item => item.value !== '0');
                array.forEach(item => {
                    if(arraySome && parseInt(item.value) < 3) {
                        changeObj(count, btnSel);
                        
                    } else if(arraySome && parseInt(item.value) >= 3) {
                        changeObj(count, btnSel);
                        cb();
                    } else {
                        reverseChangeObj(count, btnSel);
                    }
                });
                
            });
        }
        function reverseChangeObj(count, btn) {
            arr[count].isChecked = false;
            btn.css('cursor', 'no-drop');
            btn.removeClass('btn-flare');
        }
        // second screen end

        function changeObj(count, btn) {
            arr[count].isChecked = true;
            btn.css('cursor', 'pointer');
            btn.addClass('btn-flare');
            progressBarLine.css('width', arr[count].bar);
            progressBarText.text(arr[count].bar);
        }

        
        // handle forward buttons
        handleForward(firstBtnFor, 0, '#first', '#second');
        handleForward(secondBtnFor, 1, '#second', '#third');
        handleForward(thirdBtnFor, 2, '#third', '#fourth');
        handleForward(fourthBtnFor, 3, '#fourth', '#fifth');
        handleForward(fifthBtnFor, 4, '#fifth', '#sixth');
        
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

        handleBack(secondBtnBack, 1, '#second', '#first');
        handleBack(thirdBtnBack, 2, '#third', '#second');
        handleBack(fourthBtnBack, 3, '#fourth', '#third');
        handleBack(fifthBtnBack, 4, '#fifth', '#fourth');
        handleBack(sixthBtnBack, 5, '#sixth', '#fifth');

        function handleBack(btnSel, count, current, prev) {
            btnSel.on('click', () => {

                changeDescription(count - 1);
                scoreCount.text(count);

                $(current).addClass('hide');
                $(prev).removeClass('hide');
                
            });
        }
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
        sixthBtnFor.on('click', (e) => {
            e.preventDefault();
            if(!arr[5].isChecked) {

                showHelp($(`#sixth .quiz__btn_forward-help`));

            } else {
                $('.quiz').addClass('hide');
                $('.loading').removeClass('hide');
                showLoader();
            }
        });
    } catch(e) {
        
    }
   
    
    

}