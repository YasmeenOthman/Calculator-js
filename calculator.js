let x = document.getElementById("input");
let output = document.getElementById("output");
let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
});
