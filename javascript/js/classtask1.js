let num1= parseFloat(prompt("put the first value "));
let num2= parseFloat(prompt("put the second value "));

if(num1 && num2){
    if(num1>=num2){
        document.write(`<h1>the subtraction of ${num1} and ${num2} is ${num1-num2}</h1>`)

    }else{
        alert("second value should be less than first value")
    }

}else{
    alert("every field requried to fill ")
}
