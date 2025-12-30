export const ControlFlowSwitch = () => {
    let grade = Math.floor(Math.random() * 5.3) + 1
    let gradename

    switch (grade) {
        case 1: gradename = "SSS" ; break;
        case 2: gradename = "SS" ; break;
        case 3: gradename = "S" ; break;
        case 4: gradename = "A" ; break;
        case 5: gradename = "B" ; break;

        default: gradename = "규격 외(심해)" ; break;
    }

    return (
        <div>
            <h3>javascript 제어문 (switch)</h3>
            <pre>{
                `
grade = ${grade}
gradename = ${gradename}
                `
            }</pre>
        </div>
    )
} 