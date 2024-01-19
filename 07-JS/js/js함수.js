// 함수 선언하기

// 함수 선언문
// function 함수이름(){}

function hello1(){
    return console.log("hello");
}


// 함수 표현식
// const 함수이름 = function(){}

const world = function(){
    console.log("world");
};

hello1();
world();

// return
// return이란 함수를 종료하고 값을 반환하는 것이다.

function h1(){
    return "hello";
    console.log("world");
    // return문 이후에 작성된 코드는 실행되지 않는다.
}

function h2() {
    return;
    // return "hello"; 
}
h1();
h2();

// 매개변수
// 매개변수란 함수를 호출할 때 함수로 전달되는 값이다.

// function 함수이름(매개변수1, 매개변수2) {}

function sum(a = 1, b = 2){
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(7, 3));
console.log(sum(5));

// 객체의 구조 분해 할당

// 일반적

const users = [
    {
        name: "jiwoo",
        age: 27,
        email: "jvv0006@gmail.com",
    },
    {
        name: "yejin",
        age: 27,
        email: "yejin@gmail.com",
    },
    {
        name: "hyewon",
        age: 27,
        email: "hyewon@gmail.com",
    },
];

// 함수 선언(email 출력)
// 함수 호출
function getEmail({name, email}){
    // const {name, email} = aa;
    return `${name}의 이메일은 ${email}입니다.`;
}

console.log(getEmail(users[0]));
console.log(getEmail(users[1]));
console.log(getEmail(users[2]));

// 배열의 구조 분해 할당
const animals = ["dog", "cat", "fish"];

// 함수 선언(배열의 세번째 값 출력 함수)
function getThird([, b, c]){
    // const[a, b, c] = array;

    return `저는 ${c}를 키웁니다.`;
}
console.log(getThird(animals));
