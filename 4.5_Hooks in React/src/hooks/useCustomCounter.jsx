import {useState} from 'react'

export function useCustomCounter() {
    let [count , setCount] = useState(0)
    const handleCounter = ()=>{
        const newCount = count+=5
        setCount(newCount)
    }
    return {
        count , handleCounter
    }
}