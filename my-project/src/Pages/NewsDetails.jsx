import {  format } from 'date-fns';
import logo from '../assets/logo.png'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NewsDetails = () => {

    const data =useLoaderData();
    const {id}= useParams();
    const [news, setNews]=useState({});

    // console.log(data,id)

    useEffect(()=>{
        const newsDetails= data.find(singleNews=> singleNews.id == id);
        setNews(newsDetails);
    },[data, id])

    console.log(news)

   

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
                    <div className='w-full space-y-3'>
                        <figure className='w-full h-full'>
                            <img className='w-full h-full' src={news.image_url} alt="" />
                        </figure>
                        <h1 className='text-2xl font-bold'>{news.title}</h1>
                        <p className='w-full text-justify'>{news.details}</p>
                        <Link to={`/category/${news.category_id}`} className='btn bg-[#D72050] text-white'>Back to all news</Link>
                    </div>
                </section>

                <section className='col-span-3'>
                    Login With
                </section>

            </div>

        </div>
    );
};

export default NewsDetails;