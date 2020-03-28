if($('.feedbackSection-slider').length > 0){
    $('.feedbackSection-slider').slick({
        slidesPerRow: 2,
        slidesToScroll: 1,
        rows: 2,
        autoplay: false,
        prevArrow: $('.feedbackSection-sliderControls .prevArrow'),
        nextArrow: $('.feedbackSection-sliderControls .nextArrow'),
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesPerRow: 1,
                rows: 2,
        slidesToScroll: 1,
            }
        }
        ]
    });
}