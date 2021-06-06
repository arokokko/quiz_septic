const tabs = () => {
    

    $('.catalog__tabs_switchers').on('click', 'button:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.catalog__tabs').find('div.catalog__tabs_wrapper').removeClass('active').eq($(this).index()).addClass('active');
    });

};

export default tabs;