"use client";

import { useState } from 'react';
import styles from './register.module.css';
import { toast } from 'react-toastify';
import { RegisterData, validateEmailInput, validatePhoneInput } from '@/app/services/RegisterService';

export default function Register({ event }: { event: string }) {
  const INITIAL_USER_REGISTRATION : RegisterData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    religion: '',
    age: '',
    event: event,
  };
  const [userRegistration, setUserRegistration] = useState<RegisterData>(INITIAL_USER_REGISTRATION);
  const [error, setError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserRegistration((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setEmailError('');
    setMobileError('');

    if (!validateEmailInput(userRegistration.email)) {
      setEmailError('Invalid email');
      setLoading(false);
      return;
    }

    if (!validatePhoneInput(userRegistration.mobile)) {
      setMobileError('Invalid phone');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userRegistration),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Registration successful!', {
          position: 'top-center',
          style: {
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '18px',
            padding: '15px 25px', 
            maxWidth: '400px',
            minWidth: '250px',
          },
        });
        setUserRegistration(INITIAL_USER_REGISTRATION);
      } else {
        if (data && typeof data === 'object' && 'error' in data) {
          const errorMessage = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
          toast.error('Registration failed!', {
            position: 'top-center',
            style: {
              backgroundColor: '#dc3545',
              color: '#fff',
              fontSize: '18px',
              padding: '15px 25px',
              maxWidth: '400px',
              minWidth: '250px',
            },
          });
        } else {
          throw new Error('Registration failed with an unknown error');
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }      
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.formHeader}>Register for the Concert</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={userRegistration.firstName}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={userRegistration.lastName}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userRegistration.email}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        {emailError && <div className={styles.error}>{emailError}</div>}
        <input
          type="tel"
          placeholder="Mobile Number"
          name="mobile"
          value={userRegistration.mobile}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
         {mobileError && <div className={styles.error}>{mobileError}</div>}
          <select
          name="religion"
          value={userRegistration.religion}
          onChange={handleInputChange}
          className={styles.select}
          required
        >
        <option value="" disabled>Religion</option>
        <option value="LDS">LDS</option>
        <option value="other">Other</option>
      </select>

      <select
        name="age"
        value={userRegistration.age}
        onChange={handleInputChange}
        className={styles.select}
        required
      >
        <option value="" disabled>Age</option>
        <option value="14-18">14-18</option>
        <option value="adult">Adult</option>
      </select>
        <button onClick={handleSubmit} disabled={loading} className={styles.button}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

