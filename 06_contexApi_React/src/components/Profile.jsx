import React, {useContext} from 'react'
import UserContext from '../context/UserContext.js'

export default function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
    
}