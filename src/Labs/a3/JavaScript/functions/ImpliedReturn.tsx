function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    
    return (
        <>
        <h4>Implied Return</h4> <br />
        fourTimesFive = {fourTimesFive} <br></br>
        multiply(4,5)= (fourTimesFive)
        </>
    )
}
export default ImpliedReturn