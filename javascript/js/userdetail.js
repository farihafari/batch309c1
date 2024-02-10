function userDetail(){
    let uname = document.getElementById("name").value;
    let uemail = document.getElementById("email").value;
    let data = document.getElementById("data");
data.innerHTML=uname+" ";
data.innerHTML+=uemail;
data.style.backgroundColor="blue";
data.style.color="white";
// data.innerHTML=uemail;
    // console.log(uname);
}