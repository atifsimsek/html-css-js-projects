
const filmForm = document.querySelector("#film-form");
const filmTitle = document.querySelector("#title");
const filmDirector = document.querySelector("#director");
const filmUrl = document.querySelector("#url");
const filmList = document.querySelector("#films");
const clearButton = document.querySelector("#clear-films");

eventListeners();


function eventListeners() {
    filmForm.addEventListener("submit", addFilm);
    filmList.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", clearAllFilms);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Stroge.getToStroge();
        UI.loadUI(films);
    });

}

function addFilm(e) {
    const title = filmTitle.value;
    const director = filmDirector.value;
    const url = filmUrl.value;

    if (title === "" || url === "" || director === "") {
        UI.showAlert("danger", "Lütfen Tüm Alanları Doldurunuz")
    }
    else {
        const newFilm = new Film(title, director, url);
        UI.addToUI(newFilm, filmList); // UI Film Ekleme
        Stroge.addToStroge(newFilm); //Stroge Film Eklme
        UI.showAlert("success", "Film Ekleme Başarılı");
    }

    UI.clearInputs(filmTitle, filmDirector, filmUrl);

    e.preventDefault();

}

// Tek Film Silme İşlemleri
function deleteFilm(e) {
    if (e.target.id === "delete-film");
    {
        UI.deleteFilmFromUI(e.target);
        Stroge.deleteFilmFromStroge(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showAlert("success", "Silme İşlemi Başarılı");
    }
}

// Bütün Filmleri Silme İşlemleri
function clearAllFilms() {
    UI.clearAllFilmsUI();
    Stroge.clearAllFilmsStroge();
}
