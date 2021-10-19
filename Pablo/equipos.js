function capture() {
  let nombre = document.getElementById("user").value;
  let lista = document.getElementById("name-generated");
  let newName = document.createElement("li");
  let contenido = document.createTextNode(nombre);
  if (nombre == "") {
    alert("se requiere un nombre");
    return false
  }

  newName.appendChild(contenido);
  let deleteEvent = document.createAttribute("ondblclick");
  deleteEvent.value = "removeElement(this)";
  newName.setAttributeNode(deleteEvent);
  lista.appendChild(newName);
}

function removeElement(element) {
  element.remove();
}

function teamSorter() {
  let teamMembers = Array.from(document.getElementsByTagName("li"));
  let membersAmount = document.getElementById("members-amount").value;
  let team = [];
  let teamsList = document.getElementById("team-generated");

  if (membersAmount < 2) {
    alert("El mínimo es equipos de 2 integrantes. ¡Intenténtalo de nuevo!");
    return false;
  } else if (membersAmount > teamMembers.length) {
    alert("¡No puedes hacer tantos equipos con tan poca gente! Consigue más personas o reduce los equipos.")
    return false;
  }

  while (teamMembers.length != 0) {
    let randomIndex = Math.floor(Math.random() * teamMembers.length);
    let member = teamMembers[randomIndex].innerHTML;
    team.push(member);
    teamMembers.splice(randomIndex, 1);
    if (team.length == membersAmount) {
      if (teamMembers.length % membersAmount != 0) {
        team.push(teamMembers[0].innerHTML);
        teamMembers.splice(0, 1);
      }
      let newTeam = document.createElement("li");
      newTeam.innerHTML = team.join(" - ");
      teamsList.appendChild(newTeam);
      team.splice(0, 2);
      continue;
    }
  }
}

function enterPressed(event) {
  let tecla = event.keyCode
  if (tecla === 13) {
    document.getElementById("name-btn").click();
  }
}
function clean() {
  document.getElementById("user").value = "";
}



