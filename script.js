const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];


const guests = [];

tavoloVip.forEach((guest, i) => {
    guest = {
        tableName: 'Tavolo Vip',
        guestName: guest,
        place: i + 1
    }
    guests.push(guest)
})
console.log(guests)
