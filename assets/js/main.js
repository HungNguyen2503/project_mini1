window.addEventListener('scroll', function () {
const header = document.querySelector('.header');
const logo = document.querySelector('.header .img-logo img');
if (window.scrollY > 10) {
    header.classList.add('header--shrink');
} else {
    header.classList.remove('header--shrink');
}
});

const btnMenu = document.querySelector("#bars")
const menu = document.querySelector(".header .menu")

btnMenu.onclick = function(){
    menu.classList.add("menuShow")
}
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
        menu.classList.remove("menuShow");
    }
});