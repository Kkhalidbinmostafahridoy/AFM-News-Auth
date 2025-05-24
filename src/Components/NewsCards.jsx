import React from 'react';
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCards = ({ items }) => {
  const {
    author = {},
    details,
    image_url,
    total_view,
    rating = {},
    title,
  } = items;

  return (
    <div className="border rounded-lg p-4 shadow-lg space-y-3 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="text-gray-500 cursor-pointer">
          <FaShareAlt />
        </div>
      </div>
      <h2 className="font-bold text-lg">{title}</h2>
      <img
        src={image_url}
        alt="news"
        className="w-full h-48 object-cover rounded"
      />
      <p className="text-sm text-gray-700">
        {details.slice(0, 150)}...
        <Link to={`/news/${items._id}`} className="text-orange-500 font-medium cursor-pointer"> Read More</Link>
      </p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} className={idx < Math.floor(rating.number) ? 'text-orange-400' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-black font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
