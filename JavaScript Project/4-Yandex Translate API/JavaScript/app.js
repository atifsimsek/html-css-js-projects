eventListeners();

function eventListeners()
{
    document.getElementById("translate-form").addEventListener("submit",translateForm);
    document.getElementById("language").onchange = function() {
        //Arayüz İşlemleri

        const uı = new UI;

        uı.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language"));

function translateForm(e)
{
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language"));
    translate.translateWord((err,response)=>{

        if(err) {// typeof err === "string" demek gibi birşey.

            console.log(err);
        }

        else{
            ui.displayTranslate(response);
        }


    });
    e.preventDefault();
}