// Z가 X보다 크면 Hello
// Z가 X보다 작거나 같으면 Hi 출력
export const FirstProblem = () => {
    let z = 5;
    let x = 7;
    let result;

    if (z > x) {
        result = "Hello.";
        // z가 x보다 크면 Hello 출력
    } else {
        result = "Hi";
        // z가 x보다 작거나 같으면 Hi 출력  
    }

    let ternaryResult = z > x? "Hello." : "Hi";

    return (
        <div>
            <h3>JavaScript 제어문_Q1 (if)</h3>
            
            <pre>{
                `
     Z가 X보다 크면 Hello
     Z가 X보다 작거나 같으면 Hi 출력            
    z = ${z}                            // 5        
    x = ${x}                            // 7
    result = ${result}                  Hi  
    ternaryResult = ${ternaryResult}              
                `
            }</pre>
        </div>
    )
}

