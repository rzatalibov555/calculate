let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    screen.value += btnText;
  });
}
function sin() {
  screen.value = Math.sin(screen.value);
}
function cos() {
  screen.value = Math.cos(screen.value);
}
function tan() {
  screen.value = Math.tan(screen.value);
}
function log() {
  screen.value = Math.log(screen.value);
}
function e() {
  screen.value = Math.E;
}
function pi() {
  screen.value = Math.PI;
}
function pow() {
  screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
  screen.value = Math.sqrt(screen.value);
}
function fact() {
  let i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i < num; i++) {
    f *= i;
  }
  i -= 1;
  screen.value = f;
}
function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

