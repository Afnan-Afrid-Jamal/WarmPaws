import React, { useEffect, useState } from 'react';
import WinterCareTipsCard from './WinterCareTipsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';


const WinterCareTips = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);



    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("/winterCareTipsJsonData.json")
            .then(res => res.json())
            .then(data => setTips(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div data-aos="zoom-out" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-20 justify-items-center">
            {tips.map((tip, index) => (
                <WinterCareTipsCard key={index} data={tip} />
            ))}
        </div>
    );
};

export default WinterCareTips;
