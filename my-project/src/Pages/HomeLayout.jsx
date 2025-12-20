
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Navber from '../Components/Navber';
import LeftSide from '../Components/HomeLayout/LeftSide';
import RightSide from '../Components/HomeLayout/RightSide';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto bg-white'>


            {/* Navber */}
            <Navber></Navber>

            {/* Header */}
            <Header></Header>

            {/* Main Layout */}

            <div className='grid grid-cols-1 md:grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <LeftSide></LeftSide>
                </aside>

                <aside className='col-span-6'>
                    <Outlet></Outlet>
                </aside>

                <aside className='col-span-3'>
                    <RightSide></RightSide>
                </aside>
            </div>



        </div>
    );
};

export default HomeLayout;