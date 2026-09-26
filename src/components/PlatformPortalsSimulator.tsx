import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { patients, aiRecommendations, portalMetrics } from '../data/demoData';

type Role = 'Patient' | 'Provider' | 'Admin';

const roleConfigs = {
  Patient: { color: 'bg-blue-500', title: 'Patient Portal' },
  Provider: { color: 'bg-green-500', title: 'Provider Portal' },
  Admin: { color: 'bg-purple-500', title: 'Admin Portal' },
};

export const PlatformPortalsSimulator = () => {
  const [activeRole, setActiveRole] = useState<Role>('Patient');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Platform Portals Simulator</h2>
      <div className="bg-white p-6 rounded shadow border mb-6">
        <p className="mb-4">Select a stakeholder to simulate their portal environment:</p>
        <div className="flex gap-4">
          {(Object.keys(roleConfigs) as Role[]).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`${roleConfigs[role].color} text-white px-4 py-2 rounded transition-opacity ${activeRole === role ? 'opacity-100' : 'opacity-60'}`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-slate-50 p-6 rounded shadow-inner border space-y-6">
        <h3 className="text-xl font-semibold">{roleConfigs[activeRole].title} Dashboard</h3>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Metrics</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={portalMetrics[activeRole]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={activeRole === 'Patient' ? 'satisfaction' : activeRole === 'Provider' ? 'patientsSeen' : 'activeUsers'} stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Data</h4>
            {activeRole === 'Patient' && (
              <ul className="space-y-1 text-sm">
                {patients.map(p => <li key={p.id}>{p.name}: {p.condition}</li>)}
              </ul>
            )}
            {activeRole === 'Provider' && (
              <ul className="space-y-1 text-sm">
                {aiRecommendations.map(r => <li key={r.id}>{r.recommendation}</li>)}
              </ul>
            )}
            {activeRole === 'Admin' && <p className="text-sm">System healthy. All agents operational.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
