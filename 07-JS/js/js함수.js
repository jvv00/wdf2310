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
function getThird([a, , c = "두번째 요소가 없습니다."]){
    // const[a, b, c] = array;

    return `저는 ${c}를 키웁니다.`;
}
console.log(getThird(animals));

// 나머지 매개변수(...rest)
// 매개변수를 배열로 전달받는다.
// funsction 함수이름(...매개변수){}

function sum(a, b,...rest){
    return console.log(a, b, rest);
}
sum(1,2);
sum(1,2,3,4,5,6,7,8);

// 배열의 숫자를 더하는 로직 함수
function sumAll(...rest){
    console.log(rest);
    
    // return rest.reduce(function(){}, 초기값);
    return rest.reduce(function(account, current){
        return account + current; 
    }, 0);
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

// 화살표 함수
// const fn = function (){};

() => {}; // 매개변수가 없을 경우
x => {}; // 매개변수가 하나일 경우 소괄호 생략 가능
(x, y) => {}; // 매개변수가 두개 이상일 경우 소괄호로 감싸준다.

const hello = (name) => {
    console.log(`나는 ${name} 입니다.`);
};
hello("김지우");

const sum2 = (a, b) => a + b;

console.log(sum2(1,2));

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};

// 2. 매개변수가 하나인 경우(괄호 생략 가능)
const b = x => {};

// 3. 매개변수가 여러 개인 경우(괄호 생략 불가)
const c = (x, y) => {}; 

// 4. 함수의 return이 있는 경우
// return 으로 시작하는 경우 중괄호, return 생략 가능
const d = (x, y) => x + y;

// 5. return으로 시작하지 않는 경우 중괄호 생략 불가
const e = (x, y) => {
    console.log(x);
    return y;
};

// 6. 객체를 반환하는 경우 객체를 소괄호로 감싸준다.
const f = () => ({a : 1});

// 7. 배열을 반환하는 경우
const g = () => [1, 2];

// 호출 스케줄링

// setTimeout
// setTimeout은 일정 시간이 지난 후에 함수를 실행하는 함수이다.
// setTimeout(함수, 시간)

const timer = setTimeout(() => {
    console.log('hello')
}, 1000)

const btnStop = document.querySelector('#btnStop')

btnStop.addEventListener('click', () => {
    console.log('stop')
    clearTimeout(timer)
})

// setInterval
// 일정 시간 간겨긍로 함수를 실행하는 함수이다.
// setInterval(함수, 시간)
setInterval(() => {
    console.log('hello, hello!')
}, 3000)

const slideStop = document.querySelector('#slideStop')


document.querySelector('#slideStop').addEventListener('click', () => {
    console.log('슬라이드 정지')
    clearInterval(timer2)
})

// 콜백 함수
// 함수의 매개변수로 전달되는 함수를 콜백 함수라고 한다.
const x= (props) => {
    props()
    console.log('X')
}
const y = () => {
    console.log('Y')
}
x(y)

// setTimeout 콜백 함수
const sum3 = (a, b, c) => {
    // setTimeout(함수, 시간)
    setTimeout(() => {}, 1000)  
    return c(a + b)
}

sum3(1, 2, (value) => {
    console.log('hello_sum3')
    console.log(value)
})