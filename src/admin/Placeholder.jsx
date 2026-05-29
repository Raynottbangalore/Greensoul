import React from 'react';

export default function Placeholder({ title }) {
  return (
    <div>
      <h1 className="font-heading text-4xl mb-6 text-[#E9E8E1]">{title}</h1>
      <div className="bg-[#2A3326] border border-[#E9E8E1]/10 p-8 rounded-none shadow-sm">
        <p className="text-[#E9E8E1]/60">This section is under construction.</p>
      </div>
    </div>
  );
}
