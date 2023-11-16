$(document).ready(function(){
    $("#resumeButton").hover(shake);
});

function shake() {
    for (let i = 0; i < 3; i ++)
    {
        $("#resumeButton").animate({rotate: '1deg'}, 100);
        $("#resumeButton").animate({rotate: '-1deg'}, 100);
    }
    $("#resumeButton").animate({rotate: '0deg'}, 100);
}