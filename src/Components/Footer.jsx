import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoPaw } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal text-base-content px-10 flex flex-col md:flex-row lg:flex-row justify-around bg-[#e7a980] text-[#2E3A2E] py-14">
            <aside>
                <IoPaw size={100} className='text-[#000000]' />
                <h2 className='text-3xl poppins-font font-bold'>WarmPaws</h2>
                <p className='text-[#2E3A2E] font-semibold'>Pet Care in Winter</p>
            </aside>
            <nav className='font-semibold'>
                <h6 className="footer-title">Contact</h6>
                <p>123 Cozy Street, SnowVille, Winterland 4000</p>
                <p>880 1234-567890</p>
                <p>support@warmpaws.com</p>
                <p>Opening Hours: Mon - Fri: 9AM–8PM | Sat - Sun: 10AM–6PM</p>
                <div className='flex gap-8 mt-5'>
                    <a href="https://www.facebook.com"><FaFacebook size={30}></FaFacebook></a>
                    <a href="https://www.instagram.com"><FaInstagram size={30}></FaInstagram></a>
                    <a href="https://www.twitter.com"><FaTwitter size={30}></FaTwitter></a>
                </div>
            </nav>

            <nav className='font-semibold'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;