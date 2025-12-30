export const ControlFlowIf = () => {
    let x = 10;
    let result ;

    if (x > 5) {
        result = "x는 5보다 크다.";
    } else {
        result = "x는 5보다 작거나 같다.";
    }

    // if 문 작성 요령
    // 1. if () {} 작성
    // 2. 소괄호 () 안에 조건식 작성
    // 3. 중괄호 {} 안에 조건이 참일 때 실행할 코드 작성
    // 4. else {} 작성 (생략 가능)
    // 5. 중괄호 {} 안에 조건이 거짓일 때 실행할 코드 작성

    let ternaryResult = x > 5 ? "x는 5보다 크다." : "x는 5보다 작거나 같다.";

    // 삼항 연산자 작성 요령
    // 1. 조건 ? 참일 때 값 : 거짓일 때 값

    
    return (
        <div>
            <h3>javascript 제어문 (if) </h3>

            <pre>{
                `
                x = ${x}                           // 10
                result = ${result}                // if문 결과: x는 5보다 크다.
                ternaryResult = ${ternaryResult} // 삼항 연산자 결과: x는 5보다 크다.
                `
            }</pre>          
        </div>
    )

}
