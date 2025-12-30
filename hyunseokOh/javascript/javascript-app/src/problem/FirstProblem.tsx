export const FirstProblem = () => {
    let x = 10;
    let z = 99
    
    let ternaryResult = (z > x) ? "Hello" : "Hi";

    return (
        <div>
            <h2>Control Flow If Example</h2>
            <pre>{`
x = ${x};                           // 변수 x 선언 및 초기화
z = ${z};                           // 변수 z 선언 및 초기화
ternaryResult = "${ternaryResult}"; // 삼항 연산자 결과 저장
            `
            }</pre>        
        </div>
    )
}