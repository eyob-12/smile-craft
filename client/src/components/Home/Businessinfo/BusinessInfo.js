import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import InformationCard from '../../../components/Home/InformationCard/InformationCard';
import React from 'react';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Bole, AddisAbeba, Ethiopia',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+251-953-226-886',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75 infos-card">
                {
                    infosData.map(info => <InformationCard info={info} key={info.title}></InformationCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;