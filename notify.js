var ul = document.getElementById("list");
var li = document.createElement("li");
li.appendChild(document.createTextNode("Welcome To Kaos 12!"));
ul.appendChild(li);

function notifications() {
var ul = document.getElementById("list");
var li = document.createElement("li");
var br = document.createElement("br");
li.appendChild(document.createTextNode(notification));
ul.appendChild(br);
ul.appendChild(li);
}