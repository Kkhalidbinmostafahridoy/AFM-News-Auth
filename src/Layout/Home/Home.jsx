import React from 'react';
import Header from '../../Components/Header';
import LatestNews from '../../Components/LatestNews';
import NavBar from '../../Components/NavBar';
import LeftAside from '../../Components/LayoutComponet-For_Aside/LeftAside';
import RightNAvbarAside from '../../Components/LayoutComponet-For_Aside/RightNAvbarAside';
import { Outlet } from 'react-router-dom'; // <-- import Outlet

const Home = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header />
                <section className='w-11/12 mx-auto '>
                    <LatestNews />
                </section>
            </header>

            <nav className='w-11/12 mx-auto'>
                <NavBar />
            </nav>

            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'>
                    <LeftAside />
                </aside>

                <section className='col-span-6'>
                    <Outlet />
                </section>

                <aside className='col-span-3'>
                    <RightNAvbarAside />
                </aside>
            </main>
        </div>
    );
};

export default Home;
