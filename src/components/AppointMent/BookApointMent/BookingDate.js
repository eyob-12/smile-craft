import React, { useState } from 'react';
import AppointMentForm from '../AppointMentForm/AppointMentForm';

const BookingDate = ({ booking, date }) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-3 ms-5 mb-5 mt-5">
      <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
        <img
          className="card-img-top img-fluid"
          src="https://northerndentaldesign.com.au/wp-content/uploads/2022/04/Secrets-Your-Dentist-Wont-Tell-You-I-will-do-anything-for-teeth-but-I-wont-do-that-Epping-Wollert-South-Morang-Melbourne-Northern-Dental-Design.png"
          alt="dental"
        />
        <div className="card-body p-4">
          <h5 className="card-title text-primary">{booking.title}</h5>
          <h6 className="text-secondary">{booking.time}</h6>
          <p className="card-text">Space: {booking.space}</p>
          <button onClick={openModal} className="btn btn-outline-info w-100">
            Book Appointment
          </button>
          <AppointMentForm modalIsOpen={modalIsOpen} appointMentDate={booking.title} closeModal={closeModal} date={date} />
        </div>
      </div>
    </div>

  );
};

export default BookingDate;

