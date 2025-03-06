"use client";

import { useState } from 'react';
import styles from './register.module.css';
import { toast } from 'react-toastify';
import { RegisterData, validateEmailInput, validatePhoneInput } from '@/app/services/RegisterService';
import Turnstile, { useTurnstile } from 'react-turnstile';
import { IconUser, IconMail, IconPhone, IconBuildingChurch, IconHome, IconCalendarEvent, IconUserPlus } from '@tabler/icons-react';

export default function Register({ event }: { event: string }) {
  const INITIAL_USER_REGISTRATION: RegisterData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    religion: '',
    age: '',
    stake: '',
    event: event,
    childName: '',
  };
  const [userRegistration, setUserRegistration] = useState<RegisterData>(INITIAL_USER_REGISTRATION);
  const [error, setError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [loading, setLoading] = useState(false);
  const [invokeCaptcha, setInvokeCaptcha] = useState(false);

  const turnstile = useTurnstile();

  const handleVerification = async (token: string) => {
    setInvokeCaptcha(true);
    try {
      const res = await fetch('/api/turnstile', {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Turnstile verification success:", data);
        submitRegistration();
      } else {
        console.log("Turnstile verification failed:", data);
        turnstile.reset();
      }
    } catch (error) {
      console.error("Error during verification or registration:", error);
      turnstile.reset();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserRegistration((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const submitRegistration = async () => {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userRegistration),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Registration successful! You will get your Entry Pass by email around 3/15', {
          position: 'top-center',
          style: {
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '25px',
            padding: '15px 25px',
            maxWidth: '400px',
            minWidth: '250px',
          },
        });
        setUserRegistration(INITIAL_USER_REGISTRATION);
        turnstile.reset();
        setInvokeCaptcha(false);
      } else {
        if (data && typeof data === 'object' && 'error' in data) {
          const errorMessage = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
          toast.error('Registration failed! Please try again', {
            position: 'top-center',
            style: {
              backgroundColor: '#dc3545',
              color: '#fff',
              fontSize: '25px',
              padding: '15px 25px',
              maxWidth: '400px',
              minWidth: '250px',
            },
          });
          setError(data.error);
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

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setEmailError('');
    setMobileError('');
    setAgeError('');

    if (!userRegistration.email) {
      setEmailError("An email is required to register. If you don't have one, you can use a parent or guardian's email address");
      setLoading(false);
      return;
    }

    if (!userRegistration.firstName || !userRegistration.lastName || !userRegistration.age || !userRegistration.religion) {
      setError("Missing required fields");
      setLoading(false);
      return;
    }

    if (!validateEmailInput(userRegistration.email)) {
      setEmailError('Invalid email');
      setLoading(false);
      return;
    }

    if (userRegistration.mobile.length > 0 && !validatePhoneInput(userRegistration.mobile)) {
      setMobileError('Invalid phone');
      setLoading(false);
      return;
    }

    if (userRegistration.age === "Adult" && !userRegistration.childName) {
      setAgeError('Adults must list name of youth they are accompanying');
      setLoading(false);
      return;
    }

    setInvokeCaptcha(true);
  };

  const capitalizeEvent = (event: string) => {
    if (event === "mesa") return "Mesa";
    if (event === "tucson") return "Tucson";
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.formHeader}>Register to get your FREE PASS for the <span className="text-5xl font-semibold">{capitalizeEvent(event)}</span> Concert</h1>
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <IconUser className={styles.icon} />
            <input
              type="text"
              placeholder="First Name*"
              name="firstName"
              value={userRegistration.firstName}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <IconUser className={styles.icon} />
            <input
              type="text"
              placeholder="Last Name*"
              name="lastName"
              value={userRegistration.lastName}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <IconMail className={styles.icon} />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={userRegistration.email}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
          {emailError && <div className={styles.error}>{emailError}</div>}
          <div className={styles.inputGroup}>
            <IconPhone className={styles.icon} />
            <input
              type="tel"
              placeholder="Mobile Number"
              name="mobile"
              value={userRegistration.mobile}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          {mobileError && <div className={styles.error}>{mobileError}</div>}
          <div className={styles.inputGroup}>
            <IconBuildingChurch className={styles.icon} />
            <select
              name="religion"
              value={userRegistration.religion}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="" disabled>Religion*</option>
              <option value="LDS">Church of Jesus Christ of Latter Day Saints</option>
              <option value="Other Christian">Other Christian</option>
              <option value="Judaism">Judaism</option>
              <option value="Muslim">Muslim</option>
              <option value="Hindu">Hindu</option>
              <option value="Atheist / Agnostic">Atheist / Agnostic</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {userRegistration.religion === "LDS" && (
            <div className={styles.inputGroup}>
              <IconHome className={styles.icon} />
              <input
                type="text"
                placeholder="Enter your Stake Name"
                name="stake"
                value={userRegistration.stake}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
            </div>
          )}
          <div className={styles.inputGroup}>
            <IconCalendarEvent className={styles.icon} />
            <select
              name="age"
              value={userRegistration.age}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="" disabled>Age*</option>
              {event === "tucson" && <option value="12">12</option>}
              {event === "tucson" && <option value="13">13</option>}
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="Adult">Adult (accompanying youth with special needs)</option>
            </select>
          </div>
          {userRegistration.age === "Adult" && (
            <>
              <div className={styles.inputGroup}>
                <IconUserPlus className={styles.icon} />
                <input
                  type="text"
                  placeholder="Enter name of youth you're accompanying*"
                  name="childName"
                  value={userRegistration.childName}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>
              {ageError && <div className={styles.error}>{ageError}</div>}
            </>
          )}
          <button onClick={handleSubmit} disabled={loading} className={styles.button}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        {invokeCaptcha && (
          <div className="mt-10">
            <Turnstile
              sitekey="0x4AAAAAAA_eIsBMQxAtxnSx"
              onVerify={handleVerification}
            />
          </div>
        )}
      </div>
    </div>
  );
}