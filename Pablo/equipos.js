function capture() {
  let nombre = document.getElementById("user").value;
  let lista = document.getElementById("name-generated");
  let newName = document.createElement("li");
  let contenido = document.createTextNode(nombre);
  if (nombre == ""){
    alert("se requiere un nombre");
    return false
  } 
  newName.appendChild(contenido)
  lista.appendChild(newName)
}

function enterKeyPressed(event) {
  let tecla = event.keyCode
  if (tecla === 13) {
     document.getElementById("name-btn").click();
  } 
}
