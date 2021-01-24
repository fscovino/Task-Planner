const validFormFieldInput = () => {
    const newTaskNameInput = document.querySelector('#task-name');
    const name = newTaskNameInput.value;
    const newDescriptionInput = document.querySelector('#description')
    const description = newDescriptionInput.value;
    const newAssignedInput = document.querySelector('#assigned-to')
    const assigned = newAssignedInput.value;
    const newDateInput = document.querySelector('#due-date')
    const date = newDateInput.value;
    if (name===""){
        $('#name-alert').show();
         setTimeout(()=>{$('#name-alert').hide()},2500)
        return false;
    }
    if (description===""){
        $('#descrip-alert').show();
        setTimeout(()=>{$('#descrip-alert').hide()},2500)
        return false;
    }
    if (assigned===""){
        $('#to-alert').show();
        setTimeout(()=>{$('#to-alert').hide()},2500)
        return false;
    }
    if (date===""){
        $('#due-alert').show();
        setTimeout(()=>{$('#due-alert').hide()},2500)
        return false;
    }
}
//setTimeout(()=>{alert("HI Hiruy")},2000)