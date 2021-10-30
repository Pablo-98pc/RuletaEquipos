let namesArray = [];

function removeElement() {
    let toRemove = namesArray.indexOf(this.innerHTML);
    namesArray.splice(toRemove, 1);
    this.remove();
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

    rebirthList("sortedTeam", "team-generated", "team-generated", "team-output");

    let userName = document.getElementById("user").value;

    if (namesArray.includes(userName)){
        alert("No puede haber dos nombres iguales.");
        return false;
    }
    if (userName == "") {
        alert("Se requiere un nombre.");
        return false;
    }

    namesArray.push(userName);
    let nameList = document.getElementById("name-generated");
    let newName = document.createElement("li");
    newName.classList.add('name');
    newName.innerHTML = userName;

    document.getElementsByClassName("message")[0].style.display = 'none';

    let deleteInstruction = document.createElement("div");
    deleteInstruction.classList.add('tooltip');
    deleteInstruction.innerHTML = "haz doble click para borrar";
    newName.appendChild(deleteInstruction);

    newName.addEventListener('dblclick', removeElement);

    nameList.appendChild(newName);
}

function teamSorter() {

    rebirthList("sortedTeam", "team-generated", "team-generated", "team-output");

    let teamMembers = [...namesArray];
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

    document.getElementsByClassName("message")[1].style.display = 'none';

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
    document.getElementsByClassName("message")[0].style.display = 'inline';
    document.getElementsByClassName("message")[1].style.display = 'inline';
}