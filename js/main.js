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
sr.reveal('.skills_text' , {delay:100})
sr.reveal('.skills_data' , {interval: 100})
sr.reveal('.skills_img' , {interval: 100})

//sr.reveal('.project_img' , {})

//sr.reveal('.services-title', {})
/*
// Project
sr.reveal('.project_img' , {interval: 200})


// Services 
sr.reveal('.services-title', {})
sr.reveal('.services_content' , {delay:200})
// sr.reveal('.services_description' , {interval:200})

*/

// Contact
//sr.reveal('.contact_input' , {})
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

function validateName() {
  var name = document.getElementById('name').value;
  if(name.length == 0) {
    alert("Name can't be blank") ;
    return false;

  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name") ;//Validation Message
    return false;
  }
  return true;
}

function validatePhone() {
  var phone = document.getElementById('phone').value;
  if(phone.length == 0) {
    alert("Phone number can't be blank") ;//Validation Message
    return false;
  }

  if(!phone.match(/^[0]?[789]\d{9}$/)) {
   alert("Please enter a correct phone number") ;//Validation Message
   return false;
 }

 return true;

}

function validateEmail () {

var email = document.getElementById('email').value;
if(email.length == 0) {
  alert("Email can't be blank") ;//Validation Message
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  alert("Please enter a correct email address") ;//Validation Message
  return false;

}

return true;

}

function validateMessage () {
  var message = document.getElementById('email').value;
  if(message.length == 0) {
  alert("Email can't be blank") ;//Validation Message
  return false;
}
  return true ;
}


function validateForm() {
if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {

  alert("Form not submitted");//Validation Message
  return false;
}
else {
  submitted=true;
  return "Submitted";
}
}
