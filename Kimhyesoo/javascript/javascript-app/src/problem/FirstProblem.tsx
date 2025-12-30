export const FirstProblem = () => {
    let x = 10;
    let z = 20;
    let result;

    if(x<z){
        result="Hello"
    }
    else{
        result="Hi"
    }
     let ternaryResult = x <z ? "Hello" :"Hi"
     return(
        <div>
            <h3>Javascript 첫 번째 퀴즈</h3>
            <pre>{
                // `는 ~키 아래 있는 기호
                `
                z가 x 보다 크면 Hello, z가 x 보다 작거나 같으면 Hi를 출력해주세요.
            x = ${x}
            z = ${z}                          
            result = ${result}
            ternaryResult = ${ternaryResult}               
                `    
            }</pre>
        </div>
    )
}