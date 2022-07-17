const display = document.querySelector(".display");
const start = document.querySelector(".start");
const stop1 = document.querySelector(".pause");
const reset = document.querySelector(".reset");


let startTime = 0;
let endTime = 0;

let second = 0;
let minute = 0;
let hour = 0;
let ınterval;
let pause = true;


start.addEventListener("click", () => {

    if (pause) {
        pause = false;
        startTime = Date.now() - endTime;
        ınterval = setInterval(timer, 75);
    }
});


stop1.addEventListener("click", () => {

    if (!pause) {

        pause = true;

        clearInterval(ınterval);
    }

});
reset.addEventListener("click", () => {

    pause = true;
    clearInterval(ınterval);
    startTime = 0;
    endTime = 0;

    second = 0;
    minute = 0;
    hour = 0;

   

    display.textContent = "00:00:00"
})





function timer() {

    endTime = Date.now() - startTime;

    second = Math.floor((endTime / 1000) % 60);

    minute = Math.floor((endTime / (1000 * 60)) % 60);

    hour = Math.floor((endTime / (1000 * 60 * 60)) % 60);




    second= addZero(second);
    minute = addZero(minute);
    hour = addZero(hour);


    display.innerHTML = `
    
    ${hour}:${minute}:${second}

    `

    function addZero(item) {

      return  (("0") + item).length > 2 ? item : "0" + item;


    }
}





