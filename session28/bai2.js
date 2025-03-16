const car = new Object();
(car.brand = "toyota"), (car.model = "corolla"), (car.year = 2020);
car.color = "yellow";
car.year = 2022;
for (let key in car) {
  console.log(`${key}:${car[key]}`);
}
