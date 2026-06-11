"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Contact, Goal, CheckCircle, Flame, Dumbbell, Receipt, Sparkles, Smile } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  icon: string;
  description: string;
  spotsLeft: number;
}

const COURSES: Course[] = [
  { id: "zumba", name: "Zumba Energy Blast", icon: "🔥", description: "High-octane dance cardio designed to burn 800+ calories while having unforgettable fun.", spotsLeft: 3 },
  { id: "yoga", name: "Divine Inner Yoga", icon: "🧘‍♀️", description: "Mindful postures, flexibility restorative flow, and deep breathing to release stress and realign posture.", spotsLeft: 5 },
  { id: "strength", name: "Luxury Strength Lab", icon: "🏋️‍♀️", description: "Safe weight training with elite coaches to sculpt high-performance curves and posture alignment.", spotsLeft: 2 },
  { id: "loss", name: "Metabolic HIIT Shred", icon: "⚡", description: "Interval circuit training designed for accelerated weight loss, cardiovascular stamina, and tone.", spotsLeft: 4 }
];

const TIME_SLOTS = [
  { time: "06:30 AM", label: "DAWN GLOW SHRED", status: "Highly Demanded" },
  { time: "09:00 AM", label: "GODDESS LIFT RECON", status: "Sleek Energy" },
  { time: "11:00 AM", label: "ZEN YOGA ALIGN", status: "Deep Restorative" },
  { time: "05:30 PM", label: "SUNSET BEAT ZUMBA", status: "Dance Power" },
  { time: "07:00 PM", label: "NIGHT GLOW METCON", status: "Absolute Strength" }
];

const GOALS = [
  "Weight Loss & Body Shredding",
  "Lean Muscle Toning & Power",
  "Stress Release & Mind Yoga",
  "Cardiovascular Endurance / Zumba",
  "Post-Pregnancy Recovery"
];

const DATES = [
  { dayName: "MON", dateStr: "25", monthStr: "MAY", fullDate: "Monday, May 25, 2026" },
  { dayName: "TUE", dateStr: "26", monthStr: "MAY", fullDate: "Tuesday, May 26, 2026" },
  { dayName: "WED", dateStr: "27", monthStr: "MAY", fullDate: "Wednesday, May 27, 2026" },
  { dayName: "THU", dateStr: "28", monthStr: "MAY", fullDate: "Thursday, May 28, 2026" },
  { dayName: "FRI", dateStr: "29", monthStr: "MAY", fullDate: "Friday, May 29, 2026" },
  { dayName: "SAT", dateStr: "30", monthStr: "MAY", fullDate: "Saturday, May 30, 2026" },
  { dayName: "SUN", dateStr: "31", monthStr: "MAY", fullDate: "Sunday, May 31, 2026" },
];

