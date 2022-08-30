const form = document.getElementById("github-form");
const userNameInput = document.getElementById("githubname");
const profile = document.getElementById("profile");
const repos = document.getElementById("repos");
const lastUsers = document.getElementById("last-users");
const clearButton = document.getElementById("clear-last-users");
const github = new Github;
const ui = new UI;

eventListeners();


function eventListeners() {
    form.addEventListener("submit", formSubmit);
    clearButton.addEventListener("click", clearAllSearch);
    document.addEventListener("DOMContentLoaded", getAllSearched);




};



function formSubmit(e) {

    let username = userNameInput.value.trim();


    if (username === "") {
        ui.showAlert("danger", "Lütfen Geçerli bir kullanıcı adı girin.")
    }
    else {

        github.getGithub(username)
            .then(userData => {

                if (userData.user.message === "Not Found") {
                    ui.showAlert("danger", "Kullanıcı Bulunamadı");
                }
                else {
                    ui.addSearchUsers(username);
                    Stroge.setDataStroge(username);
                    ui.userAddUI(userData.user);
                    ui.reposAddUI(userData.repo);
                    
                   

                }



            })
            .catch(err => console.log(err));
    }
    ui.clearİnput();


    e.preventDefault();
}


function getAllSearched() {
    let searchs = Stroge.getDataStroge();

    let result ="";


    searchs.forEach(item => {
        
        result +=     `
        <li class="list-group-item">${item}</li>
  `;


    });

    lastUsers.innerHTML += result;




}

function clearAllSearch() {

    ui.clearUI();
    Stroge.clearStroge();

}