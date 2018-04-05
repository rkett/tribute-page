/* 
* Variables
*/

var index = 1; 

/*
* Initialize the window.
* Set's opacity of #timeline-fade-1 to 100%
* simultaenously hides it, and then fades it in.
*/

$(window).ready(function() {
    $("#timeline-fade-1").css("opacity","100");
    $("#timeline-fade-1").css("display","none");
    $("#timeline-fade-1").fadeIn(1000);
});

/* 
* jQuery scroll function. 
* When scrolling is initiated, alter current indexed
* #timeline-fade -> opacity: 100% -> display: none -> fadeIn().
*/
$(window).scroll(function() {
    if (Math.floor($("#timeline-fade-"+index).offset().top) < $(this).scrollTop()){
        index = index + 1;
        $("#timeline-fade-"+index).css("opacity","100");
        $("#timeline-fade-"+index).css("display", "none");
        $("#timeline-fade-"+index).fadeIn(1000);
    };
});