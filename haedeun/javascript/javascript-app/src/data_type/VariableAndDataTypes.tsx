export const VariableAndDataTypes = () => {
    //아래와 같은 변수 선언을 해야함
    let firstNumber = 10;
    const secondConstant = "Hello";
    var thirdBoolean = true;
    let fourthNull = null;
    let fifthUndefined = undefined;

    // 변수 작성법
    // 1. 맨 앞에 let, const, var 중 하나를 작성함
    // 2. 변수 이름을 작성
    // 3. 변수 값을 지정

    // 변수 이름이 필요한 이유
    // 100개의 점수를 합산해서 평균을 계산하는 프로그램
    // 평균을 계산할 것인데 let z <- 이름이 이와 같으면 z가 뭔지 알 수 없음
    // 명시성이 없기 때문에 z라는 변수가 무엇을 위한 정보인지 알 수 없음
    // 이 문제를 해결하려면 명시성을 추가
    // let average 혹은 mean <- 형태로 작성하면 해결 됨

    // Map 형식
    // 사물함 열쇠 <- key
    // 사물함 내용물 <- value
    let sixthMap = {key: "value"};

    //배열
    // 1~1000까지 숫자를 적어야 할 때
    // first, second, third, fourth, fifth, sixth
    // 일일히 변수 이름을 지정하려고 하면 너무 피곤함
    // 그러니 그냥 Array라는 배열 하나 잡아놓고 필요한 값들을 설정
    let seventhArray = [1, 2, 3];

    return(
        <div>
            <h3>Javascript 변수와 데이터 타입</h3>
            {/* pre 태그 사이에 있는 내용들은 전체가 웹 페이지에 그대로 반영 됨 */}
            <pre>{
                `
let firstNumber = ${firstNumber} //숫자타입
const secondConstant = ${secondConstant} //문자열
var thirdBoolean = ${thirdBoolean} //참거짓
let fourthNull = ${fourthNull} //NULL 타입
let fifthUndefined = ${fifthUndefined} //Undefined 타입
let sixthMap = ${sixthMap} // Object 타입이고 Map 형식
let sixthMap = ${JSON.stringify(sixthMap)} 
let seventhArray = ${seventhArray} // 배열 타입(Array)
                `
                }
            </pre>           
        </div>
    )
}

//JSON.stringify(변수이름) 형태로 작성하면
// 해당 변수 이름이 Object라는 전제하에 Object 내부의 내용을 출력하게 됨