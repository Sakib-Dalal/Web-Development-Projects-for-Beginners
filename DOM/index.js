var old = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild;
old.innerHTML = "Sakib";

var list = document.getElementsByTagName("li");
list[1].style.color = "green";

var heading = document.querySelector("h1");
heading.style.color = "#a9d";

var google = document.querySelector("li a");
google.style.color = "salmon";

var list = document.querySelectorAll("li");
list[2].style.fontSize = "30px";
list[2].style.background = "red";

var button = document.querySelector("button");
button.style.background = "yellow";
button.style.padding = "15px 30px";
button.style.borderRadius = "15px";
button.style.border = "0px";
button.style.color = "black";