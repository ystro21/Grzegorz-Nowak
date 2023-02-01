const menu = document.querySelector('.menu-icon')
const navbar = document.querySelector('.navbar')

menu.addEventListener("click", () =>{
    menu.classList.toggle("move")
    navbar.classList.toggle("open-menu")
})

window.onscroll = () => {
    menu.classList.remove("move")
    navbar.classList.remove("open-menu")
}

const year = document.querySelector('#year')
year.innerText = new Date().getFullYear()

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0)
})

const scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
})

