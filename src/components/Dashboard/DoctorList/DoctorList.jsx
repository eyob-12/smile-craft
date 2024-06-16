import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../Context/AuthContext';
import swal from 'sweetalert';

const DoctorList = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { user } = useContext(AuthContext);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [show, setShow] = useState(false);
    const { data, loading, error, reFetchData } = useFetch(`${baseUrl}/auth/doctors`);
    const { register, handleSubmit, setValue, } = useForm();

    const handleShow = (doctor) => {
        if (!user.isAdmin) {
            swal("Not Authorized", "You are not authorized to update doctor information", "error");
            return;
        }
        setSelectedDoctor(doctor);
        setValue('name', doctor.name);
        setValue('email', doctor.email);
        setValue('type', doctor.isAdmin ? "2" : doctor.isDoctor ? "1" : "0");
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedDoctor(null);
    };

    const handleUpdateInfo = async (data) => {
        if (!user.isAdmin) {
            swal("Not Authorized", "You are not authorized to update doctor information", "error");
            return;
        }
        try {
            const updatedData = {
                name: data.name,
                email: data.email,
                isAdmin: data.type === "2",
                isDoctor: data.type === "1",
            };

            //console.log("Sending updated data:", updatedData);

            const response = await axios.put(`${baseUrl}/auth/updateInfo/${selectedDoctor._id}`, updatedData, {
                withCredentials: true
            });
            console.log("Response:", response.data);
            reFetchData();
            handleClose();
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (doctorId) => {
        if (!user.isAdmin) {
            swal("Not Authorized", "You are not authorized to delete doctor information", "error");
            return;
        }
        try {
            const result = await swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this doctor record!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });

            if (result) {
                const response = await axios.delete(`${baseUrl}/auth/deleteDoctor/${doctorId}`, {
                    withCredentials: true
                });
                console.log("Response:", response.data);
                reFetchData();
                swal("Doctor has been deleted!", {
                    icon: "success",
                });
            }
        } catch (err) {
            console.log(err);
            swal("Failed to delete the doctor", {
                icon: "error",
            });
        }
    };

    return (
        <div className="all-patient">
            <Sidebar />
            <div className="col-md-10 p-5 pr-4 m-0 patient-container">
                <h6 className="brand-color text-start">Doctors</h6>

                {loading ? (
                    <Spinner animation="border" variant="info" />
                ) : error ? (
                    <div className="alert alert-danger">Failed to load doctors</div>
                ) : (
                    <table className="table shadow-lg p-5 mt-4">
                        <thead className="thead-dark">
                            <tr>
                                <th className="text-primary text-center" scope="col">Sr No</th>
                                <th className="text-primary" scope="col">Name</th>
                                <th className="text-primary" scope="col">Email</th>
                                <th className="text-primary" scope="col">Type</th>
                                {user.isAdmin && <th className="text-primary" scope="col">Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr className="patient-table-data" key={item._id}>
                                    <th className="text-center">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.isDoctor ? "Doctor" : item.isAdmin ? "Admin" : "User"}</td>
                                    {user.isAdmin && (
                                        <td>
                                            <Button variant="info" onClick={() => handleShow(item)}>Update</Button>
                                            <Button variant="danger" className="ms-2" onClick={() => handleDelete(item._id)}>Delete</Button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Doctor Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(handleUpdateInfo)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    {...register('name', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    {...register('email', { required: true })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Type</Form.Label>
                                <Form.Select
                                    name="type"
                                    {...register('type', { required: true })}
                                >
                                    <option value="0">User</option>
                                    <option value="1">Doctor</option>
                                    <option value="2">Admin</option>
                                </Form.Select>
                            </Form.Group>
                            <Button className='btn btn-outline-info w-100 text-white' type="submit">
                                Update
                            </Button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default DoctorList;
