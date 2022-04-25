// header toggle
$("#dropdown").click(() => {
    $("#dropdownArea").toggle();
});

// owl carousel
$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// flash deal carousel
$('.flash-deal-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2,
            margin:10
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});