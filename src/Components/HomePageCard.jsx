import React from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router';

const HomePageCard = ({ eachCard }) => {
    return (
        <div className="card bg-[#FFF7ED] w-full sm:w-80 md:w-96 shadow-lg pb-5 flex flex-col justify-between rounded-lg">
            <figure>
                <img
                    className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-t-lg"
                    src={eachCard.image}
                    alt="service image"
                />
            </figure>
            <div className="px-4 sm:px-5 md:px-5">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold my-3 sm:my-4 text-[#1E293B]">
                    {eachCard.serviceName}
                </h2>
                <div className='flex justify-between items-center mb-4 sm:mb-6'>
                    <p className='text-xl sm:text-2xl md:text-2xl font-semibold text-[#2E3A2E]'>
                        ${eachCard.price}
                    </p>
                    <div>
                        {eachCard.rating === 5 && <p className='text-yellow-500'>⭐⭐⭐⭐⭐</p>}
                        {eachCard.rating === 4 && <p className='text-yellow-500'>⭐⭐⭐⭐</p>}
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/home/${eachCard.serviceId}`}>
                        <button
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-4xl 
                                       bg-gradient-to-r from-[#E59560] to-[#F28C4C] text-white 
                                       font-medium shadow-md hover:from-[#F28C4C] hover:to-[#D77A3D] 
                                       transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
                        >
                            <FcViewDetails size={22} /> View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageCard;
