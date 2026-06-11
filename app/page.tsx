"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import TransformationSlider from '../components/TransformationSlider';
import SlotBooking from '../components/SlotBooking';
import FranchiseSimulator from '../components/FranchiseSimulator';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Star, 
  MessageSquare, 
  ChevronDown, 
  HelpCircle, 
  Send, 
  Flame, 
  Award, 
  ArrowRight,
  X,
  CheckCircle
} from 'lucide-react';

// Live Ticker updates
const TICKER_TEXTS = [
  "🔥 589+ MEMBERS SIGNED UP THIS MONTH!",
  "💎 SUMMER GOLD TRANSFORMATION ENTRANTS CLOSING IN 3 DAYS",
  "🧘‍♀️ ZUMBA DANCE BURN NOW BOOKING ON ALL EVENINGS",
  "⭐ 4.98 TRUST RATING ACROSS 1,200+ VERIFIED WOMEN",
  "🏋️‍♀️ NO CONTRACTS OR INITIATION FEES FOR FIRST 100 PASSES",
  "🌸 SAFE SPACE STRICTLY EXCLUSIVE FOR WOMEN"
];

// FAQS
const FAQS = [
  {
    q: "Is ZENOVA strictly for women?",
    a: "Yes, ZENOVA is 100% exclusive to women. Our entire ecosystem — coaching staff, front of house, members pool, and facility design — is structured to provide an exceptionally safe, empowering, and comfortable space for women of all fitness levels."
  },
  {
    q: "What is included with my Free Trial Booking?",
    a: "Your free trial pass includes a 60-minute group session entry (Zumba, Strength Lab, or Divine Yoga), a 1-on-1 body posture assessment, functional metric tracking, and a complimentary organic protein energy juice at our sanctuary bar!"
  },
  {
    q: "Do you have locker rooms and luxury showers?",
    a: "Yes! ZENOVA is a luxury brand. Our locker rooms feature deep walnut wood locks, clean microfiber towels, premium hair-care sets, steam rooms, and private vanity mirrors with warm golden ring lights."
  },
  {
    q: "Can complete beginners join the Strength or Zumba classes?",
    a: "Absolutely! 75% of our members started as complete beginners. Our coaches are certified in biomechanics and break down every lift or dance step into progressive tiers so you scale at your own unique speed."
  },
  {
    q: "How does the Franchise system work?",
    a: "ZENOVA provides an end-to-end turnkey business format including layout blueprints, proprietary fitness workout modules, staffing channels, and regional marketing. Check our ROI projection tool below to initiate pre-qualification."
  }
];

