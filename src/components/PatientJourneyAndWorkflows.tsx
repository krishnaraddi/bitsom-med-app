import React from 'react';

const workflowStages = [
  { id: '01', title: 'Patient Inquiry', desc: 'Initial contact and needs assessment.' },
  { id: '02', title: 'Pre-Consultation Screening', desc: 'Eligibility and health prerequisite check.' },
  { id: '03', title: 'Medical History Review', desc: 'Detailed analysis of medical records.' },
  { id: '04', title: 'Treatment Plan Formulation', desc: 'Expert medical team develops care plan.' },
  { id: '05', title: 'Cost Estimation', desc: 'Transparent breakdown of procedures & stay.' },
  { id: '06', title: 'Travel & Visa Logistics', desc: 'Coordination of travel documents.' },
  { id: '07', title: 'Pre-Arrival Briefing', desc: 'Orientation for medical tourism.' },
  { id: '08', title: 'Arrival & Transfer', desc: 'Airport pickup and facility check-in.' },
  { id: '09', title: 'Initial Medical Assessment', desc: 'On-site clinical validation.' },
  { id: '10', title: 'Treatment Execution', desc: 'Primary medical/AYUSH procedure.' },
  { id: '11', title: 'Recovery & Post-Op Care', desc: 'Monitoring and rehabilitation.' },
  { id: '12', title: 'Wellness & AYUSH Follow-up', desc: 'Integrative therapy sessions.' },
  { id: '13', title: 'Return & Continued Care', desc: 'Follow-up coordination for home.' },
];

export const PatientJourneyAndWorkflows = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Patient Journey & Workflows</h2>
      <div className="space-y-6">
        {workflowStages.map((stage) => (
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

