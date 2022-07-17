import { Request } from "./request";
import { UI } from "./ui";
const form = document.getElementById("employee-form");
const employeesList = document.getElementById("employees");
const updateBtn = document.getElementById("update");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary")
const addBtn = document.getElementById("add-btn")

const url = "http://localhost:3000/employees";


const request = new Request(url)
const ui = new UI;


eventListeners();


function eventListeners(e) {


    document.addEventListener("DOMContentLoaded", getAllEmployess);
    form.addEventListener("submit", addNewEmployee);
    employeesList.addEventListener("click", updateOrDelete)



}



function getAllEmployess(e) {

    request.get()
        .then(data => {
            ui.loadToUI(data, employeesList);
        })
        .catch(err => console.log(err))




}



function addNewEmployee(e) {

    const name = nameInput.value.trim()
    const department = departmentInput.value.trim()
    const salary = Number(salaryInput.value.trim())
    let control = Number.isInteger(salary);


    if (control === true && name !== "" && salary !== "" && department !== "") {

        request.post({ name: name, department: department, salary: salary })
            .then(employee => {
                ui.addNewEmployeeToUI(employee);
            })
            .catch(err => console.log(err))

    }
    else {
        alert("Lüfen Bilgilerinizi Kontrol Ediniz")

    }



    ui.clearInputs();
    e.preventDefault();


}


function updateOrDelete(e) {
    let control = e.target.id

    if (control === "delete-employee") {
        deleteEmployee(e);
    }
    else if (control === "update-employee") {

        updateEmployee(e);


    }

}



function deleteEmployee(e) {
    const id = e.target.parentElement.previousElementSibling.previousElementSibling.textContent

    request.delete(id)
        .then()
        .catch(err => console.log(err));
    ui.deleteEmployeeToUI(e.target);
}

function updateEmployee(e) {
    const tr = e.target.parentElement.parentElement
    const name = tr.firstElementChild.textContent
    const department = tr.firstElementChild.nextElementSibling.textContent
    const salary = tr.firstElementChild.nextElementSibling.nextElementSibling.textContent
    const id = tr.lastElementChild.previousElementSibling.previousElementSibling.textContent


    nameInput.value = name;
    departmentInput.value = department;
    salaryInput.value = salary;

    addBtn.style.display = "none";
    updateBtn.style.display = "block";

    updateBtn.addEventListener("click", () => {

        const updatedName = nameInput.value;
        const updatedDepartment = departmentInput.value;
        const updatedSalary = salaryInput.value;



        request.put({
            name: updatedName, department: updatedDepartment, salary: updatedSalary

        }, id)
            .then(employee => {

                ui.updateEmployeeToUI(employee, tr);



            })
            .catch(err => console.log(err))


        addBtn.style.display = "block";
        updateBtn.style.display = "none";
        ui.clearInputs();

    })



}





















