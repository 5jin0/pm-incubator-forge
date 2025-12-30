export const LogicalOperationExample = () => {
    const strictEqulity = 10 === ("10" as any)
    const roughEqulity = 10 === ("10" as any)
    const loficalAnd = true && false
    // 엔터키에 보면 원 표시가 보일텐데 그거 Shift 누르고 입력하면 파이프가 만들어집니다
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4  
    const bitwiseOr = 5 | 2

    return (
        <div>
            <h3>javascript논리 연산자 예제</h3>

            <pre>{
                // esc키 아래 물결 (~) 부분을 쉬프트 키 누르지 않고 찍으면 백틱
                `
console.log(10 === "10")            // $(strictEqulity)
console.log(10 == "10")             // $(roughEqulity)
console.log(true && false)          // $(logicalAnd)
console.log(true || false)          // $(logicalOr)
console.log(5 & 4)                  // $(bitwiseAnd)
console.log(5 | 2)                  // $(bitwiseOr)
             `
            }</pre>
        </div>
    )   
            }