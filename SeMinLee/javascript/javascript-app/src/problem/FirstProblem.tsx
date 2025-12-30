const x = 5;
export const FirstProblem = () => {
    let z = 10;
    let result ;

    if (z > x) {
        result = "Hello";
    } else {
        result = "Hi";
    }
    
    return (
        <div>
            <h3> if문 문제 정답 출력 (if) </h3>

            <pre>{
                `
                x = ${x}
                z = ${z}
                result = ${result}
                `
            }</pre>          
        </div>
    )

}
