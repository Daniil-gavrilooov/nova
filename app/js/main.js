let burgerBtn = document.querySelector('.header__burger-btn')

function burgerMenu () {
    let burgerMenu = document.querySelector('.header__burger-menu')
    
    burgerBtn.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
}

$(function(){
    $('.project__slider').slick({
        slidesToShow: 1,
        prevArrow: '<img class="prev__arrow" src="images/project_slider-prevArrow.svg" alt="">',
        nextArrow: '<img class="next__arrow" src="images/project_slider-nextArrow.svg" alt="">'
    });
  });
