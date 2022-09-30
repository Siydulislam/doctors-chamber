import React from 'react';
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from '../shared/PrimaryButton';

const Treatment = () => {
    return (
        <div className=" min-h-min bg-base-100 px-12">
            <div className="hero-content flex-col lg:flex-row lg:ml-28">
                <img src={treatment} alt="treatment" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="px-12">
                    <h1 className="text-5xl font-bold sm:mt-12">Exceptional Dental Care, On Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;