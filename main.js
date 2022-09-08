function number(){
    var number_1 = document.getElementById("firstno").value;
    }
    function calculate() {
    number_1 = Number(document.getElementById("firstno").value);
    
    var area = number_1 * number_1;
    var perimeter  = 4 * number_1;
    
    document.getElementById("lblArea").innerHTML = area;
    
     /*Muestra la variable 'perimeter' en la división con el ID lblPerimeter.*/
    document.getElementById("Ib1Perimeter ").innerHTML = area;
      
    }
    