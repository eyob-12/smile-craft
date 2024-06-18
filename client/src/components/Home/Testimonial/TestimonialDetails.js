import React from 'react';
import image from '../../../images/message.png';
import img from '../../../images/watson.png'

const TestimonialDetails = ({ testimonial }) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center review-section">
            <div className="card shadow-lg d-flex flex-column ">
                <div className="card-body ">
                    <img className="qute-img" src={image} alt="" />
                    <p className="card-text text-center"> {testimonial.desc}</p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center bg-secondary mt-2">
                    <img src={img} alt={testimonial.name} className="rounded-circle" />
                    <div className="text-center">
                        <h4 className="text-light mb-0">{testimonial.name}</h4>
                        <p className="text-muted mb-0">{testimonial.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;