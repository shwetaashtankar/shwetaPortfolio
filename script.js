var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove",function(client){
  cursor.style.left=client.x+20+"px";
  cursor.style.top=client.y+20+"px";
})

 //hover on image display
   
 var boxes = document.querySelectorAll("#BOX");
 boxes.forEach(function(elem){
     elem.addEventListener("mouseenter", function(){
       var att = elem.getAttribute("data-image");
         cursor.style.width="18vw";
         cursor.style.height="18vw";
         cursor.style.borderRadius="0";
         cursor.style.backgroundImage= `url(${att})`
     })
 
     elem.addEventListener("mouseleave", function(){
         cursor.style.width="2%";
         cursor.style.height="3.5%";
         cursor.style.borderRadius="50%";
         cursor.style.backgroundImage= "none"
         
     })
 })

document.getElementById('menu-icon').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';


  } else {
      navLinks.style.display = 'flex';
  }
});

function home(){
  let tl = gsap.timeline();
  tl.from('nav',{
    opacity:0,
    duration:1,
    y:-100,
    delay:1,
    stagger:1
  })  
  tl.from('#name span, .download',{
    opacity:0,
    duration:1,
    delay:1,
    y:100,
    stagger:1,
    pin:true
    })

    tl.from('.js_img',{
      opacity:0,
      duration:1,
      scale:0,
      stagger:1,
      pin:true
      })
      tl.from('.tailwind_img',{
        opacity:0,
        duration:1,
        scale:0,
        stagger:1,
        pin:true
        })
        tl.from('.gsap_img',{
          opacity:0,
          duration:1,
          scale:0,
          stagger:1,
          pin:true
          })
          tl.from('.html_img',{
            opacity:0,
            duration:1,
            scale:0,
            stagger:1,
            pin:true
            })
            tl.from('.css_img',{
              opacity:0,
              duration:1,
              scale:0,
              stagger:1,
              pin:true
              })
              tl.from('.react_img',{
                opacity:0,
                duration:1,
                scale:0,
                stagger:1,
                pin:true
                })
    
}
home()


//about animation
function about(){
  let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#aboutPage",
        start: "50% 50%",
        end: "200% 50%",
        // markers:true,
        scrub: true,
        pin: true
        
    }

  })

  
  tl2.to('.text1',{
    marginTop: '-15%',
    opacity: '1'
  }, 'ab')
  
  
  tl2.to('.text2',{
    marginTop: '-50%',
    opacity: '1'
  }, 'ab1')
  
  tl2.to('.text1',{
    marginTop: '-20%',
    opacity: '0'
  }, 'ab1')

  
  tl2.to('.text3',{
    marginTop: '-40%',
    opacity: '1'
  }, 'ab2')
  
  tl2.to('.text2',{
    marginTop:'-50%',
    opacity: '0'
  }, 'ab2')

  
  tl2.to('.text4',{
    marginTop: '-50%',
    opacity: '1'
  }, 'ab3')
  
  tl2.to('.text3',{
    marginTop: '-5%',
    opacity: '0'
  }, 'ab3')
  
  tl2.to('.text1',{
    marginTop: '-80%',
  }, 'ab3')

  
  tl2.to('.roundCircle',{
    // x:'250%',
    rotate:'360deg'
    
  }, 'ab3')

 }

 about()

 
//  skills animation

function skills(){
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.main-skill',
      start: '20% 40%',
      end: '150% 40%',
      scrub: true,
      pin:true,
      // markers: true
    }
   })
  
   tl.to('#figma',{
      opacity:1,
      filter: 'blur(0px)'
   })
   .to('#html',{
    opacity:1,
    filter: 'blur(0px)'
   })
   .to('#css',{
    opacity:1,
    filter: 'blur(0px)'
   })
   .to('#boot',{
    opacity:1,
    filter: 'blur(0px)'
   })
   .to('#tailwind',{
    opacity:1,
    filter: 'blur(0px)'
   })
   .to('#js',{
    opacity:1,
    filter: 'blur(0px)'
   })
   .to('#react',{
    opacity:1,
    filter: 'blur(0px)'
   })
   .to('#gsap',{
    opacity:1,
    filter: 'blur(0px)'
   })
}
skills()

// contact
function connect(){
  let tl4= gsap.timeline({
    scrollTrigger:{
        trigger: "#connectText",
        start: "50% 50%",
        end: "200% 50%",
        // markers:true,
        scrub: true,
        pin: true
        
    }
  })
  
 tl4.to('.textHover',{
    width:'100%'
  })
 }
 connect()