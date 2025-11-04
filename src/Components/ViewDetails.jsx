import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const ViewDetails = () => {
    const allData = useLoaderData();
    const { id } = useParams();

    const getDataById = allData.find(data => data.serviceId === parseInt(id));

    if (!getDataById) {
        return <p className="text-center mt-10 text-xl">Data not found...</p>;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        toast("Service booked successfully", {
            style: {
                background: "#000",
                color: "#fff",
            }
        });
        event.target.name.value = "";
        event.target.email.value = "";
    }


    return (
        <div
            className="hero min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${getDataById.image})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>


            <div className="hero-content flex-col lg:flex-row-reverse text-neutral-content relative z-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pb-2">{getDataById.serviceName}</h1>
                    <p className="py-2 font-semibold">
                        {getDataById.description}
                    </p>
                    <p className="py-2 text-3xl font-semibold">
                        Price: ${getDataById.price}
                    </p>
                </div>

                <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-white/30 backdrop-blur-md">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form onSubmit={handleFormSubmit}>
                                <label className="label text-black text-base">Name</label>
                                <input
                                    type="text text-black"
                                    className="input bg-white/70 placeholder-gray-500 text-black font-semibold text-base w-full"
                                    name='name'
                                    placeholder="Full Name" required
                                />
                                <label className="label text-black text-base">Email</label>
                                <input
                                    type="email"
                                    className="input bg-white/70 placeholder-gray-500 text-black font-semibold text-base w-full"
                                    name='email'
                                    placeholder="Type Your Email Id" required
                                />
                                <button className="btn btn-neutral mt-6 w-full">Book Now</button>
                            </form>
                        </fieldset>

                    </div>
                </div>
            </div >
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default ViewDetails;
