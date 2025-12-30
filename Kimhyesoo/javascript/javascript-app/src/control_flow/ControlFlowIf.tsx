export const ControlFlowIf = () => {
    let x = 10;
    let result;

    // x = 5 부등식은 x가 5보다 크나?
    // 해당 질문의 답은 참 혹은 거짓
    if(x>5){
        // 조건이 참이라면 if 내부로 진입
        result = "x는 5보다 크다."
    }else{
        // 조건이 거짓이라면 else로 빠지게 됨
        result = "x는 5보다 작다."
    }

    // if문 작성요령
    // 1. if(내부조건){내부조건 충족 시 내부 실행}
    // 2. 내부조건 불충족 시  else{}

    // 삼항 연산자(조건?참:거짓)
    let ternaryResult = x > 5 ? "x는 5보다 크다" :"x는 5보다 작거나 같다"
    

    return(
        <div>
            <h3>Javascript 제어문</h3>
            <pre>{
                // `는 ~키 아래 있는 기호
                `
            x = ${x}                         // 10
            result = ${result}               // x는 5보다 크다
            ternaryResult = ${ternaryResult}
                `
            
            }</pre>
        </div>
    )
}