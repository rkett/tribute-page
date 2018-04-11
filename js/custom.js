/* 
* Variables
*/



/*
* Initialize the window.
* Set's opacity of #timeline-fade-1 to 100%
* simultaenously hides it, and then fades it in.
*/

$(window).ready(function() {
    /*$("#timeline-fade-1").css("opacity","1");
    $("#timeline-fade-1").css("display","none");
    $("#timeline-fade-1").fadeIn(1000);*/
});




/*
var cat = 0;

console.log(current_height[550]);
console.log(dict);

$(window).scroll(function() {
    console.log(scroll_pos);
    scroll_pos = $(this).scrollTop();
    cat = scroll_pos - $(this).scrollTop();
    console.log(cat-1+"cat");

    if ((Math.floor($("#timeline-fade-"+index).offset().top) < $(this).scrollTop()) && ($(this).scrollTop() < Math.floor($("#timeline-fade-"+(index+1)).offset().top))) {
        $("#timeline-fade-"+index).css("opacity","1");
        $("#timeline-fade-"+index).css("display", "none");
        $("#timeline-fade-"+index).fadeIn(1000);
        index = index + 1;
    };
});*/

/*
* jQuery scroll function. 
* When scrolling is initiated, alter current indexed
* #timeline-fade -> opacity: 100% -> display: none -> fadeIn().
*/

/*$(window).scroll(function() {
    var scrollbottom = Math.abs($(document).height() - $(window).height() - $(window).scrollTop());
    var wd = $(window).scrollTop(); //$(window).height() - $(window).scrollTop();

    console.log("WD:"+wd);
    console.log(scrollbottom);
    console.log($(window).scrollTop());

    if (Math.floor($("#timeline-fade-"+index).offset().top) < ($(window).scrollTop())) {
        $("#timeline-fade-"+(index+1)).css("opacity","1");
        $("#timeline-fade-"+(index+1)).css("display", "none");
        $("#timeline-fade-"+(index+1)).fadeIn(1000);
        index = index + 1;
        //console.log("Index IN if #1 :: "+index);
    };
});*/

/*console.log("DOCUMENT HEIGHT"+ $(document).height());
console.log("WINDOW HEIGHT"+ $(window).height());

$(window).scroll(function() {
    if ((Math.floor($("#timeline-fade-"+index).offset().top) < $(this).scrollTop()) && ($(this).scrollTop() < Math.floor($("#timeline-fade-"+(index+1)).offset().top))) {
        $("#timeline-fade-"+index).css("opacity","1");
        $("#timeline-fade-"+index).css("display", "none");
        $("#timeline-fade-"+index).fadeIn(1000);
        index = index + 1;

    };
    console.log("WINDOW HEIGHT"+ $(window).height());
    console.log(index);
    console.log(Math.floor($("#timeline-fade-"+(11)).offset().top));
    console.log($(window).height());
    console.log(Math.floor($("#timeline-fade-"+(11)).offset().top) == $(this).height());
    if (Math.floor($("#timeline-fade-"+(11)).offset().top) == $(this).height()) {
        console.log("AT MAX");
    };
});*/

var element_top         = 0; // Top of current element.
var element_bot         = 0; // Bottom of current element.
var window_top          = 0; // Top of window.
var window_bot          = 0; // Bottom of window.
var exit                = 0; // For the while loop.
var index               = 1; // For scrolling down.
var total_timeline_fade = 1; // Length of total timeline elements.


while(exit == 0) {
    if ($("#timeline-fade-"+total_timeline_fade).length) {
       console.log(total_timeline_fade);
        total_timeline_fade = total_timeline_fade + 1
    } else {
        exit = 1;
    }
};

$(window).scroll(function() {
    /*console.log("WINDOW HEIGHT: "+$(this).height()); // Window Height.
    console.log("DOC HEIGHT: "+$(document).height()); // Document Height.
    console.log("SCROLLTOP: "+$(this).scrollTop()); // Window Scroll Bar Top Height.
    console.log("FANCY: "+($(this).scrollTop() + $(this).height()));
    console.log(window.innerHeight);*/

    if (index < total_timeline_fade) {
        element_top = $("#timeline-fade-"+index).offset().top;
        element_bot = element_top + $("#timeline-fade-"+index).outerHeight();
        window_top = $(this).scrollTop();
        window_bot = window_top + $(this).height();
    };

    if ((element_top > window_top && element_bot < window_bot)) {
        $("#timeline-fade-"+index).css("opacity","1");
        $("#timeline-fade-"+index).css("display", "none");
        $("#timeline-fade-"+index).fadeIn(1000);
        index = index + 1;
        //console.log(index);
    };
});