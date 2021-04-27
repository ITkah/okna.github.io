var callMenu = document.getElementsByClassName('menu');
var nav = document.getElementsByClassName('navigation');
var closeMenu = document.getElementsByClassName('close');

callMenu[0].onclick = function() {
    nav[0].classList.toggle("nav_active");
}

closeMenu[0].onclick = function() {
    nav[0].classList.remove("nav_active");
}