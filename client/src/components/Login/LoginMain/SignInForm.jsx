import React, { useState } from 'react';
import { Link, } from 'react-router-dom';

import log from '../../../images/doc/info.svg';
import register from '../../../images/doc/register.svg';
import SignIn from './SignIn';
import './SignInForm.css';
import SignUp from './SignUp';



const SignInForm = () => {
    const [isSignUp, setSignUp] = useState(false);
    const handleResponse = (res) => {

    }

    return (
        <div className={`${isSignUp ? "signin-signup-container sign-up-mode" : "signin-signup-container"}`}>
            <Link to="/">
                <img className='pageCloseBtn' src="https://assets.propertyshelf.com/web-graphics/click-buttons/back-button.png/image" alt="go-back" />

            </Link>
            <div className="forms-container">
                <div className="signIn-singUp">
                    <SignIn handleResponse={handleResponse} />
                    <SignUp handleResponse={handleResponse} />
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Welcome to SmileCraft! By creating an account,
                            you join a community dedicated to beautiful smiles
                            and exceptional dental care.
                        </p>
                        <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                    <img src={`${log}`} alt="" className="pImg" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Welcome back! We’re excited to continue helping
                            you achieve your best smile. Please sign in to access your account
                        </p>
                        <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
                    </div>
                    <img src={`${register}`} alt="" className="pImg" />
                </div>
            </div>
        </div>

    );
};

export default SignInForm;