
import Header from '../Components/Header';
import Navber from '../Components/Navber';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>


            {/* Navber */}
            <Navber></Navber>

            {/* Header */}
            <Header></Header>



        </div>
    );
};

export default HomeLayout;