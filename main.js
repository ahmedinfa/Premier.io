// NAV BAR
$(document).ready(function () {
  $(".fa-bars").click (function () {
    $(this).toggleClass("fa-times");
    $(".nav-items").toggleClass("nav-toggle");
  })
});

// CIRCULER TEXT ANIMATION
const text = document.querySelector(".circuler-text p");
text.innerHTML = text.innerText.split('').map(
  (char, i) => 
    `<span style="transform:rotate(${i * 9.8}deg)">${char}</span>`
).join('');


// SMOOTH SCROLL
const scroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true,
});
















































