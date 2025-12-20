import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardNews from './CardNews';

const CategoryNews = () => {

    const { id } = useParams();
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([]);


    useEffect(() => {

        if (id == '0') {
            setCategoryNews(data);
            return;

        } else if (id == '1') {
            const filterBracking = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterBracking)

        } else {
            const filterNews = data.filter(news => news.category_id == id);
            setCategoryNews(filterNews)
        }
      

    }, [id, data]);


    return (
        <div>
            {/* Total {categoryNews.length} news is found. */}
            <div className='space-y-2'>
                {
                    categoryNews?.map((news)=><CardNews key={news.id} news={news}></CardNews>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;