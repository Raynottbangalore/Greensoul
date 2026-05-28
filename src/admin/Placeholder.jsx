import React from 'react';

export default function Placeholder({ title }) {
  return (
    <div>
      <h1 className="font-heading text-4xl mb-6">{title}</h1>
      <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
        <p className="text-white/50">This section is under construction.</p>
      </div>
    </div>
  );
}
