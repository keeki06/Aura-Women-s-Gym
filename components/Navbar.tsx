"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Calendar, DollarSign } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'transformations', label: 'TRANSFORMATIONS' },
    { id: 'booking', label: 'SCHEDULE' },
    { id: 'franchise', label: 'FRANCHISE' },
    { id: 'reviews', label: 'TESTIMONIALS' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed left-0 w-full z-50 transition-all duration-500 top-[37px] ${
        isScrolled
          ? 'py-3 bg-[#050506]/95 backdrop-blur-xl border-b border-[#FFEE00]/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand area */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:scale-105 group-hover:border-[#FFEE00]/40 transition-all duration-300 shadow-[0_0_15px_rgba(255,238,0,0.05)]">
              <Image 
                src="/logo.png" 
                alt="ZENOVA Logo" 
                width={44}
                height={44}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-black font-display tracking-widest text-white flex items-center leading-none">
                ZENOVA
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFEE00] ml-1.5 shadow-[0_0_8px_#FFEE00] animate-pulse"></span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] block text-[#FFEE00] mt-1 leading-none">Women&apos;s Sanctuary</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-xs font-bold font-sans tracking-widest transition-all duration-300 relative group uppercase ${
                    isActive ? 'text-[#FFEE00]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#FFEE00] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Call To Action button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onNavigate('booking')}
              className="relative overflow-hidden group bg-gradient-to-r from-[#FFEE00] to-[#EBC600] text-black px-6 py-2.5 rounded-full text-xs font-black tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,238,0,0.35)]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-black" />
                BOOK FREE TRIAL
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0 mix-blend-overlay"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#141217] border border-white/10 hover:border-[#FFEE00]/40 text-gray-400 hover:text-white transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FFEE00]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-[#09080C]/98 backdrop-blur-2xl z-40 p-6 border-l border-white/10 transform transition-transform duration-500 ease-out shadow-[0_0_50px_rgba(0,0,0,0.9)] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          top: isScrolled ? '105px' : '121px', 
          height: isScrolled ? 'calc(100vh - 105px)' : 'calc(100vh - 121px)' 
        }}
      >
        <div className="flex flex-col space-y-4 pt-4">
          <div className="px-2 pb-2 border-b border-white/5">
            <p className="text-[10px] tracking-widest text-[#FFEE00] font-black uppercase">TRANSFORM TODAY</p>
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 text-left font-sans text-sm font-bold tracking-widest transition-all ${
                  isActive ? 'text-[#FFEE00] pl-2 border-l-2 border-[#FFEE00]' : 'text-gray-300 hover:text-white pl-0'
                }`}
              >
                {item.id === 'booking' && '📅 '}
                {item.id === 'franchise' && '💼 '}
                {item.label}
              </button>
            );
          })}
          
          <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
            <button
              onClick={() => {
                onNavigate('booking');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#FFEE00] text-black font-black text-xs py-3.5 rounded-xl tracking-widest text-center flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(255,238,0,0.2)]"
            >
              <Calendar className="w-4 h-4" />
              BOOK FREE TRIAL
            </button>
            <div className="text-center text-[10px] text-gray-500 tracking-wider">
              EXCLUSIVE FOR WOMEN // NO ENTRANCE FEES
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
