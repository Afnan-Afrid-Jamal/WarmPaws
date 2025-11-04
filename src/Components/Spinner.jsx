import React from 'react';

const Spinner = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/30 z-50">
            <span className="loading loading-bars loading-xl text-[#ffa200]"></span>

        </div>
    );
};

export default Spinner;
