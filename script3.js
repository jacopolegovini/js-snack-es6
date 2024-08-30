const bikes = [
    {bikeName: 'Addict', weight: 9.33},
    {bikeName: 'Extreme', weight: 10.02},
    {bikeName: 'Speedster', weight: 11.02},
    {bikeName: 'Palta', weight: 8.68},
    {bikeName: 'Granger', weight: 8.98},
]


let result = 0;
for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const {bikeName, weight} = bike;
    if (result < weight) {
        result = weight
    };
    console.log(result)
}

