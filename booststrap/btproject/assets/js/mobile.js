let mobiles = {
    infinix : [
        {
            id:"i1",
            name:"Infinix Hot 30",
            storage:"16GB-128GB(8+8)",
            price:29899,
            describtion:"Infinix Hot 30 16GB-128GB(8+8) - Android 13 - 6.78 Display - 5000 mAh Battery PTA Approved with 1 Year Official Warranty",
image:"assets/images/mobile/m1.webp"
        },
        {
            id:"i2",
            name:"Infinix Hot 30",
            storage:"8GB RAM 256GB ROM40,888",
            price:40888,
            describtion:"Infinix Note 30 , 8GB RAM 256GB ROM , 64MP Main Camera , Fingerprint , 5000mAh Fast Charging",
            image:"assets/images/mobile/m2.webp"
        },
        {
            id:"i3",
            name:"Infinix Hot 40",
            storage:"8GB+8GB Ram",
            price:28999,
            describtion:"Infinix Hot 40i || 8GB+8GB Ram 5000mAh Battery || 50MP Camera",
            image:"assets/images/mobile/m3.webp"
        },
    ],
    samsung:[
        {
            id:"s1",
            name:"Samsung Galaxy A14",
            storage:"6GB-128GB",
            price:37799,
            describtion:"Samsung Galaxy A14 6GB-128GB ROM PTA APPROVED NON ACTIVE OFFICIAL BRAND WARRANTY",
            image:"assets/images/mobile/m4.webp"
        },
        {
            id:"s2",
            name:"Samsung Galaxy S2",
            storage:"8GB/256GB ",
            price:186999,
            describtion:"Samsung Galaxy S23 FE - 8GB/256GB - 6.4 Display - Android 13 - Octa Core - 4500 mAh Battery",
            image:"assets/images/mobile/m5.webp"
        },
    ],
    techno:[
        {
            id:"t1",
            name:" SPARK 20C",
            storage:"128GB ROM+4GB RAM",
            price:26599,
            describtion:"SPARK 20C 128GB ROM+4GB RAM*(4GB+4GB Extended) 5000mAh(typ) Battery PTA Approved Official Brand Warranty",
            image:"assets/images/mobile/m6.webp"
        },
        {
            id:"t2",
            name:"Tecno SPARK 10C",
            storage:"4GB RAM -128GB ROM",
            price:27899,
            describtion:"Tecno SPARK 10C 4GB RAM -128GB ROM 5000mAh PTA APPROVED OFFICIAL BRAND WARRANTY",
            image:"assets/images/mobile/m7.webp"
        },
        {
            id:"t3",
            name:"Tecno Phantom 5",
            storage:"12GB/512GB",
            price:329999,
            describtion:"Tecno Phantom 5 Fold 12GB/512GB - Mediatek Dimensity 9000+(4nm) - 7.85 Display - 5000 mAh - Android 13",
            image:"assets/images/mobile/m8.webp"
        },
    ],
    iphone:[
        {
            id:"ip1",
            name:"iPhone 15 Pro Max",
            storage:"256 GB",
            price:539999,
            describtion:"iPhone 15 Pro Max 256 GB Apple official 1 year Mercantile Warranty",
            image:"assets/images/mobile/m9.webp"
        },
        {
            id:"ip2",
            name:"Apple iPhone 11",
            storage:"128GB",
            price:214999,
            describtion:"Apple iPhone 11 128GB Box Packed (Official Warranty Mercantile) (Both Sim PTA Approved) Non Active - Daraz Like New Phones",
            image:"assets/images/mobile/m10.webp"
        },
    ],
    redmi:[
        {
            id:"r1",
            name:"Redmi 10A",
            storage:"3GB Ram 64GB Rom",
            price:34999,
            describtion:"Redmi 10A || 3GB Ram 64GB Rom || 6.53 Inches IPS Display || 5000 mAh - Battery charging 10W",
            image:"assets/images/mobile/m11.webp"
        },
        {
            id:"r2",
            name:"Redmi Note 11",
            storage:"6GB Ram 128GB Rom",
            price:67999,
            describtion:"Redmi Note 11 || 6GB Ram 128GB Rom || 5000mAh Battery",
            image:"assets/images/mobile/m12.webp"
        }
    ]
}
let rowData = document.querySelector("#productData");
let x ="";
for(let firstKey in mobiles){
    // console.log(firstKey);
    // console.log(mobiles[firstKey].length);
    for(let i = 0; i<mobiles[firstKey].length; i++){
        // console.log(mobiles[firstKey][i].price);
x+=`<div class="col-lg-3 col-md-4 col-sm-6 mt-3">
<div class="card" >
  <img src="${mobiles[firstKey][i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">`+mobiles[firstKey][i].name+`</h5>
    <h5 class="card-title">Price: `+mobiles[firstKey][i].price+`</h5>


    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${mobiles[firstKey][i].id}">Detail</a>
  </div>
</div>
</div>`;
    }
}
rowData.innerHTML = x;
// search function
function searchBrand(){
    let searchData = document.querySelector("#searchData").value.toLowerCase();
    let y ="";
    for(let firstKey in mobiles){
        if(firstKey == searchData){
            for(i=0;i<mobiles[firstKey].length; i++){
                y+=`<div class="col-lg-3 col-md-4 col-sm-6 mt-3">
                <div class="card" >
                  <img src="${mobiles[firstKey][i].image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">`+mobiles[firstKey][i].name+`</h5>
                    <h5 class="card-title">Price: `+mobiles[firstKey][i].price+`</h5>
                
                
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#">Detail</a>
                  </div>
                </div>
                </div>`
                // console.log(mobiles[firstKey][i].name)
            }
//  console.log(firstKey )
        }
       
      
    }
    rowData.innerHTML = y;
    // console.log("search data "+searchData)
}
let md = "";
// modal work start
for(let modalKey in mobiles){
    // console.log(firstKey);
    // console.log(mobiles[firstKey].length);
    for(let i = 0; i<mobiles[modalKey].length; i++){
        // console.log(mobiles[modalKey][i].price);
md +=`<div class="modal fade" id="exampleModal${mobiles[modalKey][i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${mobiles[modalKey][i].name}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <div class="row justify-content-center ">
      <div class="col-lg-4">
        <div class="">
          <img src="${mobiles[modalKey][i].image}" class="card-img-top" alt="...">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="">
          <h5 class="card-header">${mobiles[modalKey][i].name}</h5>
          <div class="card-body">
            <h5 class="card-title">${mobiles[modalKey][i].price}</h5>
            <p class="card-text">${mobiles[modalKey][i].describtion}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
     </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>`;
    }
}
document.querySelector("#mdData").innerHTML=md;