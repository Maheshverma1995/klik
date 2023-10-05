import React, { useState } from 'react';

const Hiring = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    post: '', // Added field for post
    experience: '', // Added field for experience
    msg: '',
  });

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    phoneError: '',
    postError: '', // Added error for post
    experienceError: '', // Added error for experience
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...formErrors };

    if (!formData.name.trim()) {
      valid = false;
      newErrors.nameError = 'Please enter a valid name.';
    } else {
      newErrors.nameError = '';
    }

    if (!formData.email.trim() || !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      valid = false;
      newErrors.emailError = 'Please enter a valid email address.';
    } else {
      newErrors.emailError = '';
    }

    if (!formData.phone.trim() || !formData.phone.match(/^\d{10}$/)) {
      valid = false;
      newErrors.phoneError = 'Please enter a valid 10-digit phone number.';
    } else {
      newErrors.phoneError = '';
    }

    if (!formData.post.trim()) { // Validate post
      valid = false;
      newErrors.postError = 'Please enter a valid post.';
    } else {
      newErrors.postError = '';
    }

    if (!formData.experience.trim()) { // Validate experience
      valid = false;
      newErrors.experienceError = 'Please enter a valid experience.';
    } else {
      newErrors.experienceError = '';
    }

    if (valid) {
      console.log(formData);

      // Clear the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        post: '',
        experience: '',
        msg: '',
      });
    }

    setFormErrors(newErrors);
  };

  return (
    <div>
      <form className="main-form text-center" onSubmit={handleSubmit}>
        <div className="form-group mt-3 d-flex justify-content-center">
          <input id='input'
            autoComplete="off"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={formErrors.nameError ? 'form-control error' : 'form-control'}
          />
          {formErrors.nameError && <div className="error-message">{formErrors.nameError}</div>}
        </div>

        <div className="form-group mt-3 d-flex justify-content-center">
          <input id='input'
            autoComplete="off"
            type="email"
            placeholder="Enter your Email ID"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={formErrors.emailError ? 'form-control error' : 'form-control'}
          />
          {formErrors.emailError && <div className="error-message">{formErrors.emailError}</div>}
        </div>

        <div className="form-group mt-3 d-flex justify-content-center">
          <input id='input'
            autoComplete="off"
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={formErrors.phoneError ? 'form-control error' : 'form-control'}
          />
          {formErrors.phoneError && <div className="error-message">{formErrors.phoneError}</div>}
        </div>

        <div className="form-group mt-3 d-flex justify-content-center">
          <input id='input'
            autoComplete="off"
            type="text"
            placeholder="Enter your Post"
            name="post"
            value={formData.post}
            onChange={handleInputChange}
            className={formErrors.postError ? 'form-control error' : 'form-control'}
          />
          {formErrors.postError && <div className="error-message">{formErrors.postError}</div>}
        </div>

        <div className="form-group mt-3 d-flex justify-content-center">
          <input id='input'
            autoComplete="off"
            type="text"
            placeholder="Enter your Your Experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className={formErrors.experienceError ? 'form-control error' : 'form-control'}
          />
          {formErrors.experienceError && <div className="error-message">{formErrors.experienceError}</div>}
        </div>

        <div className="form-group mt-3 d-flex justify-content-center">
          <label>Attachment</label>
          <input id='input'
            type="file"
            name="attachment"
            onChange={(e) => handleInputChange(e)} 
            className="form-control-file"
          />
        </div>

        <div className="form-group mt-3 d-flex justify-content-center">
          <textarea
            id="msg"
            rows="5"
            placeholder="Questions/comments..."
            name="msg"
            value={formData.msg}
            onChange={handleInputChange}
            className="form-control mt-3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success mt-4">Submit</button>
      </form>
    </div>
  );
};

export default Hiring;
