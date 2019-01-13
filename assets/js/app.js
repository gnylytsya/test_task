//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
});


$('.showSingle').click(function () {
  $('.targetDiv').hide();
  $('.showSingle').removeClass('greenactive');
  $(this).addClass("greenactive")
  $('#div' + $(this).attr('target')).show();
});