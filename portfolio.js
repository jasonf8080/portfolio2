var flexContainer = document.querySelector('.flex-container');
var chevLeft = document.querySelectorAll('.fa-chevron-left');
var chevRight = document.querySelectorAll('.fa-chevron-right');

chevRight[0].addEventListener('click', scrollRight1);
chevRight[1].addEventListener('click', scrollRight2);

chevLeft[0].addEventListener('click', scrollLeft1);
chevLeft[1].addEventListener('click', scrollLeft2);

function scrollRight1(e){
    flexContainer.style.transform = 'translateX(-90vw)';
}

function scrollRight2(e){
    flexContainer.style.transform = 'translateX(0vw)';
}



function scrollLeft1(e){
    flexContainer.style.transform = 'translateX(-90vw)';
}

function scrollLeft2(e){
    flexContainer.style.transform = 'translateX(0vw)';
}