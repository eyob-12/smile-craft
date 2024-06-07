import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/doc1.jpeg';
const HeaderTop = () => {
    return (
        <div style={{ height: "600px", 'width': '100%' }} className="row d-flex align-items-center container">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5 ">
                <h1>Your New Smile <br />Starts From Here</h1>
                <h6 className="text-secondary">
                    Discover a brighter, healthier smile with our expert dental care.
                    we prioritize your comfort and satisfaction,

                </h6>
                <Link to="/appointment" className="btn btn-primary btn-lg shadow rounded"> GET STARTED</Link>

            </div>
            <div className="col-md-6 col-sm-6 col-12 container-lg">
                <img src={chair} style={{ height: "350px", width: '100vw' }} className="img-fluid rounded" alt="" />
            </div>
        </div>
    );
};

export default HeaderTop;