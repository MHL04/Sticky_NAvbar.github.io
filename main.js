const navbarEl=document.querySelector(".navbar");
const bottom_containerEl=document.querySelector(".bottom-container");

window.addEventListener("scroll",()=>{
if(window.scrollY > bottom_containerEl.offsetTop-navbarEl.offsetHeight - 50 ){
navbarEl.classList.add("active");
}else{
    navbarEl.classList.remove("active");
}
});
//window.ScrollY: Elle retourne le nombre de pixels la page actuellement défilés verticalement.

//offsetTop:nvoie la distance entre la bordure extérieure de l'élément courant et la bordure intérieure haute de l'élément 

//bottom_containerEl.offsetTop:distance de l element bottom_container par rapport a la bordure du navbar

//offsetHeight:Propriété DHTML permettant d'obtenir la hauteur d'un élément par rapport à la mise en page.
//50=50px design en style.css