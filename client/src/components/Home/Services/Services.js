import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: flouride,
        desc: 'Fluoride treatment is a dental procedure that helps to prevent tooth decay by making the teeth more resistant to acid attacks from plaque bacteria and sugars in the mouth. It can also reverse early decay. '
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        desc: 'Cavity filling is a common dental procedure used to treat tooth decay and cavities. During this procedure, the dentist removes the decayed portion of the tooth and then fills the area with a dental material such as composite resin, amalgam, gold, or porcelain. '
    },
    {
        name: 'Teeth Whitening',
        img: teath,
        desc: 'Teeth whitening is a cosmetic dental procedure aimed at lightening the natural color of the teeth and removing stains and discoloration. This treatment can be performed in-office by a dentist or at home using custom-fit trays and bleaching gels provided by the dentist.  '
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5 mb-5" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;