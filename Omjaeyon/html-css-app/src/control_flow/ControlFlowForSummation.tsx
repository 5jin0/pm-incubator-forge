export const ControlFlowForSummation = () => {

    
    let loopResultArray = []
    let summation = 0

    for (let i = 1; i <=3; i++) {
        loopResultArray.push(i)
    }   

    for(let i=1; i<=3; i++) {
        summation += loopResultArray[i-1]
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
summation = ${summation}    
`
        }</pre>    
        </div>
    )
}