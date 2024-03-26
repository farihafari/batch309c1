// if(window.navigator.geolocation){
//     alert("support")
// }else{
//     alert("not")
// }
// currentpoint
// window.navigator.geolocation.getCurrentPosition(showPosition);
// function showPosition(position){
//     alert("latitude: "+position.coords.latitude+" longitude: "+ position.coords.longitude)
// }
// for map API
let mapData = document.querySelector("#mapData");
let lat_lng= new google.maps.LatLng(24.894082735650784, 67.08496258196337);
let map = new google.maps.Map(mapData,{
    center:lat_lng,
    zoom:14,
    mapTypeId:"roadmap"
})
let maker = new google.maps.Marker({
    position:lat_lng,
    map:map,
    title:"aga khan hospital"
})