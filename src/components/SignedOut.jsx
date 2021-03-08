import { useState, useEffect } from "react"
import LoginForm from "./LoginForm"

function SignedOut(props) {
    const { setUser, setLogin } = props
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    useEffect(() => {
        if (credentials.username === "nirmal15mathew" && credentials.password === "n2i0r0m5al"){
            setLogin(true)
            setUser(credentials.username)
        }
    }, [credentials])
    return (
        <>
        <h1>Signed Out</h1>
        <LoginForm setCreds={setCredentials}></LoginForm>
        </>
    )
}

export default SignedOut;