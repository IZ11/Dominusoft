function numrat(str) {
var pattern = /^\d+$/;
return pattern.test(str);
}

function kontrolli(){
document.getElementById("p1").innerHTML ="";
document.getElementById("emri").style.border="";
document.getElementById("p2").innerHTML ="";
document.getElementById("mbiemri").style.border="";
document.getElementById("p3").innerHTML ="";
document.getElementById("age").style.border="";
document.getElementById("p4").innerHTML ="";
document.getElementById("numri").style.border="";
document.getElementById("p5").innerHTML ="";
document.getElementById("mail").style.border="";
document.getElementById("p6").innerHTML ="";
document.getElementById("adresa1").style.border="";
document.getElementById("p7").innerHTML ="";
document.getElementById("eks").style.border="";
document.getElementById("p8").innerHTML ="";
document.getElementById("reason").style.border="";

var name1=document.forma.name.value;
var surname1=document.forma.surname.value;
var mosha1=document.forma.mosha.value;
var number1=document.forma.number.value;
var email1=document.forma.email.value;
var adresa2=document.forma.adresa.value;
var eksperienca1=document.forma.eksperienca.value;
var arsye1=document.forma.arsye.value;

name1=name1.replace(/^\s+|\s+$/g, '') ;
surname1=surname1.replace(/^\s+|\s+$/g, '') ;
mosha1=mosha1.replace(/^\s+|\s+$/g, '') ;
number1=number1.replace(/^\s+|\s+$/g, '') ;
email1=email1.replace(/^\s+|\s+$/g, '') ;
adresa2=adresa2.replace(/^\s+|\s+$/g, '') ;
eksperienca1=eksperienca1.replace(/^\s+|\s+$/g, '') ;
arsye1=arsye1.replace(/^\s+|\s+$/g, '') ;

var vertetesia=true;

var kontrollo2=numrat(mosha1);
var kontrollo=numrat(number1);

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

if ("" == mosha1){
document.getElementById("p3").style.color="red";
document.getElementById("p3").innerHTML ="*Mosha nuk mund të jetë bosh.";
document.getElementById("age").style.border=" solid 3px red";
vertetesia=false;
}else if (mosha1<18){
document.getElementById("p3").style.color="red";
document.getElementById("p3").innerHTML ="*Mosha nuk mund të jetë nën 18.";
document.getElementById("age").style.border=" solid 3px red";
vertetesia=false;
}else if(kontrollo2==false){
document.getElementById("p3").style.color="red";
document.getElementById("p3").innerHTML="Mosha është shkruajtur gabim.";
document.getElementById("age").style.border="solid 3px red";
vertetesia=false;
}	

if ("" == number1){
document.getElementById("p4").style.color="red";
document.getElementById("p4").innerHTML ="*Numri nuk mund të jetë bosh.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}else if(kontrollo==false){
document.getElementById("p4").style.color="red";
document.getElementById("p4").innerHTML ="*Numri është shkruajtur gabim.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}else if(number1.length !=10 ){
document.getElementById("p4").style.color="red";
document.getElementById("p4").innerHTML ="*Numri duhet të përmbajë 10 shifra.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}else if(! (number1.startsWith("069") || number1.startsWith("068") || number1.startsWith("067"))){
document.getElementById("p4").style.color="red";
document.getElementById("p4").innerHTML ="*Numri duhet ti përkasë një operatori kombëtar.";
document.getElementById("numri").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == email1){
document.getElementById("p5").style.color="red";
document.getElementById("p5").innerHTML ="*Email-i nuk mund të jetë bosh.";
document.getElementById("mail").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == adresa2){
document.getElementById("p6").style.color="red";
document.getElementById("p6").innerHTML ="*Adresa nuk mund të jetë bosh.";
document.getElementById("adresa1").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == eksperienca1){
document.getElementById("p7").style.color="red";
document.getElementById("p7").innerHTML ="*Eksperienca nuk mund të jetë bosh.";
document.getElementById("eks").style.border=" solid 3px red";
vertetesia=false;
}

if ("" == arsye1){
document.getElementById("p8").style.color="red";
document.getElementById("p8").innerHTML ="*Shpjegimi nuk mund të jetë bosh.";
document.getElementById("reason").style.border=" solid 3px red";
vertetesia=false;
}

if(vertetesia==true){
alert("Aplikimi juaj u krye me sukses.");
}else{
alert("Keni plotësuar gabim të dhënat.Provoni përseri.");
}
return vertetesia;	
}