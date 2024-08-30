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
    console.log(footballTeam.teamName = teamName)

    
    console.log(teamName, foul)
});


