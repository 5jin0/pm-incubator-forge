// z가 x 보다 크면 Hello,
//z가 x 보다 작거나 같으면 Hi를 출력해주세요. 

export const FirstProblem = () => {

    //Math.random의 경우 0 이상 1 미만의 숫자를 랜덤으로 생성
    //Math.floor의 경우 소수점 이하를 버림  
    let x = 5;
    let z = 10;
    let result;
    if(z > x) {
        result = "Hello";
    }
    else {
        result = "Hi";
    }   


    let ternaryResult = z > x ? "Hello" : "Hi";

    return (
        <div>
        
            <pre>{
            `
 x = ${x}           // 5
 z = ${z}           // 10
 result = ${result}    // Hello
 ternaryResult = ${ternaryResult} 
              `   }</pre>
        </div>
    )               }