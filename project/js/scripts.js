$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#user").prepend("<li>bark</li>");
    $("ul#webpage").prepend("<li>bark!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("ul#user").prepend("<li>meow</li>");
    $("ul#webpage").prepend("<li>meow!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#dundee").click(function() {
    $("ul#test").prepend("<li><img src=img/croc.jpg alt=image of Crocodile></li>");

    $("ul#test").children("li").first().click(function() {
      $(this).remove();
    });


  });

});
