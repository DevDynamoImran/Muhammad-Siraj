

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:'2500',
    delay:400,
})
sr.reveal(`.content`)
sr.reveal(`.mainimg`,{delay:700,origin:'right'})
sr.reveal(`.about-text`,{delay:700,origin:'left'})
sr.reveal(`.aboutimg`,{delay:700,origin:'right'})
sr.reveal(`.card-1`,{delay:300,origin:'bottom'})
sr.reveal(`.card-2`,{delay:600,origin:'bottom'})
sr.reveal(`.card-3`,{delay:900,origin:'bottom'})
sr.reveal(`.hov`)

// =================scroll section active links===============

const sections = document.querySelectorAll('section[id]');

const scrollActive = ()=>{
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
            sectionsClass.classList.remove('active-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)

// =============== show menu =================

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    //   ======= menu show ========
    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu');
        })
    }
    //   ======= menu close ========
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu');
        })
    }

    // ============ remove menu mobile =============  
    const navLink = document.querySelectorAll('.nav-link');

    const linkAction = ()=>{
        const navMenu = document.getElementById('nav-menu');

        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click',linkAction));