export interface AIAgentSpec {
  id: string;
  index: string;
  name: string;
  role: string;
  coreFunctions: string[];
  gcpStack: string[];
}

export const HEALGOA_AGENTS: AIAgentSpec[] = [
  { id: 'a1', index: '01', name: 'Patient Triage', role: 'Initial health assessment and routing.', coreFunctions: ['Symptoms analysis', 'Urgency scoring', 'Specialist routing'], gcpStack: ['Cloud Run', 'Gemini Flash'] },
  { id: 'a2', index: '02', name: 'Medical Record Summarizer', role: 'Condenses complex histories.', coreFunctions: ['EHR extraction', 'Timeline generation', 'Key insights'], gcpStack: ['Firestore', 'Gemini Pro'] },
  { id: 'a3', index: '03', name: 'Insurance Verification', role: 'Real-time coverage checks.', coreFunctions: ['API integration', 'Plan parsing', 'Eligibility check'], gcpStack: ['Cloud Functions', 'Vertex AI'] },
  { id: 'a4', index: '04', name: 'Appointment Scheduler', role: 'Automated booking assistant.', coreFunctions: ['Calendar syncing', 'Timezone handling', 'Rescheduling logic'], gcpStack: ['Cloud SQL', 'Firebase Auth'] },
  { id: 'a5', index: '05', name: 'Post-Op Monitor', role: 'Follow-up care tracker.', coreFunctions: ['Recovery tracking', 'Warning signs alert', 'Patient survey'], gcpStack: ['Firestore', 'Pub/Sub'] },
  { id: 'a6', index: '06', name: 'Medication Reminder', role: 'Adherence booster.', coreFunctions: ['Schedule management', 'Notifications', 'Adherence analysis'], gcpStack: ['Cloud Run', 'Firestore'] },
  { id: 'a7', index: '07', name: 'Billing Analyst', role: 'Financial data processor.', coreFunctions: ['Invoice parsing', 'Coding verification', 'Dispute resolution'], gcpStack: ['Cloud SQL', 'Gemini Pro'] },
  { id: 'a8', index: '08', name: 'Cost Estimator', role: 'Transparent pricing tool.', coreFunctions: ['Procedural costing', 'Insurance adjusted estimates', 'Comparisons'], gcpStack: ['Cloud Functions', 'Gemini Flash'] },
  { id: 'a9', index: '09', name: 'Travel Coordinator', role: 'Logistics and planning.', coreFunctions: ['Itinerary building', 'Visa assistance', 'Accomodation booking'], gcpStack: ['Cloud Run', 'Firestore'] },
  { id: 'a10', index: '10', name: 'Clinical Research Assistant', role: 'Literature and data scout.', coreFunctions: ['Literature review', 'Clinical trial matching', 'Data synthesis'], gcpStack: ['Vertex AI', 'Cloud SQL'] },
  { id: 'a11', index: '11', name: 'Radiology Interpreter', role: 'Imaging support.', coreFunctions: ['Report generation', 'Findings flagging', 'Comparator analysis'], gcpStack: ['Vertex AI', 'Cloud Storage'] },
  { id: 'a12', index: '12', name: 'Lab Result Analyst', role: 'Diagnostic assistant.', coreFunctions: ['Trend visualization', 'Normal range mapping', 'Alert escalation'], gcpStack: ['Firestore', 'Gemini Pro'] },
  { id: 'a13', index: '13', name: 'Nutrition Advisor', role: 'Personalized wellness coach.', coreFunctions: ['Diet analysis', 'Recipe suggestions', 'Progress tracking'], gcpStack: ['Cloud Functions', 'Gemini Flash'] },
  { id: 'a14', index: '14', name: 'Mental Health Supporter', role: 'Emotional wellness monitor.', coreFunctions: ['Sentiment analysis', 'Coping strategy suggestions', 'Escalation'], gcpStack: ['Cloud Run', 'Firestore'] },
  { id: 'a15', index: '15', name: 'Legal Compliance', role: 'Regulatory guardian.', coreFunctions: ['HIPAA auditing', 'Policy review', 'Data privacy checks'], gcpStack: ['Cloud SQL', 'Gemini Pro'] },
  { id: 'a16', index: '16', name: 'Knowledge Manager', role: 'Centralized information hub.', coreFunctions: ['Document indexing', 'Semantic search', 'FAQ maintenance'], gcpStack: ['Vertex AI', 'Firestore'] }
];
