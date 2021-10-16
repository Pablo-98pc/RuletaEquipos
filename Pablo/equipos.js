function capture() {
    let lista = document.getElementById("name-generated");
    let nombre = document.getElementById("user").value;
    let newName = document.createElement("li");
    let contenido = document.createTextNode(nombre);
    if (nombre == ""){
      alert("se requiere un nombre");
      return false
    } 
    newName.appendChild(contenido)
    lista.appendChild(newName)
} 