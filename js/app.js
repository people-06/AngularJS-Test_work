
//slow scroll to down
$('.main-menu a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top -30
    }, 1000);
    e.preventDefault();
});