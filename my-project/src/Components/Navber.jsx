import { format } from 'date-fns';
import logo from '../assets/logo.png'

const Navber = () => {
    return (

        <>
            <div className='w-1/4 mx-auto mt-5'>
                <img src={logo} alt="" />
                <div className='text-center mt-2'>
                    <p>Journalism Without Fear or Favour</p>
                    <p>{format(new Date(),'EEEE, MMMM MM, yyyy')}</p>
                </div>
            </div>

            <div className='flex gap-3 bg-[#F3F3F3] border border-indigo-600 mt-10'>

                <div className='bg-[#D72050] '>
                    <button className='p-2 text-white font-semibold'>Latest</button>
                </div>

                <div className='mt-1'>
                    <marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...Match Highlights: Germany vs Spain</marquee>
                </div>

            </div>

        </>


    );
};

export default Navber;