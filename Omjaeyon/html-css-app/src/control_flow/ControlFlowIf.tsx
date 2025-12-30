export const ControlFlowIf = () => {
    let x = 10;
    let result;
    // x가 5보다 크면 
    // "x는 5보다 큽니다." 출력
    if(x > 5) {
        result = "x는 5보다 큽니다.";
    } else {
        // 조건이 거짓이라면 else로 빠짐
        result = "x는 5보다 작어.";
    }
// if문 작성법
// if() {} 적기
// 소괄호 내부에 조건 작성
//조건이 만족될 경우 어떤 작업을 할지 중괄화{}에 작성
//조건이 거짓일 경우 else의 {}에 내용 작성

// 삼항 연산자
// x>5 ? A : B
// 조건이 참이면 A 실행
// 조건이 거짓이면 B 실행
// 이후 최종 결과가 tempnaryResult에 담김

    let ternaryResult = x>5 ?"x는 5보다 크다." : "x는 5보다 작거나 같다."
    

    return (
        <div>
            <h3>javascript 제어문(if)</h3>
            <pre>{
            `
 x = ${x}           // 10
 result = ${result}    // x는 5보다 크다.
 ternaryResult = ${ternaryResult} 

              `   }</pre>
              </div>
            )
            }