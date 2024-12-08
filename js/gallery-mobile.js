
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

let gallerys = document.querySelectorAll('.gallery-img')
let h =0
let Is = true
gallerys.forEach(g=>{
    g.setAttribute(`data`,h)
    h++
    let clickedIMG =''
    g.addEventListener('click',(e)=>{
        follower.css('display','none')
        let cur = Number(e.currentTarget.getAttribute('data'))
         clickedIMG =Number(e.currentTarget.getAttribute('data'))
         console.log('clicked',clickedIMG);
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.add('show')
        let MimgSCR = e.currentTarget.querySelector('img').getAttribute('src')
      
        console.log(MimgSCR);
        let mainIMG = document.querySelector('img.Main')
        mainIMG.setAttribute('src',MimgSCR)
        mainIMG.classList.add('active')
        let Others = []
        let clickActive=[]
        for(let i = 0 ; i< gallerys.length; i++){
         if(gallerys[i].getAttribute('data') != clickedIMG ){
            clickActive = gallerys[i]
         }       
         Others.push(gallerys[i])
        }
        let previewIMG = document.querySelector(' img.Main')
        let newIndex = clickedIMG 
        function preview(){
            let i = clickedIMG
            let selectedIMGurl = gallerys[newIndex].querySelector('img') //get user clicked img url
            console.log('sel',gallerys[i],i);
            console.log('indec',newIndex);
            previewIMG.classList.remove('active')
            setTimeout(()=>{
                previewIMG.setAttribute('src',selectedIMGurl.getAttribute('src'))
                previewIMG.classList.add('active')
            },200)
            }


            // draggable slider
            let isDown = false;
            let startX;
            let scrollLeft;
            const slider =document.querySelector(' img.Main');
           const prevSlide = ()=>{
                console.log('in',newIndex);
                  newIndex--
                  if(newIndex < 0){
                    newIndex = gallerys.length-1
                    preview()
                  }
                  else{
                  preview() //call aboce function to update image
                  }
            }
            const nextSlide = ()=>{
            newIndex++
              console.log('glen',gallerys.length);
              console.log('in',newIndex);
              if(newIndex == gallerys.length){
        
              newIndex = 0
              preview()
              }
              else{
              preview() //call aboce function to update image
              }
            }
            const start = (e) => {
                isDown = true;
                // slider.classList.add('active');
                startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
                // console.log(startX,'startX');
                // console.log(scrollLeft,'slider.scrollLeft');
                let isPrev = false
                let isNext = false
                startX <= 200 ? isPrev = true : isPrev = false
                startX > 200 ? isNext = true : isNext = false
                isPrev ? prevSlide() : ''
                isNext ? nextSlide() : ''
            
                scrollLeft = slider.scrollLeft;	
              }
              

              
         
                  slider.addEventListener('mousedown', start);
                  slider.addEventListener('touchstart', start);
              
                //   slider.addEventListener('mouseleave', end);
                //   slider.addEventListener('mouseup', end);
                //   slider.addEventListener('touchend', end);
      
   
        let close = document.querySelector('.close')
        close.addEventListener('click',()=>{
            follower.css('display','flex')
            let popup = document.querySelector('.Gallerypopup')
        popup.classList.remove('show')
        })
    })
})

 // Enable Scroll
 const lenis = new Lenis()
 function raf(time) {
   lenis.raf(time)
   requestAnimationFrame(raf)
 }
 
 requestAnimationFrame(raf)