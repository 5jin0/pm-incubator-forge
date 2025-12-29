export  const FirstProblem = () => {

  let z = 2;
  let x = 1;
  let result;

  if (z > x) {
    result = "Z가 더 크지롱~";
  } else {
    result = "아니지롱 X가 더 크지롱~";
  } 

  let ternaryResult = z > x ? "Z가 더 크지롱~" : "아니지롱 X가 더 크지롱~";

  return (
    <div>
      <h3>첫 번째 문제</h3>
      <pre>
        {
          `
          z = ${z}
          x = ${x}
          result = ${result}
          ternaryResult = ${ternaryResult}
          `
        }
      </pre>
    </div>
  )
}