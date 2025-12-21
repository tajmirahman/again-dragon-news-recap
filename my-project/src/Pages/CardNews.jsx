import React from 'react';
import { FaBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardNews = ({ news }) => {
    const {
        id,
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
        tags
    } = news;

    return (
        <div className="card bg-base-100 shadow-lg">
            {/* Author */}
            <div className="flex items-center justify-between p-4 bg-base-200 ">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{author.name}</h4>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaBookmark className="cursor-pointer hover:text-primary" />
                    <FaShareAlt className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 pt-4">
                <h2 className="text-xl font-bold leading-snug">
                    {title}
                </h2>
            </div>

            {/* Image */}
            <figure className="px-4 pt-4">
                <img
                    src={image_url}
                    alt={title}
                    className="rounded-xl w-full object-cover"
                />
            </figure>

            {/* Details */}
            <div className="card-body pt-4">
                <p className="text-gray-600">
                    {details.slice(0, 180)}...
                    <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer ml-1">
                        Read More
                    </Link>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="badge badge-outline text-xs"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-orange-500">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < rating.number ? "" : "text-gray-300"}
                            />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">
                            {rating.number}.0
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaRegEye />
                        <span className="text-sm">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardNews;