$(document).ready(function(){
  
  $(".with-drop").on("click", function(){
    //se ci sono altri dropdown aperti nella nav, li chiudo
    $("#nav-right").find(".drop-down").removeClass("active");

    //trovo il dropdown figlio e lo apro
    $(this).find(".drop-down").toggleClass("active");
  });

});