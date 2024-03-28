function registration(){
    let uName = document.querySelector("#uName").value;
    let uEmail = document.querySelector("#uEmail").value;
    let uPassword = document.querySelector("#uPassword").value;
    let uPhone = document.querySelector("#uPhone").value;
    if(uName && uEmail && uPassword && uPhone){
let dataObject ={
    name:uName,
    email:uEmail,
    password:uPassword,
    phone:uPhone
}
// localStorage.setItem("name",uName);
// localStorage.setItem("email",uEmail);
// localStorage.setItem("password",uPassword);
// localStorage.setItem("phone",uPhone);
localStorage.setItem("userData",JSON.stringify(dataObject))
alert("registration is compeleted");
location.assign("login.html");
    }else{
        alert('every field is required to fill ')
    }
}
// console.log()
// document.querySelector("#ab").innerHTML=JSON.parse(localStorage.getItem("userData")).name