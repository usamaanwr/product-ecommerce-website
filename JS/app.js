const name = document.getElementById("conatact_inputs").value
const email = document.getElementById("email_inputs").value
const number = document.getElementById("number_inputs").value
const text_area = document.getElementById("text_area").value

function sendmessage() {

let users = JSON.parse(localStorage.getItem("users"))
if (!users) {
    users = []
}
if (name.value && email.value && number.value && text_area.value) {
    for (let i = 0; i < users.length; i++) {
     
        
    }
}
    
 }
 sendmessage()