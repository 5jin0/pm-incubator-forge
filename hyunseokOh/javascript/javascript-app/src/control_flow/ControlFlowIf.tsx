export const ControlFlowIf = () => {
    let x = 10;
    let result;

    if (x > 5) {
        result = "x is greater than 5";
    } else {
        result = "x is not greater than 5";
    }

    let ternaryResult = (x > 5) ? "x is greater than 5" : "x is not greater than 5";

    return (
        <div>
            <h2>Control Flow If Example</h2>
            <pre>{`
x = ${x};                           // 변수 x 선언 및 초기화
result = "${result}";               // if-else 문 결과 저장
ternaryResult = "${ternaryResult}"; // 삼항 연산자 결과 저장

            `
            }</pre>        
        </div>
    )
}