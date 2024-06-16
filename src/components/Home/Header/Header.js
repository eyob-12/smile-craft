import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../Businessinfo/BusinessInfo';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header >
            <Navbar />
            <div className="hero-header">
                <div className="text-container ">
                    <h1>Your New Smile <br />Starts From Here</h1>
                    <h5>Transforming Smiles, Elevating Lives</h5>
                    <h6 className="text-secondary">

                        Welcome to Smile-Craft😁, where every smile
                        is a masterpiece <br /> and every patient is family.
                        <br /> Our team of dedicated dental professionals is committed
                        to providing exceptional care that goes beyond expectations.
                    </h6>
                    <Link to="/appointment" className="btn btn-info btn-lg shadow rounded mt-2 fs-3">Make Appointment</Link>
                </div>
                <div className="hero-content"></div>
                <div>

                </div>
            </div>
            <BusinessInfo />
        </header>
    );
};

export default Header;
