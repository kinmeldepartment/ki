import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const KhaltiQRCode = ({ amount }) => {
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('pending');

    useEffect(() => {
        // Generate QR code for Khalti payment
        const generateQRCode = async () => {
            try {
                // Replace with your actual Khalti merchant ID and other required parameters
                const khaltiPaymentData = {
                    merchantId: 'your_merchant_id',
                    amount: amount,
                    reference: `ORDER-${Date.now()}`,
                    remarks: 'Payment for KinMel order'
                };

                const qrCodeData = JSON.stringify(khaltiPaymentData);
                const qrCode = await QRCode.toDataURL(qrCodeData);
                setQrCodeUrl(qrCode);
            } catch (error) {
                console.error('Error generating QR code:', error);
                setPaymentStatus('error');
            }
        };

        generateQRCode();
    }, [amount]);

    return (
        <div className="khalti-qr-container">
            {qrCodeUrl && (
                <img 
                    src={qrCodeUrl} 
                    alt="Khalti Payment QR Code" 
                    className="qr-code"
                />
            )}
            <div className={`payment-status ${paymentStatus}`}>
                {paymentStatus === 'pending' && 'Waiting for payment...'}
                {paymentStatus === 'success' && 'Payment successful!'}
                {paymentStatus === 'error' && 'Payment failed. Please try again.'}
            </div>
        </div>
    );
};

export default KhaltiQRCode; 