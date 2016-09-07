//check device
var device = /Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent)

//About page
$('#aboutus').click(function(){
  if($('#aboutWrap').hasClass('fadeOut')){
    $("#aboutWrap.fadeOut").off("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
    $('.tlt').textillate('start');
    $('#aboutWrap').addClass('aboutShow fadeIn')
    $('#aboutWrap').removeClass('aboutHide fadeOut')
    $('#aboutus > a').html('<object type="image/svg+xml" data="assets/media/images/close_icon.svg" class="closeIcon"></object>')
    $('body').addClass('noscroll')
  }else {
    $('.tlt').textillate('stop');
    $('#aboutWrap').removeClass('aboutShow fadeIn')
    $('#aboutus > a').text('about')
    $('#aboutWrap').addClass('fadeOut')
    $("#aboutWrap.fadeOut").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
      $('#aboutWrap').addClass('aboutHide')
    });
    $('body').removeClass('noscroll')

  }
})

$('.tlt').textillate({loop:true,autoStart:false});

//Projects horizontal div
var w = $(window).width();
var n = $(".projectBlock").length;

$(".projectBlock").each(function() {
    $(this).width(w);
});

$('#projectsWrapper').width((w*n));

$(window).resize(function(){
  w = $(window).width();

  $(".projectBlock").each(function() {
      $(this).width(w);
  });

  $('#projectsWrapper').width((w*n));
})

//controll video
$(".videoWrapper").each(function(){
  if($(this).find('source').attr('src')){
    $(this).hover( hoverVideo, hideVideo );
  }
})

$(window).on('load',function(){

  //projects carousel
  $('.carousel-slick').slick({
    lazyLoad: 'ondemand',
    lazyLoadBuffer:0,
    infinite: true,
    speed: 300,
    arrows:false,
    autoplay: false,
    fade: true,
    cssEase: 'linear',
    pauseOnHover:false,
    pauseOnFocus:false,
    swipe:false
  });


  //mobile crousel
  $('#mobile-slider').slick({
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

  $('#mobile-slider').on('afterChange', function(event, slick, currentSlide){
    $('.mobileTitle').each(function(i) {
      if(i == currentSlide){
        $(this).addClass('activeTitle');
      }else {
        $(this).removeClass('activeTitle');
      }
    })
  });

});

if(!device){

  mapboxgl.accessToken = 'pk.eyJ1IjoidGVvIiwiYSI6IllvZUo1LUkifQ.dirqtn275pAKdnqtLM2HSw';
  var map = new mapboxgl.Map({
      container: 'map',
      zoom: 4.5,
      center: [9.153978,45.494453],
      bearing: 0,
      style: 'mapbox://styles/mapbox/satellite-v9',
      hash: false,
      interactive: false
  });


  // var y = $('.arrowHome').offset().top + $('.arrowHome').height();
  // var x = $('.arrowHome').offset().left + $('.arrowHome').width()/2;
  // var n = map.unproject([x,y]);
  // var delta = 45.494453 - map.unproject([x,y]).lat;

  //map.setCenter([9.153978,45.494453+delta]);

  // map.setZoom(4.5);
  // map.rotateTo(0);

  $('#coordinates').on('mouseover', function(){
    if($(window).scrollTop() > 0){return}
    $('#map').css('opacity',0.2)
    map.easeTo({zoom:16,bearing:-43, duration:8000, animate:true})
  })

  $('#coordinates').on('mouseout', function(){
    $('#map').css('opacity',0.0)
    map.zoomTo(4.5,{duration:2000})
    map.easeTo({zoom:7,bearing:0, duration:2000, animate:true})
  })
}

$(window).scroll(function() {
  if(!device){
    $('#map').css('opacity',0.0)
    map.zoomTo(4.5,{duration:2000})
  }

   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     $('#scrollWrapper').mousewheel(function(evt, chg) {
        this.scrollLeft -= (chg);

        $('.projectBlock').each(function(i){
          var carousel = $(this).find('.carousel-slick');
          var video = $(this).find('video');
          if($(this).offset().left <= w && $(this).offset().left > 0 && !$(this).hasClass('in-viewport') ){
            $(this).addClass('in-viewport')
            if(video.length){
              if(!video.find('source').attr('src')){
                var src = video.find('source').attr('data-src')
                video.find('source').attr('src',src)
                video.get(0).load();
                $(this).find('.videoWrapper').hover(hoverVideo, hideVideo);
              }
            }else{
              carousel.slick('play')
            }
          }else if($(this).offset().left < 0 && $(this).hasClass('in-viewport')){
            $(this).removeClass('in-viewport')
            if(!video.length){
              carousel.slick('pause')
            }

          }
        })

        evt.preventDefault();
        if( evt.deltaY > 0 && $(this).scrollLeft() == 0){
          $('#scrollWrapper').unmousewheel();
        }
     });
   }
});

//video controll function
function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

$(".infoLink").click(function() {
  window.location = $(this).find("a.readMore").attr("href");
  return false;
});
