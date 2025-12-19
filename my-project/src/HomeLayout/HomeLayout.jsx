
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Navber from '../Components/Navber';
import LeftSide from '../Components/HomeLayout/LeftSide';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto '>


            {/* Navber */}
            <Navber></Navber>

            {/* Header */}
            <Header></Header>

            {/* Main Layout */}

            <div className='*:border grid grid-cols-1 md:grid-cols-12 text-center'>
                <aside className='col-span-3'>
                    <LeftSide></LeftSide>
                </aside>

                <aside className='col-span-6'>
                    <Outlet></Outlet>
                </aside>

                <aside className='col-span-3'>
                    right side
                </aside>
            </div>



        </div>
    );
};

export default HomeLayout;