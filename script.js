let menu = document.querySelector("menu_icon");
let navbar = document.querySelector("navbar");

menu.addEventListener("click",function(){
    navbar.classList.toggle("actve");

});
window .onscroll =()=>{
   navbar .classList.remove("active");
};