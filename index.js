let navBar = document.querySelector('nav');
let stickyPos = navBar.offsetTop;
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let shadow = document.querySelector('.shadow');
window.onscroll = function(){makeSticky()};
function makeSticky(){
    if(window.pageYOffset > stickyPos){
        navBar.classList.add("stickyNav");
    }else{
        navBar.classList.remove("stickyNav");
    }
}

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle("opened-menu");
    shadow.classList.toggle("shadowed");
});