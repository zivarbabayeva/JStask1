//area of circle//
function CalculateArea(){
    var radius =document.form1.txtRadius.value;
    document.write("<P>Cevrenin sahesi " + (radius * radius * Math.PI) + "</p>");
   
}

//!-- */area of square/ //
var a,area;
a = parseInt(document.getElementById("first").value);
area = a*a; 
document.getElementById("num").innerHTML="Kvadratin sahesi : "+area;
