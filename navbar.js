let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let icono = document.querySelector(".bxl-c-plus-plus");
let btn1 = document.querySelector("bx-menu");


btn.onclick = function(){
    sidebar.classList.toggle("active"); /**Nos permite agregar una clase cuando se agrega una clase**/
}
searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}