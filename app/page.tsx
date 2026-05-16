"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, Trophy, Users, BookOpen, ArrowRight, Sparkles,
  Phone, MapPin, Mail, CheckCircle2, ChevronDown, MessageSquare, 
  X, Send, Star, ShieldCheck, Image as ImageIcon, HelpCircle
} from "lucide-react";

// ==========================================
// CENTRAL CONFIG: एका मिनिटात संपूर्ण अकॅडमी ब्रँड बदला!
// ==========================================
const LATUR_COACHING_CONFIG = {
  academyName: "LATUR COACHING EXCELLENCE",
  tagline: "The Ultimate Launchpad For NEET Air Ranks & IIT-JEE Core Success",
  phone: "+91 9967666084",
  email: "excellence@laturpattern.com",
  address: "Shahu College Road, Near Central Library, Latur - 413512",
  whatsappMessage: "Hello Latur Coaching Excellence! I want to enroll in the Premium Selection Batch for NEET/JEE.",
  
  stats: [
    { label: "Top 500 AIR Ranks", value: "112+" },
    { label: "AIIMS & IIT Selection Rate", value: "87%" },
    { label: "Ph.D. & Ex-IITian Core Faculty", value: "45+" },
  ],

  courses: [
    { title: "NEET Super-30 Batch", target: "11th, 12th & Repeaters", desc: "Highly intensive NCERT-micro mapping, exhaustive OMR simulators, and daily personal analysis charts.", badge: "Elite Batch" },
    { title: "IIT-JEE Advanced Orbit", target: "Mains & Advanced Target", desc: "Rigorous focus on advanced calculus, conceptual physics matrix, and logic building patterns.", badge: "Highest Conversions" },
    { title: "Olympiad & NTSE Shield", target: "8th, 9th & 10th Foundation", desc: "Early conceptual boosting to crack national competitive exams and build rock-solid fundamentals.", badge: "Foundation" }
  ],

  faculties: [
    { name: "Dr. R. K. Shinde", role: "Head of Organic Chemistry (Ex-IIT B.)", exp: "18+ Yrs Exp", desc: "Mentored over 500+ MBBS selections in Latur." },
    { name: "Prof. S. Deshmukh", role: "Physics Scholar (Ex-Vibrant Kota)", exp: "14+ Yrs Exp", desc: "Famous for visualising complex electromagnetic numericals." }
  ],

  faqs: [
    { q: "What is Latur Pattern testing frequency here?", a: "We follow a 3-layer testing pattern: Daily Micro Tests (15 mins), Weekly OMR Full-Length Tests, and Monthly NTA Mock Simulators." },
    { q: "How do you handle student stress and mental focus?", a: "Every student has a assigned Mentor Professor. Additionally, we conduct biometric-tracked silent library slots and meditation sessions." },
    { q: "Is there any scholarship for meritorious students?", a: "Yes! Based on our Excellence Talent Search Exam (ETSE), students can get up to a 100% tuition fee waiver." }
  ]
};

