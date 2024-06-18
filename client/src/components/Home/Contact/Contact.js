import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact my-5 py-5" id="ContactPage">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-secondary">Contact Us</h5>
                    <h1 className="brand-color">Always Connect With Us</h1>
                </div>

                <div className="col-md-9 mx-auto">
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="form-control mb-3"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control mb-3"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter your subject"
                                className="form-control mb-3"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                cols="30"
                                rows="10"
                                placeholder="Enter your message"
                                className="form-control mb-3"
                            />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary mb-3">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );

};

export default Contact;