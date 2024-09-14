import React from 'react';
import {Link} from 'react-router-dom';
import './policy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Policy() {
  return (
    <div className="policy">
      <Header /> {/* Header component */}
      
      <main>
        <div className='policy-container'>
          <h1>Our Privacy Policy</h1>
          <h3>At I.R.I.S, we are committed to protecting the privacy of our users. This policy explains how we collect, use, and protect your personal data.</h3>
          
          <div className='policy-content-container'>
            <div className='cards-container'>
              <div className="policy-card">
                <h2>Information We Collect</h2>
                <p>When you register for our hackathon, we may collect personal information such as your name, email address, contact number, and payment details.</p>
                <p>We may collect payment details such as credit card numbers or bank information through secure methods provided by our payment processor.</p>
                <p>We may collect data on how you interact with our website or services, such as pages visited and interaction with event registration forms.</p>
              </div>

              <div className="policy-card">
                <h2>Use of Information</h2>
                <p>Your personal information will be used to manage registrations, provide event updates, and handle customer support.</p>
                <p>Your payment details will be used solely for processing your hackathon participation fee.</p>
                <p>We may use your email to send important updates, unless you opt out.</p>
              </div>

              <div className="policy-card">
                <h2>Data Sharing</h2>
                <p>We share payment information with third-party payment processors.</p>
                <p>We may disclose personal information if required by law.</p>
              </div>

              <div className="policy-card">
                <h2>Data Security</h2>
                <p>We take reasonable measures to protect your personal data. However, no online transaction is 100% secure.</p>
              </div>

              <div className="policy-card">
                <h2>Your Rights</h2>
                <p>You may request access to, correction, or deletion of your personal data by contacting us.</p>
              </div>

              <div className="policy-card">
                <h2>Third-Party Services</h2>
                <p>Our payment processing is handled by third-party services.</p>
              </div>

              <div className="policy-card">
                <h2>Changes to This Policy</h2>
                <p>We may update this policy from time to time. Any changes will be posted here.</p>
                <p>For more information, contact us at: iris@mitwpu.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Policy;
