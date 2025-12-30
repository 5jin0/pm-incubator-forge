export const FirstProblem = () => {
    let z = 10;
    let x = 10;
    let result;
    
    if (z > x) {
        result = "Hello"
    } else {
        result = "Hi"
    }

        let ternaryResult = z > x ? "Hello" : "Hi"
            return (
        <div>
            <h3>z가 x 보다 크면 Hello, z가 x 보다 작거나 같으면 Hi를 출력해주세요.  (if)</h3>

            <pre>{
            `
            z = ${z}      
            x = ${x}        
            result = ${result}  
            ternaryResult = ${ternaryResult}
            `
    }</pre>
        </div>
    )
}