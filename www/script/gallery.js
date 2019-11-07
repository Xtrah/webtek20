//Creatint a function that handles the image gallery functionality

export function gallery(){
    // selecting the carousel img and slide div.
    const carouselSlide = document.querySelector('.carousel-slide')
    const carouselImages = document.querySelectorAll('.carousel-slide > img')
    // Buttons
    const prevBtn = document.querySelector('#prevBtn')
    const nextBtn = document.querySelector('#nextBtn')

    //Counter
    let counter = 1;
    let size = carouselImages[0].clientWidth

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

    //Button listeners
    // Next/previous image functionality, all images are stacked next to each other horoziontally, 
    // and then next image is displayed by translate/transformX with the current images width times the counter that indicates where in the cycle we are.

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

    //Adding first and last clone, to create an infinate loop, so that we can go either way "full circle".
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
}
//Calling the gallery function every time the browsers viewport resizes to handle issues with horisontal images, and next one it transition either way X image width.
window.addEventListener('resize', gallery)
console.log("Nå har gallery funk kjørt")
// Inspiration for this image gallery is partly from W3Schools, MDN, and  DevEd from youtube.com
