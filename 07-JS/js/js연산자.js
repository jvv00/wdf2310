// 연산자
// 1. 산술 연산자
// +, -, *, /, %(나머지 연산자)

// 덧셈 연산자
console.log(1 + 2);
console.log("배" + "고파");

// 뺄셈 연산자
console.log(5 - 3);

// 곱셈 연산자
console.log(2 * 3);

// 나눗셈 연산자
console.log(6 / 3);

// 나머지 연산자
console.log(7 % 3);
// 나머지가 0이면 짝수, 1이면 홀수
// (now % 슬라이드의 개수) 나머지가 0일 경우 마지막 슬라이드이다.

// 짝수, 홀수 판별 함수
// 함수 
// 콘솔창에 함수를 출력

function isEven(num){
    return num % 2 === 0;
    // num을 2로 나눈 나머지가 0이면 true, 아니면 false
}

// 함수 호출
console.log(isEven(2));

// 할당 연산자

let now = 1;
console.log(now);

now = now + 1; //now에 1을 더한 값을 now에 할당
now += 1; //축약형
console.log(now);

let c = 2;

c = c * 2;
c *= 2;
console.log(c);

// 부정 연산자
// !를 사용하여 true를 false로, false를 true로 바꿀 수 있다.

console.log(!true);
console.log(!false);
console.log(!!0);

// 비교 연산자
// ===, !==, <, >, <=, >=
// ==, !=는 사용하지 않는 것이 좋다.

// 일치 연산자 (형변환X)
console.log(1 === 1);
console.log(1 === "1");

// 불일치 연산자 (형변환X)
console.log(1 !== 1);

// 대소 비교 연산자 (형변환O)
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 > 2);
console.log(1 >= 2);

// 논리 연산자
// &&(and) 연산자
// 둘 다 true일 경우 true
console.log(true && true);
console.log(true && false);
console.log(1 < 2 && 2 < 3);

console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && false);
console.log("a" && "b" && "");
console.log("a" && "b" && "c");

// ||(or) 연산자
// 둘 중 하나만 true일 경우 true
console.log(true || true);
console.log(true || false);
console.log(false || false);

// 연산자를 기준으로 가장 먼저 만나는 true 값을 반환한다.
console.log(false || true);
console.log(1 || 0);
console.log(false || 0 || {});
console.log("" || 0 || NaN);
// 모두가 false일 경우 마지막 값을 반환한다. 

// 병합 연산자
// || 연산자와 비슷하다.
// null 또는 undefined는 제외하고 반환한다.

console.log(0 || 5);
console.log(0 ?? 5);
console.log(null || undefined);

// 삼항 연산자
// 조건 ? 참일 때 반환 : 거짓일 때 반환
console.log(1 > 2 ? "참" : "거짓");

function isCat(name){
    return (
        name === "고양이" ? "고양이" : "고양이 아님"
    );
}
console.log(isCat("고양이"));
console.log(isCat("강아지"));

// 전개 연산자
// ...을 사용하여 배열이나 객체를 펼칠 수 있다.

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log(num1.concat(num2));
console.log([...num1, ...num2]);

// 객체의 전개
const dog = {
    name: "멍멍이",
    phone: "010-0000-0000",

};
const dogInfo = {
    ...dog,
    age: 2,
};

console.log(dogInfo);

// 함수의 전개
// ...을 사용하여 파라미터(인수)를 전개할 수 있다.

// sum 함수 선언

function sum(a, b, c){
    console.log(a + b + c);
}

// sum 함수 호출
sum(1, 3, 5);

// 배열을 파라미터(인수)로 전달하려면?
const num3 = [5, 6, 7];
const num4 = [8, 9, 10];

sum(num3[0], num3[1], num3[2]);
sum(num4[0], num4[1], num4[2]);

// 전개 연산자를 사용해 인수를 전달
sum(...num3);
sum(...num4);
console.log()

