//task 1

const block = document.querySelector("div");
block.style.backgroundColor = "bisque";
block.style.padding = "10px";
const button = document.querySelector("button");
const par = document.querySelector("p");

button.addEventListener("click", () => {
  if (par.style.visibility === "hidden") {
    par.style.visibility = "visible";
  } else {
    par.style.visibility = "hidden";
  }
});

//task 2

const div1 = document.querySelector(".tabs");
const parag = document.querySelectorAll(".tab-content");
const buttons = document.querySelectorAll(".btn");

div1.style.display = "flex";
div1.style.backgroundColor = "lightblue";

parag.forEach((element) => {
  element.style.marginTop = "7px";
  element.style.backgroundColor = "bisque";
  element.style.padding = "10px";
  element.style.display = "none";
});

buttons[0].style.marginTop = "20px";
buttons.forEach((element) => {
  element.style.padding = "5px";
});
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    parag.forEach((p) => {
      p.style.display = "none";
    });
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "";
    });
    buttons[i].style.backgroundColor = "blue";
    parag[i].style.display = "block";
  });
}
