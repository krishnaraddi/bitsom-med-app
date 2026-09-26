import React, { useState } from 'react';
import { AgentsExplorerAndSandbox } from './components/AgentsExplorerAndSandbox';
import { PatientJourneyAndWorkflows } from './components/PatientJourneyAndWorkflows';
import { SystemAndGcpArchitecture } from './components/SystemAndGcpArchitecture';
import { PlatformPortalsSimulator } from './components/PlatformPortalsSimulator';
import { InvestorBlueprintAndFinancials } from './components/InvestorBlueprintAndFinancials';
import { INVESTOR_PITCH_BLUEPRINT } from './data/investorBlueprintData';
import {
  Printer,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';


type ActiveSection = 'overview' | 'agents' | 'workflows' | 'architecture' | 'portals' | 'investor' | 'full-blueprint';

const PRIMARY_USERS = [
  { name: 'International Patients', detail: 'UK, EU, GCC, Russia/CIS, Africa & SAARC surgical & diagnostic travelers' },
  { name: 'Domestic Medical Tourists', detail: 'Metro patients from Mumbai, Delhi NCR, Bengaluru seeking coastal recovery' },
  { name: 'Senior Citizens', detail: 'Long-stay winter & monsoon joint, cardiac, and geriatric rejuvenation cohorts' },
  { name: 'Chronic Disease Patients', detail: 'Autoimmune, metabolic, diabetes, spine & oncology post-chemo rehabilitation' },
  { name: 'Wellness Seekers', detail: 'Authentic 14–28 day classical Panchakarma, Yoga & mental burnout reset' },
  { name: 'Corporate Health Travelers', detail: 'CXO Whole-Body 3T MRI longevity diagnostics & executive stress retreats' }
];

const SUPPLY_SIDE_PARTNERS = [
  'Tertiary Hospitals (NABH/JCI)',
  'Specialty Clinics (IVF, Dental, Ortho, Cosmetic)',
  'Ayurvedic Centers (AIIA Goa & NABH Panchakarma)',
  'Certified Yoga & Naturopathy Centers',
  'Coastal & Hinterland Wellness Resorts',
  '5-Star & Accessible Companion Hotels',
  'GMP & AYUSH Pharmacies',
  'NABL Molecular & Pathology Laboratories',
  '3T MRI / PET-CT Diagnostic Centers',
  'ALS Cardiac & Green-Corridor Ambulance Services',
  'Certified Medical Facilitators & Interpreters',
  'Global Health Insurers & TPAs (NHCX)',
  'Government Agencies (Goa Tourism, Ministry of AYUSH, FRRO)'
];

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview');

  const handlePrintBlueprint = () => {
    setActiveSection('full-blueprint');
    setTimeout(() => {
      window.print();
    }, 250);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between no-print">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('overview');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap"
        >
          HealGoa AI
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveSection('overview')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'overview' ? 'text-teal-700 font-semibold underline underline-offset-8' : ''
            }`}
          >
            Executive Overview
          </button>
          <button
            onClick={() => setActiveSection('agents')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'agents' ? 'text-teal-700 font-semibold underline underline-offset-8' : ''
            }`}
          >
            16 AI Agents
          </button>
          <button
            onClick={() => setActiveSection('workflows')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'workflows' ? 'text-teal-700 font-semibold underline underline-offset-8' : ''
            }`}
          >
            Journey & Workflows
          </button>
          <button
            onClick={() => setActiveSection('architecture')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'architecture' ? 'text-teal-700 font-semibold underline underline-offset-8' : ''
            }`}
          >
            Cloud & APIs
          </button>
          <button
            onClick={() => setActiveSection('portals')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'portals' ? 'text-teal-700 font-semibold underline underline-offset-8' : ''
            }`}
          >
            11 Portals
          </button>
        </nav>

        {/* Zone 3: 2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setActiveSection('investor')}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'investor'
                ? 'bg-teal-50 border-teal-600 text-teal-900'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Investor Deck & ROI
          </button>
          <button
            onClick={() =>
              setActiveSection(activeSection === 'full-blueprint' ? 'overview' : 'full-blueprint')
            }
            className="px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            {activeSection === 'full-blueprint' ? 'Tabbed Workspace' : 'Full Master Blueprint'}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden flex overflow-x-auto gap-1 px-4 py-2 bg-white border-b border-slate-200 no-print">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'agents', label: '16 AI Agents' },
          { id: 'workflows', label: '7 Workflows' },
          { id: 'architecture', label: 'GCP & APIs' },
          { id: 'portals', label: '11 Portals' },
          { id: 'investor', label: 'Investor & ROI' },
          { id: 'full-blueprint', label: 'All Deliverables' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as ActiveSection)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap ${
              activeSection === item.id ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Content Container */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-8 py-8 space-y-12">
        {/* Hero & 10-Deliverable Blueprint Navigator (Shown on Overview & Full Blueprint) */}
        {(activeSection === 'overview' || activeSection === 'full-blueprint') && (
          <section className="space-y-8">
            {/* Hero Banner */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
              <div className="max-w-4xl space-y-4">
                <div className="text-xs font-mono-tabular text-teal-400">
                  Government of India "Heal in India" Initiative · State of Goa Deployment · Google Cloud Vertex AI
                </div>
                <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12]">
                  HealGoa AI: Integrated Medical Tourism &amp; AYUSH Agentic Ecosystem
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  An enterprise-grade Vertical AI Agentic Platform uniting <strong className="text-white">Modern Medicine, Ayurveda, Yoga, Unani, Siddha, and Homeopathy</strong> with autonomous visa facilitation, multi-hospital outcome matching, coastal resort rehabilitation, and 90-day wearable telemetry.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
                  <button
                    onClick={() => setActiveSection('agents')}
                    className="px-4 py-2.5 text-xs font-semibold bg-teal-500 text-slate-950 rounded-lg hover:bg-teal-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Launch 16-Agent Interactive Sandbox →
                  </button>
                  <button
                    onClick={() => setActiveSection('portals')}
                    className="px-4 py-2.5 text-xs font-medium bg-slate-800 text-white border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Explore 11 Live Portals &amp; WhatsApp AI
                  </button>
                  <button
                    onClick={handlePrintBlueprint}
                    className="px-4 py-2.5 text-xs font-medium bg-transparent text-slate-300 border border-slate-700 rounded-lg hover:text-white hover:border-slate-500 transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Print Complete Blueprint
                  </button>
                </div>
              </div>

              {/* Key Quantitative Proof Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 pt-6 border-t border-slate-800">
                <div>
                  <span className="text-[11px] font-mono-tabular text-slate-400 block">Specialized AI Agents</span>
                  <span className="text-xl font-mono-tabular font-semibold text-white">16 Autonomous</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tabular text-slate-400 block">Integrated Systems</span>
                  <span className="text-xl font-mono-tabular font-semibold text-teal-400">Allopathy + 5 AYUSH</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tabular text-slate-400 block">Platform Modules</span>
                  <span className="text-xl font-mono-tabular font-semibold text-white">11 Portals &amp; Apps</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tabular text-slate-400 block">Multilingual Voice/Chat</span>
                  <span className="text-xl font-mono-tabular font-semibold text-white">8 Global Languages</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tabular text-slate-400 block">Patient Cost Savings</span>
                  <span className="text-xl font-mono-tabular font-semibold text-emerald-400">65% – 85% vs US/EU</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tabular text-slate-400 block">Year 3 Projected GMV</span>
                  <span className="text-xl font-mono-tabular font-semibold text-teal-300">$210.0M USD</span>
                </div>
              </div>
            </div>

            {/* 10 Required Deliverables Interactive Index */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Master Deliverables Directory (10 Enterprise Blueprint Deliverables)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Click any deliverable card below to open its interactive architectural diagram, specification, or financial simulator
                  </p>
                </div>
                <span className="text-xs font-mono-tabular text-teal-700">10 / 10 Deliverables Complete</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {INVESTOR_PITCH_BLUEPRINT.tenDeliverablesIndex.map((deliv) => (
                  <button
                    key={deliv.number}
                    onClick={() => setActiveSection(deliv.sectionTab as ActiveSection)}
                    className="p-3.5 rounded-lg border border-slate-200 hover:border-teal-600 bg-slate-50/50 hover:bg-white text-left transition-all group flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono-tabular text-teal-700 font-semibold">
                        <span>Deliverable {deliv.number}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <div className="text-xs font-semibold text-slate-900 mt-1 group-hover:text-teal-800">
                        {deliv.title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {deliv.summary}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Target Users & Supply-Side Ecosystem Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">
                    Demand Side: 6 Primary Target User Cohorts
                  </h3>
                  <span className="text-xs font-mono-tabular text-slate-500">Global + Domestic Inbound</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRIMARY_USERS.map((u, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                      <div className="text-xs font-semibold text-slate-900">0{i + 1}. {u.name}</div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{u.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">
                    Supply Side: 13 Integrated Goa Provider &amp; Partner Categories
                  </h3>
                  <span className="text-xs font-mono-tabular text-teal-700">Single FHIR + Escrow Grid</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {SUPPLY_SIDE_PARTNERS.map((partner, i) => (
                    <div key={i} className="px-3 py-2 rounded bg-slate-50 border border-slate-200/70 text-slate-700 flex items-center gap-2">
                      <span className="font-mono-tabular text-[11px] text-teal-700 font-semibold">
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span className="truncate">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section Routing: Overview also renders Agents + Workflows preview or dedicated tabs */}
        {(activeSection === 'overview' || activeSection === 'agents' || activeSection === 'full-blueprint') && (
          <section id="agents-section">
            <AgentsExplorerAndSandbox />
          </section>
        )}

        {(activeSection === 'workflows' || activeSection === 'full-blueprint') && (
          <section id="workflows-section">
            <PatientJourneyAndWorkflows />
          </section>
        )}

        {(activeSection === 'architecture' || activeSection === 'full-blueprint') && (
          <section id="architecture-section">
            <SystemAndGcpArchitecture />
          </section>
        )}

        {(activeSection === 'portals' || activeSection === 'full-blueprint') && (
          <section id="portals-section">
            <PlatformPortalsSimulator />
          </section>
        )}

        {(activeSection === 'investor' || activeSection === 'full-blueprint') && (
          <section id="investor-section">
            <InvestorBlueprintAndFinancials />
          </section>
        )}
      </main>

      {/* Clean Editorial Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 sm:px-8 mt-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <strong className="text-slate-900">HealGoa AI</strong> · Integrated Medical Tourism &amp; AYUSH Agentic Ecosystem · Aligned with the Government of India "Heal in India" Initiative
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveSection('full-blueprint')}
              className="hover:text-slate-900 underline underline-offset-4 cursor-pointer"
            >
              View All 10 Deliverables
            </button>
            <span>·</span>
            <button
              onClick={handlePrintBlueprint}
              className="hover:text-slate-900 underline underline-offset-4 cursor-pointer"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

