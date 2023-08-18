$(function () {
    $('.card').on('click', function () {
        $('.add_border').removeClass('add_border');
        $(this).toggleClass('add_border');
    });
    // venobox plugin
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    // slick plugin
    $('.all_games_slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})