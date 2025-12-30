export const ControlFlowFor = () => {

    // 대괄호[]가 있으면 배열
    //배열을 사용하는 이유?
    // 반복하는 for, foreach를 사용하면 좋은 이유

    //배열은 여러 개의 정보를 한 공간에 담아 넣기 가능
    //for문을 사용하여 배열에 담긴 정보를 하나씩 꺼내서 사용 가능

    //배열 작성법
    //let을 냅다 만들어
    // 2. 배열 이름 작성
    // 3. '=[]'와 같은 배열 생성
    // ex)
    let loopResultArray = []

    // 루프 동작법
    //let i = 1
    // i가 1로 시작합니다
    // i <= 3
    // i가 3보다 작거나 같을 때까지 반복. true or false
    //true일 경우 loopResultArray.push()진행
    // push는 밀어넣기기 때문에 i값을 배열에 추가


    for(let i=1; i<=3; i++) {
        loopResultArray.push(i)
    }
   // i++ 는 i = i + 1 과 동일
   // 맨 처음 i = 1
   //다음 반복 i = 2
   // loopResultArray = [1, 2]


//for (초기화; 조건부; 증감부) {조건이 만족된 전제하에 반복시킬 코드}

    return (
        <div>
<h3>javascript제어문 (for)</h3>
<pre>{ `
loopResultArray = ${loopResultArray} 

`
        }</pre>    
        </div>
    )
}