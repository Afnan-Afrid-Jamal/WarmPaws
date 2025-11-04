import React from 'react';
import customerImg from '../assets/customer.jpg'
import customerImg2 from '../assets/customer2.jpg'
import customerImg3 from '../assets/customer3.jpeg'



const CustomerReview = () => {
    return (
        <div>
            <div className="chat chat-start mt-4">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={customerImg}
                        />
                    </div>
                </div>
                <div className="chat-bubble">WarmPaws gave amazing care to my puppy! The staff were kind and professional.</div>
            </div>
            <div className="chat chat-start mt-4">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={customerImg2}
                        />
                    </div>
                </div>
                <div className="chat-bubble">They treated my cat like family. Highly recommend their grooming service!</div>
            </div>
            <div className="chat chat-start mt-4">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={customerImg3}
                        />
                    </div>
                </div>
                <div className="chat-bubble">Excellent experience! My dog was so happy after the spa session</div>
            </div>
        </div>
    );
};

export default CustomerReview;