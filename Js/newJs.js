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
        console.log(tem);
        document.getElementById('error').style.display='block';
        alert("You cant add more than 5 Players");

     }
   })
}
for(let n=1;n<13;n++){
selectName(document.getElementById('playerName' + n),document.getElementById('player'+n));
}



document.getElementById('calculate').addEventListener('click',function(){
            
             if(tem===6){
               tem--;
             }
     
                  let perPlayerFee = document.getElementById('per-player-cost').value;
                  const matchFee =parseInt(perPlayerFee);
                  let playerExpence = matchFee * tem; 
                  let Element =document.getElementById('totalAmount');
                  Element.innerText = playerExpence;  
                  
               
               
                  
});

document.getElementById('calculate1').addEventListener('click',function(){
             const ManegerFee = parseInt(document.getElementById('manager').value);
             const CoachCost = parseInt(document.getElementById('coach').value);
             const PlayerCost = parseInt(document.getElementById('totalAmount').innerText);
             const totalCost =PlayerCost + ManegerFee + CoachCost ;
             console.log(totalCost);

            document.getElementById('totalCost').innerText = totalCost ;
            


})






