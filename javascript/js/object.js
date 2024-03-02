let mobile = [
    {"name":"infinix aX",
storage:"128GB",
price:46000,
image:"js/images/img1.jpg"
},
{"name":"infinix b",
storage:"128GB",
price:46000,
image:"js/images/img2.jpg"
},
{"name":"infinix c",
storage:"128GB",
price:46000,
image:"js/images/img3.jpg"
},
{"name":"infinix d",
storage:"128GB",
price:46000,
image:"js/images/img4.jpg"
},
{"name":"abc d",
storage:"128GB",
price:46000,
image:"js/images/img4.jpg"
}
,
{"name":"infinix aX",
storage:"128GB",
price:46000,
image:"js/images/img1.jpg"
},
{"name":"infinix b",
storage:"128GB",
price:46000,
image:"js/images/img2.jpg"
},
{"name":"infinix c",
storage:"128GB",
price:46000,
image:"js/images/img3.jpg"
},
{"name":"infinix d",
storage:"128GB",
price:46000,
image:"js/images/img4.jpg"
},
{"name":"abc d",
storage:"128GB",
price:46000,
image:"js/images/img4.jpg"
}
]
// console.log(obj)
// // document.write(obj."name"+" "+obj.email+" "+obj.phone);
// for(let key in obj){
//     console.log(key);

//     document.getElementById('demo').innerHTML +=key+" : "+obj[key]+" <br>";
// }
let dataTable = document.getElementById('data');

for(let key in mobile){
    // console.log(mobile[key].name)
    let x = "<tr><td>"+mobile[key].name+"</td><td>"+mobile[key].storage+"</td><td>"+mobile[key].price+"</td><td><img src='"+mobile[key].image+"' width='50px'/></td><td><a href=''>details</a></td></tr>"
    dataTable.innerHTML+=x;
}