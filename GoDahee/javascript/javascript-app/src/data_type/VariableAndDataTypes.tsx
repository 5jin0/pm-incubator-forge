export const VariableAndDataTypes = () => {
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;
    let sixthMap = { key: "value" };
    let seventhArray = [1, 2, 3];

    return (
        <div>
            <h3>javascript 변수와 데이터 타입</h3>
            <pre>{
                `
let firstNumber = ${firstNumber}            // 숫자 타입(Number)
const secondConstant = ${secondConstant}    // 문자열 타입(String)
var thirdBoolean = ${thirdBoolean}          // 참/거짓(Boolean)
let fourthNull = ${fourthNull}              // Null 타입
let fifthUndefined = ${fifthUndefined}      // Undefined 타입
let sixthMap = ${sixthMap}                  // Object 타입이고 Map 형식
let sixthMapJsonify = ${JSON.stringify(sixthMap)} // Object 타입 해석
let seventhArray = ${seventhArray}          // 배열 타입(Array)
                `
            }</pre>
        </div>
    )
} 