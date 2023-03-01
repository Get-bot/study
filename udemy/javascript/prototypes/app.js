function Person() {
  this.age = 30;
  this.name = "Max";
  this.greet = function () {
    console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
  };
}

// Person.prototype.printAge = function() {
//     console.log(this.age);
// };

// console.dir(Person);

const person = new Person();
// return 이 없고 일반함수처렁 선언시 동작하지 않는다.
// new 키워드로 객체를 반환받는다.
// new 키워드는 this = {} 객체를 생성하고 this 를 리턴한다.
person.greet();
// person.printAge();
// js는 프로토타입 기반 언어로 프로토타입 상속을 사용한다.
// 프로토타입 자체는 객체로 모든 객체는 프로토타입을 가지고 있다.
// 함수 객체의 프로토타입은 객체를 할당할 떄 사용되며 프로토타입으로 할당된다.
// console.log(person.length);
// console.log(person.toString());
const person2 = new person.__proto__.constructor();
//앱이 생성자 함수에 액세스를 못할때 사용가능
// console.dir(Object.prototype.__proto__); => null

// const button = document.getElementById("btn");
// button.addEventListener("click", person.greet.bind(person));
//객체 내부함수에서 this 접근시 화상표함수를 사용하는것보다
//축약문구를 사용해 js가 자동으로 최적화를 해줘 프로퍼티(특성)이 아닌
//공통 prototype 에 넣어줘 새로 만들어줄 필요가 없게해 성능적인 이득이있다.
//허나 수천,수만건이상 사용하지 않는경우 화살표함수를 사용해도 상관이없다.

const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
}; // new Object();

// Object.getPrototypeOf(course);
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  // 프로토타입을 가져와서 새로운 객체를 만들어준다.
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
// 객체 생성시 프로토타입을 지정할 수 있다.

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Max",
        writable: true
    }
});
// 디스크립터를 사용해 객체를 생성할 수 있다.

// student.name = "Max";
Object.defineProperty(student, "progress", {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
});

student.printProgress();

console.log(student);

//비어있는 객체를 생성하고 프로토타입을 지정할 수 있다.
course.printRating();

// 생성자 함수와 클래스의 차이점
// 생성자 함수는 함수이다.
// 클래스는 생성자 함수의 문법적 설탕이다.
// 클래스는 생성자 함수를 기반으로 만들어졌다.
// 생저자 함수는 열거가 가능하다.
// 클래스는 기본적으로 열거가 불가능하다.
// 생성자 함수는 기본적으로 엄격모드를 사용하지 않는다.
// 클래스는 기본적으로 엄격모드를 사용한다.


// 문법적 설탕이란?
// 문법적 설탕은 문법을 단순화 시키는 것이다.