import './App.css'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowIfSwitch } from './control_flow/ControlFlowSwitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'

function App() {

  return (
    <>
      <div>
        <CalculationExample/>
        <VariableAndDataTypes/>        
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowIfSwitch/>
      </div>
    </>
  )
}

export default App