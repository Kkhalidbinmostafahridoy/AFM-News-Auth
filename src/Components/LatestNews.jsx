import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex shadow-sm bg-gray-300 mt-7 justify-center py-4 px-[45px] p-2 rounded-xl'>
            <button className='bg-[#D72050] px-3 py-1 text-white'>Latest</button>
            <Marquee pauseOnHover={true} speed={80} className='space-x-10 text-black'>
                <Link to='/about'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/about'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/about'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;