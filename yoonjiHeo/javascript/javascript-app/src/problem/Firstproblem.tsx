//z가 x 보다 크면 Hello,
//z가 x 보다 작거나 같으면 Hi를 출력해주세요. 
//z값과 x값은 여러분 편의대로 아무 숫자나 사용해주시면 됩니다.
export const Firstproblem = () => {
  let x = 10;
  let z = 2
  let result;

  // z가 x 보다 크나요?
  // 해당 질문의 답은 참 혹은 거짓 
  if (z > x) {
    // 조건이 참이라면 if 내부로 진입
    result = "Hello"
  } else {
    // 조건이 거짓이라면 else로 빠지게 됨
    result = "Hi" 
  }

  // if 문 작성 요령
  // 1. 일단 if () {} 를 적어둡니다.
  // 2. 소괄호 내부에 조건을 작성합니다.
  // 3. 조건이 만족 되었을 경우 어떤 작업을 할 것인지 {} 중괄호 내부에 내용을 작성
  // 4. 아닌 경우를 표현하고자 한다면 else {}를 작성
  // 5. 실제 조건이 거짓이 되었을 경우 else의 {} 중괄호 내부에 내용 작성

  // 삼항 연산자라고 부름
  // z > x ? A : B
  // 조건 ? 참인 경우 : 거짓인 경우
  // z가 x보다 크다면? 참인 경우 : 거짓인 경우
  // 이후 최종 계산된 결과가 ternaryResult에 설정됨.
  let ternaryResult = z > x ? "Hello" : "Hi"

    return (
        <div>
            <h3>javascript 첫 번째 퀴즈 (if) </h3>

            <pre>{
                ` 
// x = ${x}                         // 10
// z = ${z}                         // 2
result = ${result}                  // Hi.
ternaryResult = ${ternaryResult}
                ` 
            }</pre>
        </div>
    )
}