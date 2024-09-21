let header = document.querySelector('.header')
window.addEventListener('scroll', () => {
    if (window.scrollY > 64) {
        header.classList.add("headerScrolled")
    } else if (window.scrollY <= 64) {
        header.classList.remove("headerScrolled")
    }
})