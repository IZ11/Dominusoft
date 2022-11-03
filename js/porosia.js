function numerapojo(str) {
var pattern = /^\d+$/;
return pattern.test(str);
}
		
function kontroll(){
document.getElementById("p1").innerHTML ="";
document.getElementById("emri").style.border="";
document.getElementById("p2").innerHTML ="";
document.getElementById("mbiemri").style.border="";
document.getElementById("p3").innerHTML ="";
document.getElementById("numri").style.border="";
document.getElementById("p4").innerHTML ="";
document.getElementById("adresa1").style.border="";
document.getElementById("p5").innerHTML ="";
document.getElementById("porosia").style.border="";

var name1=document.forma.name.value;
var surname1=document.forma.surname.value;
var number1=document.forma.number.value;
var adresa2=document.forma.adresa.value;
var produkti1=document.forma.produkti.value;

name1=name1.replace(/^\s+|\s+$/g, '') ;
surname1=surname1.replace(/^\s+|\s+$/g, '') ;
number1=number1.replace(/^\s+|\s+$/g, '') ;
adresa2=adresa2.replace(/^\s+|\s+$/g, '') ;
produkti1=produkti1.replace(/^\s+|\s+$/g, '') ;

var vertetesia=true;

var kontrollo=numerapojo(number1);

if ("" == name1){
document.getElementById("p1").style.color="red";
document.getElementById("p1").innerHTML ="*Emri nuk mund të jetë bosh.";
document.getElementById("emri").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == surname1){
document.getElementById("p2").style.color="red";
document.getElementById("p2").innerHTML ="*Mbiemri nuk mund të jetë bosh.";
document.getElementById("mbiemri").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == number1){
document.getElementById("p3").style.color="red";
document.getElementById("p3").innerHTML ="*Numri nuk mund të jetë bosh.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}else if(kontrollo==false){
document.getElementById("p3").style.color="red";
document.getElementById("p3").innerHTML ="*Numri është shkruajtur gabim.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}else if(number1.length !=10 ){
document.getElementById("p3").style.color="red";
document.getElementById("p3").innerHTML ="*Numri duhet të përmbajë 10 shifra.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}else if(! (number1.startsWith("069") || number1.startsWith("068") || number1.startsWith("067"))){
document.getElementById("p3").style.color="red";
document.getElementById("p3").innerHTML ="*Numri duhet ti përkasë një operatori kombëtar.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == adresa2){
document.getElementById("p4").style.color="red";
document.getElementById("p4").innerHTML ="*Adresa nuk mund të jetë bosh.";
document.getElementById("adresa1").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == produkti1){
document.getElementById("p5").style.color="red";
document.getElementById("p5").innerHTML ="*Produkti nuk mund të jetë bosh.";
document.getElementById("porosia").style.border=" solid 3px red";
vertetesia=false;
}

if(vertetesia==true){
alert("Porosia juaj u krye me sukses.");
}else{
alert("Keni plotësuar gabim të dhënat.Provoni përseri.");	
}
return vertetesia;
}