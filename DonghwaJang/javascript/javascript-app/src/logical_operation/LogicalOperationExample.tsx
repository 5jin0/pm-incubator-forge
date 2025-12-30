export const LogicalOperationExample = () => {
    // === 의 경우 완벽하게 일치하는지 여부를 봅니다.
    const strictEquality = 10 === ("10" as any)
    const roughEquality = 10 == ("10" as any)
    const logicalAnd = true && false
    // 앤터 키에 보면 원 표시가 보일텐데 그거 Shift 누르고 입력하면 파이프가 만들어집니다
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4
    const bitwiseOr = 5 | 2

    return (
        <div>
            <h3>javascript 논리 연산자</h3>

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










