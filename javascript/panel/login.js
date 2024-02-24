function logIn(){
    let uEmail = document.querySelector("#uEmail").value;
    let uPassword = document.querySelector("#uPassword").value;
    let getLocalEmail= localStorage.getItem('email');
    let getLocalPassword = localStorage.getItem('password');
    // console.log(getLocalEmail)
    if(uEmail && uPassword){
        if(uEmail == getLocalEmail && uPassword == getLocalPassword){
            alert('logged in successfully');
            window.location.href = "panel.html"
        }else{
            alert('invalid data');

        }
    }
    else{
        alert('every field is required to fill');

    }
}