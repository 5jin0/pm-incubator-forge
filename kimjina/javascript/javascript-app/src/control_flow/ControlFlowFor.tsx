export const ControlFlowFor = () => {
    // 대괄호를 열고 닫는 뭔가가 있다면 배열
    // 배열을 사용하는 이유는 무엇일까요?
    // 반복하는 for, foreach 와 함께 사용하면 좋은 이유는 무엇일까요?

    // 배열은 여러 개의 정보를 한 공간에 담아 넣을 수 있습니다.
    // 여러분들이 나중에 구현하게 될 장바구니(Cart의 가격 정보)
    // 마우스, 키보드, 모니터 2개, 스피커, 헤드셋
    // (예를 들어서) 가격이 오만원 사만원 삼만원등등 일때
    // 누적치 <- 결제 금액
    // 반복을 시켜야하기 때문에 for, foreach와 함께 사용하는 것이 좋음

    // 배열을 작성하는 방법
    // 1. let을 그냥 내립다 적음
    // 2. 배열 이름(loopResultArray)을 작성(목적에 맞게 명시적으로 - 내 취향것)
    // 3. '=[]' <- 이러한 형태로 아무것도 없는 배열 생성
    let loopResultArray = []

    // for 루프의 경우엔 동작이 아래와 같음
    // let i = 1
    // i 값이 1로 시작함
    // i <= 3;
    // i가 3보다 작거난 같은가? 그 해답은 반드시 true / false
    // 이 질문의 해답이 true라면 내부로 진입해서 loopResultArray.push(i)f를 진행함
    // push는 밀어넣는 작업을 하기 때문에 i 값을 밀어 넣음
    // 이후 i++을 하게 됨/ i++은 더하기 1과 같음
    // 그러므로 i 값이 1개 증가함

// 페이지에 3까지 포함하고 싶으면 i<=3으로 적으면 됨
    for (let i = 1; i < 3; i++){
        loopResultArray.push(i)
        // 맨 처음 i = 1
        // 이때 loopResultArray = [1]

        // 다음 반복 i = 2
        // loopResultArray = [1.2]

        // 다음 반복 i = 3
        // loopResultArray = [1.2,3]
    }

    // for (초기화; 조건부; 증감부) {
    //      조건이 만족된다는 전제하에 반복시길 코드(루프내 코드)
    //}
    
    // 초기화 -> 조건부 -> 루프내 코드 -> 증감부 -> 조건부 -> 루프내 코드->....
    // 조건이 틀리는 순간 루프 탈출
return (
    <div>
        <h3> javascript 제어문 (for)</h3>

        <pre>{
             `
loopResultArray = ${loopResultArray}
             `   
            }</pre>
    </div>
   )
}