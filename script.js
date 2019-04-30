'use strict';

let food = new Map();

let fruit = {}, cook = function () {
}, dessert = '甜点';


food.set(fruit, '苹果');
food.set(cook, '🍴');
food.set(dessert, '甜点');

console.log(food);
console.log(food.size);
console.log(food.get(fruit));

food.delete(dessert);

console.log(food.has(dessert));

food.forEach(((value, key) => {
    console.log(`${key}==${value} `)
}));


