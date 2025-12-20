import { Link } from 'react-router-dom';
import user from '../assets/user.png';

const Header = () => {
    return (
        <div className="navbar bg-base-100 *:border">
            <div className="navbar-start">
              
            </div>
            <div className="navbar-center gap-3">
                <Link>Home</Link>
                <Link>News</Link>
                <Link>pages</Link>
            </div>
            <div className="navbar-end">
                
                <div className='flex justify-center items-center gap-2'>
                    <img src={user} alt="" />
                    <button className='btn bg-[#403F3F] text-white'>Login</button>
                </div>
                
            </div>
        </div>
    );
};

export default Header;