import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if (!formData.firstName.trim()) newErrors.firstName = "First name cannot be empty";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name cannot be empty";
        if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";
        if (formData.password.length < 8) newErrors.password = "Password must be greater than 7 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully');
        }
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input
                    data-testid="first-name-id"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <p data-testid="first-name-error-id" className="error">{errors.firstName}</p>

                <input
                    data-testid="last-name-id"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <p data-testid="last-name-error-id" className="error">{errors.lastName}</p>

                <input
                    data-testid="email-id"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />
                <p data-testid="email-error-id" className="error">{errors.email}</p>

                <input
                    data-testid="password-id"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <p data-testid="password-error-id" className="error">{errors.password}</p>

                <input
                    data-testid="confirm-password-id"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <p data-testid="confirm-password-error-id" className="error">{errors.confirmPassword}</p>

                <button type="submit">Sign Up</button>
            </form>
        </Wrapper>
    );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px);
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;
