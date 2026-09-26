export const patients = [
  { id: 'p1', name: 'Alice Smith', condition: 'Type 2 Diabetes', treatment: 'Metformin', nextAppointment: '2026-10-05' },
  { id: 'p2', name: 'Bob Jones', condition: 'Hypertension', treatment: 'Lisinopril', nextAppointment: '2026-10-12' },
];

export const aiRecommendations = [
  { id: 'r1', patientId: 'p1', recommendation: 'Increase Metformin dosage to 500mg daily due to recent A1c trends.' },
  { id: 'r2', patientId: 'p2', recommendation: 'Schedule blood pressure monitoring for 7 days.' },
];

export const portalMetrics = {
  Patient: [
    { day: 'Mon', satisfaction: 85 },
    { day: 'Tue', satisfaction: 88 },
    { day: 'Wed', satisfaction: 90 },
    { day: 'Thu', satisfaction: 92 },
    { day: 'Fri', satisfaction: 95 },
  ],
  Provider: [
    { day: 'Mon', patientsSeen: 12 },
    { day: 'Tue', patientsSeen: 15 },
    { day: 'Wed', patientsSeen: 10 },
    { day: 'Thu', patientsSeen: 18 },
    { day: 'Fri', patientsSeen: 20 },
  ],
  Admin: [
    { day: 'Mon', activeUsers: 150 },
    { day: 'Tue', activeUsers: 175 },
    { day: 'Wed', activeUsers: 200 },
    { day: 'Thu', activeUsers: 220 },
    { day: 'Fri', activeUsers: 250 },
  ],
};
