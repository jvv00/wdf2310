// console.log("슈렉 프라푸치노 주문")

// setTimeout(() => {
//     console.log("아메리카노 주문")
//     console.log("아메리카노 제공")
// }, 3000)

// console.log("슈렉 프라푸치노 제공")


// 비동기 처리를 사용하여 코드를 작성하면,
// 코드가 실행되는 순서와 실제로 실행되는 순서가 다르게 만들 수 있다.

// function orderCoffee(name, time){
//     console.log(`${name}는 제조하는데 ${time/1000}초 걸립니다.`)

//     setTimeout(() => {
//         console.log(`${name} 나왔습니다.`)
//     }, time)
// }

// orderCoffee("아메리카노", "3000")
// orderCoffee("라떼", "5000")
// orderCoffee("프라푸치노", "7000")

// 콜백함수를 이용한 비동기 처리
function orderCoffee(coffee, callback){
    console.log(`${coffee}주문`)
    setTimeout(() => {
        console.log(`${coffee}가 만들어졌습니다.`)
        callback()
    },3000)
}
function drinkCoffee(){
    console.log("커피를 마십니다.")
}

orderCoffee("아메리카노", drinkCoffee)

function drinkCoffee2(){
    return("커피를 마십니다.~~~")
}
console.log(drinkCoffee2())

// 3. Promise 객체를 이용한 비동기 처리
const coffeeOrder = new Promise((resolve, reject) => {
    setTimeout( () => {
        if(Math.random() > 0.5){
            resolve("아메리카노 준비 완료")
        }else {
            reject("아메리카노 실패")
        }
    }, 1000)

})

// 프로미스 객체 이용하기
coffeeOrder 
// 성공적
    .then((props) => {
        console.log(props)
    })
    // 실패했을 때
    .catch(() => {})

// 프로미스를 이용하여 API 요청하기