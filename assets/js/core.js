$(document)
  .ready(function() {
    $("nav.top ul li")
      .click(function(){
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
  });