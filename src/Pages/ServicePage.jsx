import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ServicePageCard from '../Components/ServicePageCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicePage = () => {
    const serviceData = useLoaderData();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div data-aos="slide-up" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 justify-items-center w-11/12 mx-auto mt-10 sm:mt-16 md:mt-20 pb-10 md:pb-20">
            <title>WarmPaws - Service</title>
            {serviceData.map(eachServiceData => (
                <ServicePageCard key={eachServiceData.serviceId} eachServiceData={eachServiceData} />
            ))}
        </div>
    );
};

export default ServicePage;