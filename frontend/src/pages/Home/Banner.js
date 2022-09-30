import React from 'react';
import Chair from "../../assets/images/chair.png";
import PrimaryButton from '../shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg-base-100 px-12 bg-hero bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row-reverse my-28">
                <img src={Chair} alt={"Chair"} className="sm:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;