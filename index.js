window.alert("HI There My Name Is SAURABH YADAV")

function exploreBtnIn(obj){
    obj.innerHTML="CLICk ME";
}
function exploreBtnOut(obj){
    obj.innerHTML="EXPLORE NOW";
}
 var navItems;
 function navItemIn(obj){
     navItems=obj.innerHTML;
     obj.innerHTML='Click';
     obj.style.color='yellow';
 }
 function navItemOut(obj){

     obj.innerHTML=navItems;
     if (navItems === "Contact" || navItems === "About")
     {
         obj.style.color="black";
     }
     else {
     obj.style.color="white"
     }
 }
