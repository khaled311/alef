$(function() {

  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
});


  // open Side Nav
  $(".menuTriger").on("click", function() {
      $(this).fadeOut();
      $(".sideNav").toggleClass("open");
      $(".navover").toggleClass("open");
      $("body").css("overflow", "hidden");
  });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
      if($(".sideNav").hasClass("open")){
          $(".menuTriger").fadeIn();
          $(".navover").removeClass("open");
          $(".sideNav").toggleClass("open");
          $("body").css("overflow", "auto");
      }
  });

  // Search

  $(".search-mob,.search-overlay").on("click", function() {
    $(".up-header .search").toggleClass("open");
    $(".search-overlay").toggleClass("open");
    $("body").css("overflow", "hidden");
  });

  $(".search-overlay").on("click", function(){
    $("body").css("overflow", "auto");
  });

  // Search

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: ["<span></span>","<span></span>"]
  });

  // Best Seller Slider
  $('.bestSeller .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 6,
    margin: 12,
    dots: true,
    smartSpeed: 1000,
    responsive:{
      0:{
          items:1
      },
      600:{
        items: 3
      },
      768:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:6
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  // Featured Slider
  $('.featured .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 6,
    margin: 12,
    dots: true,
    smartSpeed: 1000,
    responsive:{
      0:{
          items:1
      },
      600:{
        items: 3
      },
      768:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:6
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  // Recently Arrived Slider
  $('.recent-arrived .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 6,
    margin: 12,
    dots: true,
    smartSpeed: 1000,
    responsive:{
      0:{
          items:1
      },
      600:{
        items: 3
      },
      768:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:6
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  // Clients Slider
  $('.clients .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 6,
    margin: 20,
    dots: true,
    smartSpeed: 1000,
    responsive:{
      0:{
          items:1
      },
      600:{
        items: 3
      },
      768:{
          items:5
      },
      992:{
          items:7
      },
      1200:{
          items:9
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
      $(this).toggleClass("trans");
      $(this).parent().parent().siblings().find('.collapse').collapse('hide');
      $(this).parent().parent().siblings().find('button').removeClass("trans");
  });

  // Animation On Scroll
  AOS.init();

})