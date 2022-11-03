function dergo(){

var mendim=document.forma.sugjerime.value;

mendim=mendim.replace(/^\s+|\s+$/g, '') ;

var vertetesia=true;

if ("" == mendim){
vertetesia=false;
}

if(vertetesia==true){
alert("Ju falenderojmë për opinionin e dhënë.");
}else{
alert("Ju nuk keni shprehur asnjë opinion.");
}
return vertetesia;
}