// Your code here
Div1 = document.getElementById("div1");
Div2 = document.getElementById("div2");
Div3 = document.getElementById("div3");
Div4 = document.getElementById("div4");
Div5 = document.getElementById("div5");
Div6 = document.getElementById("div6");
Div7 = document.getElementById("div7");
Div8 = document.getElementById("div8");
Div9 = document.getElementById("div9");
rollButton = document.getElementById("RollBtn");

function resetDots(){
    Div1.className = "innerSquare";
    Div2.className = "innerSquare";
    Div3.className = "innerSquare";
    Div4.className = "innerSquare";
    Div5.className = "innerSquare";
    Div6.className = "innerSquare";
    Div7.className = "innerSquare";
    Div8.className = "innerSquare";
    Div9.className = "innerSquare";
}
function getDiceRoll() {
  min = 1;
  max = 6;
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function setDots(num){
  switch (num) {
    case 1:
      Div5.className = "dot";
      break;
    case 2:
      Div2.className = "dot";
      Div8.className = "dot";
      break;
    case 3:
      Div4.className = "dot";
      Div5.className = "dot";
      Div6.className = "dot";
      break;
    case 4:
      Div1.className = "dot";
      Div3.className = "dot";
      Div7.className = "dot";
      Div9.className = "dot";
      break;
    case 5:
      Div1.className = "dot";
      Div3.className = "dot";
      Div5.className = "dot";
      Div7.className = "dot";
      Div9.className = "dot";
      break;
    default:
      Div1.className = "dot";
      Div2.className = "dot";
      Div3.className = "dot";
      Div4.className = "dot";
      Div5.className = "dot";
      Div6.className = "dot";
      Div7.className = "dot";
      Div8.className = "dot";
      Div9.className = "dot";
      break;
  }
}

rollButton.onclick = function(){
  resetDots();
  setDots(getDiceRoll());
}
