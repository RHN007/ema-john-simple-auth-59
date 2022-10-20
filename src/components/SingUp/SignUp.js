import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
        <h1 className='form-title'>Signup</h1>
        <form>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm"> Confirm Password </label>
                <input type="password" name="confirm" id="" required/>
            </div>
            <input type="submit" className="btn-submit" value='Signup' />
        </form>
        <p>Already Have a account? <Link to='/login'>Visit Login Page</Link></p>
    </div>
    );
};

export default SignUp;