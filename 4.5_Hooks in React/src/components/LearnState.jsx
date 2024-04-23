import {useState} from 'react'
export default function LearnState() {
    // example 1

    // let [num , setNum] = useState(55)
    // console.log(num);
    // const handleClick = () => {
    //     num++
    //     setNum(num)
    // }

    // example 2
    let [position , setPosition] = useState({x:22 , y:33})
    const handlePositionClick = ()=>{
        const xNew = position.x += 22 // first we add 22 in current value then store the sum in xNew
        const yNew = position.y += 39

        setPosition({x:xNew , y:yNew}) // here we assigining the x and y values the added values from new variables
    }


    return (
        <>
        {/* example 1 */}
        {/* <h1>Number is: {num}</h1>
        <button onClick={handleClick}>Increase the Number</button> */}

        {/* example 2 */}
        <h2>Position:- X: {position.x} Y: {position.y}</h2>
        <button onClick={handlePositionClick}>Click Me to Change the Postions</button>


        </>
    );
}