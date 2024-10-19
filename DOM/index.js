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

document.querySelector("li");
document.querySelector("li").classList;
document.querySelector("li").classList.toggle("huge");
// document.querySelector("li").classList.add("huge");
// document.querySelector("li").classList.remove("huge");

document.querySelectorAll("li")[1].textContent;
document.querySelectorAll("li")[1].textContent = "New Second";

document.querySelectorAll("li")[1].innerHTML = "<b><i>New Second</i></b>"

document.querySe
undefined
document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").attributes[0];
// href=​"https:​/​/​google.com"
document.querySelector("a").getAttribute("href");
// 'https://google.com'
document.querySelector("a").setAttribute("href", "https://www.bing.com");
document.querySelector("a").getAttribute("href");