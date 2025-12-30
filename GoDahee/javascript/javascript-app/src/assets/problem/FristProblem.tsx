export const FristProblem = () => {
    let x = 10;
    let z = 5;
    let result;

    if (x > z) {
        result = "Hello";
    } else {
        result = "Hi";
    }

    let ternaryResult = x > z ? "Hello" : "Hi";

    return (
        <div>
            <h3>javascript 12.29 수업 문제</h3>
            <pre>{
                `
x = ${x}                            // 10
z = ${z}                            // 5
result = ${result}                  // x는 z 보다 크다.
ternaryResult = ${ternaryResult}
                `
            }</pre>
        </div>
    )
} 