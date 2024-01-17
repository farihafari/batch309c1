let percentage = prompt("enter your percentage");
 if(percentage>90){
    alert("eligible for medical or engineering or commerce or computer science or arts");
 }
 else if (percentage >80){
    alert("eligible for engineering or commerce or computer science or arts but not eligible for medical");

 }
 else if (percentage >70){
    alert("eligible for commerce or computer science or arts but not eligible for medical and engineering ");

 }
 else if (percentage >60){
    alert("eligible for commerce or arts but not eligible for medical and engineering and computer science  ");

 }
 else if (percentage >50){
    alert("eligible for arts but not eligible for medical and engineering and computer science and commerce  ");

 }
 else{
    alert("not eligible for admission");
 }