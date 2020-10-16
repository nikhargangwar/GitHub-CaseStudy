
$(document).ready(function(){

    var ar= $("#points-of-sale li");

    ar.on("click",function(){
 
    $(this).find("p").slideToggle();
})

});