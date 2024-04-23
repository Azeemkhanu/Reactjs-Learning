export default function LearnEvent() {
    const handleClick = () =>{
        alert("Button is clicked...")
    }
    const handleClickWithArgument = (myId)=>{
        console.log("Click with Argument: ", myId)
    }
    return (
        <div>
            <h1>LearnEvent</h1>
            {/* without Argument */}
            <button onClick={handleClick}>ClickMe</button>
            
            {/* with Argument */}
            <button onClick={(e) => handleClickWithArgument("myId")}>ClickMe2</button>



        </div>
    );
}