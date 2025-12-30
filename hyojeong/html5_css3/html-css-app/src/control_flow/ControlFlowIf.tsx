export const ControlFlowIf = () => {
    let x = 10;
    let result;

    if (x > 5) {
        result = "x는 5보다 크다."
    } else {
        result = "x는 5보다 작다."
    }

    // if문 작성 요령
    // 1. 일단 if () {}를 적어둠
    // 2. 소괄호 내부에 조건 작성
    // 3. 조건 만족시 어떤 작업을 할 건지 {} 내부에 작성
    // 4. 아닌 경우를 표현하고 싶으면 else {} 작성
    // 5. 실제 조건이 거짓이 되었을 경우 else의 {} 내부에 쓰기

// 삼항연산자라고 부름
// x > 5 ? A : B
// 조건이 ? >> 참인 경우 : >> 거짓인 경우


    let ternaryResult = x > 5 ? "x는 5보다 크다." : "x는 5보다 작거나 같다."
    // 아니라면은 : 으로 처리

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
            `
            x = ${x}            
            result = ${result}  
            ternaryResult = ${ternaryResult}
            `
    }</pre>
        </div>
    )
}