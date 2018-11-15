var header = document.querySelector('header');
var toggleHeaderLightClass = function () {
    var scroll = window.pageYOffset;
    if (scroll > 280) {
        if (!header.classList.contains('is-light')) {
            header.classList.add('is-light');
        } else {
            return false;
        }
    } else {
        header.classList.remove('is-light');
    }
}
var toggleMenu = function () {
    
    header.classList.toggle('is-open');
}

window.addEventListener('scroll', toggleHeaderLightClass);

var menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

var links = document.querySelectorAll("li a");
links.forEach(links =>{
    links.addEventListener("click", function(){
        header.classList.remove("is-open");
    });
});

