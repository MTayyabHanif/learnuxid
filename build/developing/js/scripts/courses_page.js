if($('.feedbackSection-slider').length > 0){
    $('.feedbackSection-slider').slick({
        slidesPerRow: 2,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.feedbackSection-sliderControls .prevArrow'),
        nextArrow: $('.feedbackSection-sliderControls .nextArrow'),
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesPerRow: 1,
                rows: 2,
            }
        }
        ]
    });
}
function coursesSlide(){

    const slider = $(".coursesSection--slider");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.each(function(eSlider){
        $(this).on("mousedown", e => {
            let slider = this;
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        $(this).on("mouseleave", () => {
            let slider = this;
            isDown = false;
            slider.classList.remove("active");
        });
        $(this).on("mouseup", () => {
            let slider = this;
            isDown = false;
            slider.classList.remove("active");
        });
        $(this).on("mousemove", e => {
            let slider = this;
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;

            slider.scrollLeft = scrollLeft - walk;
        });
        $(this).on("touchmove", e => {
            let slider = this;
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;

            slider.scrollLeft = scrollLeft - walk;
        });
    });


}
if($(".coursesSection--slider").length > 0){
    coursesSlide();   
}