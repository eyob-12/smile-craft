import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';

const AddDoctor = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        try {
            const response = await axios.post(`${baseUrl}/auth/addDoctors`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            swal({
                icon: 'success',
                text: 'The Doctor has been Added',
                timer: 2000
            });
            console.log('Doctor added successfully:', response.data);
        } catch (error) {
            console.error('There was an error adding the doctor!', error);
        }
    };

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ backgroundColor: '#F4FDFB', position: 'absolute', right: '0' }}>
                <h2 className="text-center brand-color">Add a Doctor</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Email Address</label>
                        <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Enter Doctor email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Name</label>
                        <input type="text" onBlur={handleBlur} name="name" id="" placeholder="Enter Doctor name" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Upload Image</label>
                        <input type="file" onChange={handleFileChange} name="file" id="" placeholder="select File" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-info mt-4 w-100">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;