import React from 'react';

const PaymentOptions = ({ totalAmount }) => {
  const handleEsewaClick = () => {
    const windowFeatures = 'width=500,height=600,left=300,top=100,noopener,noreferrer';
    window.open(`/esewa-payment?amount=${totalAmount}`, '_blank', windowFeatures);
  };

  return (
    <div className="payment-options">
      <button 
        className="esewa-button"
        onClick={handleEsewaClick}
      >
        Pay with eSewa
      </button>
    </div>
  );
};

export default PaymentOptions; 