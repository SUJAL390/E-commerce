import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

  

    const handleSubmit = (e) => {
        e.preventDefault();

        setData({
            fullName: "",
            email: "",
            password: ""
        });
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    placeholder="Enter Your Name"
                                    value={data.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;