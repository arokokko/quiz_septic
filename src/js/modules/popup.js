const popup = () => {

    let pageY = 0;
        
    document.addEventListener("mouseout", function showPopup(e) {
        let from = e.relatedTarget || e.toElement;
        let isClicked = localStorage.getItem('isClicked');
        if ((!from || from.nodeName == "HTML") && (e.pageY < pageY) && !isClicked) {
            document.querySelector('.footer__mobile_download').click();
            document.removeEventListener('mouseout', showPopup);
            localStorage.setItem('isClicked', 'yes');
        }
        pageY = e.pageY;
    });
    
}

export default popup;