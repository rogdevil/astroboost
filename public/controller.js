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

  var $animation_elements = $(".show-on-scroll");
  var $window = $(window);
  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $(".show-on-scroll").each(function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position < window_bottom_position
      ) {
        $element.addClass("in-view");
      } else {
        $element.removeClass("in-view");
      }
    });
  }

  $window.on("scroll", check_if_in_view);
  $window.trigger("scroll");
});
