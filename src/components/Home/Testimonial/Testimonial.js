import React from 'react';
import TestimonialDetails from './TestimonialDetails';
import './Testimonial.css';
import useFetch from '../../hooks/useFetch';

const Testimonial = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { data } = useFetch(`${baseUrl}/auth/reviews`);
    return (
        <section className="container testimonial my-5 py-5" id="reviewsContaints">
            <div className="cointainer">
                <div className="section-header py-4">
                    <h5 className="brand-color text-uppercase">Testimonial</h5>
                    <h1>What Our Patients  Says</h1>
                </div>
                <div className="card-deck ">
                    <div className="d-flex justify-content-center ">
                        <div className="row w-80 ">
                            {
                                data && data?.map(review => <TestimonialDetails key={review._id} testimonial={review}></TestimonialDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;