export default function SlotBooking() {
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0].id);
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0].time);
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0]);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(true);

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [generatedPassCode, setGeneratedPassCode] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    // Generate a beautiful, unique pass code
    const randomCode = `ZENOVA-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedPassCode(randomCode);
    setBookingConfirmed(true);
  };

  const activeCourseObj = COURSES.find(c => c.id === selectedCourse);

  return (
    <div className="w-full">
      {!bookingConfirmed ? (
        <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Columns - Span 7 */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Workout Program */}
            <div className="bg-[#111014] p-5 rounded-2xl border border-white/5 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#FFEE00] text-black text-xs font-black flex items-center justify-center">1</span>
                <span className="text-sm font-bold tracking-wider text-white uppercase">CHOOSE YOUR WORKOUT TRACK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COURSES.map((course) => {
                  const isSelected = selectedCourse === course.id;
                  return (
                    <div
                      key={course.id}
                      onClick={() => setSelectedCourse(course.id)}
                      className={`p-4 rounded-xl cursor-pointer border transition-all ${
                        isSelected
                          ? 'bg-[#FFEE00]/5 border-[#FFEE00] shadow-[0_0_15px_rgba(255,238,0,0.1)]'
                          : 'bg-[#151419] border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{course.icon}</span>
                        <span className={`text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded ${
                          course.spotsLeft <= 2 ? 'bg-rose-500/10 text-rose-500' : 'bg-[#FFEE00]/10 text-[#FFEE00]'
                        }`}>
                          {course.spotsLeft} SPOTS LEFT
                        </span>
                      </div>
                      <h4 className="text-white text-xs font-black tracking-widest uppercase mt-3">{course.name}</h4>
                      <p className="text-[10px] text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">{course.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Date & Time */}
            <div className="bg-[#111014] p-5 rounded-2xl border border-white/5 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#FFEE00] text-black text-xs font-black flex items-center justify-center">2</span>
                <span className="text-sm font-bold tracking-wider text-white uppercase">CHOOSE DATE & SESSION TIME</span>
              </div>

              {/* Horizontal Date Picker */}
              <div className="mb-4">
                <label className="text-[10px] uppercase font-black tracking-wider text-[#FFEE05] block mb-2">Select Date (7-Day Schedule)</label>
                <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
                  {DATES.map((date, idx) => {
                    const isSelected = selectedDateIdx === idx;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedDateIdx(idx)}
                        className={`flex-shrink-0 w-[64px] py-2.5 rounded-lg border flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#FFEE00] text-black border-[#FFEE00] shadow-[0_0_10px_rgba(255,238,0,0.3)]'
                            : 'bg-[#151419] text-gray-400 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <span className="text-[9px] font-bold uppercase tracking-wider">{date.dayName}</span>
                        <span className="text-lg font-black tracking-tighter leading-none mt-1">{date.dateStr}</span>
                        <span className="text-[8px] font-bold uppercase mt-0.5">{date.monthStr}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Selection */}
              <div>
                <label className="text-[10px] uppercase font-black tracking-wider text-[#FFEE05] block mb-2">Select Glowing Time Slot (Active Group Classes)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot.time;
                    return (
                      <button
                        type="button"
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-[#FFEE00]/10 border-[#FFEE00]/90 text-white shadow-[0_0_15px_rgba(255,238,0,0.15)]'
                            : 'bg-[#151419] border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <Clock className={`w-4 h-4 ${isSelected ? 'text-[#FFEE00]' : 'text-gray-500'}`} />
                          <div>
                            <span className="text-xs font-black tracking-widest block">{slot.time}</span>
                            <span className="text-[9px] text-gray-500 block font-bold tracking-wider uppercase">{slot.label}</span>
                          </div>
                        </div>
                        <span className={`text-[8px] font-black tracking-wider px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-[#FFEE00] text-black' : 'bg-white/5 text-gray-400'
                        }`}>
                          {slot.status}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Goals Selection */}
            <div className="bg-[#111014] p-5 rounded-2xl border border-white/5 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#FFEE00] text-black text-xs font-black flex items-center justify-center">3</span>
                <span className="text-sm font-bold tracking-wider text-white uppercase">WHAT IS YOUR PRIMARY TRANSFORMATION GOAL?</span>
              </div>
              <p className="text-[10px] text-gray-500 mb-3">Our elite standard ensures program personalization tailored specifically for your target body metrics and schedule constraints.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {GOALS.map((goal) => {
                  const isSelected = selectedGoal === goal;
                  return (
                    <button
                      type="button"
                      key={goal}
                      onClick={() => setSelectedGoal(goal)}
                      className={`p-2.5 rounded-lg border text-left text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#FFEE00] text-black border-[#FFEE00] shadow-[0_0_10px_rgba(255,238,0,0.2)]'
                          : 'bg-[#151419] text-gray-300 border-white/5 hover:border-white/10'
                      }`}
                    >
                      🌱 {goal}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Secure Checkout / Lead area - Span 5 */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#151419] to-[#0A0A0B] p-6 rounded-2xl border-2 border-[#FFEE00]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] space-y-6">
            
            <div className="text-center pb-4 border-b border-white/5">
              <div className="inline-block px-3 py-1 bg-[#FFEE00]/10 border border-[#FFEE00]/30 rounded-full text-[10px] font-black text-[#FFEE00] tracking-widest uppercase mb-2">
                FREE TRIAL PASS REQUEST
              </div>
              <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">SECURE YOUR VISITATION</h3>
              <p className="text-[11px] text-gray-400 mt-1">Fill out metrics to instantly generate your VIP access ticket token code</p>
            </div>

            {/* Form Inputs */}
            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase font-black tracking-wider text-gray-400 block mb-1.5">Your Full Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500"><Contact className="w-4 h-4" /></span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Samantha Miller"
                    className="w-full pl-9 pr-4 py-2 text-xs rounded-xl input-premium"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black tracking-wider text-gray-400 block mb-1.5">WhatsApp / Phone Number</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-[#25D366] font-bold text-xs">WA</span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 720-1234"
                    className="w-full pl-10 pr-4 py-2 text-xs rounded-xl input-premium"
                  />
                </div>
                <span className="text-[9px] text-gray-500 mt-1 block">We send your confirmation pass and slot timings directly to your WhatsApp.</span>
              </div>

              <div className="bg-[#1C1A20] p-4 rounded-xl border border-white/5 space-y-3">
                <p className="text-[10px] font-black text-[#FFEE00] tracking-wider uppercase flex items-center gap-1.5">
                  <Receipt className="w-3.5 h-3.5" />
                  CONFIRMATION REVENUE
                </p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Class Booking Fee</span>
                  <span className="line-through text-gray-500">$95.00</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Personalized Fitness Assessment</span>
                  <span className="line-through text-gray-500">$50.00</span>
                </div>
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2.5 font-bold">
                  <span className="text-white">VIP Trial Entrance Ticket</span>
                  <span className="text-[#FFEE00]">FREE ($0.0)</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="agreed"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 accent-[#FFEE00]"
                />
                <label htmlFor="agreed" className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">
                  I agree that ZENOVA Sanctuary is exclusively for women. I consent to receive booking updates on WhatsApp.
                </label>
              </div>

              <button
                type="submit"
                disabled={!name || !phone || !agreedTerms}
                className="w-full py-3.5 rounded-xl bg-[#FFEE00] hover:bg-[#EBC600] disabled:opacity-50 disabled:cursor-not-allowed text-black font-black text-xs tracking-widest transition-all duration-300 uppercase shadow-[0_10px_30px_rgba(255,238,0,0.15)] flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 animate-bounce" />
                CLAIM MY FREE GOLDEN PASS
              </button>

              <div className="flex items-center justify-center gap-1 text-center text-[10px] text-gray-500 mt-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#FFEE00]" />
                <span>SSL Secured Verification // Privacy Guaranteed</span>
              </div>
            </div>

          </div>

        </form>
      ) : (
        /* Secure Success Ticket Screen - VERY PREMIUM, NOT ORDINARY */
        <div className="max-w-2xl mx-auto bg-black text-white rounded-3xl border-2 border-[#FFEE00] relative overflow-hidden shadow-[0_0_50px_#FFEE00]/25 animate-pop">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFEE00]/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-900 rounded-full blur-2xl -z-0"></div>

          {/* Golden glow bars */}
          <div className="w-full h-2.5 bg-gradient-to-r from-black via-[#FFEE00] to-black"></div>

          <div className="p-8 sm:p-10 relative z-10 space-y-6">
            
            {/* Success Heading */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-[#FFEE00] rounded-full mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(255,238,0,0.4)]">
                <CheckCircle className="w-9 h-9 text-black stroke-[2.5]" />
              </div>
              <h3 className="text-3xl font-black font-display tracking-tight text-white uppercase pt-2">YOU HAVE INFILTRATED</h3>
              <p className="text-xs text-[#FFEE00] tracking-widest font-bold uppercase">ZENOVA VIP TRIAL ACCESS GUARANTEED</p>
              <p className="text-xs text-gray-400 max-w-md mx-auto">We&apos;ve reserved this space for you. A personal trainer from the team will text your WhatsApp with instructions within 15 minutes.</p>
            </div>

            {/* Custom Interactive Pass Badge */}
            <div className="bg-[#111014] rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl">
              <div className="bg-[#1C1920] px-6 py-4 border-b border-white/5 flex flex-wrap justify-between items-center gap-2">
                <div>
                  <span className="text-[10px] text-[#FFEE00] font-black tracking-widest uppercase block">GOLD VIP TRIAL ACCESS</span>
                  <span className="text-lg font-black tracking-tighter text-white">ZENOVA FITNESS SANCTUARY</span>
                </div>
                <div className="px-3 py-1 bg-black rounded-lg border border-white/10 text-center">
                  <span className="text-[8px] text-gray-500 block uppercase font-bold">VIP CODE</span>
                  <span className="text-xs font-black text-[#FFEE00] font-mono tracking-widest">{generatedPassCode}</span>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium border-b border-dashed border-white/15">
                
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block uppercase ">GUEST MEMBER</span>
                    <span className="text-white font-bold">{name.toUpperCase()}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block uppercase">VERIFIED SECURE LINK</span>
                    <span className="text-emerald-500 font-bold text-[11px] flex items-center gap-1">
                      🟢 {phone} (WhatsApp ACTIVE)
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block uppercase">TRANSFORMATION FOCUS</span>
                    <span className="text-white font-bold">{selectedGoal}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block uppercase">RESERVED WORKOUT TRACK</span>
                    <span className="text-[#FFEE00] font-bold uppercase">{COURSES.find(c=>c.id === selectedCourse)?.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block uppercase">DATE OF ENTRANCE</span>
                    <span className="text-white font-bold">{DATES[selectedDateIdx].fullDate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block uppercase">SESSION LOCK TIMING</span>
                    <span className="text-white font-bold">{selectedTime} ({TIME_SLOTS.find(t=>t.time === selectedTime)?.label})</span>
                  </div>
                </div>

              </div>

              {/* Barcode Mock */}
              <div className="p-4 bg-white text-black flex flex-col items-center justify-center font-mono space-y-1">
                <div className="w-5/6 h-10 bg-contain bg-center opacity-85" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=5&h=5&q=10')" // Generates vertical bars visually if stretched
                }}>
                  <div className="w-full h-full flex justify-between tracking-tighter">
                    {Array.from({length: 44}).map((_, i) => (
                      <div key={i} className="bg-black inline-block h-full" style={{
                        width: `${(i % 3 === 0 || i % 7 === 0) ? '3px' : '1px'}`,
                        opacity: `${(i % 5 === 0) ? '0' : '1'}`
                      }}></div>
                    ))}
                  </div>
                </div>
                <div className="text-[8px] text-gray-700 font-bold tracking-[0.5em] uppercase">
                  *{generatedPassCode && generatedPassCode.replace('-', '')}CODE*
                </div>
              </div>

            </div>

            {/* Buttons for printing/sharing or resetting */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  window.print();
                }}
                className="flex-1 bg-white hover:bg-gray-100 text-black py-3 rounded-xl font-bold text-xs tracking-widest transition-all uppercase flex items-center justify-center gap-1.5"
              >
                📥 DOWNLOAD TICKET PASS
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setBookingConfirmed(false);
                  setName("");
                  setPhone("");
                }}
                className="bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-gray-400 hover:text-white px-6 py-3 rounded-xl font-bold text-xs tracking-widest transition-all uppercase flex items-center justify-center gap-1.5"
              >
                🔄 BOOK ANOTHER TRAIL
              </button>
            </div>

            <div className="text-center pt-2">
              <p className="text-[9px] text-gray-500 tracking-wider">
                Please present a digital copy of this pass to the front desk at our location. Access is strictly limited to first-time female callers. No walk-ins allowed.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
