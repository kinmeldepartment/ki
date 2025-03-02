import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import '../styles/Home.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>KIN MEL DEPARTMENT STORE - Your One-Stop Shopping Destination</title>
      </Head>
      
      <header className="header">
        <div className="brand-container">
          <div className="brand-text">
            <div className="brand-name">
              <span className="kin">KIN</span>
              <span className="mel">MEL</span>
              <span className="department-store">DEPARTMENT STORE</span>
            </div>
            <p className="brand-slogan">Your One-Stop Shopping Destination</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="logo-section">
          <Image
            src="/images/kinmel-logo.png"
            alt="Kinmel Department Store Logo"
            width={180}
            height={180}
            className="main-logo"
          />
        </div>

        <section className="deals-section">
          <h2>Deals of the Day</h2>
          {/* Deals content */}
        </section>

        <section className="special-offers">
          <h2>Special Offers</h2>
          {/* Special offers content */}
        </section>
      </main>
    </>
  );
};

export default HomePage; 