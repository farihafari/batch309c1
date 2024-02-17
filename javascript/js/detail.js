let bigImagesource = document.getElementById('bImg');
function imagePreview(psrc){
    // let smallImageSource = document.getElementById('sImg');
    bigImagesource.src=psrc.src;
}
// add to cart
let count =0;
let qty = document.querySelector('#qty');
let total = document.querySelector('#total');
let price = 45000;
function increament(){
  count++;
  qty.value=count;
  total.innerHTML = qty.value * price 
} 
function decreament(){
    if(count>0){
        count--;
    qty.value=count;
    total.innerHTML = qty.value * price 
    }else{
        total.innerHTML = count
    }
  }