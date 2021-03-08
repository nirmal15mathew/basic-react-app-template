import { useRef } from "react"

function LoginForm(props) {
    // using ref for handling inputs
    const username  = useRef(null)
    const password = useRef(null)

    // the function for setting the credentials according to input
    const { setCreds } = props
    const submitCreds = (e) => {
        // for preventing the page from refreshing
        e.preventDefault()
        let creds = {
            username: username.current.value,
            password: password.current.value
        }
        setCreds(creds) // send credentials to the parent component
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