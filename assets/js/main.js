/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
      letters = homeText.textContent.trim().split(''), 
      angleStep = 360 / letters.length

homeText.textContent = ''

// Iterates through each character
letters.forEach((char, i) => {
   const span = document.createElement('span') // Creates a <span> for each letter
   span.textContent = char // Inserts each character into the span
   span.style.transform = `rotate(${i * angleStep}deg)` // Rotates each letter based on index
   homeText.appendChild(span) // Appends the span to the main container
})

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
   strings: ['Backend','Desenvolvedor .Net','Analista Dados'], // Insert Profissions
   typeSpeed: 60,
   backSpeed: 30,
   backDelay: 200,
   loop:true,
})

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/ 
const swiperWork = new Swiper('.work__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
})

/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll('.services__card'),
      servicesButtons = document.querySelectorAll('.services__button')

// It iterates over each button found
servicesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentCard = button.closest('.services__card'), // Get the class of the clicked button
          isOpen = currentCard.classList.contains('services-open') // Check already has the servi

    // Close all other services data
    servicesCards.forEach(card => {
      card.classList.replace('services-open','services-close')
    })

    // if the clicked card was closed, it opens it
    if(!isOpen){
      currentCard.classList.replace('services-close','services-open')
    }
  })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
  // Prevent the page from reloading
  e.preventDefault()

  try {
    // serviceID - templateID - #form - publicKey
    await emailjs.sendForm('service_06jpk01','template_8lr3mui','#contact-form','IUReofivxR-n61rl4')

    //Show sent message
    contactMessage.textContent = 'Mensagem enviada com sucesso!✅'
  } catch (error){
    //Show error message
    contactMessage.textContent = 'Mensagem não foi enviada (service error)❌'

  }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home")
// and activate the link with the class .active-link
const scrollActive = () => {
    // We get the position by scrolling down
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id, // id of each section
              top = section.offsetTop - 50, // Distance from the top edge
              height = section.offsetHeight, // Element height
              link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

        if(!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/
