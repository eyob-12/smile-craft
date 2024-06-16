import React from 'react';
import spinner from '../../../images/doc/loader.gif'

const PreLoad = () => {
    console.log("PreLoad component rendered");
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <img src={spinner} alt="Loading..." />
        </div>
    );
};

export default PreLoad;
