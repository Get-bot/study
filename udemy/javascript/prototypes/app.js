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

const person = new Person();
// return 이 없고 일반함수처렁 선언시 동작하지 않는다.
// new 키워드로 객체를 반환받는다.
// new 키워드는 this = {} 객체를 생성하고 this 를 리턴한다.
person.greet();
person.printAge();
// js는 프로토타입 기반 언어로 프로토타입 상속을 사용한다.
// 프로토타입 자체는 객체로 모든 객체는 프로토타입을 가지고 있다.
// 함수 객체의 프로토타입은 객체를 할당할 떄 사용되며 프로토타입으로 할당된다.

const person2 = new person.__proto__.constructor();
//앱이 생성자 함수에 액세스를 못할때 사용가능
