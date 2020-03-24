function contactForm(){

    // var joinUs = $('section.joinUs');
    // var getPositions = joinUs.getBoundingClientRect();
    // console.log(joinUs);
    

    $('form.contactForm .button').on('click', function(e){
        e.preventDefault();
        sendContactForm();
    });

    function sendContactForm(){

        var valid = true;

        $('form.contactForm input, form.contactForm textarea').each(function(){
            var checkValid = validateContactForm(this, true);
            if(checkValid === false){
                valid = false;
            }
        });

    }

    function validateContactForm(elem, isForm=false){

        var elem = $(elem);
        if(elem.length < 0){
            return;
        }

        var elemParent = elem.parent();
        var isEmail = elem.hasClass('form-item--email');
        var emailValidate = elem.val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        var valid = true;

        elemParent.removeClass('input-error');

        if((!elem.val().trim() && isForm) || (isEmail && !emailValidate)){
            if(isEmail && !emailValidate){
                elemParent.find('form-msg').text('Email is not valid');
            } else {
                elemParent.find('form-msg').text('Email is required');
            }
            elemParent.addClass('input-error');
            valid = false;
        }
        return valid;

    }

}
contactForm();