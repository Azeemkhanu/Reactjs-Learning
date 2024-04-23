import {useState} from 'react'

export default function LearnConditionalRendering() {
    const status = true

    let [isLoggedin , setIsLoggedIn] = useState(true)

    return (
        <div>
            {status && <h2>Conditional Learning</h2>}

            {isLoggedin ? 
            (
                <div>
                    <h2>Home Page - Logged Out!!</h2>
                    <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
                </div>

            ) : 
            (
            <div>
                <h2>Dashboard Page - Logged In!!</h2>
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>
            </div>
            )}
        </div>


    );
}