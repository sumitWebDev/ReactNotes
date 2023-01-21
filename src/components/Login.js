import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState ('false');

    const logInHandler = (username, password)=>{
        (username && password ) ? setLogin('false') : setLogin('true')
        console.log(login) ;
    }

    return (
        <>
            <h1>Login</h1>
            <div class="username">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div class="password">
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='login-btn' onClick={() => logInHandler(username,password)}> Login</button>

        </>
    )
}

export default Login