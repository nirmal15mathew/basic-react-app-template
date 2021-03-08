import { useRef } from "react"
function LoginForm(props) {
    const username  = useRef(null)
    const password = useRef(null)
    const { setCreds } = props
    const submitCreds = (e) => {
        e.preventDefault()
        let creds = {
            username: username.current.value,
            password: password.current.value
        }
        setCreds(creds)
    }
    return (
        <form>
            <fieldset>
                <legend>
                    Username
                </legend>
                <input type="text" required ref={username}></input>
            </fieldset>
            <fieldset>
                <legend>
                    Password
                </legend>
                <input type="password" required ref={password}></input>
            </fieldset>
            <button onClick={e => submitCreds(e)}>Login</button>
        </form>
    )
}

export default LoginForm;