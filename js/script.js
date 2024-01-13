function calculateArea() {
  var sideLength = parseFloat(document.getElementById("sideLength").value);
  var area = sideLength * sideLength;
  document.getElementById("resultArea").innerHTML = "Luas: " + area;
  document.getElementById("resultPerimeter").innerHTML = "Keliling: ";
}

function calculatePerimeter() {
  var sideLength = parseFloat(document.getElementById("sideLength").value);
  var perimeter = 4 * sideLength;
  document.getElementById("resultPerimeter").innerHTML =
    "Keliling: " + perimeter;
  document.getElementById("resultArea").innerHTML = "Luas: ";
}
