export default function LearnLiftingStateUp(props) {
    const handleClick = (e) => {
        e.preventDefault
        let data = 'i am child data'
        props.getChildData(data)

    }
    return (
        <div>
            {/* Sending data from child to parent component */}
            <button onClick={handleClick}>Click Me To Send Data from child to the parent</button>
            
        </div>
    );
}