let owl = document.querySelector(".owl-icon")
let speechBubble = document.querySelector(".panel")

owl.addEventListener("click", owlBar)


function owlBar() {
    if (speechBubble.className === 'panel'){
        speechBubble.className = 'show';
        
      } else {
       speechBubble.className = 'panel';
       
      }
}