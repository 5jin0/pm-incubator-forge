export const ControlFlowIf = () => {
    let x = 25;
    let z = 16
    let result;

    if (x > z) {
        result = "Hello"
    } else {
        result = "Hi"
    }

    let ternaryResult = x > z ? "Hello" : "Hi"

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
                `           
x = ${x}                            // 25
result = ${result}                  // Hello
ternaryResult = ${ternaryResult}

                `
            }</pre>
        </div>
    )
}