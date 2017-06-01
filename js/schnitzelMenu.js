$('#schnitzelMenu').click( function() {
    $('#headerNav').toggleClass('enabled');
    if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $(this).addClass('closed');
        $(this).find('img').attr('src', 'assets/images/icons/schnitzel.svg');
    }
    else if ($(this).hasClass('closed')) {
        $(this).removeClass('closed');  
        $(this).addClass('opened');
        $(this).find('img').attr('src', 'assets/images/icons/close.svg');
    }
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#headerOpmaak').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $('#headerOpmaak').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('#headerOpmaak').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}