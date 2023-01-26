function Person() {
    this.age = 30;
    this.name = "Max";
    this.greet = function() {
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
    };
}

const person = new Person();
// return 이 없고 일반함수처렁 선언시 동작하지 않는다.
// new 키워드로 객체를 반환받는다.
// new 키워드는 this = {} 객체를 생성하고 this 를 리턴한다.
person.greet();