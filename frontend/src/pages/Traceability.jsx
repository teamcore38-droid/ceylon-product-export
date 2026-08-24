import React from 'react';
import { ShieldCheck, ThermometerSnowflake, Truck, CheckCircle2, Sprout, Sparkles } from 'lucide-react';

export default function Traceability() {
  const steps = [
    {
      num: '01',
      title: 'Ethical Plantation Harvesting',
      subtitle: 'Certified Sustainable Agricultural Groves',
      desc: 'Selected harvesting of mature 7-8 month golden King Coconuts, unripened Green Papayas, and starch-dense Cassava roots from certified growers in Kurunegala, Gampaha, and Puttalam.',
      icon: '🌿'
    },
    {
      num: '02',
      title: 'Hygienic Trimming & Processing',
      subtitle: 'Ozone Sanitization & Diamond Shaping',
      desc: 'Fruit outer de-fibering, precision diamond-cut shaping for King Coconut, latex extraction for industrial Papaya, and root washing for Tapioca in ISO 22000 processing facilities.',
      icon: '✂️'
    },
    {
      num: '03',
      title: 'Food-Grade Export Packaging',
      subtitle: 'Mold Prevention & Biodegradable Wrap',
      desc: 'Anti-fungal stem treatment, shrink wrapping, and packing in ventilated heavy-duty 12-nut corrugated cartons or 10kg/15kg export boxes.',
      icon: '📦'
    },
    {
      num: '04',
      title: 'Controlled Reefer Container Freight',
      subtitle: '12°C - 14°C Marine Transit Protocol',
      desc: 'Pre-cooling cargo down to target temperature and sealing in controlled atmosphere Reefer containers. Shipped via direct fast maritime routes from Colombo Port to international hubs.',
      icon: '🚢'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block">Harvest-to-Port Quality Assurance</span>
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-white">
          Cold-Chain Traceability & Integrity
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          From plantation soil in Sri Lanka to final maritime discharge, our strict cold-chain and phytosanitary protocol guarantees 100% fresh arrival.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 transition-all space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-2xl">{step.icon}</span>
              <span className="font-mono text-xl font-extrabold text-amber-400">{step.num}</span>
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white mb-0.5">{step.title}</h3>
              <span className="text-[11px] text-emerald-400 font-semibold block mb-1.5">{step.subtitle}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
