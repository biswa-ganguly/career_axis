import { PricingTable } from '@clerk/nextjs';
import React from 'react';

function Billing() {
  return (
    <div className="flex items-center  justify-center px-4 py-16">
      <div className=" w-full text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Choose a Plan</h2>
        <p className="text-lg text-gray-600 mb-10">
          Select a subscription to get access to all AI tools.
        </p>
        <div className="">
          <PricingTable />
        </div>
      </div>
    </div>
  );
}

export default Billing;
