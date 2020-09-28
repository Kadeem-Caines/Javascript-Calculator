var number1="";
var number2="";
var ari="";
var result=0;


function chooseNumber(elem){
     
    
    if(ari==""){
        
         number1+=document.getElementById(elem.id).value;     
        
        number1=parseInt(number1);  
        
        document.getElementById("solution").innerHTML = number1;
        
    }
        
 
   else {
          number2+=document.getElementById(elem.id).value;
        number2=parseInt(number2);
       
       document.getElementById("solution").innerHTML = number2;
    }
        
    
    
    
}
         
    


function chooseCalculation(elem){
    
     ari=document.getElementById(elem.id).value;
    
    if(ari=="x^2"){
        document.getElementById("solution").innerHTML =number1 +"^2";
    }
    
    else{
        
        document.getElementById("solution").innerHTML = ari;
    }
     

}

function calculate(){
    
    
    switch(ari){
        case "+":
            result=number1+number2;
            document.getElementById("solution").innerHTML = result;
            break;
            
        case "-":
            result=number1-number2;
            document.getElementById("solution").innerHTML = result;
            break;
            
        case "X":
             result=number1*number2;
            document.getElementById("solution").innerHTML = result;
            break;
            
        case "/":
            if(number2==0){
                
                result="ERROR. CANNOT DIVIDE BY ZERO"       
                
            }
            else{
                
                result=number1/number2;
                
            }
            
            document.getElementById("solution").innerHTML = result;
            
            break;
            
        case "√":
            
            result=Math.sqrt(number1);
            document.getElementById("solution").innerHTML = result;
            
            break;
            
        case "x^2":
            
            result=number1*number1;
            document.getElementById("solution").innerHTML = result;
            break;
    }
    

    
}

function clearSolution(){

number1="";
number2="";
ari="";
result=0;

document.getElementById("solution").innerHTML = result;
    
}


