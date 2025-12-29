import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalcuationExample } from './math_operation/CalculationExample'

function App() {

  return (
  
    <div>
      <CalcuationExample></CalcuationExample>
      <VariableAndDataTypes></VariableAndDataTypes>
      <LogicalOperationExample></LogicalOperationExample>
      </div>
  )
}

export default App
