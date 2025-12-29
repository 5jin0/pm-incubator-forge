export const LogicalOperationExample = () => {

    const strictEquality = 10 === ("10" as any)
    const roughEquality = 10 == ("10" as any)
    const logicalAnd = true && false
    //  | 기호는 Shift + \ 로 입력 가능
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4 
    const bitwiseOr = 5 | 2
    
    return (
        <div>
            <h3>javascript는 논리 연산자 </h3>

            <pre>{
                `
                console.log(10 === "10") //엄격한 동등 연산자 (false)   ${strictEquality}
                console.log(10 == "10") // 느슨한 동등 연산자 (true)    ${roughEquality}
                console.log(true && false) // 논리 AND 연산자 (false)  ${logicalAnd}
                console.log(true || false) // 논리 OR 연산자 (true)    ${logicalOr}
                console.log(5 & 4) // 비트 AND 연산자                  ${bitwiseAnd}
                console.log(5 | 2) // 비트 OR 연산자                   ${bitwiseOr}
                `
            }</pre>          
        </div>
    )

}
