import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import { VariableAndDataType } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowSummation } from './control_flow/ControlFlowSummation'
import { ControlFlowSumExample } from './control_flow/ControlFlowSumExample'
import { SecondProblem } from './problem/SecondProblem'
import { MapExample } from './map/MapExample'
import { MapReduceExample } from './map/MapReduceExample'
import { MapFilterExample } from './map/MapFilterExample'
import { ArraySliceExample } from './array/ArraySliceExample'
import { ArraySpliceExample } from './array/ArraySpliceExample '

function App() {
 

  return (
    <>
      <div>
        <CalculationExample/>
       
        <VariableAndDataType/>

        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowSummation/>
        <ControlFlowSumExample/>
        <SecondProblem/>
        <MapExample/>
        <MapReduceExample/>
        <MapFilterExample/>
        <ArraySliceExample/>
        <ArraySpliceExample/>
       </div>
    </>
  )
}

export default App
