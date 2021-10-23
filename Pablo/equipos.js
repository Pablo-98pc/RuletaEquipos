let nameList = document.getElementsByClassName("name");
function capture() {
    let nombre = document.getElementById("user").value;
    let lista = document.getElementById("name-generated");
    let newName = document.createElement("li");
    newName.classList.add('name');
    let contenido = document.createTextNode(nombre);

    if (nombre == "") {
        alert("Se requiere un nombre");
        return false;
    }

    let sortedGroup = document.getElementsByClassName("sortedTeam");
    if (sortedGroup.length != 0) {
        removeElement(document.getElementById("team-generated"));
        anotherList = document.createElement("ul");
        anotherList.setAttribute("id", "team-generated");
        document.getElementById("team-output").appendChild(anotherList);
    }
    let deleteMessage = document.createElement("div");
    deleteMessage.classList.add('tooltip');
    deleteMessage.innerHTML = "clicka dos veces para borrar";
    newName.appendChild(deleteMessage);
    newName.appendChild(contenido);
    let deleteEvent = document.createAttribute("ondblclick");
    deleteEvent.value = "removeElement(this)";
    newName.setAttributeNode(deleteEvent);
    lista.appendChild(newName);
}

    /*let deleteMessage = document.createAttribute("onmouseenter");
    deleteMessage.value = "overMessage(this)";
    newName.setAttributeNode(deleteMessage);
}
function overMessage() {
    let doubleClickDelete = document.createElement("p");
    doubleClickDelete.innerHTML = "doble click para borrar";
    newName.appendChild(doubleClickDelete);
}*/

function removeElement(element) {
    element.remove();
}

function teamSorter() {
    let teamMembers = Array.from(nameList);
    let membersAmount = document.getElementById("members-amount").value;
    let team = [];
    let teamsList = document.getElementById("team-generated");
    let sortedTeams = [];

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
            sortedTeams.push(team);
            team = [];
        }
    }

    if (team.length != 0) {
        let randomTeam = Math.floor(Math.random() * sortedTeams.length);
        for (i = 0; i < team.length; i++) {
            sortedTeams[randomTeam].push(team[i]);
            team.splice(i, 1);
        }
    }

    for (i = 0; i < sortedTeams.length; i++) {
        let newTeam = document.createElement("li");
        newTeam.innerHTML = sortedTeams[i].join(" - ");
        newTeam.classList.add("sortedTeam");
        teamsList.appendChild(newTeam);
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
function resetForm() {
    removeElement(document.getElementById("team-generated"));
    anotherList = document.createElement("ul");
    anotherList.setAttribute("id", "team-generated");
    document.getElementById("team-output").appendChild(anotherList);
    removeElement(document.getElementById("name-generated"));
    anotherNameList = document.createElement("ul");
    anotherNameList.setAttribute("id", "name-generated");
    document.getElementById("name-output").appendChild(anotherNameList);

}