import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function RegisterPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            username: username,
            password: password
        })
        .then(function(response) {
            console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };

    return(
        <>
            <div className="personal-top">
               <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
                 
                  <div className="login-form">
                    <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid username" />
                    <label className="form-label" for="form3Example3">Username</label>
                  </div>
                  <div className="login-form">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                    <label className="form-label" for="form3Example4">Password</label>
                  </div>
                  <div className="login-form-bottom">
                    <button onClick={() => registerUser()} >Sign Up</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/login" className="link-danger">Login</a></p>
                  </div>
                  </div>
                       
                    </>
    );
    
}

export default RegisterPage