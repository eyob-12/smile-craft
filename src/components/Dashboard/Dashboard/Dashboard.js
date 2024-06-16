import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointByDate from '../../AppointMent/AppointByDate/AppointByDate';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);


    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const showAllPatientsList = async () => {
        try {
            const response = await axios.get(`${baseUrl}/auth/patients`, {
                withCredentials: true
            });
            console.log('All Patients Data:', response.data);
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching all patients data:', error);
        }
    };

    useEffect(() => {
        const fetchAppointmentsByDate = async () => {
            try {
                const response = await axios.post(`${baseUrl}/auth/appointByDate`, { date: selectedDate }, {
                    withCredentials: true
                });
                console.log('Appointments by Date:', response.data);
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments by date:', error);
            }
        };
        fetchAppointmentsByDate();
    }, [selectedDate]);

    return (
        <section className='container row g-0'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className='test'>
                    <div className='mt-5 mb-2 d-flex align-items-center justify-content-between p-4 bg-white shadow rounded'>
                        <div className="calendar-container bg-light">
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                className="calendar-design m-4"
                            />
                        </div>
                        <div className="">
                            <button className='btn btn-outline-info w-100 fs-3' onClick={showAllPatientsList}>
                                Show All Appointments
                            </button>
                        </div>
                    </div>
                    <div>
                        <AppointByDate appointment={appointments} selectedDate={selectedDate} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
