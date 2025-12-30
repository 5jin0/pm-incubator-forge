export const FirstProblem = () => {
    let x = 20;
    let z = 10;
    let result;
    
    if ( z > x ) {
        result = "Hello"
    } else {
        result = "Hi"
    }

    let ternaryResult = z > x ? "Hello" : "Hi"

    return (
        <div>
            <h3>첫 번째 문제</h3>
            <pre>{
                `
z가 x보다 클 때 "Hello"를 출력하고
그렇지 않을 때 "Hi"를 출력하시오.
x = ${x}
z = ${z}
result = ${result}
ternaryResult = ${ternaryResult}
                `
            }</pre>
        </div>
    )
}