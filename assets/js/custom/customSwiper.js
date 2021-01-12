// Slider for Top slide in home page
try {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
} catch (error) {
    // dont show slider
}