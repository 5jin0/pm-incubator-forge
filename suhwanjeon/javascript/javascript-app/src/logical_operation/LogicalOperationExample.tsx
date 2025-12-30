export const LogicalOperationExample = () => {
    // (중요)===dmf 엄격한 동등 비교 (값과 타입 모두 비교), 완벽하게 일치하는지 여부를 봅니다. 
    // 타입까지 일치하는지 확인하는 것입니다.
    // 현재 숫자 10과 문자열 10을 비교하기 때문에 false 
    const strictEquality = 10 === ("10" as any)
    // (중요)숫자 10과 문자열 10을 비교할 때, 타입은 무시하고 값만 비교하기 때문에 true
    // 둘다 같은 10이기 때문에 true로 처리합니다. 
    const roughEquality = 10 == ("10" as any)
    // (중요)논리 연산 AND (&&) 
    // AND 특성으로 모든 것이 참인 경우에만 참 
    const logicalAnd = true && false
    // (중요)논리연산 OR (||)
    // OR 특성으로 하나라도 참이면 참
    const logicalOr = true || false
    // 비트연산 AND 
    // 2^2 + 2^0 = 4 + 1 = 5  ->  101
    // 2^2 + 2^1 = 4 + 2 = 6  ->  110
    // -----------------------
    //                           100  -> 4
    const bitwiseAnd = 5 & 4
    // 비트연산 OR
    // 2^2 + 2^0 = 4 + 1 = 5  ->  101
    // 2^2 + 2^1 = 4 + 2 = 6  ->  110
    // -----------------------
    //                           111  -> 7
    const bitwiserOr = 5 | 2

    return (
        <div>
            <h3>JavaScript 논리 연산자 예제</h3>
            
            <pre>{
                ` 
console. log(10 === "10")               // ${strictEquality} 엄격한 동등 비교 (값과 타입 모두 비교)
console. log(10 == "10")                // ${roughEquality} 느슨한 동등 비교 (값만 비교)
console. log(true && false)             // ${logicalAnd} 논리 AND 연산자
console. log(true || false)             // ${logicalOr} 논리 OR 연산자
console. log(5 & 4)                     // ${bitwiseAnd} 비트 AND 연산자
console. log(5 | 2)                     // ${bitwiserOr} 비트 OR 연산자
                `
            }</pre>
        </div>
    )
}

