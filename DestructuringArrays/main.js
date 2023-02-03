'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fre: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({starterIndex = 1,mainIndex = 0 ,time = '20:00',address}){
        console.log('Order recevied! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}');
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(
          `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
      },

};
//  105. The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);
const ingredients = [
    // prompt("Let's make pasta! Ingredient 1?"),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3'),
  ];
  console.log(ingredients);
  restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
  restaurant.orderPasta(...ingredients);
  // Objects
  const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
  console.log(newRestaurant);
  const restaurantCopy = { ...restaurant };
  restaurantCopy.name = 'Ristorante Roma';
  console.log(restaurantCopy.name);
  console.log(restaurant.name);
  


//  104. Destructuring Objects

restaurant.orderDelivery({
    time: '22:30',
    address : 'Via del Sole, 21',
    mainIndex : 2,
    starterIndex : 2,
});
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });


// 1
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// 2
const { 
    name: restaurantName,
    openingHours: hours,
    categories: tag,
} = restaurant;
 console.log(restaurantName,hours,tag);
// Các giá trị mặc định
 const {menu , starterMenu:staters = []} = restaurant;
 console.log(menu,staters);

 let a  =111;
 let b = 999;
 const obj = {a:23 , b: 7 , c:14};
 ({a,b} = obj);
 console.log(a,b);
//         103.Destructuring Arrays
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// 1
// const [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// console = temp;
// console.log(main,secondary);

// 2
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [main, secondary]
// console.log(main, secondary);

// // Nhận 2 giá trị trả về 1 hàm
// const [stater, mainCourse] = restaurant.order(2, 0);
// console.log(stater, mainCourse);


// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
