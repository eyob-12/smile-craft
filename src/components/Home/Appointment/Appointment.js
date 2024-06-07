import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
                <div className="row ">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="brand-color text-uppercase">AppointMent</h5>
                        <h1 className="">Make An AppointMent <br /> today </h1>
                        <h2>Your Smile Deserves Our Highest Attention</h2>
                        <Link to="/appointment" className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;