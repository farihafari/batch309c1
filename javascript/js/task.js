// method 1
// function userSkills(){
//     let skill = document.querySelector("#skills").value;
//     let parentUl= document.querySelector("#list");
//     parentUl.innerHTML += "<li>"+skill+"</li>";
// }

// method 2
function userSkills(){
    let skill = document.querySelector("#skills").value;
    let parentUl= document.querySelector("#list");
let datalist = document.createElement('li');
datalist.innerHTML=skill;
parentUl.appendChild(datalist);
}