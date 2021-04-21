// ==UserScript==
// @name     show zackly clock
// @version  1.1
// @grant    none
// @noframes
// @exclude http://localhost/*
// @exclude file:///*
// ==/UserScript==

console.log("show zackly clock running.");

var zackly = document.getElementById("zackly_clock");
if (zackly) return;
var l_or_r = localStorage.getItem("zackly_l_or_r");

zackly = document.createElement("iframe");
zackly.setAttribute("id", "zackly_clock");
zackly.setAttribute("width", "300");
zackly.setAttribute("height", "150");
zackly.setAttribute("src", "http://localhost/~sigmoc/zackly.html?12h=1&dark=1&SP=1&size=60");
zackly.setAttribute("style", `position:fixed; ${l_or_r? 'left': 'right'}:0px; bottom:0px; padding:4px; background-color:gray; z-index: 1000; opacity: 0.7;`);
document.body.insertAdjacentElement("beforeend", zackly);

zackly.onclick = function (){
  console.log("zackly onclick.");
  l_or_r = !l_or_r;
  if (l_or_r) {
    zackly.style.left = "0px";
    zackly.style.right = "";
    localStorage.setItem("zackly_l_or_r", true);
  }else{
    zackly.style.left = "";
    zackly.style.right = "0px";
    localStorage.removeItem("zackly_l_or_r");
  }
};
zackly.oncontextmenu = function (e){
  console.log("zackly oncontextmenu.");
  e.preventDefault();
  document.body.removeChild(zackly);
  zackly = null;
}

