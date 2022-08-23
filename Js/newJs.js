function selectName(Name,Button){
   Button.addEventListener('click',function(){ 
     listNode = document.getElementById('list');
     liNode = document.createElement("LI");
     textNode = document.createTextNode(Name.innerText);
     liNode.appendChild(textNode);
     listNode.appendChild(liNode);  
     Button.disabled = 'true';
     Button.style.background = 'gray';
   })
}

selectName(document.getElementById('playerName1'),document.getElementById('player1'));
selectName(document.getElementById('playerName2'),document.getElementById('player2'));
selectName(document.getElementById('playerName3'),document.getElementById('player3'));
selectName(document.getElementById('playerName4'),document.getElementById('player4'));
selectName(document.getElementById('playerName5'),document.getElementById('player5'));
selectName(document.getElementById('playerName6'),document.getElementById('player6'));
selectName(document.getElementById('playerName7'),document.getElementById('player7'));
selectName(document.getElementById('playerName8'),document.getElementById('player8'));
selectName(document.getElementById('playerName9'),document.getElementById('player9'));
selectName(document.getElementById('playerName10'),document.getElementById('player10'));
selectName(document.getElementById('playerName11'),document.getElementById('player11'));
selectName(document.getElementById('playerName12'),document.getElementById('player12'));





