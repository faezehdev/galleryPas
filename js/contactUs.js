let mapDiv = document.querySelector(".mapIn");
 let xLatcontact = mapDiv.getAttribute("data-x");
let  yLatContact = mapDiv.getAttribute("data-y");

var map = L.map("map", {
 center: [yLatContact, xLatcontact], zoom: 15 
 }
),
 Contact = new L.tileLayer(
 "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
 {
 // attribution:
 // '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
 minZoom: "10",
 }
 ).addTo(map);



 greenIconContact = L.icon({ iconUrl: "images/location-64.png", iconSize: [29,34] });
 markerContact = L.marker([yLatContact, xLatcontact], { icon: greenIconContact });
markerContact.addTo(map);



gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 80%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})
