import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Components/NewsCards';

const CategoryNews = () => {
    const {data}=useLoaderData();
    console.log(data)

    return (
        <div>
            <h2 className='font-bold mb-3 text-4xl'> AFm News Found</h2>
            <p>{data.length} News Found On This Category</p>


            <div className='space-x-6 space-y-7 mt-2'>
                {
                    data.map((items,index)=><NewsCards key={items.index} items={items}></NewsCards>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;