export default function GymLandingPage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [trialTimeRemaining, setTrialTimeRemaining] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    Promise.resolve().then(() => {
      setMounted(true);
    });
  }, []);
  
  // Custom Reviews Dynamic State (Users can submit real ratings!)
  const [testimonials, setTestimonials] = useState([
    {
      name: "PRIYA SEN",
      role: "ZENOVA Elite Member (since 2025)",
      rating: 5,
      text: "I used to hate corporate gyms with creepy stares. ZENOVA feels like a secure, high-vibe temple of sisters. The Zumba workouts feel like a club party, and the Strength coaches actually corrected my lower-back squats safely!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
    },
    {
      name: "CHLOE EVANS",
      role: "Zumba Enthusiast // Business Partner",
      rating: 5,
      text: "The interior design itself is stunning — gold borders, charcoal matte steel, and incredible scent diffusers. It is expensive but you get five-star performance, personalized sheets, and supreme privacy. Best decision I ever made.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    },
    {
      name: "AMARA OKAFOR",
      role: "Weight Loss Achiever (-22kg)",
      rating: 5,
      text: "The transformation numbers they display aren't fake. I came after postpartum stress. With custom strength charts and gentle yoga restoration, I regained my power, alignment, and shed 22kg in under 8 months. Pure magic!",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
    }
  ]);

  // Testimonial Form Input
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5, avatarIdx: 0 });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80"
  ];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    setTestimonials([
      ...testimonials,
      {
        name: newReview.name.toUpperCase(),
        role: "New Verified ZENOVA Sister",
        rating: newReview.rating,
        text: newReview.text,
        avatar: avatars[newReview.avatarIdx]
      }
    ]);
    
    setReviewSubmitted(true);
    setNewReview({ name: '', text: '', rating: 5, avatarIdx: (newReview.avatarIdx + 1) % avatars.length });
    
    setTimeout(() => {
      setReviewSubmitted(false);
    }, 4500);
  };

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'zenova', text: "Hey sister! I'm Maya, your ZENOVA Assistant. Ready to claim your 7-Day Free Trial pass? Ask me any queries!" }
  ]);
  const [currentChatQuery, setCurrentChatQuery] = useState("");

  const chatOptions = [
    { text: "Can I bring friends?", reply: "Absolutely! Every golden member can book a 'Sister Companion Pass' twice a month for free. We support training together!" },
    { text: "What is your location?", reply: "We are situated in the Premium Sanctuary District, Block 4-E. Free member secure parking is located directly under our luxury glass canopy." },
    { text: "Do you offer childcare?", reply: "Yes! We offer a luxurious secure play lounge with certified female caretakers so you can workout with absolute peace of mind!" },
    { text: "Are there entry fees?", reply: "No! There are $0 initiation fees on our VIP Free Trial passes. Standard rates only apply if you decide to become a monthly elite VIP member." }
  ];

  const handleChatOption = (text: string, reply: string) => {
    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text },
      { sender: 'zenova', text: reply }
    ]);
  };

  const handleChatCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentChatQuery.trim()) return;

    const userText = currentChatQuery;
    let autoReply = "That's an excellent question! Contact our front desk concierge directly at (555) ZENOVA-GYM (770-1345) to get instant specific solutions. Or secure a free pass to check out the place in person!";
    
    const lower = userText.toLowerCase();
    if (lower.includes("price") || lower.includes("cost") || lower.includes("membership") || lower.includes("fee")) {
      autoReply = "Our executive membership pricing starts at $120/month with full luxury locker room, yoga, and pool access. First-time trial booking is 100% free!";
    } else if (lower.includes("zumba") || lower.includes("dance")) {
      autoReply = "Our Sunset Zumba class operates on Mon, Wed, Fri at 5:30 PM. It incorporates active club sound systems and custom neon gold lightning to maximize high energy!";
    } else if (lower.includes("kids") || lower.includes("child") || lower.includes("baby")) {
      autoReply = "We offer a luxurious secure crèche/play lounge with certified female caretakers so you can lift or dance with absolute single-focus peace of mind!";
    } else if (lower.includes("exclusive") || lower.includes("only")) {
      autoReply = "Yes, ZENOVA is strict about membership parameters. No men are admitted as members or visitors. Your safety, confidence, and comfort represent our primary brand mission.";
    }

    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: userText },
      { sender: 'zenova', text: autoReply }
    ]);
    
    setCurrentChatQuery("");
  };

  // Interactive Matcher Quiz States
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({ focus: '', intensity: '', energy: '' });
  const [recommendedClass, setRecommendedClass] = useState<any>(null);

  const startQuizOver = () => {
    setQuizStep(1);
    setQuizAnswers({ focus: '', intensity: '', energy: '' });
    setRecommendedClass(null);
  };

  const selectQuizAnswer = (field: string, val: string) => {
    const updated = { ...quizAnswers, [field]: val };
    setQuizAnswers(updated);
    
    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      let match = {
        name: "LUXURY STRENGTH LAB",
        badge: "SCULPT & EMPOWER",
        icon: "🏋️‍♀️",
        desc: "Ideal for power mechanics, deep muscle framing, fat burning, and building unbreakable confidence through structured progressive weights.",
        schedule: "Tue/Thu/Sat @ 9:00 AM & 6:30 PM",
        gift: "Free ZENOVA lifting straps included"
      };

      if (updated.focus === 'restoration' || updated.energy === 'zen') {
        match = {
          name: "DIVINE INNER YOGA",
          badge: "ALIGN & HEAL",
          icon: "🧘‍♀️",
          desc: "Perfect for stress dissolution, posture correction, core stability, and mental deep recovery. Features warm essential oils and calming audio guidance.",
          schedule: "Mon/Wed/Fri @ 11:00 AM",
          gift: "Free lavender essential oil kit with trial"
        };
      } else if (updated.focus === 'cardio' && updated.intensity === 'high') {
        match = {
          name: "METABOLIC HIIT SHRED",
          badge: "VIBRANT POWER",
          icon: "⚡",
          desc: "Highly tailored 45-minute circuit of explosive athletic movements to torch body fat, correct thyroid loops, and supercharge stamina.",
          schedule: "Everyday @ 6:30 AM & 7:00 PM",
          gift: "Complimentary electrolyte booster"
        };
      } else if (updated.focus === 'cardio' && updated.energy === 'party') {
        match = {
          name: "ZUMBA ENERGY BLAST",
          badge: "DANCE & SHINE",
          icon: "🔥",
          desc: "Let loose with standard Latin rhythms, high music decibels, and gorgeous club lightning led by expert choreographers.",
          schedule: "Mon/Wed/Thu @ 5:30 PM",
          gift: "Neon glow-wraps package"
        };
      }

      setRecommendedClass(match);
      setQuizStep(4);
    }
  };

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTrialTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sync scroll positioning to trigger highlighted menu links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'transformations', 'booking', 'franchise', 'reviews', 'faq', 'contact'];
      const scrollPos = window.scrollY + 180;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(0);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-[#FFEE00] flex flex-col items-center justify-center font-sans">
        <div className="text-center space-y-4 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-lg bg-black border-2 border-[#FFEE00] flex items-center justify-center animate-pulse">
            <span className="text-xl">🌸</span>
          </div>
          <p className="text-[10px] font-black tracking-[0.25em] text-[#FFEE00] uppercase animate-pulse">LAUNCHING ZENOVA SANCTUARY ACCESS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pb-20">
      
      {/* Dynamic Membership statistics header ticker */}
      <div className="w-full bg-[#FFEE00] text-black py-2.5 overflow-hidden fixed top-0 left-0 z-50 text-[11px] font-black tracking-widest border-b border-black">
        <div className="flex animate-marquee whitespace-nowrap gap-16 uppercase">
          {Array.from({ length: 4 }).map((_, repeatIdx) => (
            <React.Fragment key={repeatIdx}>
              {TICKER_TEXTS.map((t, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  {t}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mt-10">
        <Navbar activeSection={activeSection} onNavigate={navigateToSection} />
      </div>

      {/* Floating Free Trial Urgent banner - on right corner */}
      <div className="fixed bottom-6 left-6 z-40 bg-black/95 text-white p-4 rounded-2xl border-2 border-[#FFEE00] max-w-xs shadow-[0_15px_35px_rgba(0,0,0,0.8)] hidden sm:flex flex-col space-y-2.5 animate-bounce-subtle">
        <div className="flex items-center justify-between">
          <span className="text-[10px] bg-[#FFEE00]/20 text-[#FFEE00] border border-[#FFEE00]/40 px-2 py-0.5 rounded font-black uppercase">
            VIP ALL PASS
          </span>
          <span className="text-[9px] text-[#FFEE00] font-black tracking-wider animate-pulse font-mono">
            ⏱️ {trialTimeRemaining.minutes}:{trialTimeRemaining.seconds < 10 ? `0${trialTimeRemaining.seconds}` : trialTimeRemaining.seconds} LEFT
          </span>
        </div>
        <div>
          <h5 className="text-xs font-black tracking-widest text-white uppercase">FREE TRIAL SEATS FILLING FIRST!</h5>
          <p className="text-[9.5px] text-gray-400 mt-1 leading-relaxed">Book a certified, safe women-only session. Zero obligations.</p>
        </div>
        <button
          onClick={() => navigateToSection('booking')}
          className="w-full bg-[#FFEE00] text-black font-mono font-black text-[10px] py-2 rounded-lg tracking-widest transition-transform hover:scale-105 active:scale-95 uppercase flex items-center justify-center gap-1 shadow-lg"
        >
          CLAIM TRIAL PASS
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Sticky Floating WhatsApp Help Chat Box Drawer on right corner */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {chatOpen && (
          <div className="bg-[#0D0C10] w-[320px] rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden mb-3 animate-slide-up flex flex-col h-[400px]">
            {/* Chat header area */}
            <div className="bg-[#121115] px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FFEE00] text-black flex items-center justify-center font-black relative">
                  🌸
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#09080C]"></span>
                </div>
                <div>
                  <span className="text-xs font-black tracking-wider text-white block uppercase">COACH MAYA</span>
                  <span className="text-[9px] text-[#FFEE00] block tracking-wide">ZENOVA Senior Trainer • Active</span>
                </div>
              </div>
              <button 
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages flow scrollable */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-none text-[11px]">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'aura'
                      ? 'bg-zinc-800/80 text-white mr-auto rounded-tl-none'
                      : 'bg-[#FFEE00] text-black font-bold ml-auto rounded-tr-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>

            {/* Quick interactive choices for fast answers click */}
            <div className="bg-zinc-950/80 p-2.5 border-t border-white/5 space-y-1.5">
              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider px-1">Ask a Direct Question:</p>
              <div className="flex flex-wrap gap-1">
                {chatOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleChatOption(opt.text, opt.reply)}
                    className="text-[9px] bg-[#121115] hover:bg-zinc-800 border border-white/10 text-gray-300 font-bold px-2 py-1 rounded-md transition-colors"
                  >
                    💬 {opt.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Free custom typing form */}
            <form onSubmit={handleChatCustomSend} className="p-3 bg-[#121115] border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={currentChatQuery}
                onChange={(e) => setCurrentChatQuery(e.target.value)}
                placeholder="Type your fitness goals..."
                className="flex-1 text-[11px] px-3 py-2 rounded-xl bg-black border border-white/10 text-white outline-none focus:border-[#FFEE00]"
              />
              <button
                type="submit"
                className="bg-[#FFEE00] hover:scale-105 active:scale-95 text-black p-2 rounded-xl transition-all"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </form>
          </div>
        )}

        {/* Floating WhatsApp chat head circle */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-white group"
          aria-label="WhatsApp Concierge Chat"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6 text-white" />
            <span className="absolute -top-3.5 -right-3.5 bg-rose-500 text-white text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
              1
            </span>
          </div>
        </button>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-12"
      >
        {/* Full-screen Dark Cinematographics Backdrop */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1800&auto=format&fit=crop&q=80"
            alt="Premium women's gym aesthetic background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>

        {/* Golden laser atmospheric glowing dots */}
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#FFEE00]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[160px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center space-y-10">
          
          {/* Tagline / Flag banner */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-zinc-900/90 border border-white/10 rounded-full text-xs font-black text-[#FFEE00] tracking-[0.2em] uppercase max-w-max mx-auto shadow-lg animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#FFEE00] animate-pulse-glow" />
            <span>STRICTLY EXCLUSIVE FOR WOMEN // MEMBERSHIP TIER OPEN</span>
          </div>

          {/* Majestic Hero Headline utilizing outline effects */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black font-display tracking-tighter text-white uppercase leading-none">
              THIS IS YOUR <span className="text-[#FFEE00] italic">SANCTUARY</span>
            </h1>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-sans tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FFEE00] uppercase font-black">
              TRANSFORM YOUR EMPIRE.
            </h2>
            
            <h3 className="text-outline text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-widest leading-none font-display">
              NO EXCUSES. SHIELD POWER.
            </h3>
          </div>

          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to ZENOVA, an elite boutique training floor built solely for female physics. Experience dynamic, pulse-pounding Zumba, posture-correcting Yoga, and heavy strength engineering within an ultra-luxurious private club.
          </p>

          {/* Double CTA Button Hub */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => navigateToSection('booking')}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#FFEE00] hover:bg-white text-black font-black text-sm tracking-widest transition-all duration-300 uppercase shadow-[0_15px_30px_rgba(255,238,0,0.3)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Flame className="w-5 h-5 text-black" />
              CLAIM FREE TICKET PASS
            </button>

            <button
              onClick={() => navigateToSection('services')}
              className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs tracking-widest transition-colors border border-white/10 uppercase"
            >
              EXPLORE TRAINING PROGRAMS
            </button>
          </div>

          {/* Transformation statistics banner count with icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-white/5 bg-black/60 backdrop-blur-md rounded-3xl p-6 border-white/5 shadow-2xl">
            <div className="text-center p-3">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#FFEE00] block">500+</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mt-1">Lives Reshaped</span>
            </div>
            
            <div className="text-center p-3 border-l border-white/5">
              <span className="text-3xl sm:text-4xl font-display font-black text-white block">28,000kg+</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mt-1">Total Body Fat Shed</span>
            </div>

            <div className="text-center p-3 border-l border-white/5">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#FFEE00] block">14+</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mt-1">Elite Master Coaches</span>
            </div>

            <div className="text-center p-3 border-l border-white/5">
              <span className="text-3xl sm:text-4xl font-display font-black text-white block">99.4%</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mt-1">Sister Retention Score</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SERVICES / PROGRAMS ================= */}
      <section id="services" className="py-24 bg-[#0A090C] border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFEE00]/5 to-transparent rounded-full opacity-60 blur-[130px] -z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Headers */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[#FFEE00] text-xs font-black tracking-[0.25em] uppercase">OUR PROGRAMS</p>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              REWRITE YOUR ENERGY PARADIGMS
            </h2>
            <p className="text-sm text-gray-400">
              We design routines strictly optimised around female pelvic alignment, thyroid parameters, high-vibe endorphin cycles, and visceral toning mechanics.
            </p>
          </div>

          {/* Interactive Class Matcher Quiz Block - EXTREMELY UNIQUE */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#121115] to-[#0A0A0B] rounded-3xl border-2 border-[#FFEE00]/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FFEE00] text-black text-[9px] font-black tracking-widest uppercase rounded-bl-2xl">
              CORE MATCH RECO ENGINE
            </div>

            {quizStep < 4 ? (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-[#FFEE00] font-black tracking-widest uppercase">MATCH ACCURACY GENERATOR — STEP {quizStep} OF 3</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-1">FIND YOUR IDEAL ZENOVA SANCTUARY PROGRAM</h3>
                </div>

                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#FFEE00] h-full transition-all duration-300" 
                    style={{ width: `${(quizStep / 3) * 100}%` }}
                  ></div>
                </div>

                {quizStep === 1 && (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-300 font-bold">1. What is your primary biomechanical focus target right now?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('focus', 'cardio')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">🔥</span>
                        <span className="text-xs text-white font-black block">HIGH CARDIO / FAT BURN</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Torch massive calories while having maximum fun</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('focus', 'strength')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">🏋️‍♀️</span>
                        <span className="text-xs text-white font-black block">STRENGTH / SCULPTING</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Gain posture alignment and lean custom curves</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('focus', 'restoration')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">🧘‍♀️</span>
                        <span className="text-xs text-white font-black block">RESTORATION / FLEXIBILITY</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Dissolve severe work anxiety and correct spine curves</span>
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-300 font-bold">2. What is your preferred program intensity rate?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('intensity', 'gentle')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">🍃</span>
                        <span className="text-xs text-white font-black block">GENTLE & MINDFUL</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Controlled, smooth, deep breathing flows</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('intensity', 'medium')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">🌟</span>
                        <span className="text-xs text-white font-black block">BALANCED HYTROPHY</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Noticeable work rate with solid conditioning breaks</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('intensity', 'high')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">⚡</span>
                        <span className="text-xs text-white font-black block">SWEAT SOAKED/EXPLOSIVE</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Push metabolic outputs to their maximal limits</span>
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-300 font-bold">3. What atmospheric vibe triggers your core motivation?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('energy', 'party')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">🎵</span>
                        <span className="text-xs text-white font-black block">BEATS & DANCE CLUB</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">High decibel loud music, neon glows, massive crowd vibe</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('energy', 'laser')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">⚙️</span>
                        <span className="text-xs text-white font-black block">COACH DRIVEN FOCUS</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Chalk hand grips, exact metrics charts, elite heavy loads</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => selectQuizAnswer('energy', 'zen')}
                        className="p-4 rounded-2xl bg-black border border-white/5 hover:border-[#FFEE00] text-left hover:scale-[1.02] transition-all"
                      >
                        <span className="text-2xl block mb-2">🕯️</span>
                        <span className="text-xs text-white font-black block">CANDLE-LIT SERENITY</span>
                        <span className="text-[10px] text-gray-500 mt-1 block">Essential oils, dim warm golden lights, soft ambient hums</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-black rounded-2xl border-2 border-[#FFEE00] text-center shadow-lg relative">
                  <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#FFEE00]"></div>
                  <span className="text-5xl">{recommendedClass.icon}</span>
                  <span className="text-[9px] bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20 px-2.5 py-0.5 rounded-full font-black uppercase mt-3 tracking-widest">
                    {recommendedClass.badge}
                  </span>
                  <h4 className="text-white font-black font-display text-lg mt-2 leading-tight uppercase">{recommendedClass.name}</h4>
                  <p className="text-xs text-amber-400 font-mono mt-1 font-bold">{recommendedClass.schedule}</p>
                </div>

                <div className="md:col-span-8 space-y-4 text-xs font-semibold">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">BIOMETRIC ENGINE RESOLVED</span>
                    <h3 className="text-white text-xl font-black uppercase tracking-tight">YOUR SANCTUARY BLUEPRINT IS COMMITTED</h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed font-normal">{recommendedClass.desc}</p>
                  
                  <div className="bg-[#1C1920] p-3.5 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-[#FFEE00] uppercase font-black">EXECUTIVE RECO GIFT OFFERED</p>
                      <p className="text-white font-bold text-xs">{recommendedClass.gift}</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">✓</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => navigateToSection('booking')}
                      className="bg-[#FFEE00] text-black font-black text-[10px] px-6 py-3 rounded-xl tracking-widest uppercase transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-1"
                    >
                      SECURE FREE PASS SHEET NOW
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      type="button"
                      onClick={startQuizOver}
                      className="bg-transparent hover:bg-white/5 border border-white/10 text-gray-400 hover:text-white px-4 py-3 rounded-xl font-bold uppercase select-none transition-colors"
                    >
                      MATCH AGAIN
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Regular Services Display Grid - 4 core disciplines styled elegantly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            
            {/* Class 1 */}
            <div className="bg-[#121115] rounded-2xl border border-white/5 p-6 hover:border-[#FFEE00]/60 transition-all duration-300 glow-yellow-hover flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center font-black group-hover:scale-110 transition-transform text-2xl">
                  💃
                </div>
                <h3 className="text-white text-lg font-black tracking-widest uppercase">ZUMBA ENERGY BLAST</h3>
                <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                  {"Cardio shouldn't be boring. Our night club themed dance flows merge high bass acoustics with custom gold lighting, letting you shred 800+ calories with extreme empowerment."}
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                <span className="text-[10px] text-[#FFEE00] font-black tracking-wider uppercase font-mono">Mon / Wed / Sat</span>
                <span className="text-xs text-white">★ 4.9</span>
              </div>
            </div>

            {/* Class 2 */}
            <div className="bg-[#121115] rounded-2xl border border-white/5 p-6 hover:border-[#FFEE00]/60 transition-all duration-300 glow-yellow-hover flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center font-black group-hover:scale-110 transition-transform text-2xl">
                  🧘‍♀️
                </div>
                <h3 className="text-white text-lg font-black tracking-widest uppercase">DIVINE RESTORATIVE YOGA</h3>
                <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                  Realign posture curves, correct lower-back pelvic stress, and lower severe mental cortisol loops. Restorative yin poses led within warm dim candle lighting.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                <span className="text-[10px] text-[#FFEE00] font-black tracking-wider uppercase font-mono font-bold">Tue / Thu / Fri</span>
                <span className="text-xs text-white">★ 5.0</span>
              </div>
            </div>

            {/* Class 3 */}
            <div className="bg-[#121115] rounded-2xl border border-white/5 p-6 hover:border-[#FFEE00]/60 transition-all duration-300 glow-yellow-hover flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center font-black group-hover:scale-110 transition-transform text-2xl">
                  🏋️‍♀️
                </div>
                <h3 className="text-white text-lg font-black tracking-widest uppercase">LUXURY STRENGTH LAB</h3>
                <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                  Deconstruct standard fear of heavy lifting. Learn barbell lifting mechanics with biomechanics professionals to sculpt clean curves, boost bone cell growth, and build raw athletic power.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                <span className="text-[10px] text-[#FFEE00] font-black tracking-wider uppercase font-mono">Mon / Thu / Sat</span>
                <span className="text-xs text-white">★ 4.9</span>
              </div>
            </div>

            {/* Class 4 */}
            <div className="bg-[#121115] rounded-2xl border border-white/5 p-6 hover:border-[#FFEE00]/60 transition-all duration-300 glow-yellow-hover flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center font-black group-hover:scale-110 transition-transform text-2xl">
                  ⚡
                </div>
                <h3 className="text-white text-lg font-black tracking-widest uppercase">METABOLIC HIIT SHRED</h3>
                <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                  High-speed anaerobic interval tracks engineered to elevate metabolic output for up to 36 hours post-workout. Optimal visceral fat-burning framework.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                <span className="text-[10px] text-[#FFEE00] font-black tracking-wider uppercase font-mono">Everyday Slots</span>
                <span className="text-xs text-white">★ 4.8</span>
              </div>
            </div>

          </div>

          {/* Quick CTA to push membership conversions */}
          <div className="bg-gradient-to-r from-yellow-500/10 via-[#FFEE00]/5 to-transparent p-8 rounded-3xl border border-[#FFEE00]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-white font-black uppercase text-xl sm:text-2xl tracking-tight">NOT SURE WHAT TO CLAIM FIRST?</h4>
              <p className="text-xs text-gray-400 text-semibold">Claim our 7-Day Free Pass to sample all disciplines completely commitment-free.</p>
            </div>
            <button
              onClick={() => navigateToSection('booking')}
              className="px-8 py-4 bg-[#FFEE00] hover:bg-white text-black font-black text-xs tracking-widest rounded-xl uppercase transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5"
            >
              BOOK SECURE VIP PASS
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= TRANSFORMATIONS SLIDER SECTION ================= */}
      <section id="transformations" className="py-24 bg-black relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFEE00]/5 to-transparent rounded-full opacity-40 blur-[130px] -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[#FFEE00] text-xs font-black tracking-[0.25em] uppercase">MEMBER CONFIDENCE SHIELD</p>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              REAL BIOMETRIC METAMORPHOSIS
            </h2>
            <p className="text-sm text-gray-400">
              No photoshop. No deceptive lighting. Slide the handle across our interactive profiles below to unlock verified outcomes of women who committed to ZENOVA.
            </p>
          </div>

          <TransformationSlider />

          {/* Video / Mini-story review blocks */}
          <div className="space-y-6 pt-10">
            <h3 className="text-white font-black font-display text-2xl uppercase tracking-wider text-center">
              WATCH HIGH-VIBE TRANSFORMATION VLOGS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Video Vlog 1 */}
              <div className="bg-[#111014] rounded-2xl border border-white/5 overflow-hidden group hover:border-[#FFEE00]/40 transition-all shadow-lg text-xs font-semibold">
                <div className="h-48 relative overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=80"
                    alt="Samantha weight video vlog cover"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-[#FFEE00] hover:scale-110 text-black flex items-center justify-center font-bold text-lg select-none cursor-pointer shadow-[0_0_15px_#FFEE00]/40 transition-all">
                      ▶
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">
                    LIVE REWEIGHT VLOG
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-white font-black text-xs uppercase tracking-wider">SAMANTHA&apos;S HIIT & ZUMBA JOURNEY</h4>
                  <p className="text-[11px] text-gray-400 leading-normal font-normal">{`"I lost 28kg but gained active mental boundaries. Watch my full workout routine schedules and eating guides."`}</p>
                  <p className="text-[#FFEE00] text-[9px] font-bold font-mono">⏱️ Duration: 4 minutes 20 seconds</p>
                </div>
              </div>

              {/* Video Vlog 2 */}
              <div className="bg-[#111014] rounded-2xl border border-white/5 overflow-hidden group hover:border-[#FFEE00]/40 transition-all shadow-lg text-xs font-semibold">
                <div className="h-48 relative overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop&q=80"
                    alt="Elena deadlift video vlog cover"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-[#FFEE00] hover:scale-110 text-black flex items-center justify-center font-bold text-lg select-none cursor-pointer shadow-[0_0_15px_#FFEE00]/40 transition-all">
                      ▶
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">
                    STRENGTH ENGINE PROFILE
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-white font-black text-xs uppercase tracking-wider">ELENA&apos;S BARBELL LIFT PROGRESS</h4>
                  <p className="text-[11px] text-gray-400 leading-normal font-normal">{`"Check my biomechanics forms that allowed me to deadlift 115kg safely without harming my knee or back curves."`}</p>
                  <p className="text-[#FFEE00] text-[9px] font-bold font-mono">⏱️ Duration: 6 minutes 12 seconds</p>
                </div>
              </div>

              {/* Video Vlog 3 */}
              <div className="bg-[#111014] rounded-2xl border border-white/5 overflow-hidden group hover:border-[#FFEE00]/40 transition-all shadow-lg text-xs font-semibold">
                <div className="h-48 relative overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=80"
                    alt="Maya healing posture video cover"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-[#FFEE00] hover:scale-110 text-black flex items-center justify-center font-bold text-lg select-none cursor-pointer shadow-[0_0_15px_#FFEE00]/40 transition-all">
                      ▶
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-indigo-500 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">
                    POSTURE HEALING FLOW
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-white font-black text-xs uppercase tracking-wider">MAYA&apos;S SPINE RECOVERY FLOWS</h4>
                  <p className="text-[11px] text-gray-400 leading-normal font-normal">{`"Chronically seated at a laptop, I had scoliosis aches. Yoga and restorative core work gave me raw flexibility back."`}</p>
                  <p className="text-[#FFEE00] text-[9px] font-bold font-mono">⏱️ Duration: 5 minutes 05 seconds</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SLOT BOOKING SCHEDULER SECTION ================= */}
      <section id="booking" className="py-24 bg-[#0A090C] border-t border-white/5 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FFEE00]/5 rounded-full blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[#FFEE00] text-xs font-black tracking-[0.25em] uppercase">LOCK DOWN YOUR VISIT</p>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              CLAIM YOUR REVOLUTION PASS
            </h2>
            <p className="text-sm text-gray-400">
              Only 10 passes available for May 2026. Claim your free 1-on-1 body metrics tracking trial session. Verified ladies only.
            </p>
          </div>

          <SlotBooking />

        </div>
      </section>

      {/* ================= REVIEWS / FEEDBACK SECTION ================= */}
      <section id="reviews" className="py-24 bg-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Reviews display block - Span 7 */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-[#FFEE00] text-xs font-black tracking-[0.25em] uppercase">TESTIMONIALS</p>
                <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase mt-2">
                  OUR CONQUERORS AGREE
                </h2>
                <p className="text-xs text-gray-400 mt-2">
                  Every feedback is real. These letters are harvested natively from our private digital sanctuary boards representing genuine female power.
                </p>
              </div>

              {/* Testimonials List */}
              <div className="space-y-6">
                {testimonials.map((test, index) => (
                  <div 
                    key={index} 
                    className="bg-[#111014] p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#FFEE00]/25 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={test.avatar}
                          alt={test.name}
                          className="w-10 h-10 rounded-full border border-white/10 object-cover"
                        />
                        <div>
                          <span className="text-xs font-black text-white tracking-widest block uppercase">{test.name}</span>
                          <span className="text-[10px] text-gray-400 block">{test.role}</span>
                        </div>
                      </div>
                      <div className="flex text-[#FFEE00]">
                        {Array.from({ length: test.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[12px] text-gray-300 font-medium italic leading-relaxed">
                      &quot; {test.text} &quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials writer form block - Span 5 */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#111014] to-[#0A090C] p-6 sm:p-8 rounded-3xl border-2 border-white/5 shadow-xl space-y-6">
              <div className="text-center pb-4 border-b border-white/5">
                <span className="text-[9px] bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/30 px-2 py-0.5 rounded font-black tracking-widest uppercase">
                  SHARE YOUR SISTERHOOD VIBE
                </span>
                <h3 className="text-xl font-black text-white font-display mt-2 uppercase tracking-wide">POST REAL FEEDBACK</h3>
                <p className="text-[10px] text-gray-500 mt-1">Help other women conquer their gym anxiety. Post your verified feedback.</p>
              </div>

              {reviewSubmitted && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl text-center space-y-1 animate-fade-in">
                  <p className="text-xs font-black text-emerald-400 uppercase">FEEDBACK ALIGNED!</p>
                  <p className="text-[10px] text-gray-400">{"Thank you sister. Your rating is safely added live below."}</p>
                </div>
              )}

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block mb-1">YOUR DISPLAY NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full pl-3 pr-3 py-2 text-xs rounded-xl input-premium"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block mb-1">GIVE STAR SCORE</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 transition-transform hover:scale-110 active:scale-95"
                      >
                        <Star className={`w-7 h-7 ${newReview.rating >= star ? 'text-[#FFEE00] fill-current' : 'text-zinc-700'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block mb-1">CHOOSE YOUR AVATAR PROFILE</label>
                  <div className="flex space-x-3.5 pt-1">
                    {avatars.map((av, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setNewReview({ ...newReview, avatarIdx: idx })}
                        className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                          newReview.avatarIdx === idx ? 'border-[#FFEE00] scale-110 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={av} alt="Avatar template" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block mb-1">YOUR FEEDBACK TEXT</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe lockers, trainers, Zumba classes, privacy standards..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full p-3 text-xs rounded-xl input-premium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!newReview.name || !newReview.text}
                  className="w-full py-3 rounded-xl bg-white hover:bg-[#FFEE00] disabled:opacity-50 text-black font-black text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-1 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  PUBLISH FEEDBACK CORE
                </button>
              </form>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FRANCHISE SECTION ================= */}
      <section id="franchise" className="py-24 bg-[#0A090C] border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full opacity-40 blur-[130px] -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-amber-400 text-xs font-black tracking-[0.25em] uppercase">EXPAND OUR SANCTUARY</p>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              BECOME A ZENOVA FRANCHISE PARTNER
            </h2>
            <p className="text-sm text-gray-400">
              Own a high-margin, ultra-luxurious women-only gym branch. Harness our proprietary layout formulas, vetted zumba structures, and automated client flow funnels.
            </p>
          </div>

          <FranchiseSimulator />

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="py-24 bg-black border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center space-y-3">
            <p className="text-[#FFEE00] text-xs font-black tracking-[0.25em] uppercase">HAVE INQUIRIES?</p>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              MUTUAL CLARITY MANUALS
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpenIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#111014] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setFaqOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-white hover:text-[#FFEE00] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-[#FFEE00]" />
                      <span className="text-xs sm:text-sm font-black tracking-wider uppercase font-sans">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FFEE00]' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-gray-300 text-xs leading-relaxed border-t border-white/5 bg-black/40 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= LOCATION & DIRECTIONS ================= */}
      <section id="contact" className="py-24 bg-[#0A090C] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Hour charts and details - Span 5 */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <p className="text-[#FFEE00] text-xs font-black tracking-[0.25em] uppercase">VISIT OUR FLOOR</p>
                <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-none">
                  COORDINATES & OPERATION
                </h2>
                <p className="text-xs text-gray-400">
                  Easy accessibility situated within the core commercial crown. Free underground security member parking is active on all schedules.
                </p>
              </div>

              {/* Timing tables */}
              <div className="bg-[#111014] p-5 rounded-2xl border border-white/5 space-y-3 font-semibold text-xs text-gray-300">
                <p className="text-[#FFEE00] text-[10px] uppercase font-black tracking-widest flex items-center gap-1.5 border-b border-white/5 pb-2">
                  <Clock className="w-4 h-4" />
                  TIMING INTERVAL GROUPS
                </p>
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-mono">05:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-mono">06:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between text-[#FFEE00]">
                  <span>Sunday (Recover & Rest)</span>
                  <span className="font-mono">07:00 AM - 04:00 PM</span>
                </div>
                <p className="text-[9px] text-gray-500 pt-2 border-t border-white/5 font-normal leading-normal">
                  *Zumba dance vlogs operate on all Mon/Wed/Fri evening blocks starting at 5:30 PM & 7:00 PM. Lock-ins required due to high crowd turnout rates.
                </p>
              </div>

              {/* Coordinates block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#111014] p-4 rounded-xl border border-white/5 text-xs">
                  <p className="text-gray-500 text-[10px] font-bold uppercase">PHYSICAL ADDRESS</p>
                  <p className="text-white font-black uppercase mt-1 leading-relaxed">
                    Block 4-E, High Luxury District,<br />Crown Plaza Arcade Tower
                  </p>
                </div>
                
                <div className="bg-[#111014] p-4 rounded-xl border border-white/5 text-xs space-y-1 flex flex-col justify-center">
                  <p className="text-gray-500 text-[10px] font-bold uppercase">HOTLINE PHONES</p>
                  <p className="text-[#FFEE00] font-black tracking-wide flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    (555) ZENOVA-GYM
                  </p>
                  <p className="text-white flex items-center gap-1 font-mono">
                    <Mail className="w-3.5 h-3.5" />
                    concierge@zenovagym.com
                  </p>
                </div>
              </div>

            </div>

            {/* Premium Custom Map Plot block - Span 7 */}
            <div className="lg:col-span-7 bg-[#111014] rounded-3xl border-2 border-white/5 overflow-hidden flex flex-col h-[350px] lg:h-auto min-h-[300px] relative">
              
              {/* Dark luxury map simulator vector mesh */}
              <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center font-mono text-[9px] font-bold p-8">
                
                <div className="absolute inset-0 bg-[radial-gradient(#111115_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
                
                <div className="absolute h-1 w-full bg-zinc-900 border-y border-white/[0.04] top-1/4"></div>
                <div className="absolute h-1 w-full bg-zinc-900 border-y border-white/[0.04] top-3/4"></div>
                <div className="absolute w-1 h-full bg-zinc-900 border-x border-white/[0.04] left-1/3"></div>
                <div className="absolute w-1 h-full bg-zinc-900 border-x border-white/[0.04] left-2/3"></div>

                <span className="absolute top-1/3 left-[10%] text-zinc-700 tracking-widest">METRO PLAZA BULV.</span>
                <span className="absolute bottom-[15%] right-[10%] text-zinc-700 tracking-widest">WEST PARK HIGHWAY</span>

                {/* Verified ZENOVA SANCTUARY Golden glowing location focal spot */}
                <div className="absolute top-[48%] left-1/3 -translate-y-1/2 flex flex-col items-center z-13">
                  <div className="w-12 h-12 rounded-full bg-[#FFEE00]/15 border-2 border-[#FFEE00] flex items-center justify-center animate-ping absolute"></div>
                  
                  <div className="w-12 h-12 rounded-full bg-black border-2 border-[#FFEE00] flex items-center justify-center relative shadow-[0_0_20px_#FFEE00] hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-[#FFEE00]" />
                  </div>
                  
                  <div className="mt-2.5 bg-black/95 px-3 py-1.5 border border-[#FFEE00]/40 rounded-lg text-center shadow-md">
                    <span className="text-[10px] text-white font-black block tracking-widest">ZENOVA SANCTUARY</span>
                    <span className="text-[8px] text-[#FFEE00] block mt-0.5 uppercase">🔑 FREE UNDERGROUND DESTR_ PARKING ACTIVE</span>
                  </div>
                </div>

                {/* Subway Transit route marker pin */}
                <div className="absolute top-1/4 left-2/3 -translate-y-1/2 -translate-x-12 flex items-center space-x-1 bg-[#121115] px-2 py-1 rounded border border-white/10 z-10 text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>SUBWAY BLOCK 4 MTR (2 min walk)</span>
                </div>

                <div className="absolute bottom-[28%] left-[10%] flex items-center space-x-1 bg-[#121115] px-2 py-1 rounded border border-white/10 z-10 text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-[#FFEE00]"></span>
                  <span>FREE PUBLIC VEHICLE PARKING</span>
                </div>

              </div>
              
              {/* Overlay Directions manual bottom bar */}
              <div className="absolute bottom-0 left-0 w-full bg-[#121115] px-6 py-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase">VERIFIED LOCATION GUIDANCE</span>
                  <p className="text-white font-bold uppercase mt-0.5">{"Under Crown Plaza Palace Hotel Arcade Grid"}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=women+gym`;
                    window.open(googleMapsUrl, "_blank");
                  }}
                  className="bg-[#FFEE00] text-black font-black text-[10px] px-4 py-2 rounded-lg tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow"
                >
                  🗺️ LAUNCH GOOGLE DIRECTIONS
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-xs text-gray-500 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="ZENOVA Logo" 
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-black text-white font-display tracking-widest flex items-center uppercase">
                ZENOVA
                <span className="w-1.5 h-1.5 bg-[#FFEE00] ml-1 rounded-full shadow-[0_0_5px_#FFEE00]"></span>
              </h4>
            </div>
            <span className="text-[9px] uppercase tracking-widest block text-[#FFEE00]">{"Women's Gym Sanctuary Ltd."}</span>
            <p className="text-gray-400 font-medium leading-relaxed">
              We design luxury physical transformations of women through elite biomechanics, state strength weight rooms, and high-energy dance classes in a premium dark hotel suite ecosystem.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-4">TRAINING TRACKS</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => navigateToSection('services')} className="hover:text-[#FFEE00] transition-colors">🔥 Zumba Energy Blast</button></li>
              <li><button onClick={() => navigateToSection('services')} className="hover:text-[#FFEE00] transition-colors">🧘‍♀️ Divine Yin Restorative Yoga</button></li>
              <li><button onClick={() => navigateToSection('services')} className="hover:text-[#FFEE00] transition-colors">🏋️‍♀️ Luxury Strength hypertrophys</button></li>
              <li><button onClick={() => navigateToSection('services')} className="hover:text-[#FFEE00] transition-colors">⚡ Olympic Metabolic HIIT circuits</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-4">INVESTMENT PROMPT</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => navigateToSection('franchise')} className="hover:text-amber-400 transition-colors">💼 ROI Calculator Dashboard</button></li>
              <li><button onClick={() => navigateToSection('franchise')} className="hover:text-amber-400 transition-colors">📈 Turnkey License Blueprint</button></li>
              <li><button onClick={() => navigateToSection('franchise')} className="hover:text-amber-400 transition-colors">📞 Contact Development Director</button></li>
            </ul>
          </div>

          <div className="space-y-3 font-semibold">
            <h4 className="font-bold text-white uppercase tracking-widest">ZENOVA DISCIPLINE CORE</h4>
            <div className="p-4 bg-[#111014] rounded-xl border border-white/5 text-[10px]">
              <span className="text-emerald-400 block mb-1">🟢 SANCTUARY SECURED ONLINE</span>
              <p className="text-gray-400 leading-relaxed font-normal">All passes undergo digital vetting lists. Please bring valid identity verification on first entrance.</p>
            </div>
            <p className="text-[9px] text-gray-600 font-normal">{"© "}{new Date().getFullYear()}{" ZENOVA Women's Gym Sanctuary. Engineered natively by Google AI Studio. Dedicated to ultimate female potential."}</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
