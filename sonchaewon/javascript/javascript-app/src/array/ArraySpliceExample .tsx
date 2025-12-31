export const ArraySpliceExample = () =>{
   let number_array: number[] = [2,4,6,8,10,12,14,16,18,20]
   //'...' spread방식으로 요소를 전부 해체해서 낱개화함
   //결론적으로 아래코드는 nuber_array 배열을 카피뜬거임
   let spliced_array: number[] = [...number_array]

   spliced_array.splice(3,1,777)

   let second_spliced_array: number[] = [...number_array]
   second_spliced_array.splice(4,3,0)
   
   
    return (
    <div>
        <h3> 자바스크립트 array splice </h3>
        <pre>{
            `
    number_array = ${number_array}
    spliced_array = ${spliced_array}
    second_spliced_array= ${second_spliced_array}
            `
        
        }</pre>
    </div>
 )
}