import React, { useRef } from 'react';
import {v4 as uuidV4} from 'uuid';
import './Login.scss';

const Login = ({onIdSubmit}) => {

    const idRef = useRef();

    function submit(e) {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    function createNewId() {
        onIdSubmit(uuidV4());
    }
    
    return (
        <div className="Login">
            <form className="login-form" onSubmit={submit}>
                <label for="username">Please Ente Your Username</label>
                <input name="username" id="username" ref={idRef} required />
                <button type="submit">Login</button>
                <button type="submit" onClick={createNewId}>Create a new User</button>

            </form>
        </div>
    );
}

export default Login;
