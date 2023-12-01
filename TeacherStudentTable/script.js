const form = document.querySelector('form')
const table = document.querySelector('table')

form.addEventListener('submit',(event)=>{
    event.preventDefault()


    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value

    const  newRow= table.insertRow()

    newRow.insertCell().innerHTML = name;
    newRow.insertCell().innerHTML = age;
    newRow.insertCell().innerHTML = email;


})
