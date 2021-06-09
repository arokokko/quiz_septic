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
        

        // is inputs checked
        checkInputs(first, 0, firstBtnFor);
        checkInputsCustom(second, 1, secondBtnFor);
        checkInputs(third, 2, thirdBtnFor);
        checkInputs(fourth, 3, fourthBtnFor);
        checkInputs(fifth, 4, fifthBtnFor);
        checkInputs(sixth, 5, sixthBtnFor);


        function checkInputs(screenSel, count, btnSel) {
            screenSel.addEventListener('click', () => {
                screenSel.querySelectorAll('input').forEach(item => {
                    if(item.checked) {
                        changeObj(count, btnSel);
                        arr[count].value = item.value;
                        
                    }
                });
            });
        }

        // for second screen
        function checkInputsCustom(screenSel, count, btnSel) {
            screenSel.addEventListener('click', () => {
                let array = Array.from(screenSel.getElementsByTagName('input'));
                if(array.some(item => item.value !== '0')) {
                    changeObj(count, btnSel);
                } else {
                    reverseChangeObj(count, btnSel);
                }
                
            });
        }
        function reverseChangeObj(count, btn) {
            arr[count].isChecked = false;
            btn.css('cursor', 'no-drop');
            btn.toggleClass('btn-flare');
        }
        // second screen end

        function changeObj(count, btn) {
            arr[count].isChecked = true;
            btn.css('cursor', 'pointer');
            btn.toggleClass('btn-flare');
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
                
            }, 3000);
            setTimeout(showMainForm, 3000);
        }
        function showMainForm() {
            $('.loading__inner').removeClass('hide');
        }
        sixthBtnFor.on('click', (e) => {
            e.preventDefault();
            $('.quiz').addClass('hide');
            $('.loading').removeClass('hide');
            showLoader();
        });
    } catch {
        console.log('Oops');
    }
   
    
    

}