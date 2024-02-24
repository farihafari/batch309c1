function registration(){
    let uName = document.querySelector("#uName").value;
    let uEmail = document.querySelector("#uEmail").value;
    let uPassword = document.querySelector("#uPassword").value;
    let uPhone = document.querySelector("#uPhone").value;
    if(uName && uEmail && uPassword && uPhone){

localStorage.setItem("name",uName);
localStorage.setItem("email",uEmail);
localStorage.setItem("password",uPassword);
localStorage.setItem("phone",uPhone);
alert("registration is compeleted");
location.assign("login.html");
    }else{
        alert('every field is required to fill ')
    }
}