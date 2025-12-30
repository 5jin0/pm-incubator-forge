export const FirstProblem = () =>{
let x =10;
let z =15;
let result;

if(x > z){
    //z는x보다 작다
    result = "HI"
} else{
    //z는x보다 크다
    result = "HELLO"
}

let ternaryResult = x > z ?  result = "HI" : "HELLO"

return(
    <div>
        <h3> 문제 1(hello가 나오게 설정)</h3>

        <pre>{
         `
         x = ${x}
         z = ${z}
         result = ${result}  //  z는 x보다 크다
         ternaryResult = ${ternaryResult}
         `   

         }</pre>
    </div>
     )
    

}