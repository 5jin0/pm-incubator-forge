// z가 x보다 크면 Hello
// z가 x보다 작거나 같으면 Hi를 출력해주세요
// x 값과 z 값은 여러분들 편의대로 아무 숫자나 사용하면 됩니다.
export const FirstProblem = () => {
    let x = 10;
    let z = 11;
    let result;

    // z > x 부등식은 z가 x보다 크다
    // 해당 질문의 답은 참 혹은 거짓
    if (z > x) {
        result = "Hello";
    } else {
        result = "Hi";
    }

    let ternaryResult = (z > x) ? "z는 x보다 크다." : "z는 x보다 작거나 같다."

    return (
        <div>
            <h3>1차 과제 : javascript 제어문(if)</h3>

            <pre>{
                `
z가 x 보다 크면 Hello,
z가 x 보다 작거나 같으면 Hi를 출력해주세요.
x = ${x}
z = ${z}
result = ${result}
ternaryResult = ${ternaryResult} 
                `
            }</pre>
        </div>
    )  
}