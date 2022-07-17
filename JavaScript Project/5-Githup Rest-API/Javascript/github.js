class Github {

    constructor() {
        this.url = "https://api.github.com/users/"
    }



    async getGithub(username) {


        const responseuser = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username + "/repos");

        const userData = await responseuser.json();
        const repoData = await responseRepo.json();

        return {

            user: userData,
            repo: repoData

        }


    }



}