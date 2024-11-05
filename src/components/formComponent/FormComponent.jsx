import React, { useEffect, useState } from 'react';
import { Box, Typography, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import Logo from '../assets/Logo.png'

const FormComponent = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userNameErr, setUserNameErr] = useState('');
    const [userEmailErr, setUserEmailErr] = useState('');
    const [userAgeErr, setUserAgeErr] = useState('');
    const [formSuccess, setFormSuccess] = useState(false);

    // Email validation logic
    const validateEmail = (email) => {
        if (email.indexOf('@') === -1 || email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
            return false;
        }
        return true;
    };

    // Form handler
    const formHandler = (e) => {
        e.preventDefault();

        let isValid = true;

        setUserNameErr('');
        setUserEmailErr('');
        setUserAgeErr('');

        // Validate name
        if (userName === '') {
            setUserNameErr('Please enter your name.');
            isValid = false;
        }

        // Validate email
        if (userEmail === '') {
            setUserEmailErr('Please enter your email.');
            isValid = false;
        } else if (!validateEmail(userEmail)) {
            setUserEmailErr('Please enter a valid email.');
            isValid = false;
        }

        // Validate age
        if (userAge === '') {
            setUserAgeErr('Please enter your age.');
            isValid = false;
        } else if (isNaN(userAge)) {
            setUserAgeErr('Age must be a number.');
            isValid = false;
        }

        if (isValid) {
            setFormSuccess(true);
            setUserName('');
            setUserEmail('');
            setUserAge('');
        } else {
            setFormSuccess(false);
        }
    };

    useEffect(() => {
        if (formSuccess) {
            alert('Form submitted successfully!');
        }
    }, [formSuccess]);

    useEffect(() => {
        if (userName !== "") {
            setUserNameErr("");
        }

        if (userEmail !== "") {
            setUserEmailErr("")
        }

        if (userAge !== "") {
            setUserAgeErr("");
        }
    }, [userName, userEmail, userAge]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                flexDirection: 'column',
                padding: '16px',
                textAlign: 'center',
                backgroundColor: '#f4f6f9'
            }}
        >
            {/* Logo */}
            <Box className='mb-4 bg-primary rounded-3'>
                <img src={Logo} alt="Logo" style={{
                    maxWidth: '200px', width: '100%', height: 'auto',
                }}
                />
            </Box>

            {/* Form Box */}
            <Box
                sx={{
                    boxShadow: 3,
                    padding: 3,
                    borderRadius: 2,
                    width: '100%',
                    maxWidth: '500px',
                    backgroundColor: 'white',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "blue" }}>
                    Create Your Account
                </Typography>

                <form onSubmit={formHandler}>
                    {/* Name Field */}
                    <FormControl className="mt-3" fullWidth>
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput
                            sx={{ width: '100%' }}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            label="Name"
                        />
                    </FormControl>
                    <br />
                    {userNameErr && (
                        <Typography className="text-danger mt-1">{userNameErr}</Typography>
                    )}

                    {/* Email Field */}
                    <FormControl className="mt-3" fullWidth>
                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                        <OutlinedInput
                            sx={{ width: '100%' }}
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            label="Email"
                        />
                    </FormControl>
                    <br />
                    {userEmailErr && (
                        <Typography className="text-danger">{userEmailErr}</Typography>
                    )}

                    {/* Age Field */}
                    <FormControl className="mt-3" fullWidth>
                        <InputLabel htmlFor="component-outlined">Age</InputLabel>
                        <OutlinedInput
                            sx={{ width: '100%' }}
                            value={userAge}
                            onChange={(e) => setUserAge(e.target.value)}
                            label="Age"
                        />
                    </FormControl>
                    <br />
                    {userAgeErr && (
                        <Typography className="text-danger">{userAgeErr}</Typography>
                    )}

                    {/* Submit Button */}
                    <Box sx={{ mt: 2 }}>
                        <button
                            type="submit"
                            className="border-primary rounded-2 py-2 px-3 bg-primary text-white w-100"
                        >
                            Submit
                        </button>
                    </Box>
                </form>
            </Box>

            {/* Success Message */}
            {formSuccess && (
                <Typography variant="body1" color="green" className="mt-3">
                    Form submitted successfully!
                </Typography>
            )}
        </Box>
    );
};

export default FormComponent;
