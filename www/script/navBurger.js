//animation for the responsive navBurger.
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle navBurger
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.25s ease forwards ${index / 14}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    //Clicking navLinks li elements, reset all states.
    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navLinks.forEach((link) => {
            link.style.animation = ''
        });
    });
}
//Invoking all the functions above in this statment.
navSlide();