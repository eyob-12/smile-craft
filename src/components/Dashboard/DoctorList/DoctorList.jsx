import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner, Button, Modal, Form, Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const DoctorList = () => {
    const baseUrl = "http://localhost:4000";
    const [doctors, setDoctors] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`${baseUrl}/auth/doctors`);
                setDoctors(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDoctors();
    }, []);

    const handleShowModal = (doctor) => {
        setSelectedDoctor(doctor);
        setShow(true);
    };

    const handleCloseModal = () => {
        setShow(false);
        setSelectedDoctor(null);
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="col-md-10 p-5 pr-4 m-0 patient-container">
                <h6 className="brand-color text-start">Doctors</h6>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={doctor._id}>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>
                                    <Button onClick={() => handleShowModal(doctor)}>Update Info</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Doctor Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedDoctor && (
                            <Form>
                                <Form.Group controlId="formDoctorName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={selectedDoctor.name} disabled />
                                </Form.Group>
                                <Form.Group controlId="formDoctorEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={selectedDoctor.email} disabled />
                                </Form.Group>
                                <Form.Group controlId="formDoctorImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text" value={selectedDoctor.image || 'N/A'} disabled />
                                </Form.Group>
                                <Form.Group controlId="formDoctorAdmin">
                                    <Form.Check
                                        type="checkbox"
                                        label="Is Admin"
                                        checked={selectedDoctor.isAdmin}
                                        disabled
                                    />
                                </Form.Group>
                            </Form>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default DoctorList;
