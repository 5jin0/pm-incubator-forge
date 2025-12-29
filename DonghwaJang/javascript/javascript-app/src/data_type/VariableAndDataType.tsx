export const VariableAndDataTypes = () => {
    // 아래와 같은 일반 변수 선언을 해야함
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;

    //변수 작성법
    //1. 맨앞에 let, const 중 하나를 작성한다
    //2. 변수의 이름을 작성한다.
    //3. 변수의 값을 지정한다.

    //변수의 이름이 필요한 이유.
    //예) 100갸의 점수를 합산해서 평균을 계산하는 프로그램
    // 평균을 계산할 것인데 let ㅋ 로 되어있으면 뭔지 알 수 없으니 명시성을 주려고 이름을 넣음
    //고로 let average <- 형태로 작성하면 해결됩니다.

    // Map 형식
    // 사물함 열쇠 <- key
    // 사물함 내용물 <- "value"
    let sixthMap = { key: "value" };

    // 배열
    // 1 ~ 1000까지 숫자를 적어야 할 때
    // first, second, third, fourth, fifth, sixth
    // 일일히 변수 이름을 지정하려고 하면 너무 피곤함.
    // 그러니 그냥 Array라는 배열을 하나 잡아놓고 필요한 값들을 설정
    let seventhArray = [1, 2, 3];

    return (
        <div>
            <h3>javascript 변수와 데이터 타입</h3>
            {/* pre 태그 사이에 있는 내용들은 전체가 웹 페이지에 그대로 반영됩니다. */}
            <pre>{
                `
let firstNumber = ${firstNumber}            // 숫자 타입(Number)
const secondConstant = ${secondConstant}    // 문자열 타입(String)
var thirdBoolean = ${thirdBoolean}          // 참/거짓(Boolean)
let fourthNull = ${fourthNull}              // Null 타입
let fifthUndefined = ${fifthUndefined}      // Undefined 타입
let sixthMap = ${sixthMap}                  // Object 타입이고 Map 형식
let sixthMapJsonify = ${JSON.stringify(sixthMap)}   // Object 타입 해석
let seventhArray = ${seventhArray}          // 배열 타입(Array)
                `
            }</pre>
        </div>
    )
}


//JSON.stringify