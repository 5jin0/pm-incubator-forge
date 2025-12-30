export const ControlFlowSummation = () =>{
   let loopResultArray = []
   let summation = 0

    for(let i = 1; i<=3; i++){
    loopResultArray.push(i)
    }

    for(let i = 1; i<=3; i++){
    summation += loopResultArray[i-1]
    }

    return(
     <div>
        <h3>자바스크립트 제어문 (sum)</h3>

        <pre>{
         `
    loopResultArray = ${loopResultArray}
    summation = ${summation}
      
         `   
         }</pre>
     </div>
    )
    

}