// Slider for Top slide in home page
try {
    var swiper = new Swiper('.swiper-one', {
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


// Slider for Top slide in home page
try {
    var swiper = new Swiper('.swiper-gallery', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            450: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        }
    });
} catch (error) {
    // dont show slider
}