$(document).ready(function() {

  //mobile navigation
  $("#nav_primary").mmenu({
     offCanvas:{
      position  : "top",
      zposition : "front"
     }
  }, {
     // configuration
     clone: true,
     offCanvas: {
        pageNodetype: "nav",
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

  //mobile navigation close button
  $('.close-menu').click(function(){
    //alert('click);
    $('#mm-nav_primary').trigger("close.mm");
  });

  $(function () {
    $('.cycle-slideshow').maximage({
        cycleOptions: {
            fx:'fade',
            speed: 4000,
            timeout: 800,
            autostop:1,
            autostopCount:1,
            prev: '.slider-left',
            next: '.slider-right',
            pager:  '.slider-nav',
        },

        // onFirstImageLoaded: function(){
        //   jQuery('.slider-content').hide();
        //   jQuery('.slider-content').fadeIn('slow');
        // },

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

  //thumb click on ipad/iphone
  $('.thumb').attr("onclick","return true");


});