import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import VariableAndDataTypes from './data_type/VariableAnddatatypes'

function App() {
 
  return (
    <>
      <div>
        {/* 여러분들만의 커스텀 태그 생성 */}
        {/* 이 커스텀 태그는 단순히 사칙연산 + 나머지(MOD) 연산 */}
        <CalculationExample/>
        <VariableAndDataTypes/>
      </div>
    </>
  )
}

export default App
