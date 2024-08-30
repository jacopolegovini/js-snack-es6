const snack4 = document.querySelector('.snack-4');

const footballTeams = [
    {teamName: 'Juventus', golDone: 0, foul: 0},
    {teamName: 'Milan', golDone: 0, foul: 0},
    {teamName: 'Atalanta', golDone: 0, foul: 0},
    {teamName: 'Udinese', golDone: 0, foul: 0},
]

const randomNumber = () => {
    return Math.floor(Math.random() * 9 + 1);
}

footballTeams.forEach(footballTeam => {
    footballTeam.golDone = randomNumber();
    footballTeam.foul = randomNumber();
    console.log(footballTeam)
})

console.log(footballTeams)
console.log('-----------------')

const nameAndScoreFootbalTeams = footballTeams.map(footballTeam => {
    const {teamName, foul} = footballTeam;
    return {teamName, foul}
});

console.log(nameAndScoreFootbalTeams)

for (let team of nameAndScoreFootbalTeams) {
    if(team.foul === 1) {
        snack4.innerHTML += `La squadra ${team.teamName} ha subito ${team.foul} fallo.<br>`
    } else {
        snack4.innerHTML += `La squadra ${team.teamName} ha subito ${team.foul} falli.<br>`;
    }
    
}


