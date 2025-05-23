import React, { useEffect, useState } from 'react';

const MainAside = () => {
    const [news,setNews]=useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res=>res.json())
        .then(data=>setNews(data.data))
    },[])
    return (
        <div>
            <h2 className='text-[#403F3F]'>AFM News Home {news.length}</h2>

            <div>
                {/* {
                    news.map()
                } */}
            </div>
        </div>
    );
};

export default MainAside;