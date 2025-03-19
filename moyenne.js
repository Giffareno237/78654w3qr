function Moyenne() {
   var a = document.getElementById("s1").value 
   a = parseFloat(a)
   var b = document.getElementById("s2").value
   b = parseFloat(b)
   var c = document.getElementById("s3").value
   c = parseFloat(c)
   var d = (a+b+c)/3
   document.getElementById("s4").value=d;
}
