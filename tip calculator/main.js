var theResult=document.getElementById("result");

  var selectBox =document.querySelector("select"),
  option=document.querySelectorAll("option");

function calculateTip(x,y){
  var reso1=(x*y)/100;
  var peopleValue=document.getElementById("people").value;
  var reso2=reso1/(peopleValue);
theResult.textContent=reso2;
}

var percentg;
selectBox.onchange = function(){
  percentg=selectBox.value;
   // for(i=0;i<option.length;i++){
   // if(selectBox.value==option[i].value){
   //   theResult.textContent=option[i].textContent;
   // }
   // }
   
}
 
 function finalCalc() {
    var billValue=document.getElementById("dollars").value;
  calculateTip(billValue,percentg);
}






