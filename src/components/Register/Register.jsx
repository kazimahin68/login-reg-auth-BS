import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const auth = getAuth(app);

    const handleSubmit = e =>{
        setError('');
        setSuccess('');
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);

        //Password Validation: Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
        const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if(!pattern.test(password)){
            setError('Your password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.');
            e.target.reset();
            return;
        }
       

        createUserWithEmailAndPassword(auth, email, password).then(result =>{
            const registeredUser = result.user;
            console.log(registeredUser)
            setSuccess('You are successfully registered');
            // Clear Form
            e.target.reset();
            
        }).catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p className='fs-5 text-semibold text-danger'>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-3'>Already have an account? Please <Link to='/login'>Login</Link></p>
                <p className='text-success fs-4'>{success}</p>
            </Form>
        </div>
    );
};

export default Register;