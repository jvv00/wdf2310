document.querySelector('.wrap').style.border = '1px solid pink';
document.querySelector('header').style.height = "100px";
document.querySelector('header').style.background = "pink";
document.querySelector('header').style.padding = "10px";

const parent = document.querySelector('.wrap')
console.log(parent.children)
console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.firstElementChild)

document.getElementById('main').style.background = "lightblue";
document.getElementsByClassName('content-section')[0].style.backgroundColor = "yellow";
document.getElementById('main').style.padding = "10px";

document.querySelector('.content-section p').style.border = '5px solid blue'
const secP = document.querySelectorAll('.content-section p')
secP.forEach((p) => (p.style.border = '5px solid red'))

secP[0].textContent = "Hello World"
secP[1].innerHTML = "<em>글씨</em>"

const link = document.querySelector('.link')
link.setAttribute('href', 'http://www.google.com')
link.textContent = '구글로 가기'
// 새로운 요소 추가
const newElement = document.createElement('div')
newElement.textContent = '새로운 요소'
// 추가, 제거
document.querySelector('.sidebar').appendChild(newElement)
document.querySelector('.sidebar').lastElementChild.remove()

const btn = document.getElementById('btn')
// 이벤트
btn.addEventListener('click', () => {
    console.log('버튼 클릭')
})