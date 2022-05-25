// header toggle
$("#dropdown").click(() => {
    $("#dropdownArea").toggle();
});

// header category toggle
$("#categoryDropdown").click(() => {
    $("#CategoryDropdownArea").toggle();
});

// category toggle
$("#category-toggle-btn").click((e) => {
    e.preventDefault();
    $("#toggle-category").toggle();
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
            margin:10,
            nav:false,
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
// top categories slider
$('.top-categories-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            margin:10,
            nav:false,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.product-img-slider').owlCarousel({
    items:1,
    loop:false,
    center:true,
    margin:10,
    nav: false,
    dots: false,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    smartSpeed: 750
});