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