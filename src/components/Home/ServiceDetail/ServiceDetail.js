import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <img src={service.img} alt="" />
            <h4 className="text-info">{service.name}</h4>
            <p className="text-muted mb-0">{service.desc}</p>
        </div>
    );
};

export default ServiceDetail;