const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});


function animation() {
    const image=document.querySelector("#img")
  
  const playbtn = document.querySelector("#buy")
  
  image.addEventListener("mouseenter",()=>{
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
  }) 
  image.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
  })
  image.addEventListener("mousemove",(dets)=>{
    gsap.to(playbtn,{
        left:dets.x-50,
        right:DataTransfer.y-80
    })
  })
  
  
  }
  
  animation()
  
  
  function loadanimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    
    })
    gsap.from("#page1 #img",{
        scale:0.89,
        opacity:0,
        delay:1.3,
        duration:0.9
    })
  }
  loadanimation()