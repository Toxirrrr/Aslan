// var list = document.querySelector(".list");
// var item = document.createElement("li");
// var img = document.createElement("img");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");



// let h1text = prompt("H1 Text");
// let h1text2 = prompt("H1 class");
// let h1text3 = prompt("H1 id");

// let Ptext = prompt("p Text");
// let Ptext2 = prompt("p class");
// let Ptext3 = prompt("p id");

// h1.textContent = h1text;
// h1.className = h1text2;
// h1.id = h1text3;

// p.textContent = Ptext;
// p.className = Ptext2;
// p.id = Ptext3;

// img.src = "../img/img.jpg"

// list.append(item)
// item.append(img)
// item.append(h1)
// item.append(p)

var body = document.querySelector(".body")
var main = document.createElement("main")
var div = document.createElement("div")
var ol = document.createElement("ol")
var li = document.createElement("li")
var img = document.createElement("img");
let h1 = document.createElement("h1");
let p = document.createElement("p");


let h1text = prompt("H1 Text");
let h1text2 = prompt("H1 class");
let h1text3 = prompt("H1 id");


let Ptext = prompt("p Text");
let Ptext2 = prompt("p class");
let Ptext3 = prompt("p id");

main.className = '';
div.className = "wrapper";
ol.classname = "list";
li.classname = "item";

img.src = "../img/img.jpg"

main.id = 'main';
div.id = "wrapper";
ol.id = "list";
li.id = "item";




h1.textContent = h1text || 'ok';
h1.className = h1text2 || 'ok';
h1.id = h1text3 || 'ok';


p.textContent = Ptext;
p.className = Ptext2;
p.id = Ptext3;


body.append(main)
main.append(div)
div.append(ol)
list.append(li)
item.append(img)
item.append(h1)
item.append(p)