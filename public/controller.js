$(document).ready(() => {
  console.log("hello world");

  $(".hamburger").on("click", () => {
    if ($(".mobile-nav").css("display") == "none")
      $(".mobile-nav").show("slow");
    else $(".mobile-nav").hide("slow");
  });

  $(".mobile-nav > ul > li").on("click", () => {
    $(".mobile-nav").hide("slow");
  });

  $("#root").scroll(() => {
    console.log("scrolling");
  });
  
  $('#mobile-boosting-selector').on('click', () => {
    if($('#mobile-boosting-list').css('display') !== 'none') {
      $('#mobile-boosting-list').hide('slow')
      $('.fa-arrow-up').hide('fast')
      $('.fa-arrow-down').show('fast')
    } else if($('#mobile-boosting-list').css('display') === 'none') {
      $('#mobile-boosting-list').show('fast')
      $('.fa-arrow-up').show('fast')
      $('.fa-arrow-down').hide('fast')
    }
  })

  $('#mobile-boosting-list > li').on('click', () => {
    $('#mobile-boosting-list').hide('fast')
    $('.fa-arrow-up').hide('fast')
    $('.fa-arrow-down').show('fast')
  })

});
