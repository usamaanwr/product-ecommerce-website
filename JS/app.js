const name = document.getElementById("conatact_inputs").value
const email = document.getElementById("email_inputs").value
const number = document.getElementById("number_inputs").value
const text_area = document.getElementById("text_area").value

function sendmessage() {
if (text_area.value.trim() !== "") {
    Swal.fire({
  title: "The Internet?",
  text: "That thing is still around?",
  icon: "question"
});
}


    
 }
 sendmessage()