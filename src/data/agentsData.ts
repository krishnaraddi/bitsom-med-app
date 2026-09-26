export interface AIAgentSpec {
  id: string;
  index: string;
  name: string;
  category: 'Clinical & Diagnostics' | 'AYUSH & Rehabilitation' | 'Tourism & Concierge' | 'Operations, Revenue & Governance';
  role: string;
  coreFunctions: string[];
  inputs: string[];
  decisionLogic: string[];
  tools: string[];
  outputs: string[];
  memoryRequirements: {
    shortTerm: string;
    longTerm: string;
    vectorKnowledge: string;
  };
  humanEscalationConditions: string[];
  gcpStack: string[];
  slaLatency: string;
  collaboratesWith: string[];
  sampleExecution: {
    triggerScenario: string;
    reasoningTrace: string[];
    outputPayload: string;
  };
}

export const HEALGOA_AGENTS: AIAgentSpec[] = [
  {
    id: 'patient-concierge',
    index: '01',
    name: 'Patient Concierge Agent',
    category: 'Tourism & Concierge',
    role: 'Virtual Healthcare Travel Advisor & Multilingual First-Contact Orchestrator',
    coreFunctions: [
      'Patient profiling & demographic/cultural intake across 8 languages',
      'Disease symptom & medical history understanding',
      'Integrated Modern + AYUSH treatment pathway recommendations',
      'Dynamic multi-currency cost estimation (USD, EUR, AED, RUB, GBP, JPY, INR)',
      'Specialist & hospital shortlist matching in North & South Goa'
    ],
    inputs: [
      'Multilingual chat/voice/WhatsApp inquiry (English, Arabic, Russian, French, German, Japanese, Spanish, Hindi)',
      'Self-reported symptoms, prior diagnosis, budget ceiling, and travel dates',
      'Passport nationality, dietary preferences, and accompanying family details',
      'Historical consultation records or referral notes'
    ],
    decisionLogic: [
      'Parse clinical intent and urgency score using Gemini 2.5 Pro medical entity extraction',
      'Classify case into Acute Surgical, Elective Specialty, Preventive/Diagnostic, or Restorative AYUSH track',
      'Cross-reference patient budget and country of origin against NABH/JCI accredited Goa hospitals and AYUSH retreats',
      'Compute total landed cost range (Procedure + e-Medical Visa + Flight estimate + Post-op Wellness Stay) with 92% historical accuracy'
    ],
    tools: [
      'Vertex AI Agent Builder Router',
      'Goa Hospital Tariff & Package Estimator API',
      'Cloud Translation & Speech-to-Text v2 API',
      'Specialist Availability & Credential Graph',
      'Currency FX & Travel Cost Calculator'
    ],
    outputs: [
      'Structured Patient Intake Profile (FHIR R4 Patient + QuestionnaireResponse)',
      'Personalized 3-tier Treatment & Wellness Quote (Essential, Executive, Royal Recovery)',
      'Matched top-3 clinical specialists with video consultation booking links',
      'Handoff trigger to Clinical Decision Support & Medical Tourism Coordinator Agents'
    ],
    memoryRequirements: {
      shortTerm: 'Session conversation state in Firestore (last 50 turns, active language preference, uploaded file pointers)',
      longTerm: 'Longitudinal patient preference graph in Cloud Healthcare API FHIR store (allergies, cultural/halal/vegan requirements, past visits)',
      vectorKnowledge: 'Vertex AI Vector Search index of 450+ Goa clinical packages, 1,200+ specialist CVs, and Ministry of AYUSH guidelines'
    },
    humanEscalationConditions: [
      'Red-flag emergency symptoms detected (unstable angina, acute stroke, severe hemorrhage, suicidal ideation)',
      'Pediatric oncology or complex multi-organ transplant inquiries requiring immediate medical board triage',
      'Patient requests live human case manager or expresses distress/confusion > 2 consecutive turns'
    ],
    gcpStack: ['Gemini 2.5 Pro', 'Vertex AI Agent Builder', 'Firestore', 'Speech-to-Text', 'Text-to-Speech'],
    slaLatency: '1.2s P95 response',
    collaboratesWith: ['Clinical Decision Support Agent', 'Hospital Matching Agent', 'Medical Tourism Coordinator Agent'],
    sampleExecution: {
      triggerScenario: '62yo patient from Muscat, Oman inquiring in Arabic about bilateral knee replacement + post-op Ayurvedic pain management in Goa.',
      reasoningTrace: [
        'Detected language: Arabic (ar-OM) · Extracted condition: Bilateral Grade IV Osteoarthritis, Comorbidity: Controlled Type-2 Diabetes',
        'Queried Hospital Matching Agent: Selected Manipal Hospital Dona Paula & Victor Hospital Margao (Robotic TKR accredited)',
        'Queried AYUSH Recommendation Agent: Attached 14-day Janu Basti + Pizhichil rehabilitation protocol at Devaaya Ayurveda Retreat, Divar Island'
      ],
      outputPayload: 'Generated Integrated Package #HG-OM-8841: Robotic Bilateral TKR ($7,400) + 14-Day AYUSH Rehab ($2,100) vs $28,000 UAE benchmark (66% savings).'
    }
  },
  {
    id: 'clinical-decision-support',
    index: '02',
    name: 'Clinical Decision Support Agent',
    category: 'Clinical & Diagnostics',
    role: 'Diagnostic Synthesizer, Risk Stratifier & Second-Opinion Clinical Copilot',
    coreFunctions: [
      'Analyze multi-page pathology, discharge summaries, and lab reports via Document AI',
      'Summarize complex longitudinal diagnoses into structured clinical briefs',
      'Generate evidence-based treatment pathways aligned with NCCN/ESC/ICMR guidelines',
      'Calculate surgical & travel risk scores (ASA, RCRI, Caprini DVT risk for long-haul flights)',
      'Prepare structured Second Opinion dossiers for Goa hospital tumor/cardiac boards'
    ],
    inputs: [
      'Uploaded PDFs, HL7 FHIR bundles, lab panels, histopathology reports, and medication lists',
      'Outputs from Medical Imaging Agent (DICOM findings) and AYUSH Recommendation Agent',
      'Treating physician clinical notes and patient vitals history'
    ],
    decisionLogic: [
      'Extract biomarkers, lab abnormalities, and staging data via Healthcare Natural Language API & Document AI',
      'Evaluate flight-readiness and thromboembolism risk for air travel to Goa (Dabolim GOI / Mopa GOX)',
      'Check contraindications between patient current allopathic medications and proposed Ayurvedic/Siddha herbals',
      'Synthesize differential treatment options with citations and confidence intervals for physician review'
    ],
    tools: [
      'Cloud Document AI Medical Parser',
      'Cloud Healthcare API (FHIR R4 Observation & Condition)',
      'Drug-Herb-Allopathy Interaction Knowledge Graph',
      'Clinical Risk Calculators (ASA, MELD, EuroSCORE II, Caprini)',
      'PubMed / ICMR / NCCN RAG Grounding Tool'
    ],
    outputs: [
      'Physician-ready Clinical Summary Brief (SOAP format + Problem List)',
      'Pre-Travel Medical Clearance & Flight Risk Score (Low / Moderate / High)',
      'Evidence-graded Treatment Pathway options with expected length of stay (LOS)',
      'Second-Opinion Consensus Worksheet for specialist sign-off'
    ],
    memoryRequirements: {
      shortTerm: 'Active case diagnostic workspace in Firestore with clinician annotation diffs',
      longTerm: 'Full FHIR R4 DiagnosticReport, MedicationStatement, and RiskAssessment resources in Cloud Healthcare API',
      vectorKnowledge: 'Grounded medical literature index + Ministry of AYUSH Pharmacopoeia & Herb-Drug Interaction corpus'
    },
    humanEscalationConditions: [
      'Mandatory human-in-the-loop (HITL): All final diagnoses and surgical clearances require licensed MD/MS digital signature',
      'EuroSCORE II > 8% or ASA Class IV/V or Caprini DVT score > 8 prior to 6+ hour international flight',
      'Conflicting pathology vs imaging findings or suspected occult malignancy'
    ],
    gcpStack: ['Gemini 2.5 Pro', 'Document AI', 'Cloud Healthcare API', 'Vertex AI Vector Search'],
    slaLatency: '3.4s P95 per 30-page dossier',
    collaboratesWith: ['Medical Imaging Agent', 'AYUSH Recommendation Agent', 'Treatment Planner Agent'],
    sampleExecution: {
      triggerScenario: '58yo patient from Frankfurt, Germany uploading 42-page German cardiology dossier (Triple Vessel CAD, LVEF 44%, HbA1c 7.4%).',
      reasoningTrace: [
        'Translated & parsed 42-page German PDF via Document AI → Mapped 18 lab values and coronary angiography report to FHIR R4',
        'Computed EuroSCORE II: 2.18% (Low-Moderate) · Caprini DVT Flight Score: 6 (Prophylactic LMWH + compression advised for FRA-GOX flight)',
        'Flagged drug-herb rule: Hold Ayurvedic Arjuna bark extract during acute dual-antiplatelet titration; initiate post-week 3 recovery'
      ],
      outputPayload: 'Clinical Dossier #CDS-DE-409 ready for Chief Cardiothoracic Surgeon review; Off-Pump CABG + Phase-2 Cardiac Yoga cleared.'
    }
  }
];

