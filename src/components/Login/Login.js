import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const hadleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div className='container text-center mt-5'>
            <button type="button" className="btn btn-warning" onClick={hadleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;