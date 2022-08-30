class UI {
    //Yeni Film UI Ekleme
    static addToUI(newFilm, filmList) {
        filmList.innerHTML += `
         <tr>
                   <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                   <td>${newFilm.title}</td>
                   <td>${newFilm.director}</td>
                   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>        
         </tr>`;

    }


    //Alert Gösterme

    static showAlert(value, message) {
        const cardbody = document.querySelectorAll(".card-body")[0];

        const div = document.createElement("div");

        div.className = `alert alert-${value}`
        div.innerHTML = message;

        cardbody.appendChild(div);


        setTimeout(() => {
            div.remove();
        }, 1000);


    }

    //İnputları Temizleme

    static clearInputs(item1, item2, item3) {
        item1.value = "";
        item2.value = "";
        item3.value = "";
    }

    // UI Film Yükleme
    static loadUI(films) {
        films.forEach(film => {

            filmList.innerHTML += `
            <tr>
                      <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                      <td>${film.title}</td>
                      <td>${film.director}</td>
                      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                     </tr>`
        });
    }

    // UI Film Silme
    static deleteFilmFromUI(item) {
        item.parentElement.parentElement.remove();
    }


    //UI Tüm Filmleri Silme

    static clearAllFilmsUI() {
        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }

    }

}