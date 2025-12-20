import React from 'react';

const Login = () => {
    return (
        <div className='w-4/6 mx-auto bg-[#FFFFFF] *:border'>
            <h1 className='font-semibold text-center my-5'>Login your account</h1>
            <div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="Pasword" className="input" placeholder="Type here" />
     
                </fieldset>
            </div>
        </div>
    );
};

export default Login;