// AppointMent.js
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointMentForm from '../AppointMentForm/AppointMentForm';
import AppointMentTop from '../AppointMentTop/AppointMentTop';
import BookApointMent from '../BookApointMent/BookApointMent';

const AppointMent = () => {
    const [selectDate, setSelectedDate] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointMentDate, setAppointMentDate] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const openModal = (appointment) => {
        setAppointMentDate(appointment);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <Navbar />
            <AppointMentTop handleDateChange={handleDateChange} key={10} />
            <BookApointMent selectDate={selectDate} openModal={openModal} key={6} />
            <AppointMentForm
                modalIsOpen={modalIsOpen}
                appointMentDate={appointMentDate}
                closeModal={closeModal}
                date={selectDate}
            />
            <Footer />
        </div>
    );
};

export default AppointMent;
