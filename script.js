let user = "admin";
let pass = 1234;

const btn = document.getElementById("btn");
const paragraph = document.getElementById("paragraph");

btn.addEventListener("click", function () {
  if (user === "admin  " && pass === 1234) {
    paragraph.textContent = "successfull";
  } else {
    paragraph.textContent = "unsuccessfull";
  }
});
