var swiper = new Swiper(".promoSwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
        },
        next: {
        shadow: true,
        translate: ["120%", 0, -500],
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".navSwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
        },
        next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
        },
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1
    });

    tl.from(".error_txt2 > span", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.5
    });

    var tl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
        });

    var floatPosition = parseInt($(".float_banner").css('top'));
        var footerOffset = $('footer').offset().top;
        var sideHeight = $(".float_banner").outerHeight();
        var offsetBuffer = 380;

        $(window).scroll(function() {
            var currentTop = $(window).scrollTop();
            var bannerTop = currentTop + floatPosition;

            if (bannerTop + sideHeight > footerOffset - offsetBuffer) {
                bannerTop = footerOffset - sideHeight - offsetBuffer;
            }

            $(".float_banner").stop().animate({
                "top" : bannerTop + "px"
            }, 300);
        }).scroll();