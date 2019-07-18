$(document).ready(function(){
  
  $(".with-drop").on("click", function(){
    console.log("click");
    $(this).find(".drop-down").toggleClass("active");
  });

});