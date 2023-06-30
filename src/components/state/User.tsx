import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null);

    const login = () => {
        setUser({
            name: "Mahdi",
            email: "hassanim430@gmail.com"
        })
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={login} >Login</button>
            <button onClick={logout} >Logout</button>
            <div>The user name is {user?.name} </div>
            <div>The user email is {user?.email} </div>
        </div>
    )
}