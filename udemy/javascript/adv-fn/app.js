function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'Max';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser();


// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }


function powerOf(x, n) {

  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  
  for (const friend of person.friends) {
      collectedNames.push(friend.name);
      collectedNames.push(...getFriendNames(friend));
  }
  
  return collectedNames;
}

console.log(getFriendNames(myself));

//반복
const sumTo = (num) => {
  let result = 0;
  for(let i = 0; i < num; i++) {
    result += i + 1;
  }
  return result;
}

console.log(sumTo(100));

//재귀
const sumTo2 = (num) => {
  if(num > 1) {
    return num + sumTo(num-1)
  }
    return num
}

console.log(sumTo2(100));

//등차수열공식
const sumTo3 = (num) => {
  return num * (num + 1) / 2;
}

console.log(sumTo3(100));

//팩토리얼
const factorial = (num) => {
  if(num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

//피보나치 수열
const fibonacci = (num) => {
  if(num <= 1) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));

//피보나치 for문
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(4));

