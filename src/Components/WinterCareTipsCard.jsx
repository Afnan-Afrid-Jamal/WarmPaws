import React from 'react';
import winterBg from '../assets/winterBg.jpg'


const WinterCareTipsCard = ({ data }) => {
    return (
        <div className="card image-contain w-96 h-60 shadow-md border-x-8 border-blue-200">
            <figure>
                <img
                    src={winterBg}
                    alt="winter bg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title underline text-base">Tip Number: {data.tipId}</h2>
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
            </div>
            <figure>
                <img
                    src={winterBg}
                    alt="winter bg" />
            </figure>
        </div>
    );
};

export default WinterCareTipsCard;