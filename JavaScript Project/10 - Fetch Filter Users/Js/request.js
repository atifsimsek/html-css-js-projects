class Request {
    constructor(url) {
        this.url = url;

    }



    async getUsers() {

        const res = await fetch(this.url)
        const data = await res.json()

        return data.results;

    }
}