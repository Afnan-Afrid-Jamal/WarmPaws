import React, { useEffect } from 'react';
import SwiperSlider from '../Components/SwiperSlider';
import { useLoaderData } from 'react-router';
import HomePageCard from '../Components/HomePageCard';
import WinterCareTips from '../Components/WinterCareTips';
import ExpertVetsCard from '../Components/ExpertVetsCard';
import CustomerReview from '../Components/CustomerReview';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    const data = useLoaderData();


    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='w-11/12 mx-auto overflow-hidden'>
            <title>WarmPaws - Home</title>
            <div data-aos="slide-left">
                <SwiperSlider />
            </div>

            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-12 sm:mt-16 md:mt-20'>
                Popular Winter Care Services
            </h2>
            <div data-aos="flip-down" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 justify-items-center w-full mx-auto mt-10 md:mt-16 pb-10 md:pb-20">
                {data.map(eachCard => (
                    <HomePageCard key={eachCard.serviceId} eachCard={eachCard} />
                ))}
            </div>

            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-12 sm:mt-16 md:mt-20'>
                Winter Care Tips for Pets
            </h2>
            <div className='mt-10 md:mt-16'>
                <WinterCareTips />
            </div>

            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center my-12 sm:my-16 md:my-20'>
                Meet Our Expert Vets
            </h2>
            <div>
                <ExpertVetsCard />
            </div>

            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center my-12 sm:my-16 md:my-20'>
                Warm Words from Our Clients
            </h2>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-8 md:gap-10 w-full mx-auto text-center my-10 md:my-16'>
                <div className='md:border-r-2 lg:border-r-4 border-gray-300 md:px-6 lg:px-10 py-4'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Voices of Trust</h2>
                    <p className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mt-2 md:mt-3'>
                        What Our Clients Say About Us
                    </p>
                </div>
                <CustomerReview />
            </div>
        </div>
    );
};

export default HomePage;