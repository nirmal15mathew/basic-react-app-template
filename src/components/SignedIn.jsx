function SignedIn(props){
    const {user, setLogin} = props
    return (
        <>
        <h1>Signed In {user}</h1>
        <button onClick={_ => setLogin(false)}>Logout</button>
        </>
    )
}

export default SignedIn;