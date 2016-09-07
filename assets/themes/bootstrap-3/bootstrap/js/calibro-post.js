//mobile crousel
$('#mobile-slider-post').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '100px',
  adaptiveHeight: false,
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        dots: true
      }
    }
  ]
});
