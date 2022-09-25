console.log('Ready to Roll');

$(document).ready(onReady);

/////////  Initiate global variables here            ------STATE
let employees = [];




////      All of the events belong in onReady function------EVENTS
function onReady(){
//click works property but I thought we had to use submit for the form. Is there a specific place the button should be? does button need a for attribute? 
    $('button').on('click', onAddEmployee);


    $('#tableBody').on('click', '.deleteBtn', onDeleteEmployee);


}

/////      UPDATE STATE FUNCTIONS    ////////////


////       GET EMPLOYEE INFO AND PUSH TO employees ARRAY----UPDATE STATE
function onAddEmployee(evt){
    evt.preventDefault();

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

/////      DELETE EMPLOYEE FROM THE DOM        --------UPDATE STATE
function onDeleteEmployee(){
    $(this).parent().parent().remove();
};


//////      RENDER STATE        ///////////
////////FUNCTION TO APPEND EMPLOYEE INFO TO DOM
function toRender(){

    ///CLEARS THE TABLE
    $('#tableBody').empty();

    ///FOR EACH EMPLOYEE IN EMPLOYEES ARRAY APPEND TR/TD/BUTTON
    for(let employee of employees){
        $('#tableBody').append(`
        
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary}</td>
            <td>
                <button class='deleteBtn' >Delete</button>
            </td>
        </tr>
        `);
    };

        
        $('input').empty();
        $('#inputForm input[type="text"]').val('')


        ///EMPTY FIELDS AFTER INPUT  //////UNSURE IF I'LL STILL NEED THIS
        ////would using <input> work
        // $('#tableBody').append(`
        //     <tr>
        //         <td>${$('#fName').val("")}</td>
        //         <td>${$('#lName').val("")}</td>
        //         <td>${$('#idNumber').val("")}</td>
        //         <td>${$('#title').val("")}</td>
        //         <td>${$('#salary').val("")}</td>  
        //         <td>
        //             <button class='deleteBtn' >Delete</button>
        //         </td>
        //     </tr>
    // `);

    toCalulateExpenses();
}



function toCalulateExpenses(){
    let monthlyExpenses = 0;
    ///iterate employees array
    for(let employee of employees){

        ///add annualSalary from each employee to monthlyExpenses
        monthlyExpenses += Number(employee.annualSalary); 
    };
    if(monthlyExpenses>20000){
        
    }

    $('#monthlyExpenses').text(`$ ${monthlyExpenses}`)



}
