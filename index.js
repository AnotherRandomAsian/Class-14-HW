// const students = [
//     {
//       firstName: 'Darren',
//       lastName: 'Chen',
//       age: 30,
//     },
//     {
//       firstName: 'Gordon',
//       lastName: 'Chen',
//       age: 28,
//     },
//     {
//       firstName: 'Peter',
//       lastName: 'Parker',
//       age: 18,
//     },
// ];
// function getNumStudents(data) {
//     return data.length;
// }
  
// function getAverageAge(data) {
//     if (data.length === 0) return 0;
//     let sum = 0;
//     for (let i = 0; i < data.length; i++) {
//       sum += data[i].age;
//     }
//     if (Array.isArray(data)) {
//     return sum / data.length;
//     }
// };

// function getoldeststudent(data) {
//     if (data.length === 0) return null;
//     let oldestStudent = data[0];
//     for (let i = 0; i < data.length; i++) {
//         const age = data[i].age;
//         if (age < oldestStudent.age) {
//             oldestStudent = data
//         }
//     }
// }

// function getYoungestStudent(data) {
//     if (data.length === 0) return null;
//     let youngestStudent = data[0];
//     for (let i = 0; i < data.length; i++) {
//         const age = data[i].age;
//         if (age < youngestStudent.age) {
//             youngestStudent = data
//         }
//     }
// }

// const getFullName = (data) => {
//     return data.firstName + ' ' + data.lastName;
// }

//   module.exports = {
//     students,
//     getNumStudents,
//     getAverageAge,
//     getoldeststudent,
//     getYoungestStudent,
//     getFullName,
//   }

const data = [
    {
      name: 'apple',
      price: 1.5,
    },
    {
      name: 'banana',
      price: 8,
    },
    {
      name: 'orange',
      price: 4,
    },
    {
      name: 'pear',
      price: 6
    },
  ];
  
  // Write a function that takes in an array of products and returns the total price of all the products: getTotalPrice(products) => 19.5
  // Write a function that takes in an array of products and returns the average price of all the products: getAveragePrice(products) => 4.875
  // Write a function that takes in an array of products and returns the most expensive product: getMostExpensiveProduct(products) => { name: 'banana', price: 8 }
  // Write a function that takes in an array of products and returns the cheapest product: getCheapestProduct(products) => { name: 'apple', price: 1.5 }
  // Write a function that takes in an array of products and returns the total number of products: getNumberOfProducts(products) => 4

function getTotalPrice(products) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  return totalPrice;
}
result1 = getTotalPrice(data)
console.log(result1)
function getAveragePrice(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price;
    }
    if (Array.isArray(products)) {
    return sum / products.length;
    } else {
        return 'received input is not an array of products';
    }
}; 
result2 = getAveragePrice(data)
console.log(result2)
function getMostExpensiveProduct(products) {
  let mostExpensive = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  return mostExpensive;
}
result3 = getMostExpensiveProduct(data)
console.log(result3)
function getCheapestProduct(products) {
  let cheapestProduct = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price < cheapestProduct.price) {
      cheapestProduct = products[i];
    }
  }

  return cheapestProduct;
}
result4 = getCheapestProduct(data)
console.log(result4)
function getNumberOfProducts(products) {
    return products.length;
}
result5 = getNumberOfProducts(data)
console.log(result5)