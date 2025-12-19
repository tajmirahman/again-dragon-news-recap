import logo from '../assets/logo.png'

const Navber = () => {
    return (
        <div className='w-1/4 mx-auto mt-5'>
            <img src={logo} alt="" />
            <div className='text-center mt-2'>
                <p>Journalism Without Fear or Favour</p>
            <p>Sunday, November 27, 2025</p>
            </div>
        </div>
    );
};

export default Navber;