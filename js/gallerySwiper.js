

$('.Gallery-container').imagesLoaded( {

},  function() {
  $(document).ready(function() {
    // CUSOR FOLLOWER

    follower = $(".Cursor-follower");
let posX = 0,
    posY = 0;

    let mouseX = 0,
    mouseY = 0;
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
       
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
  }
});

document.querySelector('.Gallerys').addEventListener('mousemove',(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;
})

$(".Gallerys").on("mouseenter", function(e) {
    follower.addClass("active");
});
$(".Gallerys").on("mouseleave", function(e) {
    follower.removeClass("active");
});

// gallery slider
let popSlider = new Swiper('.swiper-gallery', {
    speed: 500,
    slidesPerView:1,
    spaceBetween: 40,
    grabCursor:true,
    effect:'fade',
    navigation: {
        nextEl: ".Gprev",
        prevEl:'.Gnext'
    },
   loop:true
  });
let gallerys = document.querySelectorAll('.gallery-img')
let popup = document.querySelector('.Gallerypopup')
let h =0

let Is = true
for (let i = 0; i < gallerys.length; i++) {
    const element = gallerys[i];
  
        element.addEventListener("click" ,function (params) {    
          follower.css('display','none')
                popSlider.slideTo(i+1,0)
                popup.classList.add('show')
                console.log("i", i);
                console.log("popactive",popSlider.activeIndex);           
        } )
        let close = document.querySelector('.close')
        follower.css('display','flex')
        close.addEventListener('click',()=>{
            follower.css('display','flex')
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

