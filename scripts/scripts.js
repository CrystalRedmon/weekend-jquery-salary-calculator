console.log('Ready to Roll');

$(document).ready(onReady);

////      STATE     ///////  Initiate global variables here
let employees = [];



////      EVENTS    ///////  All of the events belong in onReady function
function onReady(){
//click works property but I thought we had to use submit for the form. Is there a specific place the button should be? does button need a for attribute? 
    $('button').on('click', onAddEmployee);


    $('#tableBody').on('click', '.deleteBtn', onDeleteEmployee);


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

    ////    
};

//////      RENDER FUNCTIONS         ///////////
////////FUNCTION TO APPEND EMPLOYEE INFO TO DOM
function toRender(){

    ///CLEARS THE TABLE
    $('#tableBody').empty();

    ///FOR EACH EMPLOYY IN EMPLOYEES ARRAY APPEND TR/TD/BUTTON
    for(let employee of employees){
        $('#tableBody').append(`
        
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button class='deleteBtn' >Delete</button>
            </td>
        </tr>
        `);
    };

    console.log($('#tableBody'))


        ///////EMPTY FIELDS AFTER INPUT
        $('#tableBody').append(`
        
            <tr>
                <td>${$('#fName').val("")}</td>
                <td>${$('#lName').val("")}</td>
                <td>${$('#idNumber').val("")}</td>
                <td>${$('#title').val("")}</td>
                <td>${$('#salary').val("")}</td>  
                <td>
                    <button class='deleteBtn' >Delete</button>
                </td>
            </tr>
    `);
console.log(employees)
}


function onDeleteEmployee(){
    console.log('we in here');
    $(this).parent().parent().remove();

};
