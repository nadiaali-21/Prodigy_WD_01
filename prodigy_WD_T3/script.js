window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

const codeDoodle = [
  "function greet() {",
  "   console.log('Welcome to my Personal Portfolio Website');",
  "}",
  "",
  "greet();"
];

let line = 0;
let char = 0;
const speed = 80;
const codeBlock = document.getElementById("code");

function typeCode() {
  if (line < codeDoodle.length) {
    if (char < codeDoodle[line].length) {
      codeBlock.textContent += codeDoodle[line][char];
      char++;
      setTimeout(typeCode, speed);
    } else {
      codeBlock.textContent += "\n";
      line++;
      char = 0;
      setTimeout(typeCode, speed);
    }
  }
}

typeCode();
