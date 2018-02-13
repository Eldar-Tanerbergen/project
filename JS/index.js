function toggleNavLeft() {
  var left = document.getElementById("leftSidenav").style.left;
  if (!left || left === '0px') {
    openNavLeft();
  } else {
    closeNavLeft();
  }
}

function openNavLeft() {
  document.getElementById("leftSidenav").style.left = "-300px";
}

function closeNavLeft() {
  document.getElementById("leftSidenav").style.left = "0";
}

function toggleNavRight() {
  var right = document.getElementById("rightSidenav").style.right;
  if (!right || right === '0px') {
    openNavRight();
  } else {
    closeNavRight();
  }
}

function openNavRight() {
  document.getElementById("rightSidenav").style.right = "-300px";
}

function closeNavRight() {
  document.getElementById("rightSidenav").style.right = "0";
}
ss
