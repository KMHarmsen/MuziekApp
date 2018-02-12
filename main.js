console.log("Test");


// selecteren van de items, het artikel & the div waarin het gedropped wordt
var article1 = document.querySelector('article:first-child');
var article2 = document.querySelector('article:first-child + article');
var areadrop = document.querySelector('div:last-of-type');
// console.log('article1 '+ article1);
// console.log(article2);

var allowingdrop = function (ev) {
    ev.preventDefault();
}

var colourdragstart = function (ev) {
    console.log('dragging start');
    article1.classList.add('dragging');
    areadrop.classList.add('draggingarea');
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    console.log(ev.target.id);
}

var thedrop = function (ev) {
    console.log('item has been dropped');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var colourdragend = function (ev) {
    console.log('dragging end');
    article1.classList.remove('dragging');
    areadrop.classList.remove('draggingarea');
}

article1.addEventListener("dragstart", colourdragstart);
article1.addEventListener("dragend", colourdragend);
areadrop.addEventListener("dragover", allowingdrop);
areadrop.addEventListener("drop", thedrop);
// areadrop.addEventListener("drop", thedrop);

//var droparea = document.querySelector('div:last-of-type');
// console.log('droparea' + droparea);


var droparea = function (ev) {
    console.log('droparea is entered');
    ev.preventDefault;
    areadrop.classList.add('droptargetarea');
}
areadrop.addEventListener("dragenter", droparea);

var droparealeave = function (ev) {
    console.log('droparea is left');
    ev.preventDefault;
    areadrop.classList.remove('droptargetarea');
}
areadrop.addEventListener("dragleave", droparealeave); 
