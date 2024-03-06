// 5. 배열

const starbucks =  ['아메리카노', '라떼', '마끼아또']
console.log(starbucks[0])
console.log(starbucks[2])
console.log(starbucks.length)

// 객체
const starbucksMenu = {
    name: '아메리카노',
    price: 4000,
    size: "tall large venti",
}
console.log(starbucksMenu.price)
console.log(starbucksMenu['size '])

const userA = {
    name: 'A',
    age: 60,
}

const userB = {
    name: 'B',
    age: 30, 
    parent: userA,
}

console.log(userB)
console.log(userB.name)
console.log(userB.parent.name)
console.log(userB['parent']['name'])

const users = [userA, userB]
const users2 = [
    {
        name: 'A',
        age: 60
    }, 
    {
        name: 'B',
        age:30,
        parent: userA
    },
]

console.log(users2[0].name)
console.log(users2[1].parent.age)

const arr = [1,2,3]
const [, b, c] = arr

console.log(arr[0])
console.log(b, c)

// chakra-ui 반응형 작업
// display={['none', null, 'block']}
// display={{sm: 'none', lg: 'block'}}

const arr2 = [1,2,3,4,5]
const [d, e, ...rest] = arr2

console.log(d)
console.log(e)
console.log(rest)

const obj = {
    name: 'A',
    age: 30,
    height: 180, 
}
const {name = "이름 없음", age: a, height: h = "키 정보 없음"} = obj

console.log(name, a, h)

// 선택적 체이닝 연산자

const user1 = {
    name: '김지우',
    age: '27',
    height: '164',
    address: '서울시 양재대로 1218'
}
const user2 = {
    name: '김지유',
    age: '28',
    height: '165',
}

function printCity(props){
    return props.address || '주소 없음'
}

console.log(printCity(user1))
console.log(printCity(user2))

// 조건문
function isPositive(props){
    if(props > 0){
        return '양수입니다.'
    } else if(props < 0) {
        return '음수입니다.'
    } else{
        return '0입니다.'
    }
}
console.log(isPositive(4))

// switch문 if문과 비슷한 역할을 하는 조건문
function getSound(props){
    switch(props){
        case '개':
            return '멍멍!';
        case '고양이':
            return '야옹~';
        case '비둘기':
            return '구구 구';
        default:
            return '...?';
    }
}

console.log(getSound('고양이'))
console.log(getSound('호랑이'))

// if문으로 바꾸기
function getSound2(props){
    if(props === '개')
        return '멍멍!'
    if(props === '고양이')
        return '야옹~'
    return '...?'
    }
console.log(getSound2('고양이'))
console.log(getSound('호랑이'))

const users3 = [
    {
        name: 'Winter',
        age: 2
    },
    {
        name: 'Fall',
        age: 3
    },
    {
        name: 'Summer',
        age: 4
    },
]

for(i = 0; i < users3.length; i++){
    console.log(`${users3[i].name} 나이는 ${users3[i].age}살 입니다.`)

}

for(let user of users3){
    console.log(`${user.name}이 나이는 ${user.age}살 입니다.`)
}

console.log(`${users3[2].name} 나이는 ${users3[2].age}살 입니다.`)
console.log(`${users3[0].name} 나이는 ${users3[0].age}살 입니다.`)

// 함수
function hello(){
    console.log("hello")
}

const hello2 = () => {
    console.log("안녕하세요")
}

hello()
hello2()

function sum(a, b = 5){
    return a+ b
}

console.log(sum(1, 2))
console.log(sum(4))

const user = {
    name: "jiwoo",
    age : 27,
    email: '',
}

// 함수 선언
function getName(props){
    const {name, age, email} = props
    return `${name}이는 ${age}살이고 이메일은 ${email}입니다.`
}

// 함수 호출
console.log(getName(user))

const table = ['row1', 'row2', 'row3']

// 함수 선언 (get2) - 2번째 배열을 리턴
function get2([, b = '기본값']){
    // <Box display={['none', null, 'flex;]}</Box>
    // const [, b] = props
    return b
}

console.log(get2(table))

function sum4(...rest){
    return rest
}

console.log(sum4(1,2 ,3, 4, 5, 6, 7, 8, 9, 10))

// 화살표 함수
const arrow = (x, y) => {}

// sum3 함수 선언
const sum3 = (a, b) => a + b


// 함수 호출
console.log(sum3(2,3))

// 화살표 함수의 다양한 예시
// 매개변수가 없는 경우
const aa =() => {}
// 매개변수가 하나인 경우
const bb = x => {}
// 매개변수가 여러 개인 경우
const cc =(x, y) => {}
// 함수의 리턴이 있는 경우
const dd = (x, y) => {
    return x + y
}
// 축약된 형태(리턴 생략)
const ee = (x, y) => x + y
// return 키워드로 시작하지 않는 경우
const ff = (x, y) => {
    console.log(x + y)
    return x + y

}
// 객체 데이터를 반환하는 경우
const gg = () => {
    return {a: 1, b: 2}
}
// 객체의 중괄호와 화살표 함수의 중괄호를 구분하기 위해 소괄호를 사용
const hh = () => ({a: 1, b: 2})

const ii = () => {
    return [1, 2, 3]
}

const jj = () => [1, 2, 3]