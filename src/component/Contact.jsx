import React, { useState } from 'react';

const Contact = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.msg.value.trim();

    if (name === '') {
      setNameError(true);
      return;
    }

    if (!/^[A-Za-z]+$/.test(name)) {
      setNameError(true);
      return;
    }

    if (email === '') {
      setEmailError(true);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError(true);
      return;
    }

    if (phone === '' || !/^[0-9]{10}$/.test(phone)) {
      setPhoneError(true);
      return;
    }
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
  };

  return (
    <div className='bg-1'>
      <div className='container-fluid'>
      <div className='row'>
          
            <img className='img-fluid' src="./Image/Company-Contact.jpg" alt="" />
     
        </div>
      </div>
      <div className='container'>
        
       <div className='row'>
       <div className='col-md-6'>
          <div className='col-12 contact-row-1 mt-3'>
            <span className='mt-3 mb-3 d-flex justify-content-center p-4'><img src="./Image/mail.webp" alt="" /></span>
            <h3 className='text-center mb-5'>Mail Here</h3>
            <p className='text-center mt-3 pb-5'>sales@klikplussoluions.com, info@klikplussoluions.com</p>
          </div>
          <div className='col-12 contact-row-1 '>
            <span className='mt-3 mb-3 d-flex justify-content-center p-4'><img src="./Image/location.webp" alt="" /></span>
            <h3 className='text-center mb-5'>Visit Here</h3>
            <p className='text-center mt-3 pb-5'>D-213 ,Ground Floor, Sector 63, Noida - 201301</p>
          </div>
        </div>
        <div className='col-md-6 contact-row-1 p-4 mt-3 mb-4 d-flex justify-content-center'>
        <div className="main">
        <div className="main-body">
          <label htmlFor="">(+91)123456789</label>
        </div>
        <form className="main-form" onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <br />

          <div>
            <label>Name</label>
            <br />
            <input
              autoComplete="off"
              type="text"
              placeholder="Enter your name"
              name="name"
              className={nameError ? 'error' : ''}
            />
            {nameError && <div className="error-message">Please enter a valid name.</div>}
          </div>

          <div className="form-element">
            <label>Email</label>
            <br />
            <input
              autoComplete="off"
              type="email"
              placeholder="Enter your Email ID"
              name="email"
              className={emailError ? 'error' : ''}
            />
            {emailError && <div className="error-message">Please enter a valid email address.</div>}
          </div>

          <div className="form-element">
            <label>Phone</label>
            <br />
            <input
              autoComplete="off"
              type="text"
              placeholder="Phone Number"
              name="phone"
              className={phoneError ? 'error' : ''}
            />
            {phoneError && (
              <div className="error-message">Please enter a valid 10-digit phone number.</div>
            )}
          </div>

          <div className="form-element">
            <label>Message</label>
            <br />
            <textarea id="msg" rows="5" placeholder="Questions/comments..." name="msg"></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Contact;
