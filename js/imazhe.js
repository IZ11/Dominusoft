var imazhet = [
"foto/ambient1.jpg",
"foto/ambient2.jpg",
"foto/ambient9.jpg",
"foto/ambient10.jpg",
"foto/ambient.jpg",
"foto/ambient3.jpg",
"foto/ambient4.jpg",
"foto/ambient5.jpg",
"foto/ambient6.jpg",
"foto/ambient7.jpg",
"foto/ambient8.jpg",
"foto/ambient11.jpg" ];

var num = 0;
function pas() {
var slider =
document.getElementById("slider");
num++;
if(num >= imazhet.length) {
num = 0;
}
slider.src = imazhet[num];
}
function para() {
var slider = document.getElementById("slider");
num--;
if(num < 0) {
num = imazhet.length-1;
}
slider.src = imazhet[num];
}
