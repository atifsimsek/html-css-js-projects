export class Request {

    constructor(url) {
        this.url = url
    }



    get = async () => {
        const res = await fetch(this.url)
        const data = await res.json()
        return data;


    }



    post = async (data) => {

        const res = await fetch(this.url, {

            method: "POST",
            body: JSON.stringify(data),
            headers: {

                'Content-Type': 'application/json; charset=UTF-8'
            },

        });
        const resData = res.json()
        return resData;

    }


    put = async (data, id) => {

        const res = await fetch(this.url + "/" + id, {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(data)

        })
        const resData = await res.json()
        return resData;

    }

    delete = async (id) => {

        await fetch(this.url + "/" + id, {
            method: "DELETE"
        })
        return "Dosya Başarıyla Silindi"
    }


}