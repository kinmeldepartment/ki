import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import KhaltiQRCode from '../components/KhaltiQRCode';

const KhaltiPaymentPage = () => {
    const router = useRouter();
    const { amount } = router.query;

    return (
        <div className="khalti-payment-page">
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
                <img 
                    src="/images/khalti-logo.png" 
                    alt="Khalti" 
                    className="payment-logo"
                />
                <h2>Khalti Payment</h2>
                {amount && <KhaltiQRCode amount={amount} />}
                <p className="scan-instruction">Scan this QR code with your Khalti app</p>
            </div>
        </div>
    );
};

export default KhaltiPaymentPage; 