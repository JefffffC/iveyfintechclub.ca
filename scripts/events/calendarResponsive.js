// function which resizes the iframe to make calendar responsive

$(window).on("load resize", function() {
  var targetWidth = $(".calendar-holder").width();
  if (targetWidth < 468) {
    targetWidth = 468;
  }
  $("iframe").each(function(index, elem) {
    elem.setAttribute("width", targetWidth);
  });
});
