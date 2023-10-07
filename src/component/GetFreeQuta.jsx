import React, { useState } from 'react';

const GetFreeQuote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
            newErrors.name = 'Name must contain only letters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must contain only digits';
        } else if (formData.phone.length !== 10) {
            newErrors.phone = 'Phone number must be 10 digits long';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Here, you can submit the form data to your backend or perform other actions.
            // For this example, we'll just set formSubmitted to true.
            setFormSubmitted(true);
        }
    };

    return (
        <div className='contact-row-1'>
            <div className='container border bg-1 mt-1 mb-1 w-50'>
                <div className='row mt-2 mb-3'>
                    <div className='col-12'>
                        {formSubmitted ? (
                            <div className='mt-2 mb-3'>
                                <p className='text-white fs-3'>Form submitted successfully!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className='d-flex justify-content-evenly mt-4'>
                                    <div className='w-75'>
                                        <label className='text-white'>Name:</label>
                                        <input
                                            className='w-50 ms-5  border  border-top-0 border-start-0 border-end-0 mb-4'
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        {errors.name && <div className="error text-danger fs-4">{errors.name}</div>}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-evenly mt-4'>
                                    <div className='w-75'>
                                        <label className='text-white'>Email:</label>
                                        <input
                                            className='w-50 ms-5  border  border-top-0 border-start-0 border-end-0 mb-4'
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        {errors.email && <div className="error text-danger fs-4">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-evenly mt-4'>
                                    <div className='w-75'>
                                        <label className='text-white'>Phone:</label>
                                        <input
                                            className='w-50 ms-5  border  border-top-0 border-start-0 border-end-0 mb-4'
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                        {errors.phone && <div className="error text-danger fs-4">{errors.phone}</div>}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-evenly mt-4' >
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetFreeQuote;
