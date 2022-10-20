import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input type="submit" className="btn-submit" value='Login' />
            </form>
            <p>New to Ema John <Link to='/signup'>Create a new Account</Link></p>
        </div>
    );
};

export default Login;