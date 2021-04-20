// ==UserScript==
// @name     show zackly clock
// @version  1.1
// @grant    none
// ==/UserScript==

console.log("show zackly clock running.");

var zackly = document.getElementById("zackly_clock");
if (zackly) return;
zackly = document.createElement("iframe");
zackly.setAttribute("id", "zackly_clock");
zackly.setAttribute("width", "300");
zackly.setAttribute("height", "150");
zackly.setAttribute("src", "http://localhost/~sigmoc/zackly.html?12h=1&dark=1&SP=1&size=60");
zackly.setAttribute("style", "position:fixed; right:0; bottom:0; padding:4px; background-color:gray; z-index: 1000; opacity: 0.7;");
document.body.insertAdjacentElement("beforeend", zackly);

var l_or_r = false;
zackly.onclick = function (){
  console.log("zackly onclick.");
  l_or_r = !l_or_r;
  if (l_or_r) {
    zackly.style.left = "0px";
    zackly.style.right = "";
  }else{
    zackly.style.left = "";
    zackly.style.right = "0px";
  }
};
zackly.oncontextmenu = function (e){
  console.log("zackly oncontextmenu.");
  e.preventDefault();
  document.body.removeChild(zackly);
  zackly = null;
}
