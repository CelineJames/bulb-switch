let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let switchOn = document.querySelector(".switchon");
let switchOff = document.querySelector(".switchoff");
switchOff.addEventListener("click", function () {
  div2.classList.remove("hide");
  div1.classList.add("hide");
});
switchOn.addEventListener("click", function () {
  div1.classList.remove("hide");
  div2.classList.add("hide");
});
