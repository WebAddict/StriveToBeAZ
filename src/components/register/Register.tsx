"use client";

import { useEffect, useState } from 'react';
import styles from './register.module.css';
import { toast } from 'react-toastify';
import { RegisterConfirm, RegisterData, validateEmailInput, validatePhoneInput } from '@/app/services/RegisterService';
import Turnstile, { useTurnstile } from 'react-turnstile';
import { IconUser, IconMail, IconPhone, IconBuildingChurch, IconHome, IconCalendarEvent, IconUserPlus } from '@tabler/icons-react';
import { useRouter } from "next/navigation";

interface RegisterProps {
  event: string;
  isConfirm?: boolean;
  registration?: any;
  setTermsDate?: () => void;
}

export default function Register({ event, isConfirm = false, registration = null, setTermsDate }: RegisterProps) {  
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
  const [confirmError, setConfirmError] = useState('');
  const [invokeCaptcha, setInvokeCaptcha] = useState(false);
  const [confirm, setConfirm] = useState<RegisterConfirm>({
    confirmFSY: false,
    confirmAdult: false,
    confirmPhotos: false,
  })
  const router = useRouter();

  useEffect(() => {
    if (registration && isConfirm) {
      setUserRegistration({
        firstName: registration.first_name || '',
        lastName: registration.last_name || '',
        email: registration.email || '',
        mobile: registration.mobile || '',
        religion: registration.religion || '',
        age: registration.age || '',
        stake: registration.stake || '',
        event: registration.event || event,
        childName: registration.child_name || '',
        uniqueId: registration.uniqueid || '',
      });
    }

  }, [registration, isConfirm, event]);

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
      [name]: value, // Removed .trim() to allow spaces while typing
    }));
  };

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setConfirm((prevState) => ({
      ...prevState,
      [name]: checked, 
    }));
  };


  /**************************************************************************************
  * THIS IS FOR FIRST TIME REGISTRATION
  ***************************************************************************************/
  const submitRegistration = async () => {
    // Optionally trim values here before sending to the backend if needed
    const trimmedRegistration = {
      ...userRegistration,
      firstName: userRegistration.firstName.trim(),
      lastName: userRegistration.lastName.trim(),
      email: userRegistration.email.trim(),
      mobile: userRegistration.mobile.trim(),
      stake: userRegistration.stake.trim(),
      childName: userRegistration.childName.trim(),
      isConfirm: isConfirm && confirm.confirmFSY && confirm.confirmPhotos && (userRegistration.age !== "Adult" || confirm.confirmAdult),
      registerid: isConfirm ? userRegistration.uniqueId : null,
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trimmedRegistration), // Use trimmed data for submission
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(isConfirm ? 'Thank you for confirming your registration!' : 'Registration successful! You will get your Entry Pass by email around 3/15', {
          position: 'top-center',
          style: {
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '20px',
            padding: '15px 25px',
            maxWidth: '400px',
            minWidth: '250px',
          },
        });
        if (isConfirm && setTermsDate) {
          setTermsDate();
        } else {
          setUserRegistration(INITIAL_USER_REGISTRATION);
          turnstile.reset();
          setInvokeCaptcha(false);
        }
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
    if (isConfirm) {
      if ((userRegistration.age === "Adult" && !confirm.confirmAdult) || !confirm.confirmFSY || !confirm.confirmPhotos) {
        setConfirmError('You must acknowledge the checkboxes above to finalize your registration process');
        setLoading(false);
        return;
      }
    }

    setInvokeCaptcha(true);
  };

  const capitalizeEvent = (event: string) => {
    return event.charAt(0).toUpperCase() + event.slice(1).toLowerCase();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {!isConfirm ? 
        <h1 className={styles.formHeader}>Register to get your FREE PASS for the <span className="text-5xl font-semibold">{capitalizeEvent(event)}</span> Concert</h1>
        :
        <h3 className={styles.formHeader}>We just need a little more information before finalizing your registration</h3>
      }
        <div className={styles.form}>
          {isConfirm &&
            <div>
             <label className="flex items-center cursor-pointer mb-2">
              <input 
                type="checkbox"
                name="confirmFSY"
                checked={confirm.confirmFSY}
                onChange={handleConfirmChange} 
                className="form-checkbox h-10 w-10 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-4 text-white text-left">I agree to dress &amp; act in accordance with the standards outlined in For the Strength of Youth.</span>
            </label>
            <label className="flex items-center cursor-pointer mb-2">
              <input 
                type="checkbox"
                name="confirmPhotos"
                checked={confirm.confirmPhotos}
                onChange={handleConfirmChange} 
                className="form-checkbox h-10 w-10 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-4 text-white text-left">I consent to photos and videos of me being taken and used for event-related purposes.</span>
            </label>
          
            {userRegistration.age === "Adult" && 
              <label className="flex items-center cursor-pointer mt-5">
                <input 
                  type="checkbox"
                  name="confirmAdult"
                  checked={confirm.confirmAdult}
                  onChange={handleConfirmChange}
                  className="form-checkbox h-7 w-7 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                <span className="ml-4 text-white text-left">I acknowledge that I will accompany {userRegistration.childName} at all times during this event</span>
              </label>
            }
          </div>
      
          }
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
           {confirmError && <div className={styles.error}>{confirmError}</div>}

          {isConfirm ? 
            <button onClick={handleSubmit} disabled={loading || (userRegistration.age === "Adult" && !confirm.confirmAdult) || !confirm.confirmFSY || !confirm.confirmPhotos} className={styles.button}>
              {loading ? 'Updating registration...' : 'Confirm'}
            </button> 
            :
            <button onClick={handleSubmit} disabled={loading} className={styles.button}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          }
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