import {useState , useMemo} from 'react'

export default function LearnUseMemo() {
    let [count , setCount] = useState(0)
    const handleCounter = ()=>{
        const newCount = count+=2
        setCount(newCount)
    }

    const [random , setRandom] = useState(null);
    function handleRandom(){
        console.log("Generate Random Number");
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandom(newRandomNumber)
    }

    // function isCountTen() {
    //     console.log('isCountTen is called...'); // it will be called on mount and on every render but we want to do it by only count
    //     if (count === 10) {
    //         return 'Yes'
    //     }
    //     return 'No'
    // }

    const isCountTen = useMemo(()=> {
        console.log('isCountTen is called...'); // now it will be called when mounted and when we make change in count
        if (count === 10) {
            return 'Yes'
        }
        return 'No'
    }, [count])

    return (
    <div>
        {/* <h2>is {count} equal to 10 ? --- {isCountTen()} </h2>  */}
        <h2>is {count} equal to 10 ? --- {isCountTen} </h2>         {/* for useMmo */}
        <button onClick={handleCounter}>Click Me to Increase Counter</button>
        <hr /><br />
        <h2>Random Number: <span>{random}</span></h2>
        <button onClick={handleRandom}>Click Me to Generate Random Number</button>
    </div>
    );
}