export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10" as any) // 타입까지 비교
    const roughEquality = 10 == ("10" as any) // 값만 비교
    const logicalAnd = true && false // 둘 다 참이어야 참
    const logicalOr = true || false // 하나만 참이어도 참
    const bitwiseAnd = 5 & 4 // 0101 & 0100 = 0100 = 4
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