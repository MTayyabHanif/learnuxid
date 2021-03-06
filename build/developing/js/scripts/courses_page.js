
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