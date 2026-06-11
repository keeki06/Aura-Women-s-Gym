"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Sparkles, Dumbbell, Award, Plus } from 'lucide-react';

interface MemberStory {
  id: string;
  name: string;
  age: number;
  program: string;
  duration: string;
  statName: string;
  statBefore: string;
  statAfter: string;
  quote: string;
  imgUrl: string;
}

const STORIES: MemberStory[] = [
  {
    id: "sara",
    name: "SARAH CHEN",
    age: 29,
    program: "Zumba Burn & Power HIIT",
    duration: "16 Weeks",
    statName: "Body Fat %",
    statBefore: "34%",
    statAfter: "21%",
    quote: "ZENOVA didn't just change my dress size; it completely rewired my confidence. I walk, stand, and lead differently now.",
    imgUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1000&auto=format&fit=crop&q=80"
  },
  {
    id: "elena",
    name: "ELENA ROSTOVA",
    age: 33,
    program: "Luxury Strength & Hypertrophy",
    duration: "24 Weeks",
    statName: "Deadlift Max",
    statBefore: "40kg",
    statAfter: "115kg",
    quote: "I thought heavy listing was for men. ZENOVA's coaches showed me my true warrior potential. The environment is pure power.",
    imgUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1000&auto=format&fit=crop&q=80"
  },
  {
    id: "maya",
    name: "MAYA PATEL",
    age: 26,
    program: "Zen Flow & Inner Alignment",
    duration: "12 Weeks",
    statName: "Visceral Fat Level",
    statBefore: "Grade 9",
    statAfter: "Grade 3",
    quote: "After chronic stress, Yoga & Meditation at ZENOVA saved me. I gained emotional stability and a toned, flexible, painless physique.",
    imgUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&auto=format&fit=crop&q=80"
  }
];

