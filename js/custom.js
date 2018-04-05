
$(window).ready(function() {
    console.log("Window Ready.");
    $("#timeline-fade-1").css("opacity","100");
    $("#timeline-fade-1").css("display","none");
    $("#timeline-fade-1").fadeIn(1000);

});

var index = 1;
$(window).scroll(function() {
    
    console.log(index);

    if (Math.floor($("#timeline-fade-"+index).offset().top) < $(this).scrollTop()){
        index = index + 1;
        $("#timeline-fade-"+index).css("opacity","100");
        $("#timeline-fade-"+index).css("display", "none");
        $("#timeline-fade-"+index).fadeIn(1000);
        console.log("INDEX"+index);
    };

    console.log($(this).scrollTop());
    console.log(Math.floor($("#timeline-fade-1").offset().top));
    console.log(Math.floor($("#timeline-fade-1").offset().top) == $(this).scrollTop());
});

/*560
custom.js:13 560.796875
custom.js:15 false*/