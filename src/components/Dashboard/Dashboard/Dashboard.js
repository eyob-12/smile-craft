import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointByDate from '../../AppointMent/AppointByDate/AppointByDate';
import './Dashboard.css';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const Dashboard = () => {
    const baseUrl = "http://localhost:4000";
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointByDate, setAppointments] = useState([]);
    const { data, loading, error } = useFetch(`${baseUrl}/auth/patients`, {
        withCredentials: true
    });
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    const showAllPatientsList = () => {
        setAppointments(data);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post(`${baseUrl}/auth/appointByDate`, { date: selectedDate }, {
                    withCredentials: true
                })
                setAppointments(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [selectedDate])

    return (
        <section className='container row g-0 '>
            <div className='col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 ">
                <div className='test'>
                    <div className='mt-5 mb-2 d-flex align-items-center justify-content-between p-4 bg-white shadow rounded'>
                        <div className="calendar-container bg-light">
                            <Calendar
                                onChange={handleDateChange}
                                value={new Date()}
                                className="calendar-design m-4"
                            />
                        </div>
                        <div className="ml-3">
                            <button className='btn btn-primary btn-lg custom-button' onClick={showAllPatientsList}>
                                Show All Appointments
                            </button>
                        </div>
                    </div>

                    <div>
                        <AppointByDate appopintMent={appointByDate} key={10} selectedDate={selectedDate}></AppointByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;