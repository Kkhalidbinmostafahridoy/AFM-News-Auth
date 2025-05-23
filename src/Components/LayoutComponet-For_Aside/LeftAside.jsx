import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then((data) => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='text-[#403F3F] mb-3'>All Caterogy</h2>

            <div className='flex flex-col'>
                {
                    categories.map((category) => <NavLink to={`category/${category.category_id}`} className='btn py-2 px-2 mt-2'
                        key={category.category_id}>
                        {category.category_name}
                    </NavLink>)
                }
            </div>

        </div>
    );
};

export default LeftAside;