const imglist = document.querySelectorAll("img");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");



let counter = 0;



next.addEventListener("click", () => {

    counter++;

    if (counter >= imglist.length - 1) {
        next.disabled = true;

    }
   
        previous.disabled = false;
    
    setImage()
});

previous.addEventListener("click", () => {

    counter--;
    if (counter <= 0) {

        previous.disabled = true;


    }
    
        next.disabled = false;
 
    setImage()




})













function setImage() {

    if (counter !== -1) {
        imglist.forEach(item => {
            item.style.display = "none";

        });

        imglist[counter].style.display = "block";
        slider.appendChild(imglist[counter]);

    }



};