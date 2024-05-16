$(document).ready(function(){
    $.ajax({
        url:"assets/json/a.json",
        type:"get",
        success:function(data){
            // console.log(data)
            let x = "";
            $.each(data,function(index,objects){
                x+=`
                <div class="col-lg-3">
                <div class="card" >
                  <img src="${objects.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${objects.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted ">${objects.price}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                  </div>
                </div>
            </div>
                `
            })
            $("#data").html(x)
        }
    })
})