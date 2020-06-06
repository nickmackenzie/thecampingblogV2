
/* Selectors */
let paddle1 = document.querySelector(".paddle-icon")
let paddle2 = document.querySelector('.paddle-icon-2')
let paddleContainer = document.querySelector('.paddle')
let list = document.querySelector(".list")


/* Event Listeners */
paddleContainer.addEventListener('click', paddleBurger)

/* Functions */
function paddleBurger() {
    if (paddleContainer.className === 'paddle'){
        paddleContainer.className = 'active';
        list.classList.add("nav-active")
      } else {
        paddleContainer.className = 'paddle';
        list.classList.remove("nav-active")
      }
}


