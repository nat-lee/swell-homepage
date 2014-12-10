$(document).ready(function() {

  //mobile navigation
  $("#nav_primary").mmenu({
     // options
  }, {
     // configuration
     clone: true,
     offCanvas: {
        pageNodetype: "nav"
     }
  });

  //scrolling header
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 120){
      $('.pageview').addClass('scroll-navigation');
      $('.pageview').removeClass('static-navigation');
    }else{
      $('.pageview').addClass('static-navigation');
      $('.pageview').removeClass('scroll-navigation');
    }
  });


  //mobile navigation burger button
  $('#nav_button').click(function(){
    $('#nav_primary').trigger("open.mm");
  });

  $(function () {
    $('.cycle-slideshow').maximage({
        cycleOptions: {
            fx:'fade',
            speed: 4000,
            timeout: 800,
            prev: '.slider-left',
            next: '.slider-right',
            pager:  '.slider-nav'
        },

        onFirstImageLoaded: function(){
          jQuery('.slider-content').hide();
          jQuery('.slider-content').fadeIn('slow');
        },

        fillElement: '.home-slider',

        onImagesLoaded: function() {
           $('.testimonial-slideshow').maximage({
               cycleOptions: {
                   fx: 'fade',
                   speed: 4000,
                   timeout: 800,
                   prev: '.testimonials-left',
                   next: '.testimonials-right',
                   pager:  '.testimonial-nav'
                 },
                 fillElement: '.testimonial-slider',
              });
          }
      });
  });

  //fancybox popup for video
  $('.video-link').fancybox({
    //fitToView:true,
    width:'100%',
    height:'100%',
    autosize:true,
    closeClick:false,
    openEffect:'none',
    closeEffect:'none',
    padding:0
  });

  //scroll down button on slider
  $(".icon-down-button").click(function(){
    $('html, body').animate({
      scrollTop: $("#expert-advice").offset().top
    }, 1000);
  });

});