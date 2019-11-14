$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#anotherwalrus-showing").toggle();
    $("#anotherwalrus-hidden").toggle();
  });
});


$(document).ready(function() {
    $("#anotherwalrus-showing").fadeIn();
    $("#anotherwalrus-hidden").fadeOut();
});
