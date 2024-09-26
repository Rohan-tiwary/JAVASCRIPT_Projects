var elem1=document.querySelector("#elem1");
var elemImage=document.querySelector("#elem1 img");

elem1.addEventListener("mousemove",function(dets){
       elemImage.style.left=dets.x+"px";
       elemImage.style.top=dets.y+"px";
});