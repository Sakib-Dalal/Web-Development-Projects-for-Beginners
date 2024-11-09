// document.querySelector("h1").style.color = "white";
// --> using javascript

// Check jQuery is ready
$(document).ready(function() {
    console.log("jQuery is ready to execute");
})

// Using jQuery --> method 1
jQuery("h1").css("color", "white");
// Using jQuery --> method 2
$("h1").css("color", "red");
// console log properties
console.log($("h1").css("color"));

$("button").css("border-radius", "15px");

$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");
console.log("has margin class: " + $("h1").hasClass("margin-50"));

// Edit an text
$("#button").text("Hello World Click!");

$("#button").html("<b>New Text Bold</b>");

console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

console.log($("h1").attr("class"));

// add event listener
$("h1").click(function() {
    $("h1").css("color", "blue");
});

$("button").click(function() {
    $("h1").css("color", "yellow");
});

// input key detection
$("input").keypress(function(event) {
    console.log(event.key);
});

// keypress detection in document
$(document).keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key)
});

// add event from event better than key press
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
$("img").on("mouseover", function() {
    $("img").css("border", "5px black solid");
});
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
$("img").on("mouseout", function() {
    $("img").css("border", "0px black solid");
});

// add before an Element
$("h1").before("<button>before button</button>");

// add after an Element
$("h1").after("<button>after button</button>");

// remove Element
$("a").remove();

// animation in jQuery 
// hide animation
$(".hide").on("click", function() {
    $("img").hide();
});
// show animation
$(".show").on("click", function() {
    $("img").show();
});

// toggle animation hide and show
$(".toggle").on("click", function() {
    $("img").toggle();
});

// fade out animation
$(".fadeout").on("click", function() {
    $("img").fadeOut();
});

//fade in animation
$(".fadein").on("click", function() {
    $("img").fadeIn();
});

// fade toggle animation
$(".fadetoggle").on("click", function() {
    $("img").fadeToggle();
});

// collapsing animation
$(".slideup").on("click", function() {
    $("img").slideUp();
});

$(".slidedown").on("click", function() {
    $("img").slideDown();
});

$(".slidetoggle").on("click", function() {
    $("img").slideToggle();
});

// custom animation
$(".custom").on("click", function() {
    $("img").slideUp().slideDown().animate({opacity: 0.5}).animate({opacity: 1});
});

