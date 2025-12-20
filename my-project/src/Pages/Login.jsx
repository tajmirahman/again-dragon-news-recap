import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full md:w-3/6 mx-auto bg-[#FFFFFF] mt-10 p-10'>
            <h1 className='font-semibold text-center my-5 text-xl'>Login your account</h1>
            <div className='w-3/6 mx-auto'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input" placeholder="Type your email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="Pasword" className="input" placeholder="Type your password" />
     
                </fieldset>

               <button type='submit' className="btn bg-[#403F3F] font-semibold text-white w-full mt-5">Login</button>

               <p className='mt-5'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-red-300'>Register</Link></p>
                
            </div>
        </div>
    );
};

export default Login;