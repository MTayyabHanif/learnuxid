function inputLabel(){

    $('.form-item input, .form-item textarea').on('focus', function(e){
        $(this).parent().addClass('active');
    })
    
    $('.form-item input, .form-item textarea').on('focusout', function(e){
        var inputVal = $(this).val();

        if(!inputVal){
            $(this).parent().removeClass('active');
        }

    })

}
inputLabel();