const $display = document.querySelector(".display");
const $result = document.querySelector(".result");

let o;
let c;
let i = -1;
//연산기호
function calc(value) {
  const displayValue = $display.textContent;

  if (displayValue[displayValue.length - 1] === "+") {
    $display.textContent =
      Number($display.textContent.split("+")[0]) + Number($result.textContent);
    console.log($display.textContent.split("+")[0]);
  } else if (displayValue[displayValue.length - 1] === "-") {
    $display.textContent =
      Number($display.textContent.split("-")[0]) - Number($result.textContent);
    console.log($display.textContent.split("-")[0]);
  } else if (displayValue[displayValue.length - 1] === "x") {
    $display.textContent =
      Number($display.textContent.split("x")[0]) * Number($result.textContent);
  } else if (displayValue[displayValue.length - 1] === "/") {
    $display.textContent =
      Number($display.textContent.split("/")[0]) / Number($result.textContent);
    console.log($display.textContent.split("/")[0]);
  } else {
    $display.textContent = $result.textContent;
  }

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
      if (displayValue[displayValue.length - 1] === "-") {
        const result =
          Number($result.textContent) + Number(displayValue.split("-")[0]);
        $result.textContent = result;
        $display.textContent = result;
      }
      $display.textContent += "-";
      break;
    case "x":
      if (displayValue[displayValue.length - 1] === "x") {
        const result =
          Number($result.textContent) * Number(displayValue.split("x")[0]);
        $result.textContent = result;
        $display.textContent = result;
      }
      $display.textContent += "x";
      break;
    case "/":
      if (displayValue[displayValue.length - 1] === "/") {
        const result =
          Number($result.textContent) + Number(displayValue.split("/")[0]);
        $result.textContent = result;
        $display.textContent = result;
      }
      $display.textContent += "/";
      break;
  }
  o = $display.textContent;
  c = value;
  i++;
}
let list = [];
let list1 = [];
//display
function add(value) {
  if (o !== undefined) {
    o = o.slice(0, $display.textContent.length - 1);
    list[i] = o;
  }
  if (c !== undefined) {
    list1[i] = c;
  }
  let b = $result.textContent;

  if ($result.textContent === "0") {
    $result.textContent = value;
  } else {
    if ($display.textContent[$display.textContent.length - 1] === "=") {
      $display.textContent = "";
      $result.textContent = "";
    } else if ($display.textContent[$display.textContent.length - 1] === "+") {
      if ($display.textContent.split("+")[0] === $result.textContent) {
        $result.textContent = value;
      } else {
        $result.textContent += value;
      }

      if (list1[i - 1] !== undefined && list[i - 1] !== undefined) {
        if (list1[i - 1] === "x") {
          list1[i - 1] = "*";
        }
        if (
          eval(`${b} ${list1[i - 1]} ${list[i - 1]}`) ===
          Number($display.textContent.slice(0, $display.textContent.length - 1))
        ) {
          $result.textContent = value;
        }
      }
    } else if ($display.textContent[$display.textContent.length - 1] === "-") {
      if ($display.textContent.split("-")[0] === $result.textContent) {
        $result.textContent = value;
      } else {
        $result.textContent += value;
      }

      if (list1[i - 1] !== undefined && list[i - 1] !== undefined) {
        if (list1[i - 1] === "x") {
          list1[i - 1] = "*";
        }
        if (
          eval(`${b} ${list1[i - 1]} ${list[i - 1]}`) ===
          Number($display.textContent.slice(0, $display.textContent.length - 1))
        ) {
          $result.textContent = value;
        }
      }
    } else if ($display.textContent[$display.textContent.length - 1] === "x") {
      if ($display.textContent.split("x")[0] === $result.textContent) {
        $result.textContent = value;
      } else {
        $result.textContent += value;
      }

      if (list1[i - 1] !== undefined && list[i - 1] !== undefined) {
        if (list1[i - 1] === "x") {
          list1[i - 1] = "*";
        }
        if (
          eval(`${b} ${list1[i - 1]} ${list[i - 1]}`) ===
          Number($display.textContent.slice(0, $display.textContent.length - 1))
        ) {
          $result.textContent = value;
        }
      }
    } else if ($display.textContent[$display.textContent.length - 1] === "/") {
      if ($display.textContent.split("/")[0] === $result.textContent) {
        $result.textContent = value;
      } else {
        $result.textContent += value;
      }

      if (list1[i - 1] !== undefined && list[i - 1] !== undefined) {
        if (list1[i - 1] === "x") {
          list1[i - 1] = "*";
        }
        if (
          eval(`${b} ${list1[i - 1]} ${list[i - 1]}`) ===
          Number($display.textContent.slice(0, $display.textContent.length - 1))
        ) {
          $result.textContent = value;
        }
      }
    } else {
      $result.textContent += value;
    }
  }

  const p = $display.textContent[$display.textContent.length - 1];

  if (
    (p === "+" || p == "-" || p == "x" || p == "/") &&
    $display.textContent.slice(0, $display.textContent.length - 2) ===
      $result.textContent.slice(0, $result.textContent.length - 2)
  ) {
    $result.textContent = "";
  }
  if ($result.textContent === "") $result.textContent = value;
}

//=
function equal() {
  const calcSymbol = $display.textContent.replace(/[0-9]/g, "")[0];
  if ($display.textContent[$display.textContent.length - 1] === "=") {
    // console.log(calcSymbol);
    $display.textContent =
      $result.textContent +
      calcSymbol +
      $display.textContent.split(calcSymbol)[1];
    +"=";
    if (calcSymbol === "x") {
      $result.textContent =
        $display.textContent.split(calcSymbol)[0] *
        $display.textContent.split(calcSymbol)[1].replace("=", "");
      // console.log($result.textConten);
    } else {
      $result.textContent = eval(
        $display.textContent.slice(0, $display.textContent.length - 1)
      );
    }
  } else {
    $display.textContent += $result.textContent;
    if (calcSymbol === "x") {
      $result.textContent =
        $display.textContent.split(calcSymbol)[0] *
        $display.textContent.split(calcSymbol)[1];
      $display.textContent += "=";
    } else {
      $result.textContent = eval($display.textContent);
      $display.textContent += "=";
    }
  }
  // console.log($display.textContent.length);
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
//정규식
const symbol = /[\+\-\x\=]$/;

//CE
function CE() {
  if (
    $display.textContent.split(/\+|=/).length === 0 ||
    $display.textContent.split(/\+|=/).length === 2
  ) {
    $result.textContent = "0";
  } else {
    $display.textContent = "";
    $result.textContent = "0";
  }
}

//C
function C() {
  $display.textContent = "";
  $result.textContent = "0";
}

//소수점
function point() {
  $display.textContent += ".";
}
