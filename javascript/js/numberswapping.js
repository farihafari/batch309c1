// with third varibales

let a = prompt("enter number for variable a");
let b = prompt("enter number for variable b");
document.write("<h1> before swapping a is initialized by "+a+"</h1>");
document.write("<h1> before swapping b is initialized by "+b+"</h1>");
let c;
c=a;
a=b;
b=c;
document.write("<h1> after swapping a is reassigned by "+a+"</h1>");
document.write("<h1> after swapping b is reassigned by "+b+"</h1>");
// without using third varibale