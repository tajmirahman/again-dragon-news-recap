import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser, userUpdate } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();



    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;

        if (name.length < 4) {
            setError('Name field must be at least 5 character')
            return;
        }

        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Password must be at least 6 character');
            return;
        }

        console.log(photo)


        createUser(email, password)
            .then(res => {
                const user = res.user;
                userUpdate({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate('/category/1');
                    })
                    .catch(error => {
                        console.log(error.code)
                        setUser(user)
                    })


            })
            .catch(error => console.log(error.code))
    }


    return (
        <div className='w-full md:w-3/6 mx-auto bg-[#FFFFFF] mt-10 p-5'>
            <h1 className='font-semibold text-center my-5 text-xl'>Register your account</h1>
            <form onSubmit={handleRegister} className='w-3/6 mx-auto'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" name='name' className="input" placeholder="Type your Name" required />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo Url</legend>
                    <input type="text" name='photo' className="input" placeholder="Type your photo url" required />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" name='email' className="input" placeholder="Type your email" required />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" name='password' className="input" placeholder="Type your password" required />

                </fieldset>

                {
                    error && <p className='text-red-400'>{error}</p>
                }

                <button type='submit' className="btn bg-[#403F3F] font-semibold text-white w-full mt-5">Login</button>

                <p className='mt-5'>Dont’t Have An Account ? <Link to={'/auth/login'} className='text-red-300'>Login</Link></p>

            </form>
        </div>
    );
};

export default Register;