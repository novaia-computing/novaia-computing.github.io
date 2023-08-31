window.onscroll = function() {
    transitionHeaderBackground()
};

function transitionHeaderBackground() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.querySelector('.header').style.backgroundColor = "black";
    } else {
        document.querySelector('.header').style.backgroundColor = "transparent";
    }
}