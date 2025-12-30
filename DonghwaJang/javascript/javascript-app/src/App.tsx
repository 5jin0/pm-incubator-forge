import './App.css'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowFor } from './control_flow/ControlFlowIFor'
import { ControlFlowForSummation } from './control_flow/ControlFlowIForsummation'
import { ControlFlowSwitch } from './control_flow/ControlFlowIswitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataType'
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
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowForSummation/>

      </div>
    </>
  )
}

export default App 