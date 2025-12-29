export const FirstProblem = () => {
    //z가 x 보다 크면 Hello, z가 x 보다 작거나 같으면 Hi를 출력해주세요. 
    let z = 10;
    let x = 5;
    let result;
    
    
    if (z > x) {
       
        result = "z는 x 보다 크면 Hello"
    } else {
  
        result = "z는 x 보다 작거나 같으면 Hi."
    }
    
 
   let ternaryResult = z > x ? " Hello " : " Hi."


return (
    <div>
        <h3> javascript 첫번째 퀴즈 (if)</h3>

        <pre>{
             `
z = ${z}                  
x = ${x}                  
result = ${result}        
ternaryResult = ${ternaryResult}
             `   
            }</pre>
    </div>
   )
}