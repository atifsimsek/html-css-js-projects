const url = "https://randomuser.me/api/?results=50";
const input = document.getElementById("text");
const list = document.getElementById("list");


const request = new Request(url);
const ui = new Uİ;


input.addEventListener("keyup", (e) => searchUsers(e.target.value))


//Get Request
request.getUsers()
    .then(data => ui.addUsersUI(data, list))


//Search 
function searchUsers(input) {
    const text = input.trim().toLowerCase()
    const itemlist = Array.from(list.children)

    itemlist.forEach(item => {
        if (item.innerText.toLowerCase().indexOf(text) === -1) {
            item.setAttribute("style", "display:none;")
        }
        else {
            item.setAttribute("style", "display:block;")
        }
    });
}


//Another way

// item.innerText.toLowerCase().includes(text);
