
export const VariableAndDataTypes = () => {
    // 아래와 같은 일반 변수 선언 해야 함

    // 변수 작성법
    // 1. 맨 앞에 let, const, var 중 하나를 작성
    // 2. 변수 이름을 작성
    // 3. 변수의 값을 지정

    // 변수의 이름이 필요한 이유?
    // 100개의 점수를 합산해서, 평균을 계산하는 프로그램
    // 평균 계산할건데, 이름이 let z 이따구면 z이 뭔지 모름
    // 명시성 없기 때문에 z라는 변수가 뭘 위한 정보인지 알 수 x
    // 따라서, let average 혹은 mean 이런 명시성이 있는 형태로 작성해야 함

    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;

    let sixthMap = { key: "value" };
    // map 형식
    // 사물함 열쇠 <- key
    // 사물함 내용물 <- "value"

    let seventhArray = [1, 2, 3];
    // 배열
    // 1~1000까지 숫자를 적어야 할 때
    // first, second, third, fourth, fifth, sixth
    // 일일히 변수 이름 지정하려고 하면 너무 피곤함
    // 그러니 그냥 Array라는 배열을 하나 잡아놓고 필요한 값들을 설정 

    return (
        <div>
            <h3>javascript 변수와 데이터 타입</h3>
            <pre>{
            // pre 태그 사이에 있는 내용들은 전체가 웹페이지에 그대로 반영됨
                `
let firstNumber = ${firstNumber}                  // Number 타입(숫자 타입)
const secondConstant = ${secondConstant}          // String 타입 (문자열 타입)
var thirdBoolean = ${thirdBoolean}                // Boolean 타입 (참/거짓 타입)
let fourthNull = ${fourthNull}                    // Null 타입 (값이 없음)
let fifthUndefined = ${fifthUndefined}            // Undefined 타입 (정의되지 않음)
let sixthMap = ${sixthMap}                        // Object 타입, Map 형식 (객체 타입)
let sixthMapJsonify = ${JSON.stringify(sixthMap)} // Object 타입 해석 
let seventhArray = ${seventhArray}                // Array 타입 (배열 타입)
                `
            }</pre>
        </div>
    )
} 

// JSON.stringify(변수이름) 형태로 작성하면
// 해당변수 이름이 object ~