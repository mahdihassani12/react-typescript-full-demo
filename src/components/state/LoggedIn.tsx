import { useState } from "react"

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={login} >Login</button>
            <button onClick={logout} >Logout</button>
            <div>The user is {isLoggedIn ? 'Logged in' : 'Logged out'} </div>
        </div>
    )
}