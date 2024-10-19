// document.querySelector("h1").style.color = "white";
// --> using javascript

// Check jQuery is ready
$(document).ready(function() {
    console.log("jQuery is ready to execute");
})

// Using jQuery --> method 1
jQuery("h1").css("color", "white");
// Using jQuery --> method 2
$("h1").css("color", "white");
// console log properties
console.log($("h1").css("color"));

$("button").css("border-radius", "15px");

$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");
console.log("has margin class: " + $("h1").hasClass("margin-50"));

// Edit an text
$("button").text("Hello World Click!");

$("button").html("<b>New Text Bold</b>")
