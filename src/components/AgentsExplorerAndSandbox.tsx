import React, { useState } from 'react';
import { HEALGOA_AGENTS, AIAgentSpec } from '../data/agentsData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const mockMetrics = Array.from({ length: 7 }, (_, i) => ({
  day: `Day ${i + 1}`,
  workload: Math.floor(Math.random() * 500) + 100,
  accuracy: Math.floor(Math.random() * 20) + 80,
}));

export const AgentsExplorerAndSandbox = () => {
  const [selectedAgent, setSelectedAgent] = useState<AIAgentSpec | null>(HEALGOA_AGENTS[0] || null);

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-12 gap-12">
      <div className="col-span-4 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">16 AI Agents</h2>
        <div className="space-y-1">
          {HEALGOA_AGENTS.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                selectedAgent?.id === agent.id 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs opacity-60 tabular-nums">{agent.index}</span>
                <span className="font-medium text-sm">{agent.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="col-span-8 bg-white border border-slate-200 rounded-xl p-8 space-y-8">
        {selectedAgent ? (
          <>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{selectedAgent.name}</h3>
                <p className="text-slate-500 mt-1 text-lg">{selectedAgent.role}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Core Functions</h4>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    {selectedAgent.coreFunctions.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">GCP Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.gcpStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 h-64 border-t pt-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Workload (Requests/Day)</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="workload" fill="#475569" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Accuracy Rate (%)</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="accuracy" stroke="#0f172a" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        ) : (
          <p className="text-slate-500">Select an agent to view details.</p>
        )}
      </div>
    </div>
  );
};