export const MULTILINGUAL_CAPABILITIES = [
  { language: 'English', nativeName: 'English', code: 'en', sourceMarkets: 'UK, USA, Global', voiceModel: 'en-US-Neural2-F', clinicalDocSupport: 'Full FHIR-to-SOAP' },
  { language: 'Arabic', nativeName: 'العربية', code: 'ar', sourceMarkets: 'GCC (UAE, Oman, Qatar, KSA)', voiceModel: 'ar-XA-Wavenet-B', clinicalDocSupport: 'RTL UI / Clinical Arabic', samplePatientGreeting: 'أهلاً بك في HealGoa AI. كيف يمكننا مساعدتك في خطة علاجك في الهند؟', sampleAgentResponse: 'مرحباً، يسعدنا مساعدتك في ترتيب رحلتك العلاجية إلى جوا. قمنا بتحليل سجلك الطبي بنجاح.' },
  { language: 'Russian', nativeName: 'Русский', code: 'ru', sourceMarkets: 'Russia, CIS', voiceModel: 'ru-RU-Wavenet-D', clinicalDocSupport: 'Cyrillic Script support', samplePatientGreeting: 'Здравствуйте. Я хочу узнать о лечении колена в Гоа.', sampleAgentResponse: 'Здравствуйте! Мы подготовили персональный план лечения и реабилитации для вас.' },
  { language: 'French', nativeName: 'Français', code: 'fr', sourceMarkets: 'France, West Africa', voiceModel: 'fr-FR-Neural2-C', clinicalDocSupport: 'Medical French' },
  { language: 'German', nativeName: 'Deutsch', code: 'de', sourceMarkets: 'Germany, Switzerland', voiceModel: 'de-DE-Neural2-D', clinicalDocSupport: 'Medical German' },
  { language: 'Japanese', nativeName: '日本語', code: 'ja', sourceMarkets: 'Japan', voiceModel: 'ja-JP-Neural2-B', clinicalDocSupport: 'Medical Japanese' },
  { language: 'Spanish', nativeName: 'Español', code: 'es', sourceMarkets: 'Spain, LatAm', voiceModel: 'es-ES-Neural2-C', clinicalDocSupport: 'Medical Spanish' },
  { language: 'Hindi', nativeName: 'हिन्दी', code: 'hi', sourceMarkets: 'India Metro Travelers', voiceModel: 'hi-IN-Neural2-A', clinicalDocSupport: 'Medical Hindi' }
];
