function Person() {
    this.age = 30;
    this.name = "Max";
    this.greet = function() {
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
    };
}

Person.prototype.printAge = function() {
    console.log(this.age);
};

console.dir(Person);

const person = new Person();
// return 이 없고 일반함수처렁 선언시 동작하지 않는다.
// new 키워드로 객체를 반환받는다.
// new 키워드는 this = {} 객체를 생성하고 this 를 리턴한다.
person.greet();
person.printAge();
// js는 프로토타입 기반 언어로 프로토타입 상속을 사용한다.
// 프로토타입 자체는 객체로 모든 객체는 프로토타입을 가지고 있다.
// 함수 객체의 프로토타입은 객체를 할당할 떄 사용되며 프로토타입으로 할당된다.
console.log(person.length);
console.log(person.toString());
const person2 = new person.__proto__.constructor();
//앱이 생성자 함수에 액세스를 못할때 사용가능
// console.dir(Object.prototype.__proto__); => null

//객체 내부함수에서 this 접근시 화상표함수를 사용하는것보다 
//축약문구를 사용해 js가 자동으로 최적화를 해줘 프로퍼티(특성)이 아닌
//공통 prototype 에 넣어줘 새로 만들어줄 필요가 없게해 성능적인 이득이있다.
//허나 수천,수만건이상 사용하지 않는경우 화살표함수를 사용해도 상관이없다.