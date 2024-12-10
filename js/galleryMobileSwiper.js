

$('.Gallery-container').imagesLoaded( {

},  function() {
  $(document).ready(function() {

// gallery slider
let popSlider = new Swiper('.swiper-gallery', {
    speed: 500,
    slidesPerView:1,
    spaceBetween: 40,
    grabCursor:true,
    effect:'fade',
   loop:true
  });
let gallerys = document.querySelectorAll('.gallery-img')
let popup = document.querySelector('.Gallerypopup')
let h =0

let Is = true
for (let i = 0; i < gallerys.length; i++) {
    const element = gallerys[i];
  
        element.addEventListener("click" ,function (params) {    
      
                popSlider.slideTo(i+1,0)
                popup.classList.add('show')
                console.log("i", i);
                console.log("popactive",popSlider.activeIndex);           
        } )
        let close = document.querySelector('.close')
    
        close.addEventListener('click',()=>{
          
            let popup = document.querySelector('.Gallerypopup')
        popup.classList.remove('show')
        })
    }

   


 // Enable Scroll
 const lenis = new Lenis()
 function raf(time) {
   lenis.raf(time)
   requestAnimationFrame(raf)
 }
 
 requestAnimationFrame(raf)

 gallerys.forEach(g=>{
  gsap.to(g,{
   opacity:1,
   y:1,
   scrollTrigger:{
    trigger:g,
    start:'top 70%',
    end:'end end'
   }
  })
 })

  }
)
})