export default function TransformationSlider() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeStory = STORIES[activeStoryIdx];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onMouseUp = () => stopDragging();
    const onTouchEnd = () => stopDragging();

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', handleMouseMove);
    
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('touchmove', (e) => {
        if (isDragging.current) {
          e.preventDefault();
          handleMove(e.touches[0].clientX);
        }
      }, { passive: false });
    }

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Narrative switcher buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {STORIES.map((story, idx) => (
          <button
            key={story.id}
            onClick={() => {
              setActiveStoryIdx(idx);
              setSliderPos(50);
            }}
            className={`px-5 py-3 rounded-xl font-sans text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 border ${
              activeStoryIdx === idx
                ? 'bg-[#FFEE00] text-black border-[#FFEE00] shadow-[0_0_15px_rgba(255,238,0,0.3)] scale-105'
                : 'bg-[#121115] text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
            }`}
          >
            <Dumbbell className={`w-3.5 h-3.5 ${activeStoryIdx === idx ? 'text-black' : 'text-[#FFEE00]'}`} />
            <span>{story.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Main transformation presentation grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0C0B0E] p-4 sm:p-8 rounded-3xl border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
        
        {/* Visual interactive slider - span 7 */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full text-center mb-3 flex items-center justify-between text-xs font-bold tracking-widest text-[#9CA3AF] px-2">
            <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-2.5 py-1 rounded">BEFORE</span>
            <div className="flex items-center gap-1.5 text-xs text-center text-gray-500">
              <ArrowLeftRight className="w-3.5 h-3.5 animate-bounce-horizontal" />
              <span>DRAG THE SLIDER TO UNLOCK POTENTIAL</span>
            </div>
            <span className="bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20 px-2.5 py-1 rounded">AFTER</span>
          </div>

          <div
            ref={containerRef}
            className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-white/10 shadow-2xl"
            onMouseDown={() => { isDragging.current = true; }}
            onTouchStart={() => { isDragging.current = true; }}
          >
            {/* Before state (Base layer - Greyscale / Darker) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={activeStory.imgUrl}
                alt={`${activeStory.name} Before`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{
                  filter: "grayscale(100%) contrast(85%) brightness(60%)",
                }}
              />
              {/* Badges */}
              <div className="absolute bottom-6 left-6 z-10 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-xl">
                <p className="text-[10px] tracking-wider text-gray-500 uppercase">PRE-ZENOVA STATUS</p>
                <p className="text-sm font-black text-rose-500">{activeStory.statBefore} {activeStory.statName}</p>
              </div>
            </div>

            {/* After state (Overlayed layer clipped absolute) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img
                src={activeStory.imgUrl}
                alt={`${activeStory.name} After`}
                className="w-full h-full object-cover animate-none"
                style={{
                  filter: "contrast(115%) saturate(125%) brightness(105%)",
                }}
              />
              
              {/* Yellow light overlay to show glowing results */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFEE00]/5 to-transparent animate-none"></div>
              
              {/* Badges block */}
              <div className="absolute bottom-6 right-6 z-10 bg-black/90 backdrop-blur-md px-4 py-2 border border-[#FFEE00]/30 rounded-xl text-right animate-none">
                <p className="text-[10px] tracking-wider text-[#FFEE00] uppercase font-black">AFTER ZENOVA</p>
                <p className="text-sm font-black text-[#FFEE00] drop-shadow-[0_0_8px_rgba(255,238,0,0.5)] flex items-center justify-end gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activeStory.statAfter} {activeStory.statName}
                </p>
              </div>
            </div>

            {/* Slider bar & handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FFEE00] cursor-ew-resize shadow-[0_0_15px_#FFEE00]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border-2 border-[#FFEE00] shadow-[0_0_20px_#FFEE00] flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4 text-[#FFEE00]" />
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & bio metrics - span 5 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/11 rounded-full text-xs font-black text-[#FFEE00] tracking-widest">
            <Award className="w-3.5 h-3.5 text-[#FFEE00]" />
            <span className="uppercase">{activeStory.duration} TRANSFORMATION</span>
          </div>

          <div>
            <h3 className="text-4xl font-black tracking-tighter text-white font-display uppercase leading-none">
              {activeStory.name}
            </h3>
            <p className="text-sm text-[#FFEE00] font-bold tracking-widest uppercase mt-2">
              Age {activeStory.age} • Course: {activeStory.program}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141217] border border-white/5 relative">
            <span className="text-6xl text-[#FFEE00]/10 font-bold absolute italic -top-2 left-2">“</span>
            <p className="text-gray-300 italic text-sm leading-relaxed relative z-10 pt-2 font-medium">
              {activeStory.quote}
            </p>
          </div>

          {/* Metric comparison display */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#141217] p-4 rounded-xl border border-white/5 hover:border-red-500/20 transition-all">
              <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Before State</p>
              <p className="text-2xl font-black text-red-500 mt-1 line-through">{activeStory.statBefore}</p>
              <p className="text-xs text-gray-400 mt-0.5">{activeStory.statName}</p>
            </div>
            
            <div className="bg-[#1C1A20] p-4 rounded-xl border border-[#FFEE00]/10 hover:border-[#FFEE00]/30 transition-all glow-yellow-hover">
              <p className="text-[10px] uppercase text-[#FFEE00] font-black tracking-wider">With ZENOVA</p>
              <p className="text-2xl font-black text-[#FFEE00] mt-1 drop-shadow-[0_0_8px_rgba(255,238,0,0.3)]">{activeStory.statAfter}</p>
              <p className="text-xs text-white mt-0.5">{activeStory.statName}</p>
            </div>
          </div>

          {/* Quote CTA for this specific path */}
          <div className="bg-gradient-to-r from-[#FFEE00]/5 to-transparent p-4 rounded-xl border border-[#FFEE00]/10 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white tracking-widest uppercase">GET {activeStory.name.split(' ')[0]}&apos;S EXCLUSIVE ROUTINE</p>
              <p className="text-[10px] text-gray-400">Included free in 7-Day Introductory Pass</p>
            </div>
            <button
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-8 h-8 rounded-full bg-[#FFEE00] hover:scale-110 active:scale-95 text-black flex items-center justify-center transition-all"
            >
              <Plus className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
