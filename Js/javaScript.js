let len = document.querySelectorAll('.btn-1').length;

const selectedName=[];
let tem=0;

    for(let i =0; i<len; i++){
        document.querySelectorAll('.btn-1')[i].addEventListener('click',function(){
            const getNameElement = document.querySelectorAll('.player-name')[i];
            const getName = getNameElement.innerText;
            selectedName.push(getName);
    
      


            listNode = document.getElementById('list');
            liNode = document.createElement("LI");
            textNode = document.createTextNode(getName);
            liNode.appendChild(textNode);
            listNode.appendChild(liNode); 


          
          
          

          });
          tem++;
          console.log(tem);
         
       }

  
                                                 

