import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';




const Login = () => {
    const auth = getAuth(app);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSignIn = e =>{

        setError('');
        setSuccess('');
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);

            setSuccess('You are successfully logged In')
            e.target.reset();
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    // const handleResetPassword = () =>{
    //     const email = emailRef.current.value;
    //     if(!email){
    //         alert('Please Input email to reset password');
    //         return
    //     }
    // }

    return (
        <div>
            <form onSubmit={handleSignIn}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <p className='text-danger'>{error}</p>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                <p>Forgot password? <Link to='/reset-password'><button  className='btn btn-link'>Reset Password</button></Link></p>

                <p>New to this website? Please <Link to='/register'><button className='btn btn-link'>Register</button></Link></p>
                <p className='text-success'>{success}</p>
            </form>
        </div>
    );
};

export default Login;