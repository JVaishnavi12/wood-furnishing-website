import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
      setSubmitted(false);
    } else if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
      // You can add further logic here (like API call)
      console.log('Subscribed with:', email);
      setEmail('');
    }
  };

  return (
    <section className="bg-light py-5 text-center">
      <h4>Stay Inspired</h4>
      <p>Subscribe to our newsletter for exclusive offers, design inspiration, and product announcements.</p>

      <form onSubmit={handleSubscribe} className="d-flex justify-content-center flex-wrap gap-2 mt-3">
        <input
          type="email"
          className="form-control w-25"
          style={{ minWidth: '250px' }}
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">Subscribe</button>
      </form>

      {error && <p className="text-danger mt-2">{error}</p>}
      {submitted && <p className="text-success mt-2">Subscribed successfully!</p>}
    </section>
  );
}

export default Newsletter;
