let students = [
    ["alisha","cpism","mwf","9 to 11",8500],
    ["alishba","cpism","mwf","9 to 11",8500],
    ["aliyan","cpism","mwf","9 to 11",8500],
    ["alishar","cpism","mwf","9 to 11",8500],
    ["alina","cpism","mwf","9 to 11",8500],
    ["ali","cpism","mwf","9 to 11",8500],
    ["alisha","cpism","mwf","9 to 11",8500],
    ["alishba","cpism","mwf","9 to 11",8500],
    ["aliyan","cpism","mwf","9 to 11",8500],
    ["alishar","cpism","mwf","9 to 11",8500],
    ["alina","cpism","mwf","9 to 11",8500],
    ["ali","cpism","mwf","9 to 11",8500]
];
// document.write(students[3][2]);
// console.log(typeof students);
// document.write(students[0]+"<br>"+students[1]+"<br>"+students[2]);
// for loo with array
// document.write(students.length)
// for(let i =0;i<students.length; i++){
//     document.write(students[i]+"<br>");
// }
// two dimensional array
document.write("<table border='1'>");
document.write("<tr><th>Name</th><th>Course</th><th>Days</th><th>Slot</th><th>Fees</th></tr>")
for(let i =0;i<students.length;i++){
    // console.log(i)
    if(i % 2 ==0){
        document.write("<tr style='background-color:#944E63;'>");
        for(let j = 0; j<students[i].length;j++){
            document.write("<td>"+students[i][j]+"</td> ");
        }
        document.write("</tr>");
    }else{
        document.write("<tr style='background-color:#12372A;'>");
        for(let j = 0; j<students[i].length;j++){
            document.write("<td>"+students[i][j]+"</td> ");
        }
        document.write("</tr>");
    }
    
}
document.write("</table>");