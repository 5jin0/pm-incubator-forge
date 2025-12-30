export const ControlFlowSwithch = () => {

    let grade = Math.floor(Math.random() * 5) + 1; // 1~5 사이의 랜덤 숫자 생성
    let gradeName

    switch(grade) {
        case 1: gradeName = "SSS"; break;
        case 2: gradeName = "SS"; break;
        case 3: gradeName = "S"; break;
        case 4: gradeName = "A"; break;
        case 5: gradeName = "B"; break;
    
        default: gradeName = "규격 외(심해)"; break;
    
    }

    return (
        <div>
<h3>javascript제어문 (switch)</h3>
<pre>{ `
    grade = ${grade}  //  1~5 사이의 랜덤 숫자
    gradeName = ${gradeName} // 해당 등급에 맞는 문자열
        `
        }</pre>    
        </div>
    )
}