

/*RESPONSIVE NAV*/
var menu = document.querySelector('.menu');
var menuIcon = document.querySelector('.menu-icon');
var menuIconIcon = document.querySelector('.menu-icon i');
 
menuIcon.addEventListener('click', displayMenu);

function displayMenu(e){
    menuIcon.classList.toggle('menu-active');

    if(menuIcon.classList.contains('menu-active')){
        menuIcon.innerHTML = '<i class="fas fa-times"></i>';
        menu.style.right = '0px';

    } else {
        menuIcon.innerHTML = ' <i class="fas fa-bars"></i>';
        menu.style.right = '-500px';
    }




       
    
}