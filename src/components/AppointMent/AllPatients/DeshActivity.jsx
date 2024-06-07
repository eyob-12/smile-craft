import React from 'react';

import './DashActivity.css';

const DashActivity = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center desh-activity-container">
            <div className="desh-card bg-danger">
                <div className="desh-date d-flex justify-content-center align-items-center">
                    <h2>09</h2>
                    <div className="desh-text">
                        <p>Pending <br /> Appointments</p>
                    </div>
                </div>
            </div>

            <div className="desh-card bg-primary">
                <div className="desh-date d-flex justify-content-center align-items-center">
                    <h2>19</h2>
                    <div className="desh-text">
                        <p>Today <br /> Appointments</p>
                    </div>
                </div>
            </div>

            <div className="desh-card bg-success">
                <div className="desh-date d-flex justify-content-center align-items-center">
                    <h2>55</h2>
                    <div className="desh-text">
                        <p>Total <br /> Appointments</p>
                    </div>
                </div>
            </div>

            <div className="desh-card bg-warning">
                <div className="desh-date d-flex justify-content-center align-items-center">
                    <h2>98</h2>
                    <div className="desh-text">
                        <p>Total <br /> Patients</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashActivity;