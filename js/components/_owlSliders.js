const owlSliders = () => {
  $('.js-slider-started').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive:{
      0:{
        items:1
      }
    }
  });

  $('.js-slider-packages').owlCarousel({
    loop: true,
    nav: true,
    responsive:{
      0:{
        items:1,
        navText: ["", ""]
      }
    }
  });

  $('.js-feedbacks').owlCarousel({
    loop: true,
    nav: false,
    responsive:{
      0:{
        items: 1
      }
    }
  });
};

export default owlSliders;
