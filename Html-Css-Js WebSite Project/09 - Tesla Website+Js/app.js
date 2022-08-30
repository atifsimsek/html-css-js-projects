const models = document.getElementById("models");
const model3 = document.getElementById("model3");
const modelx = document.getElementById("modelx");
const modely = document.getElementById("modely");
const model = document.getElementById("model");
const background = document.getElementById("body");


eventlisteners();

function eventlisteners() {

    models.addEventListener("click", () => {

        background.style.backgroundImage = "url('/images/image-1.png')";
        model.textContent = "Model S";


    })
    model3.addEventListener("click", () => {

        background.style.backgroundImage = "url('/images/image-2.png')";
        model.textContent = "Model 3";


    })

    modelx.addEventListener("click", () => {

        background.style.backgroundImage = "url('/images/image-3.png')";
        model.textContent = "Model X";


    })

    modely.addEventListener("click", () => {

        background.style.backgroundImage = "url('/images/image-4.png')";
        model.textContent = "Model Y";


    })





}


