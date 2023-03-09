const $display = document.querySelector(".display");
const $result = document.querySelector(".result");

//연산 횟수 카운트
let symbolCount;

//연산기호
function calc(value) {
  const ariSymbol = $display.textContent[$display.textContent.length - 1];

  //그 전 연산 계산 후 제시
  if (/\+|-|\//.test(ariSymbol) === true) {
    $display.textContent = eval(
      `${$display.textContent.split(ariSymbol)[0]} ${ariSymbol} ${
        $result.textContent
      }`
    );
    $result.textContent = $display.textContent;
  } else if (ariSymbol === "x") {
    $display.textContent =
      Number($display.textContent.split("x")[0]) * Number($result.textContent);
    $result.textContent = $display.textContent;
  } else {
    $display.textContent = $result.textContent;
  }

  //현재 누른 연산기호 display에 더하기
  $display.textContent += value;

  symbolCount = 0;
}

//display
function add(value) {
  const ariSymbol = $display.textContent[$display.textContent.length - 1];
  if ($result.textContent === "0") {
    $result.textContent = value;
  } else {
    if (ariSymbol === "=") {
      $display.textContent = "";
      $result.textContent = "";
    } else if (ariSymbol === "+") {
      if (/\+|-|\/|x/.test(ariSymbol) === true) {
        if (symbolCount === 0) {
          $result.textContent = value;
          symbolCount++;
        } else {
          $result.textContent += value;
        }
      }
    } else if (ariSymbol === "-") {
      if (/\+|-|\/|x/.test(ariSymbol) === true) {
        if (symbolCount === 0) {
          $result.textContent = value;
          symbolCount++;
        } else {
          $result.textContent += value;
        }
      }
    } else if (ariSymbol === "x") {
      if (/\+|-|\/|x/.test(ariSymbol) === true) {
        if (symbolCount === 0) {
          $result.textContent = value;
          symbolCount++;
        } else {
          $result.textContent += value;
        }
      }
    } else if (ariSymbol === "/") {
      if (/\+|-|\/|x/.test(ariSymbol) === true) {
        if (symbolCount === 0) {
          $result.textContent = value;
          symbolCount++;
        } else {
          $result.textContent += value;
        }
      }
    } else {
      $result.textContent += value;
    }
  }

  if ($result.textContent === "") $result.textContent = value;
}

//=
function equal() {
  const calcSymbol = $display.textContent.replace(/[0-9]|\./g, "")[0];
  if ($display.textContent[$display.textContent.length - 1] === "=") {
    $display.textContent =
      $result.textContent +
      calcSymbol +
      $display.textContent.split(calcSymbol)[1];
    +"=";
    if (calcSymbol === "x") {
      console.log($display.textContent.split(calcSymbol)[0]);
      $result.textContent =
        $display.textContent.split(calcSymbol)[0] *
        $display.textContent.split(calcSymbol)[1].replace("=", "");
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
  $result.textContent += ".";
}
