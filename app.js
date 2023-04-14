// Function to apply the fade-in animation
function fadeInAnimation() {
     const elementsToAnimate = document.querySelectorAll('.animIn');
   
     gsap.from(elementsToAnimate, {
       duration: 1.5,
       opacity: 0,
       stagger: 0.2,
       ease: "power2.out"
     });
   }
   
   // Trigger the animation when the page loads
   window.addEventListener('load', fadeInAnimation);
//-------------------------------------------------------------------------------




const nav = document.querySelector('.nav')

gsap.to(nav, {
     scrollTrigger: {
     start: 'top -10',
     end: '500px 100px',
     //toggleClass: {className: 'nav-scroll', targets: 'nav'},
     
     scrub: true,
     },
     background: '#8E8B82'
})




const img1 = document.querySelector('.firstImg')

gsap.fromTo('.firstImg', {x: -1000}, {
     scrollTrigger: {
          trigger: '.first',
          start: 'top 100%',
          end: 'top 30%',
          
          scrub: true
     },
     x: 0,
      
})

gsap.fromTo('.firstSpan', {x: 1000}, {
     scrollTrigger: {
          trigger: '.first',
          start: 'top 100%',
          end: 'top 30%',
         
          scrub: true
     },
     x: 0,
      
})




//--------------------------------------------------------------------






gsap.fromTo('.secondImg', {x: 1000}, {
     scrollTrigger: {
          trigger: '.second',
          start: 'top 100%',
          end: 'top 40%',
          
          scrub: true
     },
     x: 0,
      
})

gsap.fromTo('.secondSpan', {x: -1000}, {
     scrollTrigger: {
          trigger: '.second',
          start: 'top 100%',
          end: 'top 40%',
          
          scrub: true
     },
     x: 0,
      
})

//--------------------------------------------------------------

gsap.fromTo('.thirdImg', {x: -1000}, {
     scrollTrigger: {
          trigger: '.third',
          start: 'top 100%',
          end: 'top 30%',
          
          scrub: true
     },
     x: 0,
      
})

gsap.fromTo('.thirdSpan', {x: 1000}, {
     scrollTrigger: {
          trigger: '.third',
          start: 'top 100%',
          end: 'top 30%',
         
          scrub: true
     },
     x: 0,
      
})


//---------------------------------------------------------------


gsap.fromTo('.fourImg', {y: '-100%'}, {
     scrollTrigger: {
          trigger: '.four',
          start: 'top 100%',
          end: 'top 20%',
          
          scrub: true
     },
     y: 0,
      
})


gsap.fromTo('.fourImg1', {x: 0}, {
     scrollTrigger: {
          trigger: '.four',
          start: 'center 100%',
          end: 'top -20%',
          
          scrub: true
     },
     x: '-50%',
      
})


gsap.fromTo('.fourImg2', {x: 0}, {
     scrollTrigger: {
          trigger: '.four',
          start: 'center 100%',
          end: 'top -20%',
          
          scrub: true
     },
     x: '50%',
      
})





//--------------------------------------------------------------


const home = document.querySelector('#Home');

home.onclick = ()=>{
     gsap.to(window, {duration: 1, scrollTo:"#top"});
}


const habitat = document.querySelector('#Habitat');

habitat.onclick = ()=>{
     gsap.to(window, {duration: 1,scrollTo:".first"});
}


const numbers = document.querySelector('#Numbers');

numbers.onclick = ()=>{
     gsap.to(window, {duration: 1,scrollTo:".second"});
}


const threats = document.querySelector('#Threats');

threats.onclick = ()=>{
     gsap.to(window, {duration: 1,scrollTo:".third"});
}


const help = document.querySelector('#Help');

help.onclick = ()=>{
     gsap.to(window, {duration: 2,scrollTo:".four"});
}

