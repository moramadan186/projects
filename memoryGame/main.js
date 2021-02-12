document.getElementById("splashBtn").onclick=function(){
    document.getElementsByClassName("splash")[0].remove();
  setTimeout(function(){
    var yourName=prompt("Enter your name");
    if(yourName==null || yourName==""){
    document.getElementById("userName").textContent="unknown";
    }
    else   
    document.getElementById("userName").textContent=yourName;
        for(var i=0; i<cards.length;i++){
          cards[i].lastElementChild.classList.add("beforeStart"); 
        }
        cardsContainer.style.pointerEvents="none"
        setTimeout(() => {
          for(var i=0; i<cards.length;i++){
            cards[i].lastElementChild.classList.remove("beforeStart")
          }
          cardsContainer.style.pointerEvents="auto"
        },8000);
  },300)
  
}

var cardsContainer=document.getElementsByClassName("cardsContainer")[0],
    cards=Array.from(cardsContainer.children),
    cardsKeys=[...cards.keys()] ,
    filterdCards ,
    tries= document.getElementById("tries"),
    anofilterd=new Array;
window.onload=function(){
      document.getElementById("splashBtn").style.transform="translate(-50%,-50%) scale(1.2) rotate(36000deg) ";
  
  }




function ShuffleKeys(arrOfKey){
  var lastIndex=arrOfKey.length-1;
  for(;lastIndex>=0;){
    var generatedRandom=Math.floor(Math.random()*lastIndex);
    var temp=arrOfKey[lastIndex];
    arrOfKey[lastIndex]=arrOfKey[generatedRandom];
    arrOfKey[generatedRandom]=temp;
    lastIndex--;  
  }
}
ShuffleKeys(cardsKeys);


for(var i=0 ;i<cards.length;i++){
  //shuffling cards itself
  cards[i].style.order=cardsKeys[i];
  //all things occurs when clicking on the card 
  cards[i].onclick=function(){

    this.classList.add("flipCard");
    filterdCards = cards.filter(card =>card.classList.contains("flipCard"));
   
    if(filterdCards.length==2){
      cardsContainer.style.pointerEvents="none";
      setTimeout(function(){
        if(filterdCards[0].lastElementChild.firstElementChild.getAttribute("src")!= filterdCards[1].lastElementChild.firstElementChild.getAttribute("src")){
          filterdCards[0].classList.remove("flipCard");
          filterdCards[1].classList.remove("flipCard");
          tries.innerHTML=parseInt(tries.innerHTML)+1;
        }
        else{
          filterdCards[0].classList.remove("flipCard");
          filterdCards[1].classList.remove("flipCard");
          filterdCards[0].classList.add("tempFlip");
          filterdCards[1].classList.add("tempFlip");
        }
        cardsContainer.style.pointerEvents="auto";
        anofilterd=cards.filter(card =>card.classList.contains("tempFlip"));
      },1000)
     
    }

  }

}

 
// if(anofilterd.length==cards.length){
//   console.log("aakjdfhaj");
//   document.getElementsByClassName("result")[0].classList.add("removeNone");
// }



