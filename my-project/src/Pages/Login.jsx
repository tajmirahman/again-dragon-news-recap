import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {createLogin,setUser} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        createLogin(email, password)
            .then(result => {
                const user=result.user;
                setUser(user);
            })
            .catch(error => {
                console.log(error.code);
            })
    }

    return (
        <div className='w-full md:w-3/6 mx-auto bg-[#FFFFFF] mt-10 p-10'>
            <h1 className='font-semibold text-center my-5 text-xl'>Login your account</h1>

            <form onSubmit={handleLogin} className='w-3/6 mx-auto'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" name='email' className="input" placeholder="Type your email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" name='password' className="input" placeholder="Type your password" />

                </fieldset>

                <button type='submit' className="btn bg-[#403F3F] font-semibold text-white w-full mt-5">Login</button>

                <p className='mt-5'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-red-300'>Register</Link></p>

            </form>
        </div>
    );
};

export default Login;