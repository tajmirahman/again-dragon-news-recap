import { format } from 'date-fns';
import logo from '../assets/logo.png'

const NewsDetails = () => {

    

    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <div className='w-1/4 mx-auto mt-5'>
                    <img src={logo} alt="" />
                    <div className='text-center mt-2'>
                        <p>Journalism Without Fear or Favour</p>
                        <p>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-12'>

                <section className='col-span-9'>
                    Dragon News
                </section>

                <section className='col-span-3'>
                    Login With
                </section>

            </div>

        </div>
    );
};

export default NewsDetails;