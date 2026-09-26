import React, { useState } from 'react';
import { JOURNEYS } from '../data/patientJourneys';

type JourneyType = keyof typeof JOURNEYS;

export const PatientJourneyAndWorkflows = () => {
  const [selectedJourney, setSelectedJourney] = useState<JourneyType>('knee');

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Patient Journey & Workflows</h2>
      
      <div className="flex gap-4 mb-8">
        {(Object.keys(JOURNEYS) as JourneyType[]).map((type) => (
          <button
            key={type}
            onClick={() => setSelectedJourney(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedJourney === type ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {JOURNEYS[type].title}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {JOURNEYS[selectedJourney].stages.map((stage) => (
          <div key={stage.id} className="flex gap-6 pb-6 border-b border-slate-200">
            <span className="text-xl font-medium text-slate-400 tabular-nums">{stage.id}</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{stage.title}</h3>
              <p className="text-slate-600 mt-1">{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

