$(function(){
    $("#menu").children().each(function(index){
        console.log(this);
        $(this).on("click", function(evt){
            console.log("Clicked");
            evt.preventDefault();
        });
    });
});