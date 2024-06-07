import React from 'react';
import AppointMentShorList from '../AppointMentShortList/AppointMentShorList';

const AppointByDate = ({ appointment, selectedDate }) => {
    return (
        <div className="">
            <div className="d-flex justify-content-center align-items-center p-3 bg-light shadow-sm rounded">
                <h5 className="text-secomdary fw-bold">The Appointment That has been Reserved at: </h5>
                <h2 className="text-danger m-4 ">{selectedDate.toDateString()}</h2>
            </div>
            <div className="">
                <AppointMentShorList appointment={appointment}></AppointMentShorList>
            </div>
        </div>

    );
};

export default AppointByDate;