function shuffleElements() {
  var ele = document.getElementById("cards");
  for (var i = ele.children.length; i >= 0; i--) {
    ele.appendChild(ele.children[Math.floor(Math.random() * i) | 0]);
  }
}
function sortElements() {
  const list = [...document.getElementById("cards").children];
  list.sort((a, b) => {
    return a.innerText - b.innerText;
  });
  var parent = document.getElementById("cards");
  parent.innerHTML = "";
  for (var i = 0, l = list.length; i < l; i++) {
    parent.appendChild(list[i]);
  }
}
