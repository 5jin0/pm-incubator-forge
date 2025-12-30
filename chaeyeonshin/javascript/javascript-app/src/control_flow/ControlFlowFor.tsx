export const ControlFlowFor = () => {

    // 배열[]은 여러 개의 데이터를 하나의 변수에 담을 수 있는 자료구조
    // 실제 누적치를 계산하기 위해 사용할때 간편함을 위해 배열 사용
    let loopResultArray = []

    // 반복문 for : 특정 구간을 정해진 횟수만큼 반복 실행
    // for (초기식; 조건식; 증감식) { 실행문 }
    // 초기식 : 반복문에서 사용할 변수를 선언 및 초기화
    // 조건식 : 반복문을 계속 실행할지 여부를 결정하는 식 (true/false)
    // 증감식 : 반복문에서 사용할 변수를 증감시키는 식
    // i++ : i = i + 1 과 동일
    for (let i = 1; i <= 3; i++) {
        // .push: i값을 loopResultArray 배열에 추가
        loopResultArray.push(i)
    }
 
    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                ` 
loopResultArray = ${loopResultArray}
                `
            }</pre>
        </div>
    )
}

