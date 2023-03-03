const $display = document.querySelector(".display");
const $result = document.querySelector(".result");

//display
function add(value) {
  const p = $display.textContent[$display.textContent.length - 1];
  if ($result.textContent === "0") {
    $result.textContent = value;
  } else {
    $result.textContent += value;
  }
  if (
    (p === "+" || p === "-" || p === "/" || p === "x") &&
    $display.textContent.slice(0, $display.textContent.length - 2) ===
      $result.textContent.slice(0, $result.textContent.length - 2)
  ) {
    $result.textContent = "";
    if ($result.textContent === "") $result.textContent = value;
  }
}

//연산기호
function calc(value) {
  const displayValue = $display.textContent;
  $display.textContent = $result.textContent;
  switch (value) {
    case "+":
      if (displayValue[displayValue.length - 1] === "+") {
        const result =
          Number($result.textContent) + Number(displayValue.split("+")[0]);
        $result.textContent = result;
        $display.textContent = result;
      }
      $display.textContent += "+";
      break;
    case "-":
      $display.textContent += "-";
      break;
    case "x":
      $display.textContent += "*";
      break;
    case "/":
      $display.textContent += "/";
      break;
  }
}

//=
function equal() {
  $display.textContent += $result.textContent;
  $result.textContent = eval($display.textContent);
}

//<
function back() {
  let arr = $result.textContent.split("");
  arr.pop();
  $result.textContent = arr.join("");
  if ($result.textContent.length === 0) {
    $result.textContent = 0;
  }
}

//CE
function CE() {
  $result.textContent = 0;
}

//소수점
function point() {
  $display.textContent += ".";
}
