class Stroge {

    // Stroge Film Aktarma
    static addToStroge(newFilm) {
        let films = this.getToStroge();

        films.push(newFilm);

        localStorage.setItem("films", JSON.stringify(films));

    }

    // Stroge Film Getirme
    static getToStroge() {
        let films;


        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }

        return films;
    }


    // Stroge Film Silme

    static deleteFilmFromStroge(filmName) {
        let films = this.getToStroge();

        films.forEach(function (film, index) {

            if (filmName === film.title) {
                films.splice(index, 1);
            }

        });

        localStorage.setItem("films", JSON.stringify(films));


    }

    static clearAllFilmsStroge() {
        localStorage.removeItem("films");
    }




}