import React from 'react';
// import baby from '../../../images/baby.png';
import baby from '../../../images/doc/doctor chair 2.jpg';


const FeaturedService = () => {
    return (
        <div className="feature-service pb-0 pb-md-5 pt-md-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={baby} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <h5 className="text-secondary my-5">
                            Experience top-tier dental services tailored to your needs.
                            we believe in providing exceptional dental care that fits your
                            schedule and lifestyle. From preventive care to advanced treatments,
                            our skilled professionals are dedicated to ensuring your comfort and satisfaction.
                            Book an appointment today and enjoy dental care that's designed around you!
                        </h5>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;