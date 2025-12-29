export const VariableAndDataType = () =>{
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;
    let sixthMap = {key: "value"};
    let seventhArray = [1, 2, 3];


     return(
        <div>
            <h3>javascript 변수와 데이터 타입</h3>
            <pre>{
                `
                let firstNumber = ${firstNumber}    // 숫자 타입(Number)
                const secondConstant = ${secondConstant}
                var thirdBoolean = ${thirdBoolean}
                let fourthNull = ${fourthNull}
                let fifthUndefined = ${fifthUndefined}
                let sixthMap = ${sixthMap}
                let sixthMapJsonify = ${JSON.stringify(sixthMap)}
                let seventhArray = ${seventhArray}
                `
            }</pre>
        </div>

    )
}