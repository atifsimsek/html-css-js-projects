//Tüm Elementleri Seçme İşlemi

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterİnput = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");



eventListeners();




function eventListeners() // Tüm Event Listenerlar
{
    document.addEventListener("DOMContentLoaded", loadToUI);
    form.addEventListener("submit", addTodo);
    secondCardBody.addEventListener("click", deleteTodo);
    filterİnput.addEventListener("keyup", filterTodos)
    clearButton.addEventListener("click", deleteAll)




}

//Todo ekleme

function addTodo(e) {
    const newTodo = todoInput.value.trim();//Boşluk Gelmemesi İçin Trim


    if (newTodo === "") {
        showAlert("danger", "Lütfen Bir Değer Giriniz...");
    }
    else {
        addTodoToUI(newTodo);
        addToLocalStroge(newTodo);
        showAlert("success", "Todo Ekleme İşlemi Başarılı...")
    }


    e.preventDefault();
}

// Tüm todoları silme işlemi

function deleteAll(e) {
    if (confirm("Tüm listeyi silmek istediğinizden emin misiniz ?")) 
    {
        while (todoList.firstChild != null) 
        {
            todoList.firstElementChild.remove();
            localStorage.removeItem("todos");
        }
    }
}



// UI Todo silme işlemi

function deleteTodo(e) {
    let value = e.target.className;

    if (value === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteToFromStroge(e.target.parentElement.parentElement.textContent.trim());
        showAlert("success", "Todo Silme İşlemi Başarılı...");

    }

}

function deleteToFromStroge(deleteitem) {
    let todos = getToLocalStroge();
    let x = true;

    todos.forEach(function (todo, index) {
        if (todo === deleteitem && x === true) {
            x = false;
            todos.splice(index, 1); //Arrayden deger silme
        }
    })




    localStorage.setItem("todos", JSON.stringify(todos));
}


// Alert Yapımı

function showAlert(type, message) {
    const alertItem = document.createElement("div");

    alertItem.className = `alert alert-${type}`;
    alertItem.setAttribute("role", "alert");
    alertItem.textContent = message;
    firstCardBody.appendChild(alertItem);

    setTimeout(function () {
        alertItem.remove();

    }, 1000);


}


// String değeri arayüze liste elemanı olarak ekliyecek

function addTodoToUI(newTodo) {
    //List item oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node ekleme
    listItem.appendChild(document.createTextNode(newTodo));


    // Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class ='fa fa-remove'></i>";

    listItem.appendChild(link);

    // Todo list'e item'i ekleme

    todoList.appendChild(listItem);
    todoInput.value = "";
}

// Local strogeden dizi alma
function getToLocalStroge(newTodo) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;


}

//Local stroge'ye ekleme

function addToLocalStroge(newTodo) {
    let todos = getToLocalStroge();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Local strogeden yükleme

function loadToUI() {
    let todos = getToLocalStroge();

    todos.forEach(todo => {
        addTodoToUI(todo);

    });
}


//Arama Yapma

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(item => {

        const text = item.textContent.toLowerCase();
         
        if (text.indexOf(filterValue) === -1) {
            //Bulamadı
            item.setAttribute("style", "display : none !important");

        }
        else {
            item.setAttribute("style", "display : block");
        }



    });


}


