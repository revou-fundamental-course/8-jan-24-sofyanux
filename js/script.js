function calculateArea() {
  var sideLength = parseInt(document.getElementById("sideLength").value);
  var area = sideLength * sideLength;
  document.getElementById("resultArea").innerHTML =
    "Luas: " + area + "px";
  document.getElementById("resultPerimeter").innerHTML = "Keliling: ";

  var visualSquare = document.getElementById("visualSquare");
  visualSquare.innerHTML = "";
  visualSquare.style.width = sideLength + "px";
  visualSquare.style.height = sideLength + "px";
  visualSquare.classList.add("animate");

  addSideLengthLabel(visualSquare, "top", sideLength);
  addSideLengthLabel(visualSquare, "right", sideLength);
  addSideLengthLabel(visualSquare, "bottom", sideLength);
  addSideLengthLabel(visualSquare, "left", sideLength);
}

function calculatePerimeter() {
  var sideLength = parseInt(document.getElementById("sideLength").value);
  var perimeter = 4 * sideLength;
  document.getElementById("resultPerimeter").innerHTML =
    "Keliling: " + perimeter + "px";
  document.getElementById("resultArea").innerHTML = "Luas: ";

  var visualSquare = document.getElementById("visualSquare");
  visualSquare.innerHTML = "";
  visualSquare.style.width = sideLength + "px";
  visualSquare.style.height = sideLength + "px";
  visualSquare.classList.add("animate");

  addSideLengthLabel(visualSquare, "top", sideLength);
  addSideLengthLabel(visualSquare, "right", sideLength);
  addSideLengthLabel(visualSquare, "bottom", sideLength);
  addSideLengthLabel(visualSquare, "left", sideLength);
}

function addSideLengthLabel(parent, position, sideLength) {
  var sideLengthLabel = document.createElement("div");
  sideLengthLabel.className = "side-length-label";
  sideLengthLabel.innerHTML = sideLength + "px";

  var visualSquareWidth = parseInt(parent.style.width);
  var visualSquareHeight = parseInt(parent.style.height);

  switch (position) {
    case "top":
      sideLengthLabel.style.top = "0";
      sideLengthLabel.style.left = "50%";
      sideLengthLabel.style.transform = "translateX(-50%)";
      break;
    case "right":
      sideLengthLabel.style.right = "-10px";
      sideLengthLabel.style.top = "50%";
      sideLengthLabel.style.transform = "translateY(-50%) rotate(-90deg)";
      break;
    case "bottom":
      sideLengthLabel.style.bottom = "0";
      sideLengthLabel.style.left = "50%";
      sideLengthLabel.style.transform = "translateX(-50%)";
      break;
    case "left":
      sideLengthLabel.style.left = "-10px";
      sideLengthLabel.style.top = "50%";
      sideLengthLabel.style.transform = "translateY(-50%) rotate(-90deg)";
      break;
    default:
      break;
  }

  parent.appendChild(sideLengthLabel);
}
