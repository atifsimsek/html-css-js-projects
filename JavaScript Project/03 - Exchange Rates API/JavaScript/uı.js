class UI {

    constructor() {

        this.output1 = document.querySelector("#outputFirst");
        this.output2 = document.querySelector("#outputSecond");
        this.outputResult = document.querySelector("#outputResult");

    }


    change1(output1Value) {
        this.output1.textContent = output1Value;
    }

    change2(output2Value) {
        this.output2.textContent = output2Value;

    }

    res(outputResultValue) {
        this.outputResult.value= outputResultValue;

    }



}