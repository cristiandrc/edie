const btnMenu = document.querySelector('#btn_menu')
const navbar = document.querySelector('#navbar')
const BURGER_TOP = document.querySelector(".burger__icon-top")
const BURGER_MEDDLE = document.querySelector(".burger__icon-meddle")
const BURGER_BOTTOM = document.querySelector(".burger__icon-bottom")

btnMenu.addEventListener('click', (e) => {
    navbar.classList.toggle('open')
    btnMenu.classList.toggle('open')
    BURGER_TOP.classList.toggle('open')
    BURGER_MEDDLE.classList.toggle('open')
    BURGER_BOTTOM.classList.toggle('open')

    if(navbar.className === 'header-menu open') {
        document.body.style = 'overflow-y: hidden;'
    }else {
        document.body.style = 'overflow-y: scroll;'

    }
})


navbar.addEventListener('click', e => {
    if(e.target.nodeName === 'A') {
        navbar.classList.toggle('open')
        btnMenu.classList.toggle('open')
        BURGER_TOP.classList.toggle('open')
        BURGER_MEDDLE.classList.toggle('open')
        BURGER_BOTTOM.classList.toggle('open')
        document.body.style = 'overflow-y: scroll;'
    }
})