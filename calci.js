function calculate() {
    
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    
    var total= a + b + c;
    
    document.getElementById('result').innerHTML = name + "total  " + total;
}
