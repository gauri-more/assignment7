$(document).ready(function () {
    jQuery("#carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },

            600: {
                items: 1
            },

            1024: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });

jQuery("#site-carousel").owlCarousel({
    autoplay: false,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
           
        },

        600: {
            items: 2
        },

        1024: {
            items: 3
        },

        1366: {
            items: 4
        }
    }
});

    jQuery("#carousel-price").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,

            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 4
            }
        }
    });
    jQuery("#modern-website-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,

            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 4
            }
        }
    });

    jQuery("#client-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2

            },

            600: {
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 6
            }
        }
    });

    jQuery("#blog-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1

            },

            300: {
                items: 1
            },
            600:{
                items:1
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });
    jQuery("#team-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1

            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });

})