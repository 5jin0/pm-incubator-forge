export const ControlFlowSwitch = () => {
    // Math.random()의 경우 0 <= random 값 < 1
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    // Math.random()은 0 이상 1 미만의 실수입니다.
    // 여기에 5를 곱하면 0 이상 5 미만
    // Math.floor로 내리면 0~4 정수
    // +1 해서 최종 1~5 정수가 됩니다. 

    
    let grade = Math.floor(Math.random() * 5) + 1
    let gradName

    switch (grade){
        case 1: gradName = "SSS"; break;
        case 2: gradName = "SS"; break;
        case 3: gradName = "S"; break;
        case 4: gradName = "A"; break;
        case 5: gradName = "B"; break;

        default: gradName = "규격 외 (심해)"; break;
    }
return (
    <div>
        <h3> javascript 제어문 (swith)</h3>

        <pre>{
             `
grade = ${grade}
gradeName = ${gradName}
             `   
            }</pre>
    </div>
   )
}