function session_Storage(){
sessionStorage.setItem('name',"fariha");
let getValue = sessionStorage.getItem('name');

console.log(getValue+ typeof(getValue));
}
function local_Storage(){
    // localStorage.clear();
    localStorage.setItem('name',"jabeen");
    localStorage.setItem('email',"jb@gmail.com");
    localStorage.setItem('password',123);
localStorage.removeItem('password')
localStorage.clear()
let getValue = localStorage.getItem('name');
console.log(getValue);
}