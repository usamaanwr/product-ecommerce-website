const reg_Name = document.getElementById("reg_name");
const reg_Email = document.getElementById("reg_email");
const reg_Password = document.getElementById("reg_password");
let users = JSON.parse(localStorage.getItem("users"));

  
function iSsignUpUser() {
  if (!users) {
    users =[];
  }
  if (reg_Name.value && reg_Email.value && reg_Password.value) {
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === reg_Email.value) {
        alert("user already register")
        emptyInputValue(reg_Name , reg_Email , reg_Password);
        return  
      }
    }
    const userObj = {
      name:reg_Name.value,
      email: reg_Email.value,
      password: reg_Password.value
    }
  users.push(userObj)
  localStorage.setItem("users",JSON.stringify(users))
  emptyInputValue(reg_Name , reg_Email , reg_Password);
  alert("user is suucesfully register")
  window.location.href = "login.html"
  }else{
    alert("Enetr value correctly")
  }

}

function emptyInputValue(name , email , password) {
    for (let i = 0; i < arguments.length; i++) {
       arguments[i].value = "";
    }
}

let flag = false;

function isUserLogedIn() {
  users = JSON.parse(localStorage.getItem("users"));
  const email = document.getElementById("login_email");
  const password = document.getElementById("login_password");
for (let i = 0;  i < users.length; i++) {

  if (users[i].email === email.value && users[i].password === password.value) {
    flag = true
     localStorage.setItem("currentUser", JSON.stringify(users[i]));
    alert("login Succesfully")
    emptyInputValue()
    window.location.href = `/`
  }
else if (users[i].email === email.value && users[i].password !== password.value) {
  flag = true;
  alert("password is incorrect");
  emptyInputValue(password)
  password.focus()
  return
}
}
if (!flag) {
  alert("please register first")
  window.location.href = `register.html`

}
}

