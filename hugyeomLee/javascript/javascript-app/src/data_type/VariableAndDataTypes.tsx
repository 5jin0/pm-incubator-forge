export const VariableAndDataTypes = () => {
    // 아래와 같은 일반 변수 선언을 해야 함
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;

    // 변수 작성법
    // 1. 맨 앞에 let, const, var 중 하나를 작성
    // 2. 변수 이름 작성 (camelCase 권장)
    // 3. 변수의 값을 지정

    // 변수의 이름이 필요한 이유는 무엇일까요?
    // 100개의 점수를 합산해서 평균을 계산하는 프로그램이라고 가정
    // 평균을 계산한 것인데 let z <- 이런식으로 변수 이름을 지정하면
    // 이게 무슨 값인지 알 수가 없음.(명시성 없음)
    // 그래서 변수 이름을 let totalScore, let averageScore, let meanScore <- 이런식으로
    // 의미있는 이름으로 지정해야 나중에 코드를 다시 봤을 때도
    // 이 변수가 무슨 값을 담고 있는지 알 수 있음.

    // Map 형식
    // 사물함 열쇠 -> key
    // 사물함 내용물 -> "value"
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
            {/* pre 태그 사이에 있는 내용은 그대로 출력됩니다 */}
            <pre>{
                `
let firstNumber = ${firstNumber}     // 숫자 타입(Number)
const secondConstant = "${secondConstant}"  // 문자열 타입(String)
var thirdBoolean = ${thirdBoolean}   // 불리언 = 참/거짓 타입(Boolean)
let fourthNull = ${fourthNull}       // 널 타입(Null-텅 빈)
let fifthUndefined = ${fifthUndefined} // 언디파인드 타입(Undefined-정의되지 않음)
let sixthMap = ${JSON.stringify(sixthMap)}       // 맵 타입(Map-키와 값의 쌍, Object 타입이고 Map 형식)
let seventhArray = ${seventhArray}   // 배열 타입(Array-순서가 있는 값들의 집합)
                `
            }</pre>
        </div>
    )
} 

// JSON.stringify(변수이름) 형태로 작성하면
// 해당 변수 이름이 object라는 전제하에 ojbect 내부의 내용을
// 문자열 형태로 변환하여 출력해줍니다.