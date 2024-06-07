import React from 'react';

const DoctorDetail = ({ item }) => {

    // Replace backslashes with forward slashes in the image path
    const imagePath = item.image.replace(/\\/g, '/');

    return (
        <div className='col-md-3 col-sm-6 col-12 text-center doctor-content m-3'>
            <div className="container shadow-lg p-3">
                <img src={imagePath} style={{ width: '200px', height: '300px' }} alt={item.name} />
                <h2 className="brand-color mt-1">{item.name}</h2>
                <p className="text-primary">
                    Contact : +251 953 226 886 <br /> {item.email}
                </p>
            </div>
        </div>
    );
};

export default DoctorDetail;
