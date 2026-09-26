import React from 'react';

export const SystemAndGcpArchitecture = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">System & GCP Architecture</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Infrastructure</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cloud Run (Serverless)</li>
          <li>Firebase Firestore (NoSQL)</li>
          <li>Cloud SQL (PostgreSQL)</li>
          <li>Firebase Auth</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">AI Integration</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Gemini 3.1 Flash-Lite</li>
          <li>Vertex AI API</li>
        </ul>
      </div>
    </div>
  </div>
);
