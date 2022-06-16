const menu = document.querySelector(".menu");
const closes = document.querySelector(".close");
const btnat = document.querySelector(".mybtns");

menu.addEventListener("click", () => {
  document.querySelector("ul").classList.remove("d-none");
  document.querySelector(".overlay").style.display = "block";
});
closes.addEventListener("click", () => {
  document.querySelector("ul").className += ` d-none `;
  document.querySelector(".overlay").style.display = "none";
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
  } else {
    document.querySelector("ul").classList.remove("d-none");
  }
}

var x = window.matchMedia("(max-width: 540px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

document.querySelector(".overlay").addEventListener("click", () => {
  closes.click();
});

// Drop Down

document.querySelector(".dd").addEventListener("click", () => {
  console.log(1);
  document.querySelector(".arr-do").classList.toggle("d-none");
  document.querySelector(".arr-up").classList.toggle("d-none");
  document.querySelector(".drops").classList.toggle("d-none");
});
document.querySelector(".dd2").addEventListener("click", () => {
  console.log(1);
  document.querySelector(".arr-do2").classList.toggle("d-none");
  document.querySelector(".arr-up2").classList.toggle("d-none");
  document.querySelector(".drops2").classList.toggle("d-none");
});
