$(document).ready(function(){
  
  $(".with-drop").on("click", function(){
    $("#nav-right").find(".drop-down").removeClass("active");
    $(this).find(".drop-down").toggleClass("active");
  });

});