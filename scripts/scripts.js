console.log('Ready to Roll');

$(document).ready(onReady);

////      STATE     ///////  Initiate global variables here
let employees = [];



////      EVENTS    ///////  All of the events belong in onReady function
function onReady(){
//click works property but I thought we had to use submit for the form. Is there a specific place the button should be? does button need a for attribute? 
    $('button').on('click', onAddEmployee);




}

/////      UPDATE STATE FUNCTIONS    ////////////


////       FUNCTION TO GET EMPLOYEE INFO AND ADD TO employees ARRAY
function onAddEmployee(evt){
    evt.preventDefault();

    console.log('in onAddEmployee');

    ///// CREATE AN OBJECT THAT WILL GET INFO FROM ALL INPUT FIELDS ////
    let newEmployee = {
        firstName: $('#fName').val(),
        lastName: $('#lName').val(),
        idNumber: $('#idNumber').val(),
        title: $('#title').val(),
        annualSalary: $('#salary').val()
    };


    //////  ADD NEW EMPLOYEE TO EMPLOYEES ARRAY
    employees.push(newEmployee);


    /////   CALL RENDER FUNCTION 
        toRender();
};


////////FUNCTION TO APPEND EMPLOYEE INFO TO DOM
function toRender(){

    for(let employee of employees){

        console.log(employees.firstName);
        $('#tableBody').append(`
        
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
        `);
    }
}
