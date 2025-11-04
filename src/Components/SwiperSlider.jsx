import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import pet1 from '../assets/pet1.jpg';
import pet2 from '../assets/pet2.jpg';
import pet3 from '../assets/pet3.jpg';
import pet4 from '../assets/pet4.jpg';
import pet5 from '../assets/pet5.jpg';
import pet6 from '../assets/pet6.jpg';
import winterBg from '../assets/winterBg.jpg'



const SwiperSlider = () => {
    return (
        <div
            className="my-10 w-full h-96 max-w-8xl mx-auto rounded-2xl bg-cover bg-center"
            style={{
                backgroundImage: `url(${winterBg})`,
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
            >
                <SwiperSlide>
                    <img src={pet1} alt="Pet 1" className="w-full h-96 object-contain rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pet2} alt="Pet 2" className="w-full h-96 object-contain rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pet3} alt="Pet 3" className="w-full h-96 object-contain rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pet4} alt="Pet 4" className="w-full h-96 object-contain rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pet5} alt="Pet 5" className="w-full h-96 object-contain rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pet6} alt="Pet 6" className="w-full h-96 object-contain rounded-lg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;