export default function LaturCoachingExcellence() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hello! Welcome to Latur Coaching Excellence. Are you looking for NEET or JEE batches?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleWhatsAppEnquiry = () => {
    const encoded = encodeURIComponent(LATUR_COACHING_CONFIG.whatsappMessage);
    window.open(`https://wa.me/${LATUR_COACHING_CONFIG.phone.replace(/[^0-9]/g, "")}?text=${encoded}`, "_blank");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage;
    setChatMessages((prev) => [...prev, { text: userMsg, isBot: false }]);
    setInputMessage("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev, 
        { text: "Great! Our Academic Dean will contact you on WhatsApp within 5 minutes with the complete batch schedule and fee structures. Click the 'Apply Online' button to lock a demo slot!", isBot: true }
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-600 selection:text-white antialiased">
      
      {/* 1. Header (Translucent Elite Layer) */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-black text-xl md:text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 uppercase">
            <GraduationCap className="h-7 w-7 text-indigo-400 animate-pulse" />
            {LATUR_COACHING_CONFIG.academyName}
          </div>
          <button onClick={handleWhatsAppEnquiry} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-5 py-2.5 rounded-xl font-black text-xs tracking-widest uppercase transition-all shadow-lg shadow-indigo-500/20 hover:scale-105 flex items-center gap-1.5">
            Apply Online <ArrowRight size={14} />
          </button>
        </div>
      </header>

      {/* 2. Hero Hub Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-pink-400" /> Premium Admission Gateway 2026-27
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 mb-6 uppercase leading-[1.1]">
              {LATUR_COACHING_CONFIG.tagline}
            </h1>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Latur Pattern has evolved. We introduce real-time AI analytics tracking with India's most aggressive doubt-solving system to ensure guaranteed results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={handleWhatsAppEnquiry} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-indigo-600/20 flex items-center gap-2 hover:scale-105">
                Download Brochure & OMR Set <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Right Smart Campus Display */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-800 p-2 bg-slate-900/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200" 
              alt="Latur Premium Classroom" 
              className="w-full h-full object-cover rounded-2xl filter brightness-90" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. Success Statistics Grid */}
      <section className="py-12 bg-slate-900/20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {LATUR_COACHING_CONFIG.stats.map((st, idx) => (
              <div key={idx} className="p-6 bg-slate-950/40 border border-slate-900/60 rounded-2xl">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{st.value}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-3">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Target Programs Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-extrabold uppercase tracking-widest text-xs">Academic Blueprints</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 text-white uppercase tracking-tight">Our High-Impact Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LATUR_COACHING_CONFIG.courses.map((course, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="p-8 bg-gradient-to-b from-slate-900/60 to-slate-900/10 border border-slate-800/80 rounded-2xl hover:border-indigo-500/30 transition-all flex flex-col justify-between relative group">
                <span className="absolute top-4 right-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-wider">{course.badge}</span>
                <div>
                  <div className="p-3 bg-slate-800 w-fit rounded-xl mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <BookOpen size={22} />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-1.5">{course.title}</h3>
                  <span className="text-xs font-bold text-purple-400 tracking-wider block mb-4 uppercase">{course.target}</span>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{course.desc}</p>
                </div>
                <button onClick={handleWhatsAppEnquiry} className="w-full py-3 bg-slate-950 hover:bg-indigo-600 border border-slate-800 hover:border-indigo-600 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5">
                  Fee Structure Matrix <ArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Expert Faculty Hub */}
      <section className="py-24 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-purple-400 font-extrabold uppercase tracking-widest text-xs">The Brain Trust</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 text-white uppercase tracking-tight">Latur's Core Mentor Matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {LATUR_COACHING_CONFIG.faculties.map((fac, idx) => (
              <div key={idx} className="p-8 bg-slate-950 border border-slate-900 rounded-2xl flex flex-col justify-between hover:border-purple-500/20 transition-colors">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-black text-white uppercase tracking-wide">{fac.name}</h3>
                      <p className="text-xs font-bold text-indigo-400 uppercase mt-0.5">{fac.role}</p>
                    </div>
                    <span className="text-[10px] font-black bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2.5 py-1 rounded uppercase tracking-wider">{fac.exp}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{fac.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase">
                  <ShieldCheck size={14} className="text-emerald-400" /> Verified Core Pillar
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Parent Matrix FAQ Accordion */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-pink-400 font-extrabold uppercase tracking-widest text-xs">Transparancy Module</span>
            <h2 className="text-3xl font-black mt-4 text-white uppercase tracking-tight">Parent Information Matrix</h2>
          </div>
          <div className="space-y-4">
            {LATUR_COACHING_CONFIG.faqs.map((faq, index) => (
              <div key={index} className="border border-slate-900 bg-slate-950 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-slate-200 hover:text-white transition-colors"
                >
                  <span className="text-sm md:text-base uppercase tracking-wider">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-indigo-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-sm text-slate-400 leading-relaxed border-t border-slate-900/40 bg-slate-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Spot Selection Concierge Box */}
      <section className="py-24 border-t border-slate-900 bg-slate-900/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 md:p-12 border border-slate-800 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight mb-4">Secure Elite Seat Registration</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Due to massive Latur Pattern density, spot admissions are capped weekly. Submit your quick screening request, and our desk team will map your diagnostic schedule.</p>
              
              <div className="space-y-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <div className="flex gap-4 items-center">
                  <span className="bg-slate-800 p-2.5 rounded-xl text-indigo-400"><MapPin size={16} /></span>
                  <span>{LATUR_COACHING_CONFIG.address}</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="bg-slate-800 p-2.5 rounded-xl text-purple-400"><Phone size={16} /></span>
                  <span>{LATUR_COACHING_CONFIG.phone}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <h3 className="font-black text-xs uppercase tracking-widest text-white mb-6 text-center">Diagnostic Profile Submission</h3>
              {submitted ? (
                <p className="text-indigo-400 font-bold text-center py-12 text-xs uppercase tracking-widest animate-pulse">Mapping details to Dean's office registry via WhatsApp...</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(handleWhatsAppEnquiry, 1000); }} className="space-y-4">
                  <input type="text" placeholder="Student Name" required className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-xs focus:border-indigo-500 outline-none text-slate-100 transition-all uppercase tracking-wider" />
                  <input type="text" placeholder="Parent Contact Number" required className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-xs focus:border-indigo-500 outline-none text-slate-100 transition-all uppercase tracking-wider" />
                  <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-black py-4 rounded-xl text-xs tracking-widest uppercase transition-all shadow-md shadow-indigo-600/10 hover:scale-[1.01]">Request Callback & Token</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. AI Interactive Chat Widget (Floating Magic) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform relative group"
        >
          {isChatOpen ? <X size={22} /> : <MessageSquare size={22} />}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </button>

        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="absolute bottom-18 right-0 w-[320px] md:w-[360px] h-[420px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Chat Header */}
              <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-white" />
                  <div>
                    <h4 className="font-bold text-xs text-white uppercase tracking-wider">Excellence AI Desk</h4>
                    <p className="text-[9px] text-indigo-200 uppercase font-medium">Replies Instantly</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white"><X size={16} /></button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-950/50">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[80%] p-3 rounded-xl leading-relaxed ${msg.isBot ? 'bg-slate-800 text-slate-100 border border-slate-700/50' : 'bg-indigo-600 text-white'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                <input 
                  type="text" 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about Fees, Batches, Scholarships..." 
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500 transition-colors"
                />
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-xl transition-colors">
                  <Send size={14} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 9. Footer */}
      <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center text-[10px] text-slate-600 font-bold tracking-widest uppercase">
        © 2026 {LATUR_COACHING_CONFIG.academyName}. Engineered By AyushNexa Solutions.
      </footer>

    </div>
  );
}