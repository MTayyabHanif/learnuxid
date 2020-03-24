function navbarToggle(){
    $('.button-toggle').on('click', function(e){
        e.preventDefault();
        var buttonToggle = $('.button-toggle');
        var navbar = buttonToggle.parents('nav').find('.navbar-collapse');
        navbar.toggleClass('show');
        $('body').toggleClass('showingMenu');
        var navHasClass = navbar.hasClass('show');
        if(navHasClass === true){
            buttonToggle.html('<i class="ti ti-close"></i>');
        } else {
            buttonToggle.html('<i class="ti ti-menu"></i>');
        }
    });
}
navbarToggle();