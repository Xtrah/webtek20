//Desktop size image gallery
const current = document.querySelector('#current')
const imgs = document.querySelectorAll('.imgs img')
const opacity = 0.6

// set first image opacity
imgs[0].style.opacity = opacity

imgs.forEach( img => 
    img.addEventListener('click', imgClick))

function imgClick(e) {
    // reset opacity on all img
    imgs.forEach(img => (img.style.opacity = 1))

    // Change current image of source of clicked image
    current.src = e.target.src

    // Add fade-in class
    current.classList.add('fade-in')

    //Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500)

    //Change oppacity to var
    e.target.style.opacity = opacity
}

// Responsiv slider carousel functionality
const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide > img')
// Buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button listeners
nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length-1) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})
prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length -2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})