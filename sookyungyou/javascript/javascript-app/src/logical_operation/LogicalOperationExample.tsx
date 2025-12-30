export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10" as any)
    // === 는 완벽하게 일치하는지의 여부 확인
    // 타입까지 일치하는지 확인
    // 현재 숫자 10 과 문자열 10을 비교 -> false

    const roughEquality = 10 == ("10" as any)
    // ==는 숫자 10과 문자열 10을 비교하는데 type 일치까지 x
    //둘 다 같은 10 -> true

    const logicalAnd = true && false
    // 논리연산 AND (&&)
    // AND 특성으로 모든 것이 참인 경우에만 true

    const logicalOr = true || false
    // 논리연산 OR (||)
    // OR 특성으로 하나만 참이어도 true

    const bitwiseAnd = 5 & 4   // 4
    // 비트연산 AND (실무에서 비트연산 거의x)
    // 2^2, 2^1, 2^0 
    //  1    0    1   (5)
    //  1    0    0   (4)

    const bitwiseOr = 5 | 2    // 7
    // 비트연산 OR
    // 2^2, 2^1, 2^0
    //  1    0    1   (5)
    //  0    1    0   (2)


    return (
        <div>
            <h3>javascript 논리연산자</h3>

            <pre>{
                `
console.log(10 === "10");       // ${strictEquality}
console.log(10 == "10");        // ${roughEquality} 
console.log(true && false);     // ${logicalAnd} 
console.log(true || false);     // ${logicalOr}
console.log(5 & 4);             // ${bitwiseAnd}
console.log(5 | 2);             // ${bitwiseOr}

                `
            }</pre>
        </div>
    )
} 


