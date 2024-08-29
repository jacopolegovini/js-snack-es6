const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];


const guest = {};
const guests = [];

tavoloVip.forEach((guest) => {
    guest = {
        tableName: 'Tavolo Vip',
        guestName: guest,
        place: true
    }
    guests.push(guest)
})
console.log(guests)
console.log(guest.tableName)