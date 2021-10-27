let namesArray = [];


function removeElement(element) {
    let toRemove = namesArray.indexOf(element.innerHTML);
    namesArray.splice(toRemove, 1);
    element.remove();
}

function rebirthList(list, del, id, father) {
    let sortedGroup = document.getElementsByClassName(list);
    if (sortedGroup.length != 0) {
        document.getElementById(del).remove();
        anotherList = document.createElement("ul");
        anotherList.setAttribute("id", id);
        document.getElementById(father).appendChild(anotherList);
    }
}

function capture() {
    let nombre = document.getElementById("user").value;
    namesArray.push(nombre);
    let lista = document.getElementById("name-generated");
    let newName = document.createElement("li");
    newName.classList.add('name');

    if (nombre == "") {
        alert("Se requiere un nombre");
        return false;
    }

    rebirthList("sortedTeam", "team-generated", "team-generated", "team-output");

    newName.innerHTML = nombre;

    let deleteInstruction = document.createElement("div");
    deleteInstruction.classList.add('tooltip');
    deleteInstruction.innerHTML = "haz doble click para borrar";
    newName.appendChild(deleteInstruction);

    let deleteEvent = document.createAttribute("ondblclick");
    deleteEvent.value = "removeElement(this)";
    newName.setAttributeNode(deleteEvent);

    lista.appendChild(newName);
}

function teamSorter() {
    rebirthList("sortedTeam", "team-generated", "team-generated", "team-output");

    let teamMembers = Array.from(namesArray);
    let membersAmount = document.getElementById("members-amount").value;
    let team = [];
    let teamsList = document.getElementById("team-generated");
    let sortedTeams = [];

    if (membersAmount < 2) {
        alert("El mínimo es equipos de 2 integrantes. ¡Intenténtalo de nuevo!");
        return false;
    } else if (membersAmount > teamMembers.length) {
        alert("¡No puedes hacer equipos con tan poca gente! Consigue más personas o reduce los equipos.");
        return false;
    }

    while (teamMembers.length != 0) {
        let randomIndex = Math.floor(Math.random() * teamMembers.length);
        let member = teamMembers[randomIndex]
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
        newTeam.innerHTML = sortedTeams[i].join(" ~ ");
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
    rebirthList("sortedTeam", "team-generated", "team-generated", "team-output");
    rebirthList("name", "name-generated", "name-generated", "name-output");
    namesArray = [];
}