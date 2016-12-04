$(function(){
  // default behavior
$(".screenshot-text").hide();

    $("#menu").children().each(function(index){
        console.log(this);
        $(this).on("click", function(evt){
            console.log("Clicked");
            evt.preventDefault();
        });
    });

    $(".screenshot").hover(
      function(){
          $(".screenshot-text").show();
      },
      function(){
        $(".screenshot-text").hide();
      }
    );


});
