function showMenu() {
    $('#schnitzelMenu').removeClass('closed');  
    $('#schnitzelMenu').addClass('opened');
    $('#schnitzelMenu').find('img').attr('src', '/assets/images/icons/close.svg');
}

function hideMenu() {
    $('#schnitzelMenu').removeClass('opened');
    $('#schnitzelMenu').addClass('closed');
    $('#schnitzelMenu').find('img').attr('src', '/assets/images/icons/schnitzel.svg');
}

$('#schnitzelMenu').click( function() {
    $('#headerNav').toggleClass('enabled');
    if ($('#schnitzelMenu').hasClass('opened')) {
        hideMenu();
    }
    else if ($('#schnitzelMenu').hasClass('closed')) {
        showMenu();
    }
});

$(document).click(function(event) { 
    if(!$(event.target).closest('#headerNav').length) {
        if ($('#schnitzelMenu').hasClass('opened')) {
            $('#headerNav').toggleClass('enabled');
            hideMenu();
        }
    }
});

$('#schnitzelMenu').click(function(event){
    event.stopPropagation();
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