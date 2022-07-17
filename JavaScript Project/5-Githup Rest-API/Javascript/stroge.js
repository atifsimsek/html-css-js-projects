class Stroge {
    static getDataStroge() {

        let searchs;

        if (localStorage.getItem("search") === null) {
            searchs = [];
        }
        else {
            searchs = JSON.parse(localStorage.getItem("search"));
        }

        return searchs;

    }


    static setDataStroge(username) {

        let searchs = this.getDataStroge();

        if (searchs.indexOf(username) === -1) {
            searchs.push(username);
            
        }

        localStorage.setItem("search", JSON.stringify(searchs));


    }


    static clearStroge() {
        localStorage.removeItem("search");
    }







}