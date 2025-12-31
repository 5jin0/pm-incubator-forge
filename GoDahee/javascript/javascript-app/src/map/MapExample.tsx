export const MapExample = () => {

    let number_array: number[] = [2, 4, 6, 8, 10];
    let square_result_array: number[] = number_array.map(element => element * element);

    return (
        <div>
            <h3>javascript Map Function</h3>
            <pre>{
                `
number_array = ${number_array}
square_result_array = ${square_result_array}
                `
            }</pre>
        </div>
    )
} 