let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("meuVulgo").value;
  console.log(username);
  if (
    username == "Erickson" ||
    username == "Erick" ||
    username == "erickson" ||
    username == "erick"
  ) {
    document.getElementById("central").innerHTML =
      "Vulgo: Rick's. Venha pro Glauber seu sacue!";
  } else if (username == "Kaik" || username == "kaik") {
    (document.getElementById("central").innerHTML =
      "Vulgo : Xixita. Resultado : Vai zerar no Glauber!"),
      display_image("xita.jpg", 150, 257, "JavaScriptImage");
  }

  //document.getElementById("myLabel").innerHTML = username;
};

function display_image(src, width, height, alt) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  a.alt = alt;
  document.body.appendChild(a);
}
