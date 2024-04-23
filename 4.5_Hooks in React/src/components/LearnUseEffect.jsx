import {useState , useEffect} from 'react'
export default function LearnUseEffect() {
    let [count , setCount] = useState(0)
    const handleCounter = ()=>{
        const newCount = count+=5
        setCount(newCount)
    }

    const [random , setRandom] = useState(null);
    function handleRandom(){
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandom(newRandomNumber)
    };

    // Example-1 It runs each time when component is mounted and re-render
    // when oue state change react re-render the component,
    useEffect(()=>{
        console.log("useEffect is Called");
    })

    // Example-2 It runs once when the component is mounted ([] - means no dependency)
    // so it will not call when component re-render by the react
    // useEffect(()=>{
    //     console.log("useEffect is Called once");
    // },[])

    
    // Example-3 It runs when the component is mounted and whenever the dependence changes its state.
    // so it will not called if non-dependent state changes.
    // useEffect(()=>{
    //     console.log("useEffect is Called once");
    // },[count])

    //Example-4 The cleanup function (the function we return from useEffect) runs when the component unmounts
    // or when the dependecies in the dependency array changes. Since count is in the dependency array,
    // whenever count changes, the cleanup function is called before the new effect runs. 
    // useEffect(()=>{
    //     console.log("useEffect is Called once")
    //     return ()=>{
    //         console.log("component will unmount!!");
    //     }
    // },[count])


    return (
        <div>
            <h2>Counter: <span>{count}</span></h2> 
            <button onClick={handleCounter}>Click Me to Increase Counter</button>
            <hr /><br />
            <h2>Random Number: <span>{random}</span></h2>
            <button onClick={handleRandom}>Click Me to Generate Random Number</button>
        </div>
    );
}