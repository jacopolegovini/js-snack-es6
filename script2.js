const students = [
{id: 213, fullName: 'Marco della Rovere', grade: 78},
{id: 110, fullName: 'Paola Cortellessa', grade: 96},
{id: 250, fullName: 'Andrea Mantegna', grade: 48},
{id: 145, fullName: 'Gaia Borromini', grade: 74},
{id: 196, fullName: 'Luigi Grimaldello', grade: 68},
{id: 102, fullName: 'Piero della Francesca', grade: 50},
{id: 120, fullName: 'Francesca da Polenta', grade: 84}
]


const fullName = students.map((student) => {
    return student.fullName.toUpperCase()
})

console.log(fullName)

