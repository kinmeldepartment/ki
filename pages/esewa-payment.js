import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import EsewaQRCode from '../components/EsewaQRCode';

const EsewaPaymentPage = () => {
  const router = useRouter();
  const { amount } = router.query;

  return (
    <div className="esewa-payment-page">
      <div className="brand-container">
        <Image
          src="/images/kinmel-logo.png"
          alt="Kinmel Logo"
          width={150}
          height={150}
          className="brand-logo"
        />
        <h1 className="brand-name">KINMEL</h1>
        <p className="brand-slogan">Your One-Stop Shopping Destination</p>
      </div>

      <div className="qr-container">
        <button className="back-button" onClick={() => router.back()}>
          ← Back
        </button>
        <h2>eSewa Payment</h2>
        {amount && <EsewaQRCode amount={amount} />}
        <p className="scan-instruction">Scan this QR code with your eSewa app</p>
      </div>
    </div>
  );
};

export default EsewaPaymentPage; 