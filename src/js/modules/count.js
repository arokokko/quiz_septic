const count = () => {
    
    // decrease
    $('.quantity_inner .bt_minus').click(function() {
        let $input = $(this).parent().find('.quantity');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
    });

    // increase
    $('.quantity_inner .bt_plus').click(function() {
        let $input = $(this).parent().find('.quantity');
        let count = parseInt($input.val()) + 1;
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
        $input.val(parseInt(count));
    }); 

    // remove unneccessary content
    $('.quantity_inner .quantity').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (this.value == "") {
            this.value = 0;
        }
        if (this.value > parseInt($(this).data('max-count'))) {
            this.value = parseInt($(this).data('max-count'));
        }    
    }); 
}

export default count;