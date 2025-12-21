import { Link } from 'react-router-dom';
import userLogo from '../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
               console.log(error)
            });
    }

    return (
        <div className="navbar ">
            <div className="navbar-start">
                {
                    user && user.email
                }
            </div>
            <div className="navbar-center gap-3">
                {/* <Link to={'/'}>Home</Link> */}
                <Link to={'/news'}>News</Link>
                <Link to={'/pages'}>pages</Link>
            </div>
            <div className="navbar-end">

                <div className='flex justify-center items-center gap-2'>
                    <img src={userLogo} alt="" />
                    {
                        user ?

                            <button onClick={handleLogout} className='btn bg-[#403F3F] text-white'>Logout</button>

                            :

                            <Link to={'/auth/login'} className='btn bg-[#403F3F] text-white'>Login</Link>
                    }
                    {/* <Link to={'/auth/login'} className='btn bg-[#403F3F] text-white'>Login</Link> */}
                </div>

            </div>
        </div>
    );
};

export default Header;