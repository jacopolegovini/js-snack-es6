const bikes = [
    {bikeName: 'Addict', weight: 9.33},
    {bikeName: 'Extreme', weight: 8.02},
    {bikeName: 'Speedster', weight: 11.02},
    {bikeName: 'Palta', weight: 8.68},
    {bikeName: 'Granger', weight: 8.98},
]

let lighterBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    bike = bikes[i];
    let {bikeName, weight} = bike;
    if (lighterBike.weight > weight) {
        lighterBike = bike
    }
}
console.log(bike)

