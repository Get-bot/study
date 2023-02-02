//js 에서 모든 숫자는 부동 소수점 숫자로 정수 자리와 소수점으로 이루어져 있다.
//소수점이 없는 숫자는 존재하지 않는다. 12 = 12.0 64비트사용

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(1, 10));

function productDescriptions(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = "cheap";
  if (prodPrice > 20 ) {
    priceCategory = "fair";
  }
  
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
  return {name: productName, priceCategory};
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;

const productOutput = productDescriptions`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);