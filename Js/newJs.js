let tem=0;
function selectName(Name,Button){


     Button.addEventListener('click',function(){ 
     listNode = document.getElementById('list');
     liNode = document.createElement("LI");
     textNode = document.createTextNode(Name.innerText);
     liNode.appendChild(textNode);
     listNode.appendChild(liNode);  
     Button.disabled = 'true';
     Button.style.background = 'gray';
     
     tem++;
     
     if(tem>=6){
        liNode.remove();
        Button.style.background = '#015196';
        alert("You cant add more than 5 Players");
        console.log(tem);
     }
   })
}
for(let n=1;n<13;n++){
selectName(document.getElementById('playerName' + n),document.getElementById('player'+n));
}









