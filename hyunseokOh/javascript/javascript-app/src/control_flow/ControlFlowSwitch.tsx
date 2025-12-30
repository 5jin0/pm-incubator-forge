export const ControlFlowSwitch = () => {
    let grade = Math.floor(Math.random() * 5) + 1; // 1에서 5 사이의 랜덤 정수
    let gradeName;
    
    switch (grade) {
        case 1:
            gradeName = "A";
            break;
        case 2:
            gradeName = "B";
            break;
        case 3:
            gradeName = "C";
            break;
        case 4:
            gradeName = "D";
            break;
        default:
            gradeName = "규격 외";
            break;
    }

    return (
        <div>
            <h2>Control Flow Switch Example</h2>
            <pre>{`
grade = ${grade};                   // 랜덤 점수 생성
gradeName = "${gradeName}";         // switch 문 결과 저장
            `
            }</pre>        
        </div>
    )
}