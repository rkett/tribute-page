/*
* Initialize the window.
* Set's opacity of #timeline-fade-1 to 100%
* simultaenously hides it, and then fades it in.
*/
$(window).ready(function() {});

/* Variables declared and initalized. */
var element_top         = 0; // Top of current element.
var element_bot         = 0; // Bottom of current element.
var window_top          = 0; // Top of window.
var window_bot          = 0; // Bottom of window.
var exit                = 0; // For the while loop.
var index               = 1; // For scrolling down.
var total_timeline_fade = 1; // Length of total timeline elements.

/* Acquire the total number of timeline-fade elements we have. */
while(exit == 0) {
    if ($("#timeline-fade-"+total_timeline_fade).length) {
        console.log(total_timeline_fade); // XXX
        total_timeline_fade = total_timeline_fade + 1
    } else {
        exit = 1;
    }
};

/*
* NOTE: <!DOCTYPE html> must be present for $(document) and $(window) to operate correctly.
* 
* A check is first made to ensure that we are not on an index greater than the total
* number of timeline-fade elements. If this passes, we set the next increment of 
* each given position (See above init.)
* 
* Upon any scroll we check if our timeline-fade elements are in the viewport, 
* if they are display them. The display works as such: Original CSS Opacity: 0 
* (this acts as a "virtual placeholder" of our element (keeps height)) ->
* set opacity: 1 -> display: none this removes our placeholder but sets it to
* none (which allows the fadeIn() function to operate) -> fadeIn(time:1000ms).
*/
$(window).scroll(function() {
    if (index < total_timeline_fade) {
        element_top = Math.floor($("#timeline-fade-"+index).offset().top);
        element_bot = element_top + Math.floor($("#timeline-fade-"+index).outerHeight());
        window_top = Math.floor($(this).scrollTop());
        window_bot = window_top + Math.floor($(this).height());
        console.log("ELE TOP"+element_bot); // XXX
        console.log("ELE BOT"+element_top); // XXX
        console.log("WIN TOP"+window_top); // XXX
        console.log("WIN BOT"+window_bot); // XXX
    };

    /* Logic courtesy of https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport?lq=1 */
    if ((element_top >= window_top && element_bot <= window_bot)) {
        $("#timeline-fade-"+index).css("opacity","1");
        $("#timeline-fade-"+index).css("display", "none");
        $("#timeline-fade-"+index).fadeIn(1000);
        index = index + 1;
    };
});