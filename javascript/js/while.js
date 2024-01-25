// while loop
let inital = prompt("enter first number");
let final = prompt ("enter final number");
let i=inital;
while(i<final){ 
if(i%2==0){
    console.log(i);
    document.write("<h1 style='background-color:green;color:white'>while loop count "+i+"</h1>");
    i++;
}else{
    document.write("<h1 style='background-color:blue;color:white'>while loop count "+i+"</h1>");
    i++;
}
 
}