function Translate(word, language) {
    this.apikey = "";
    this.word = word;
    this.language = language;


    // XHR Objesi Oluşturma

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
    //AJAX İŞLEMLERİ

    const endpoint = 1;

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {

        if (this.xhr.status === 200) {

            //const a = JSON.parse(this.xhr.responseText).text[0];

            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            

            callback(null,text);
        }

        else
        {
            callback("Bir Hata Oluştu",null);
        }


    }



    this.xhr.send();

};

Translate.prototype.changeParameters = function (newWord,newLanguage)
{
    this.word= newWord;
    this.language= newLanguage;
}


