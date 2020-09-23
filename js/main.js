const showMenu = (toggleId , navId) => {
    const toggle = document.getElementById(toggleId) ,
    nav = document.getElementById(navId) 

    if(toggle && nav) {
        toggle.addEventListener('click' , () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    //Active-link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')

    //Remove-link
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show')
    
}

navLink.forEach(n => n.addEventListener('click',linkAction));

const sr = ScrollReveal({
    origin: 'top' ,
    distance: '80px' ,
    duration: 2000,
    reset: true 
});


// Home
sr.reveal('.home_title' , {})
sr.reveal('.button' , {delay:150})
sr.reveal('.home_img' , {delay:300})
sr.reveal('.home_text-rotator' , {delay:450})
sr.reveal('.home_social-icon' , {interval: 200})



// About
sr.reveal('.about_img' , {})
sr.reveal('.about_subtitle' , {delay:200})
sr.reveal('.about_text' , {delay:400})
sr.reveal('.about_information-data' , {delay:600})

sr.reveal('.button' , {delay:1000})
//Education detail
sr.reveal('.section-title', {})
sr.reveal('.education_content' ,{interval:200})
sr.reveal('.education_time' , {interval: 200})


// Skills
sr.reveal('.skills_subtitle' , {})
sr.reveal('.skills_text' , {delay:200})
sr.reveal('.skills_data' , {interval: 200})
sr.reveal('.skills_img' , {delay: 400})


// Project
sr.reveal('.project_img' , {delay: 400})


// Services 
sr.reveal('.services-title', {})
sr.reveal('.services_content' , {interval:200})
sr.reveal('.services_title' , {delay:200})
sr.reveal('.services_description' , {delay:300})


// Contact
sr.reveal('.contact_input' , {delay: 100})

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)
 

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
    }else {
      document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
    }
  });
}