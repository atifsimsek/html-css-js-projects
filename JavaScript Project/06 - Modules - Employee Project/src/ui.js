export class UI {
    constructor() {
        this.employeesList = document.getElementById("employees");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary")

    }




    loadToUI = (data) => {



        data.forEach(user => {

            this.employeesList.innerHTML +=
                `
        <tr>
                                            
             <td>${user.name}</td>
             <td>${user.department}</td>
             <td>${user.salary}</td>
             <td>${user.id}</td>
             <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
       </tr>


        `
        });



    }

    addNewEmployeeToUI = (employee) => {


        this.employeesList.innerHTML +=
            `
            <tr>
                                                
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>

        `




    }


    deleteEmployeeToUI = (target) => {

        target.parentElement.parentElement.remove();
    }

    updateEmployeeToUI(updatedEmployee, tr) {

        tr.innerHTML =
            `
            <tr>
                                                
                <td>${updatedEmployee.name}</td>
                <td>${updatedEmployee.department}</td>
                <td>${updatedEmployee.salary}</td>
                <td>${updatedEmployee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>

        `


    }


    clearInputs = () => {
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";
    }







}