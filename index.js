// PRELOADER

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display="none";
})

// ScrollReaveal Js

ScrollReveal({
    reset: true,
    distance:'80px',
    duration:1500,
    delay:100
})

ScrollReveal().reveal('.navbar', { origin : 'top' })
ScrollReveal().reveal('.home, .our-task, .about, .community, .footer', { origin : 'bottom' })
ScrollReveal().reveal('.contact', { origin : 'left' })
ScrollReveal().reveal('.banner-mid', { origin : 'right' })

// MENU

  // Get the menu icon and the navbar to toggle
  const menuIcon = document.querySelector('.menu i');
  const navToggle = document.getElementById('nov-toggle');
  const out= document.querySelector('.nav-toggle .menu i');

  // Add click event listener to the menu icon
  menuIcon.addEventListener('click', function () {
    // Toggle the visibility of the second navbar
    navToggle.classList.toggle('show');
  });

  out.addEventListener('click', function () {
    // Toggle the visibility of the second navbar
    navToggle.classList.toggle('show');
  });

  // Animate Number
  const targetNumber = 120000;
  const countElement = document.getElementById('count');
  let currentNumber = 0;
  
  function animateNumber() {
      const increment = Math.ceil(targetNumber / 100); // Increment value
      const interval = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
              currentNumber = targetNumber;
              clearInterval(interval);
          }
          countElement.textContent = currentNumber + " +";
      }, 20); // Adjust speed by changing the interval time
  }
  
  window.onload = animateNumber; // Start animation on page load