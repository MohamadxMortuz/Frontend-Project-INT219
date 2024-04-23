const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Close
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When click on each nav__link in moble mode, remove the menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById('header')
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) header.classList.add('scroll-header')
	else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




// =======================slider image========

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.transform = `translateX(${-slideIndex * 100}%)`);
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides(); // Display initial slide



/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto', 
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3
        },
        1024: {
            spaceBetween: 50
        }
    }
});



/*=============== MIXITUP FILTER FEATURED ===============*/
var mixerFeatured = mixitup('.featured__container', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
	const scrollUp = document.getElementById('scrollup')
	// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 350) scrollUp.classList.add('show-scroll')
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link')
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/



// Add this JavaScript to toggle visibility of info boxes on image click

document.getElementById('image1').addEventListener('click', function() {
    var info = document.getElementById('info1');
    toggleVisibility(info);
});

// Add similar event listeners for other images

function toggleVisibility(element) {
    if (element.style.opacity === "1") {
        element.style.opacity = "0";
        element.style.pointerEvents = "none"; // Disable pointer events to prevent interaction
    } else {
        element.style.opacity = "1";
        element.style.pointerEvents = "auto"; // Enable pointer events
    }
}
