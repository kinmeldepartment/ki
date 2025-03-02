import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

const EsewaQRCode = ({ amount }) => {
  const [qrData, setQrData] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    try {
      setIsLoading(true);
      // Format the eSewa payment data
      const esewaData = {
        merchantId: 'MERCHANT_ID',
        amount: amount,
        particulars: 'Payment for products',
        productCode: 'PROD001'
      };
      
      const qrString = `esewa://payment?merchantId=${esewaData.merchantId}&amount=${esewaData.amount}&particulars=${esewaData.particulars}&productCode=${esewaData.productCode}`;
      
      setQrData(qrString);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to generate QR code');
      setIsLoading(false);
    }
  }, [amount]);

  if (isLoading) return <div>Generating QR code...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="esewa-qr-container">
      {qrData && (
        <div className="qr-code">
          <QRCode value={qrData} size={256} />
          <p className="amount">Amount to pay: NPR {amount}</p>
        </div>
      )}
    </div>
  );
};

export default EsewaQRCode; 