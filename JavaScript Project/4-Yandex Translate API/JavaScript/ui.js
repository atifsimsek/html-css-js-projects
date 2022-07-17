function UI() {

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outpuWord = document.getElementById("outpuWord");


    this.languageList = document.getElementById("language");

}


UI.prototype.changeUI = function(){

    //Arayüz Değiştirme

    this.outputImage.src = `images/${this.languageList.value}.png`;
    this.outputLanguage.innerHTML =this.languageList.options[this.languageList.selectedIndex].textContent;



}

UI.prototype.displayTranslate = function(value){

    this.outpuWord.textContent = value;


}
