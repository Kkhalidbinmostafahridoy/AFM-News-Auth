import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import RightNAvbarAside from '../LayoutComponet-For_Aside/RightNAvbarAside';
import { Link, useLoaderData } from 'react-router-dom';


const NewsDetails = () => {
    const data = useLoaderData()
    const items = data.data[0];
    console.log(items)
    return (
        <div >
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9 mt-4'>
                    {/* <h2 className='text-2xl font-semibold mb-5 text-[#403F3F]'>AFM News</h2> */}

                    <div className="bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
                        <img
                            src={items?.image_url}
                            alt={items?.title}
                            className="w-full h-72 object-cover"
                        />

                        <div className="p-5">
                            <h3 className="text-xl font-bold text-[#403F3F] mb-2 leading-snug">
                                {items?.title}
                            </h3>

                            <p className="text-sm text-gray-500 mb-4">
                                {items?.author?.published_date} | Tag Cloud: {items?.others_info?.tags?.join(', ') || 'General'}
                            </p>

                            <p className="text-[#706F6F] text-sm mb-6 leading-relaxed">
                                {items?.details}
                            </p>

                            <Link to={`/category/${items?.category_id}`}>
                            <button className="btn btn-outline btn-error text-sm">
                                All news in this category
                            </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNAvbarAside></RightNAvbarAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;