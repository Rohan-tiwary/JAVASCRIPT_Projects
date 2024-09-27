var arr = [
       { dp: "https://images.unsplash.com/photo-1726441138748-c40db4021cd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
         story: "https://images.unsplash.com/photo-1727129345643-da73c8c60c2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D" 
       },
       { dp: "https://images.unsplash.com/photo-1725609959342-c247e04978e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D", 
         story: "https://images.unsplash.com/photo-1726491703819-b92c3e2e7091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D" 
       },
       { dp: "https://images.unsplash.com/photo-1717765697742-6b2f48f4a1fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", 
         story: "https://images.unsplash.com/photo-1721152839659-dabbacabd5d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D" 
       },
       { dp: "https://plus.unsplash.com/premium_photo-1724088683647-eef6d7f533e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", 
         story: "https://images.unsplash.com/photo-1713204767650-8be36bc71040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8" 
       }
   ];

var storiyan=document.querySelector("#storiyan");
var clutter="";
arr.forEach(function(elem,indx){
       clutter+=`<div class="story">
                <img id="${indx}" src="${elem.dp}" alt="">
            </div>`
});
storiyan.innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
         document.querySelector("#full-screen").style.display="block";
         document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;

         setTimeout(function(){
            document.querySelector("#full-screen").style.display="none";
         },3000)
});