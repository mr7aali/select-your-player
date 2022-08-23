
function selectedName(Name,Button){
    document.getElementById('player1').addEventListener('click',function(){

        const getNameElement =document.getElementById('playerName1');
        const getName = getNameElement.innerText;
         listNode = document.getElementById('list');
         liNode = document.createElement("LI");
         textNode = document.createTextNode(getName);
         liNode.appendChild(textNode);
         listNode.appendChild(liNode);
         

         let btn = document.getElementById('player1');
         btn.disabled = 'true';
         btn.style.background = 'gray';
 
});
}

selectedName('playerName1','player1');