export const ControlFlowIf = () => {
    let x = 10;
    let result;

    if (x>5) {
    // x>5 부등식은  x가 5보다 큰가?
    // 해당 질문의 답은 true or false

        result = "x는 5보다 크다"
        // 조건이 참이라면 if 내부로 진입

    } else {
        // 조건이 거짓이라면 else로 빠짐
        result = "x는 5보다 작거나 같다"
    }

    //  if문 작성 요령
    // 1. 일단 if () {} 작성
    // 2. 소괄호 내부에 조건 작성
    // 3. 조건 만족 시 어떤 작업 할 것인지 { } 중괄호 내부에 내용 작성
    // 4. 아닌 경우 else { } 작성
    // 5. 실제 조건이 거짓일 경우 else { } 중괄호 내부에 내용 작성 

    

    let ternaryResult = x>5? "x는 5보다 크다" : "x는 5보다 작거나 같다"
    // 삼항 연산자
    // x > 5 ? A : B
    // 조건 ? 참인 경우(A) : 거짓인 경우(B) 
    // 이후 최종 계산된 결과가 ternaryResult에 설정됨

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
                `
x = ${x}                          // 10
result = ${result}                // x는 5보다 크다. 
ternaryResult = ${ternaryResult}

                `
            }</pre>
        </div>
    )
} 