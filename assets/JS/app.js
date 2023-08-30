(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// Describes Chriz job titles
// Loader.....
// var loader = document.querySelector(".loader");
// window.addEventListener ("load", vanish);
// function vanish(){
//   loader.classList.add("disappear");
// }

////////////////// Type effect
const message = ["I'm a Web Developer, I love to create beautiful, functional and responsive websites based on your requirements."] 
const speed = 90;
let textPosition = 0;

function typewriter() {
  document.querySelector("#nn").innerHTML = message[0].substring(0, textPosition) 
  if(textPosition++ != message[0].length)
    setTimeout(typewriter, speed)
}

window.addEventListener("load", typewriter);

/////////////2nd effect - typing

