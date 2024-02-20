function FizzBuzz(){
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let data = document.querySelector('#data');


    let x ="";
    for(let initial = num1; initial<= num2;initial++){
        
        if(initial % 5 ==0){
           x+="<p style='background-color:green;color:white;'>"+initial+" FizzBuzz</p>";
        }else if( initial % 2 ==0){
           x+="<p style='background-color:blue;color:white;'>"+initial+" Buzz</p>";
        }else{
          x+="<p style='background-color:red;color:white;'>"+initial+" Fizz </p>";
        }
        
    }
data.innerHTML=x;
}