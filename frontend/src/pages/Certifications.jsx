import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Sri Lanka Coconut Development Authority (CDA)',
      reg: 'Registration No: CDA/EXP/2024/0912',
      desc: 'Official statutory authorization for global export of fresh King Coconuts, desiccated coconut, and coconut-based products.',
      badge: 'Statutory License'
    },
    {
      title: 'Sri Lanka Export Development Board (EDB)',
      reg: 'EDB Registered Exporter Status',
      desc: 'Accredited international trade entity verified for quality management, trade compliance, and export documentation.',
      badge: 'National Trade Board'
    },
    {
      title: 'ISO 22000 & HACCP Food Safety',
      reg: 'Certificate ID: FSMS-ISO-22000-LK',
      desc: 'Hazard Analysis Critical Control Point (HACCP) and international food safety management system covering washing, trimming, and packaging.',
      badge: 'Global Safety'
    },
    {
      title: 'USDA & EU Organic Certification',
      reg: 'CU-892401 Organic Certified',
      desc: 'Verifiable organic accreditation confirming zero synthetic pesticides, chemical fertilizers, or GMO interventions.',
      badge: '100% Organic'
    },
    {
      title: 'Phytosanitary Export Certification',
      reg: 'National Plant Quarantine Service (NPQS)',
      desc: 'Every container shipment is inspected and sealed by NPQS officers to guarantee pest-free and disease-free plant cargo.',
      badge: 'Quarantine Clearance'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block">Compliance & Accreditation</span>
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-white">
          Certifications & Standards Hub
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Our production facilities and export operations strictly comply with global food safety, statutory coconut authority registrations, and organic farming accreditations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-amber-500/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                {c.badge}
              </span>
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white mb-0.5">{c.title}</h3>
              <span className="text-[11px] font-mono text-amber-400 block mb-1.5">{c.reg}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
