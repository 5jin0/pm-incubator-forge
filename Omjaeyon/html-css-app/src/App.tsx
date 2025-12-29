import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataType'
import { CalculationExample } from './math_operation/CalculationExample'

function App() {

  return (
    <>
      <div>
       {/*여러분만의 커스텀 태그 생성 */}
       {/*이 커스텀 태그는 단순히 사칙연산+나머지 연산 */}
       <CalculationExample />
       <VariableAndDataTypes />
      </div>
      
    </>
  )
}

export default App
