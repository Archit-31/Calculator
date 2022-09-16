let initialTotal=null;
let buffer='0';
let operator=null; 



const output = document.querySelector('.screen');


document.querySelector(".buttons").addEventListener('click', function(event){

    buttonClick(event.target.innerText);

});

function buttonClick(val){

     if(isNaN(parseInt(val))){
        symbolClicked(val);
     }
     else{
        numberClicked(val);
     }
}

// handling symbols
function symbolClicked(newOperator){

    switch(newOperator){

        case 'C':
            clear();
            break;

        case '=':
            if(operator===null){
                console.log("here");
               return;
              
            }
            else{

                buffer = calculateResult(); 
                update();
                operator=null;
                initialTotal=null;
                buffer = output.innerText;
            }
            break;

        case '←':
                
                if(buffer.length===1){
                  buffer = '0';
                  update();
                }
                else{
                  buffer = buffer.substring(0,buffer.length-1);
                  update();
                }
            
            break; 

        default:
            
            if(!isNaN(parseInt(buffer[buffer.length-1]) )){
                
                
                let x = calculateResult();
                operator = newOperator;
                buffer = '0';
                update();
            }
            else{
              return;
            }
            break;

    }
    
}

function numberClicked(val){
   
      if(buffer === '0')
      { buffer = val;
      }
      else{
        buffer += val;
      };
  
      update();      
}

function calculateResult(){

    if(initialTotal!=null){

        if(operator==='+')
        initialTotal += parseInt(buffer);
        else if(operator==='-')
        initialTotal -= parseInt(buffer);
        else if(operator==='÷')
        initialTotal /= parseInt(buffer);
        else 
        initialTotal *= parseInt(buffer);

    }
    else{

        initialTotal = parseInt(buffer);
        console.log(initialTotal);

    }
    

    return initialTotal;

}



//Basic Functions

function update(){
    output.innerText = buffer;
}


function clear(){
    output.innerText ='0';
    buffer = '0';
    operator=null;
    initialTotal=null;
}

