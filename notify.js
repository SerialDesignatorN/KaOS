var ul = document.getElementById("list");
var li = document.createElement("li");
li.appendChild(document.createTextNode("Welcome To Kaos 12!"));
ul.appendChild(li);

function notifications(msg) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var br = document.createElement("br");
    li.classList.add('notification');
    li.appendChild(document.createTextNode(msg));
    li.appendChild(br);
    ul.appendChild(br);
    ul.appendChild(br);
    ul.appendChild(li);
}