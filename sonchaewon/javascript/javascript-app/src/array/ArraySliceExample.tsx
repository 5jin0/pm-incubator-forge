export const ArraySliceExample = () =>{
   let number_array: number[] = [2,4,6,8,10,12,14,16,18,20]
   
   //3번째 인덱스~7번째 인덱스(미포함)까지 정보를 잘라서 가져옴
   let sliced_array: number[] = number_array.slice(3, 7)
   
   
    return (
    <div>
        <h3> 자바스크립트 array slice </h3>
        <pre>{
            `
    number_array = ${number_array}
    sliced_array = ${sliced_array}
            `
        
        }</pre>
    </div>
 )
}