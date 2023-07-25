var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display'); // Corrected to use getElementById instead of getAnimations
var n=0;

var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var value = this.getAttribute('data-value'); // Getting value of button pressed

    if (value === '+' || value === '%' || value === '/' || value === '*' || value === '-') {
      operator = value;
      operand1 = parseFloat(display.textContent);
      display.innerText="";
      
      
    } else if (value === '=') {

        if(operand1==null){
            display.innerText= "Invalid Syntax !";
        }
        else{
      operand2 = parseFloat(display.textContent);
      var ans = eval(operand1 + " " + operator + " " + operand2);
      display.innerText = ans; // Displaying the result
    }}


    else if(value==='+/-'){

        if(n%2==0){
           
            display.innerText='+';
           

        }

        else {
            display.innerText='-';
        }
        n++;

    }

    else if(value==='AC'){

        display.innerText="";
    }
    
    
    
    

        else {

            
            display.innerText+=value;
        }
        
      
    
  });
}
