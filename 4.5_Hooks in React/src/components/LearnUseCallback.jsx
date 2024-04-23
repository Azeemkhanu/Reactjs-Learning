import {useState , useCallback} from 'react'
import GenerateRandomNumber from './GenerateRandomNumbers'

export default function LearnUseCallback() {
    let [count , setCount] = useState(0)
    const handleCounter = ()=>{
        setCount((prevCount)=> prevCount + 2)
    }

    let [randomNumber , setRandomNumber] = useState(0)

    // const generateRandomNumber = ()=>{  
    //     const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    //     setRandomNumber(newRandomNumber)
    // }

    const generateRandomNumber = useCallback(()=>{  
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber)
    },[randomNumber])
    

    return (
        <div>
            <GenerateRandomNumber randomNumber={randomNumber} generateRandomNumber = {generateRandomNumber} />
            <h2>Counter: <span>{count}</span></h2> 
            <button onClick={handleCounter}>Click Me to Increase Counter</button>
        </div>
    );
}