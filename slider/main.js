var imagesArray=Array.from(document.querySelectorAll(".imagesContainer img")) ,
    imagesLength = imagesArray.length ,
    currentSlide=document.getElementsByClassName("imageNumber")[0], 
    prevButton =document.getElementById("previous"),
    nextButton = document.getElementById("next") ,
currentSlideNum=Math.ceil(Math.random()*imagesLength);


// create Pagination items 
var itemsParent=document.createElement("ul") ;
itemsParent.setAttribute('id', 'pagination-ul');
for(var i=1 ; i<=imagesLength ;i++ ){
    var item=document.createElement("li");
    item.setAttribute("itemNum" , i);
    item.textContent=i
    itemsParent.appendChild(item);
}
document.getElementsByClassName("indicators")[0].appendChild(itemsParent);
var gettingItem=document.getElementById("itemNum") , 
    itemsArray = Array.from(document.querySelectorAll("#pagination-ul li"));

//create check function 
function check(){
   if(currentSlideNum==1)prevButton.classList.add("disabled");
   else prevButton.classList.remove("disabled");
   if(currentSlideNum==imagesLength)nextButton.classList.add("disabled");
   else nextButton.classList.remove("disabled");
   for(var i=0;i<imagesLength;i++){
       imagesArray[i].classList.remove("active");
       itemsArray[i].classList.remove("active");
   }
   currentSlide.textContent=currentSlideNum;
   imagesArray[currentSlideNum-1].classList.add("active");
   itemsArray[currentSlideNum-1].classList.add("active");
 
}
check();
nextButton.onclick=function(){
    if(currentSlideNum!=imagesLength)currentSlideNum++;
    check();

}
prevButton.onclick=function(){
    if(currentSlideNum!=1)currentSlideNum--;
    check();

}
for(var i=0; i<itemsArray.length;i++){
    itemsArray[i].onclick=function(){
        currentSlideNum=parseInt(this.getAttribute('itemNum'));
        check();
    }
}
