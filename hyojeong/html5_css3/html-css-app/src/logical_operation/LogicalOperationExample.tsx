export const LogicalOperationExample = () => {
    // ** === 이거는 완벽하게 일치하는 지 확인하는 것
    // 타입까지 일치하는지 확인하는 거고
    // 현재 숫자 10과 문자열 10을 비교하기 때문에 false 뜸
    const strictEquality = 10 ===("10" as any)
    // ** 숫자 10과 문자열 10을 비교하는데 타입일치는 보지 않음
    // 둘 다 같은 10이라서 true
    const roughEquality = 10 == ("10" as any)
    // ** 논리연산 AND (&&)
    // AND 특성으로 모든 것이 참인 경우에만 참
    const LogicalAnd = true && false
    // ** 엔터 키에 보면 원 표시(\) 있는데 쉬프트 누르면 || (파이프)
    // 논리 연산 OR (||)
    // OR 특성으로 하나만 참이어도 됨
    const LogicalOr = true || false
    // 비트연산 AND
    // 2^2. 2^1. 2^0
    //  1    0    1   (5)
    //  1    0    0   (4)
    const bitwiseAnd = 5 & 4 // 4
    // 비트연산 OR
    // 2^2. 2^1. 2^0
    //  1    0    1   (5)
    //  0    1    0   (2)
    const bitwiseOr = 5 | 2 // 7

    return (
        <div>
            <h3>javascript 논리 연산자</h3>
// 중간에 저거는 어퍼스트로피 
            <pre>{
                `
console.log(10 === "10");       // ${strictEquality}
console.log(10 == "10");        // ${roughEquality}
console.log(true && false);     // ${LogicalAnd}
console.log(true || false);     // ${LogicalOr}
console.log(5 & 4);             // ${bitwiseAnd}
console.log(5 | 2);             // ${bitwiseOr}
                `
 } </pre>
        </div>
    )
}