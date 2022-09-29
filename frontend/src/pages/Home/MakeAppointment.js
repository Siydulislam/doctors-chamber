import React from 'react';
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from '../shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="flex justify-center items-center px-12 mt-36 bg-appointment">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-150px]" src={doctor} alt="doctor" />
            </div>
            <div className="flex-1 sm:py-28">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl text-white">Make an Appointment Today</h2>
                <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget mauris in neque pulvinar aliquet. Sed sed vehicula odio. Donec eget vulputate nisi. Duis elementum purus at nisl dictum euismod vel id neque. Vestibulum aliquet quam a urna feugiat imperdiet. Nam et viverra massa. Sed quis mauris purus.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;