function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}

function allowDropone(e){
    e.preventDefault();
}

function dropone (e){
    e.preventDefault();
    var data1 = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data1));
}