"use client";

import React, { useState } from 'react';
import { DollarSign, Landmark, Sparkles, TrendingUp, Users, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function FranchiseSimulator() {
  const [floorSize, setFloorSize] = useState(3000); // 1500 to 6000 sq ft
  const [memberCount, setMemberCount] = useState(350); // 150 to 800 members
  const [avgFee, setAvgFee] = useState(120); // 80 to 250 USD / month

  // Financial models
  const setupCostPerSqFt = 75; // USD setup (interior luxury design, premium dumbbells, sound system)
  const estimatedSetupCost = floorSize * setupCostPerSqFt;
  
  const estimatedMonthlyRevenue = memberCount * avgFee;
  
  // Operating cost estimate (rent, staff, zumba instructors, light/AC) roughly 62% of revenue or fixed 
  const estRent = floorSize * 2.5; 
  const estStaffInstructors = 8000;
  const estOtherUtilities = 3000;
  const runningExpenses = estRent + estStaffInstructors + estOtherUtilities;
  
  // High-profit margin of luxury gym franchise model: approx 35% - 48%
  const estMonthlyProfit = Math.max(0, estimatedMonthlyRevenue - runningExpenses);
  const profitMarginPercent = estimatedMonthlyRevenue > 0 ? (estMonthlyProfit / estimatedMonthlyRevenue) * 100 : 0;
  
  const paybackMonths = estMonthlyProfit > 0 ? (estimatedSetupCost / estMonthlyProfit) : 99;

  // Franchise form submittal
  const [franchiseBtnText, setFranchiseBtnText] = useState("SUBMIT BRANCH PROPOSAL");
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', investment: '250k' });
  const [submitted, setSubmitted] = useState(false);

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFranchiseBtnText("PROCESSING APPLICATION...");
    setTimeout(() => {
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Simulator Panel - Span 7 */}
        <div className="lg:col-span-7 bg-[#111014] p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-[9px] font-black text-amber-400 tracking-widest uppercase">
                <Landmark className="w-3 h-3 text-amber-400" />
                <span>INTERACTIVE ROI PROJECTION CALCULATOR</span>
              </div>
              <h3 className="text-3xl font-black text-white font-display mt-2 uppercase tracking-tight">
                ESTIMATE YOUR SANCTUARY RETURNS
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mt-1">
                ZENOVA operates on a highly optimized, high-yield boutique fitness business format. Adjust parameters below to see estimated setup costs, gross revenues, and breakthrough profits.
              </p>
            </div>

            {/* Sliders container */}
            <div className="space-y-6 pt-2">
              
              {/* Slider 1: Floor Square Footage */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase mb-2">
                  <span className="text-gray-300">Target Floor Area (Size)</span>
                  <span className="text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded text-xs">
                    {floorSize.toLocaleString()} sq. ft.
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="6000"
                  step="250"
                  value={floorSize}
                  onChange={(e) => setFloorSize(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-300 focus:bg-amber-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold mt-1.5 uppercase">
                  <span>2,000 SQ.FT (Boutique Suite)</span>
                  <span>6,000 SQ.FT (Large Pavilion)</span>
                </div>
              </div>

              {/* Slider 2: Active Monthly Members */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase mb-2">
                  <span className="text-gray-300">Active Retayled Members Count</span>
                  <span className="text-[#FFEE00] bg-[#FFEE00]/10 border border-[#FFEE00]/25 px-2 py-0.5 rounded text-xs">
                    {memberCount} Active Members
                  </span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="1000"
                  step="25"
                  value={memberCount}
                  onChange={(e) => setMemberCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-300 focus:bg-amber-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold mt-1.5 uppercase">
                  <span>150 MEMBERS</span>
                  <span>1,000 MEMBERS (CAPACITY LIMIT)</span>
                </div>
              </div>

              {/* Slider 3: Average Fee */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase mb-2">
                  <span className="text-gray-300">Avg Monthly Tier Fee per Member</span>
                  <span className="text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded text-xs">
                    ${avgFee} USD / month
                  </span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="250"
                  step="10"
                  value={avgFee}
                  onChange={(e) => setAvgFee(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-300 focus:bg-amber-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold mt-1.5 uppercase">
                  <span>$80 (Standard Package)</span>
                  <span>$250 (Luxury Personal VIP)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Core Business Note */}
          <div className="mt-8 pt-4 border-t border-white/5 text-[9px] text-gray-400 leading-normal">
            *This is an estimate based on average industry franchise locations in standard metropolitan zones. Setup assets calculate pre-engineered premium audio systems, interior gold plating, mirrored training grids, and branding setup tokens. Actual costs may fluctuate depending on local property rates.
          </div>

        </div>

        {/* Projections Dashboard Card - Span 5 */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Key Metrics block */}
          <div className="bg-gradient-to-br from-[#1C1920] to-[#0D0B0E] p-6 rounded-3xl border-2 border-amber-500/30 shadow-2xl space-y-5">
            <p className="text-[10px] tracking-widest text-[#FFEE00] font-black uppercase">LIVE PROJECTION PROFILE</p>
            
            <div className="space-y-4">
              
              <div>
                <p className="text-[10px] uppercase text-gray-400 font-bold">Estimated Franchise Setup Investment</p>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <span className="text-3xl font-black text-white font-display">${estimatedSetupCost.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">USD</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold">Estimated Gross Monthly Revenue</p>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <span className="text-3xl font-black text-[#FFEE00] font-display">${estimatedMonthlyRevenue.toLocaleString()}</span>
                  <span className="text-xs text-gray-400">/ month</span>
                </div>
              </div>

              <div className="p-4 bg-zinc-950/80 rounded-2xl border border-white/5 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 font-medium">Estimated Operational Outflow:</span>
                  <span className="text-white font-mono">${runningExpenses.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 font-medium">Model Franchise Profit:</span>
                  <span className="text-emerald-400 font-mono font-bold">+${estMonthlyProfit.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2">
                  <span className="text-[#FFEE00] font-bold">Model Margin Rate:</span>
                  <span className="text-[#FFEE00] font-black font-mono">{profitMarginPercent.toFixed(1)}% High Yield</span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase text-gray-400 font-bold">Payback / ROI Breakthrough</p>
                  <p className="text-sm font-black text-white mt-1 uppercase">
                    {estMonthlyProfit > 0 ? (
                      `~ ${paybackMonths.toFixed(1)} Months`
                    ) : (
                      "Increase parameters"
                    )}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FFEE00]/10 border border-[#FFEE00]/40 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#FFEE00]" />
                </div>
              </div>

            </div>
          </div>

          {/* Secure Lead form if they want to open a branch */}
          <div className="bg-[#111014] p-6 rounded-3xl border border-white/5 flex-1 flex flex-col justify-between">
            {!submitted ? (
              <form onSubmit={handleFranchiseSubmit} className="space-y-3.5">
                <h4 className="text-xs font-black text-[#FFEE00] tracking-widest uppercase">RECEIVE CORRES_ PROSPECTUS</h4>
                
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl input-premium"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl input-premium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp No."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl input-premium"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Target City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl input-premium"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-wider text-gray-400 block mb-1 font-bold">Planned Capital Allocation</label>
                  <select
                    value={formData.investment}
                    onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#1D1B22] border border-white/10 text-white"
                  >
                    <option value="150k">$150,000 - $200,000 USD</option>
                    <option value="250k">$200,000 - $350,000 USD</option>
                    <option value="500k">$350,000 - $600,000 USD</option>
                    <option value="above">Above $600,000 USD / Multi-Unit</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-black font-black text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                  {franchiseBtnText}
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">PROPOSAL FILED SUCCESSFULLY</h4>
                <p className="text-[10px] text-gray-400 leading-relaxed max-w-xs">
                  We&apos;ve initialized communication flags. Mr. Richard Vance, ZENOVA Director of Franchise Growth, will call you at <strong className="text-white">{formData.phone}</strong> with our detailed digital prospectus portfolio and layout specifications.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest underline pt-3"
                >
                  Edit parameters & recalculate
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
