import React from 'react';

const Cancellation = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Cancellation & Refund Policy</h1>

        <h2 className="text-xl font-bold mb-4">Cancellation Policy</h2>

        <p className="mb-4">
          You may cancel your subscription at any time by [Cancellation Process]. Cancellations will take effect at the end of your current billing period.
          No refunds or prorated refunds will be provided for cancellations.
        </p>

        <h2 className="text-xl font-bold mb-4">Refund Policy</h2>

        <p className="mb-4">
          We offer refunds on a case-by-case basis. Please contact us at [Your Contact Information] within [Number] days of your purchase to request a refund.
          We will review your request and notify you of the approval or rejection of your refund.
        </p>

        <h2 className="text-xl font-bold mb-4">Contacting Us</h2>

        <p>
          If there are any questions regarding this cancellation & refund policy, you may contact us using the information below:
        </p>

        <p className="italic">[Your Contact Information]</p>
      </div>
    </div>
  );
};

export default Cancellation;
