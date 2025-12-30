export const LogicalOperationExample = () => {
    //  === 의 경우 완벽하게 일치하는지 여부를 봅니다.
    //  타입까지 일치하는지를 확인하는 것입니다.
    //  현재 숫자 10과 문자열 10을 비교하기 때문에 false가 나옵니다. 
    const strictEquality = 10 === ("10" as any) // 타입까지 비교
    // 숫자 10과 문자열 10을 비교할 때 type 일치는 보지 않습니다.
    // 둘 다 같은 10이기 때문에 true가 나옵니다.
    const roughEquality = 10 == ("10" as any) // 값만 비교
    // 논리 연산 AND (&&)
    // AND 연산자는 둘 다 참이어야 참입니다.
    const logicalAnd = true && false // 둘 다 참이어야 참
    // 논리 연산 OR (||)
    // OR 연산자는 하나만 참이어도 참입니다.
    const logicalOr = true || false // 하나만 참이어도 참
    // 비트 연산 AND (&)
    // 2^2 2^1 2^0
    // 1 0 1  -> 5
    // 1 0 0  -> 4
    const bitwiseAnd = 5 & 4 // 0101 & 0100 = 0100 = 4
    // 비트 연산 OR (|)
    // 2^2 2^1 2^0
    // 1 0 1  -> 5
    // 0 1 0  -> 2
    const bitwiseOr = 5 | 2 // 0101 | 0010 = 0111 = 7

    return (
        <div>
            <h3>Javascript 논리 연산자</h3>

            <pre>{
                `
console.log(10 === "10");      // ${strictEquality} // 엄격한 동등 비교 (타입과 값 모두 비교)
console.log(10 == "10");        // ${roughEquality} // 느슨한 동등 비교 (값만 비교)
console.log(true && false);     // ${logicalAnd} // 논리 AND 연산자
console.log(true || false);     // ${logicalOr} // 논리 OR 연산자
console.log(5 & 4);            // ${bitwiseAnd} // 비트 AND 연산자
console.log(5 | 2);            // ${bitwiseOr} // 비트 OR 연산자
                `
            }</pre>
        </div>
    )
}