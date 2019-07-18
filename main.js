$(document).ready(function(){
  
  $(".with-drop").on("click", function(){
    console.log("click");
    $("*").find(".drop-down").removeClass("active");
    $(this).find(".drop-down").toggleClass("active");
  });

});