$(document).ready(function () {

  // preloader
  $(window).load(function(){
    $('.preloader').delay(1500).fadeOut(500);
  })

  // delay modal display
  $('.modalDialog').delay().css("display", "block");

})