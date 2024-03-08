console.log("슈렉 프라푸치노 주문")

setTimeout(() => {
    console.log("아메리카노 주문")
    console.log("아메리카노 제공")
}, 3000)

console.log("슈렉 프라푸치노 제공")


// 비동기 처리를 사용하여 코드를 작성하면,
// 코드가 실행되는 순서와 실제로 실행되는 순서가 다르게 만들 수 있다.

function orderCoffee(name, time){
    console.log(`${name}는 제조하는데 ${time/1000}초 걸립니다.`)

    setTimeout(() => {
        console.log(`${name} 나왔습니다.`)
    }, time)
}

orderCoffee("아메리카노", "3000")
orderCoffee("라떼", "5000")
orderCoffee("프라푸치노", "7000")