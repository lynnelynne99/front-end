// 로또 번호를 선정하는 함수
function getRandomNumber(number, count) { // number 배열, count라는 매개변수
    let selectedNumber = []; // 빈 배열 만들기
    while (selectedNumber.length < count) { // 배열의 길이가 count보다 작은 동안 반복
        let randomIndex = Math.floor(Math.random() * number.length);// 0과 배열의 길이 사이의 랜덤한 숫자를 가져와서 letrandomIndex 에 저장한다
        let No = number[randomIndex]; // 그 인덱스에 해당하는 것을 가져와서 let No에 저장한다
        if (!selectedNumber.includes(No)) { // 해당 요소가 저장되어있지 않다면
            selectedNumber.push(No); // 배열에 넣는다
        }
    }
    return selectedNumber; // 배열 반환한다
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");
btn.addEventListener("click", function () {
    result1.innerText = getRandomNumber(number, 6);
});