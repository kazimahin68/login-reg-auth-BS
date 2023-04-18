import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
const auth = getAuth(app);

const [error, setError] = useState();


    const emailRef = useRef();


    const handleResetPassword = (e) =>{
        e.preventDefault();
        const inputEmail = e.target.email.value;
        const email = emailRef.current.value;
        if(!email){
            alert('Please Input your email to change password');
            return
        }
        sendPasswordResetEmail(auth, inputEmail)
        .then(() =>{
            console.log('Password reset mail send');
            alert('Please Check your mail')
            e.target.reset();
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div>
            <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div>
            </form>
            <p>Go back to login form? Please <Link to='/login'>Click</Link></p>
        </div>
    );
};

export default ResetPassword;