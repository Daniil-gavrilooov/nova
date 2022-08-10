let burgerBtn = document.querySelector('.header__burger-btn')

function burgerMenu () {
    let burgerMenu = document.querySelector('.header__burger-menu')
    
    burgerBtn.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
}
