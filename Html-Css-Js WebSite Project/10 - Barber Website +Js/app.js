const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
eventListeners();



function eventListeners()
{
    menuBtn.addEventListener("click",() =>{

        if(navbar.style.right == "-300px")
        {
            navbar.style.right = "0";
            menuBtn.src="img/close.png"
        }
        else
        {
            navbar.style.right = "-300px";
            menuBtn.src="img/menu.png"
        }


    })



}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});



    
  




