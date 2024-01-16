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

// 병합 연산자
