import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CategoryNews = () => {

    const { id } = useParams();
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([]);

    // console.log(id,data);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        } else if (id == '1') {
            const filterBracking = data.filter(news => news.others.is_todays_pick == true);
            setCategoryNews(filterBracking)
        } else {
            const filterNews = data.filter(news => news.category_id == id);
            setCategoryNews(filterNews)
        }





    }, [id, data])

    return (
        <div>
            Total {categoryNews.length} news is found.
        </div>
    );
};

export default CategoryNews;