export const ControlFlowSwitch = () => {
    let grade = Math.floor(Math.random() * 10) + 1; // 1 ~ 10 사이의 랜덤 숫자
    let gradeName

    // Math.randm()의 경우 0 <= random 값 < 1
   // 

   // 0 <= Random <= 0.9999999999999999999999999
   // 0 <= random < 1 <- * 5.3
   // 0 <= random <= 5.xxx
   // 

    switch (grade) {
        case 1: gradeName = "SSS"; break;
        case 2: gradeName = "SS"; break;
        case 3: gradeName = "S"; break;
        case 4: gradeName = "A"; break;
        case 5: gradeName = "B"; break;
   
        default: gradeName = "규격 외(심해)"; break;
        }

    return (
        <div>
            <h3>javascript 제어문 (switch)</h3>

            <pre>{
                `
grade = ${grade}                  
gradeName = ${gradeName}
                `
            }</pre>
        </div>
    )
}

