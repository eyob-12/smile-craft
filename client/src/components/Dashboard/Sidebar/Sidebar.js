import { faGripHorizontal, faHome, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, } from 'react';
import { Link, } from 'react-router-dom';

import './Sidebar.css';
import Spinner from 'react-bootstrap/Spinner'

import { AuthContext } from '../../Context/AuthContext';
import swal from 'sweetalert';


const Sidebar = () => {
    const { user, loading, dispatch } = useContext(AuthContext);
    const handleSignOut = () => {
        swal({
            icon: 'success',
            text: 'Successfully LogOut',
            timer: 2000
        })
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5">
            <ul className="list-unstyled">
                <li>
                    <Link className="text-nowrap text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUser} />
                        <span className='text-capitalize'>{user?.username}</span>   {user?.isDoctor ? "(Doctor)" : user?.isAdmin ? "(Admin)" : ""}
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-nowrap text-white text-decoration-none"><FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard" className="text-nowrap text-white text-decoration-none"><FontAwesomeIcon icon={faGripHorizontal} />
                        <span>Dashboard</span>
                    </Link>
                </li>

                {user.isAdmin &&
                    <>
                        <li>
                            <Link to="/patients" className="text-nowrap text-white text-decoration-none"><FontAwesomeIcon icon={faUser} />
                                <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctors" className="text-nowrap text-white text-decoration-none"><FontAwesomeIcon icon={faUserPlus} />
                                <span>Doctors</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/addDoctor" className="text-nowrap text-white text-decoration-none"><FontAwesomeIcon icon={faUserPlus} />
                                <span>Add Doctor</span>
                            </Link>
                        </li>
                    </>
                }
                <li>
                    <Link to="/auth/review" className="text-nowrap text-white text-decoration-none"><FontAwesomeIcon icon={faUserPlus} />
                        <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div className="desh-logout">
                <div className="desh-logout">
                    {user.image ? (
                        <img className="logout-image rounded-circle" src={user.image} alt="log out" />
                    ) : (
                        <img className="logout-image rounded-circle" src="https://www.pinclipart.com/picdir/middle/63-635365_artboard-landscap-ethiopia-clipart.png" alt="log out" />
                    )}
                    <Link to="/" className="text-nowrap text-white text-decoration-none ms-2 fs-6" onClick={handleSignOut}>
                        <span>
                            {loading ? <Spinner animation="border" variant="info" /> : "LogOut"}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;