import React, { useContext, useState } from 'react';
import { Button, Overlay, Popover, Spinner } from 'react-bootstrap';
import { useRef } from 'react';
import UserIcon from '../../../images/doc/user.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pop.css';

const Pop = () => {
    const { user, loading, dispatch } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (e) => {
        setShow(!show);
        setTarget(e.target);
    }

    const handleSignOut = () => {
        dispatch({ type: "LOGOUT" });
    }

    if (user.image === null) {
        user.image = UserIcon;
    }
    return (
        <div className="position-relative">
            <img
                src={user.image}
                alt="hello"
                className="rounded-circle cursor-pointer"
                style={{ width: '50px', height: '50px' }}
                onClick={handleClick}
            />

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}

            >
                <Popover id="popover-contained" className="large-popover">
                    <Popover.Header as="h4" className='text-capitalize'>
                        welcome {user.username} 👋
                    </Popover.Header>
                    <Popover.Body >
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src={user.image}
                                alt={UserIcon}
                                className="rounded-circle me-3"
                                style={{ width: '40px', height: '40px' }}
                            />
                            <div>
                                <p className="mb-1 fw-bold">{user.username}</p>
                                <p className="mb-0 text-muted">{user.email}</p>
                            </div>
                        </div>
                        <Link className="btn btn-info w-100 mb-2" to="/dashboard">Dashboard</Link>
                        <Button
                            variant="danger"
                            size="sm"
                            className="w-100"
                            onClick={handleSignOut}
                            disabled={loading}
                        >
                            {loading ? <Spinner animation="border" size="sm" /> : "Sign Out"}
                        </Button>
                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    );
};

export default Pop;
