export const ControlFlowSwitch = () =>{
//Math.random()의 경우 0<= random값 < 1
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// 0<= random <= 0.999999999999999999999999
// 0<= random < 1 <- * 5.3
// 0<= random < 5.xxx
// 0<= random < 6.xxx
// Math.floor() 는 버림(바닥 함수)

//- let grade = Math.floor(Math.random() * 5) + 1
//- Math.random()은 0 이상 1 미만의 실수입니다.
//- 여기에 5를 곱하면 0 이상 5 미만
//- Math.floor로 내리면 0~4 정수
//- +1 해서 최종 1~5 정수가 됩니다. 

let grade = Math.floor(Math.random() *5) + 1
let gradename

switch (grade) {
    case 1: gradename = "SSS"; break;
    case 2: gradename = "SS"; break;
    case 3: gradename = "S"; break;
    case 4: gradename = "A"; break;
    case 5: gradename = "B"; break;

    default: gradename = "규격 외 (심해)"; break;
}


return(
    <div>
        <h3>자바스크립트 제어문 (switch)</h3>

        <pre>{
         `
        grade = ${grade}
        gradename = ${gradename}
         `   
         }</pre>
    </div>
     )
    

}