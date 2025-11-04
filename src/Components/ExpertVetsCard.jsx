import React from 'react';
import { useTrail } from '@react-spring/web';
const ExpertVetsCard = () => {


    const cards = document.querySelectorAll('.card');
    const trail = useTrail(cards.length, {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { mass: 1, tension: 200, friction: 20 },
    });



    return (
        <div className='flex justify-center mx-auto my-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10'>

                <div className="card w-full bg-[#FFF7ED] shadow-lg px-6 py-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body">
                        <span className="badge badge-xs bg-[#E59560] text-white">Top Vet 2024</span>
                        <h2 className="text-2xl font-bold mt-2 text-[#1E293B]">Dr. Sarah Thompson</h2>
                        <ul className="mt-6 flex flex-col gap-2 text-sm text-[#2E3A2E]">
                            <li>✅ 10 years of experience</li>
                            <li>✅ Availability: Mon-Fri 9am-5pm</li>
                            <li>✅ Location: New York, USA</li>
                            <li>✅ Contact: sarah@vetclinic.com</li>
                        </ul>
                    </div>
                </div>

                <div className="card w-full bg-[#FFF7ED] shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body">
                        <span className="badge badge-xs bg-[#E59560] text-white">Surgery Expert</span>
                        <h2 className="text-2xl font-bold mt-2 text-[#1E293B]">Dr. James Wilson</h2>
                        <ul className="mt-6 flex flex-col gap-2 text-sm text-[#2E3A2E]">
                            <li>✅ 12 years of experience</li>
                            <li>✅ Availability: Mon-Sat 10am-6pm</li>
                            <li>✅ Location: Los Angeles, USA</li>
                            <li>✅ Contact: james@vetclinic.com</li>
                        </ul>
                    </div>
                </div>

                <div className="card w-full bg-[#FFF7ED] shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body">
                        <span className="badge badge-xs bg-[#E59560] text-white">Nutrition Specialist</span>
                        <h2 className="text-2xl font-bold mt-2 text-[#1E293B]">Dr. Emily Clark</h2>
                        <ul className="mt-6 flex flex-col gap-2 text-sm text-[#2E3A2E]">
                            <li>✅ 15 years of experience</li>
                            <li>✅ Availability: Tue-Sun 11am-7pm</li>
                            <li>✅ Location: Chicago, USA</li>
                            <li>✅ Contact: emily@vetclinic.com</li>
                        </ul>
                    </div>
                </div>

                <div className="card w-full bg-[#FFF7ED] shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body">
                        <span className="badge badge-xs bg-[#E59560] text-white">Dermatology Expert</span>
                        <h2 className="text-2xl font-bold mt-2 text-[#1E293B]">Dr. Michael Scott</h2>
                        <ul className="mt-6 flex flex-col gap-2 text-sm text-[#2E3A2E]">
                            <li>✅ 9 years of experience</li>
                            <li>✅ Availability: Mon-Fri 9am-5pm</li>
                            <li>✅ Location: Seattle, USA</li>
                            <li>✅ Contact: michael@vetclinic.com</li>
                        </ul>
                    </div>
                </div>

                <div className="card w-full bg-[#FFF7ED] shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body">
                        <span className="badge badge-xs bg-[#E59560] text-white">Cardiology Specialist</span>
                        <h2 className="text-2xl font-bold mt-2 text-[#1E293B]">Dr. Laura Adams</h2>
                        <ul className="mt-6 flex flex-col gap-2 text-sm text-[#2E3A2E]">
                            <li>✅ 11 years of experience</li>
                            <li>✅ Availability: Mon-Sat 10am-5pm</li>
                            <li>✅ Location: Boston, USA</li>
                            <li>✅ Contact: laura@vetclinic.com</li>
                        </ul>
                    </div>
                </div>

                <div className="card w-full bg-[#FFF7ED] shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body">
                        <span className="badge badge-xs bg-[#E59560] text-white">Behavior Specialist</span>
                        <h2 className="text-2xl font-bold mt-2 text-[#1E293B]">Dr. Robert Green</h2>
                        <ul className="mt-6 flex flex-col gap-2 text-sm text-[#2E3A2E]">
                            <li>✅ 7 years of experience</li>
                            <li>✅ Availability: Tue-Sun 12pm-8pm</li>
                            <li>✅ Location: Miami, USA</li>
                            <li>✅ Contact: robert@vetclinic.com</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExpertVetsCard;
