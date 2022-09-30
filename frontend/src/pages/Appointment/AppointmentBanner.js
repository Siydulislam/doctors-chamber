import React, { useState } from 'react';
import Chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {

    const [date, setDate] = useState(new Date());

    return (
        <div className="hero bg-base-100 px-12 bg-hero bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row-reverse my-28">
                <img src={Chair} alt={"Chair"} className="sm:max-w-lg rounded-lg shadow-2xl lg:ml-28" />
                <div className="">
                    <DayPicker mode="single" selected={date} onSelect={setDate} />
                    <p>You have selected: {format(date, "PP")}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;