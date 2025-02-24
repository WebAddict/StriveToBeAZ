import { useState } from 'react';
import styles from '../styles/Register.module.css'; // Add CSS module later

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      setTicket(data.ticket);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (ticket) {
    return (
      <div className={styles.ticketContainer}>
        <h1>Your Concert Ticket</h1>
        <p>Ticket Number: {ticket.ticket_number}</p>
        <p>Name: {ticket.first_name} {ticket.last_name}</p>
        <p>Email: {ticket.email}</p>
        <p>Mobile: {ticket.mobile}</p>
        <button onClick={() => window.print()}>Print Ticket</button>
        <button onClick={() => alert('Apple Wallet integration TBD')}>Add to Apple Wallet</button>
        <button onClick={() => alert('Google Wallet integration TBD')}>Add to Google Wallet</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Register for the Concert</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}