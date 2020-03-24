function counterAnimation(){
    if($('.chooseUs--badge-title').length == 0){
        return;
    }
   $('.chooseUs--badge-title').each(function(){
        let counterNumber = $(this);
        let dataCounter = parseInt(counterNumber.attr('data-counter'));
        
        $(this).prop('Counter',0).animate({
            Counter: dataCounter
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                counterNumber.text(Math.ceil(now));
            }
        });

   });
}

$(function() {    
   counterAnimation();
});

window.setInterval(function(){
    
    $('.chooseUs--badge-title').each(function(){
        let counter = $(this);
        let counterNumber = parseInt($(this).text());
        counter.text(counterNumber + 1);
        
    });

}, 25000);