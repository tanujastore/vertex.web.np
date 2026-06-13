import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, MessageSquare, Check, Sparkles, Clock, Trash } from 'lucide-react';
import { ContactSubmission } from '../types';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('restaurant');
  const [message, setMessage] = useState('');
  
  const [success, setSuccess] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('webstudio_leads');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not read localStorage', e);
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newSubmission: ContactSubmission = {
      name,
      email,
      phone,
      businessType,
      message,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);

    try {
      localStorage.setItem('webstudio_leads', JSON.stringify(updated));
    } catch (err) {
      console.warn('Could not write localStorage', err);
    }

    // Reset Form & Show success
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    // Auto dismiss success after 6 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };

  const clearSubmissions = () => {
    setSubmissions([]);
    try {
      localStorage.removeItem('webstudio_leads');
    } catch (e) {}
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden select-none">
      {/* Decorative Blur Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-900/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 right-10 w-[24rem] h-[24rem] bg-emerald-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info, WhatsApp details & CTA text */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
              LAUNCH YOUR PROJECT TODAY
            </span>
            
            <h2 className="font-display text-3xl sm:text-4.2xl font-bold tracking-tight leading-tight">
              Get Your Business Website In Just <span className="text-blue-400">3 Days</span>
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We guide you step-by-step. Speak with our experts directly, or submit this simple form describing what your business excels at. Let’s construct your custom portal today!
            </p>

            {/* Quick direct communication buttons */}
            <div className="pt-4 space-y-4">
              {/* WhatsApp direct block */}
              <a
                href="https://wa.me/919876543210?text=Hello,%20I'd%20love%20to%20get%2520a%2520website%2520for%2520my%2520business!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-emerald-600 hover:bg-emerald-700 p-4 rounded-2xl transition-transform hover:-translate-y-0.5 shadow-lg group text-left cursor-pointer"
              >
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <MessageSquare className="w-6 h-6 fill-white/15" />
                </div>
                <div>
                  <strong className="text-sm sm:text-base block font-bold">Message on WhatsApp Direct</strong>
                  <span className="text-emerald-100 text-[11px] leading-tight font-medium">Click to chat. Replying in under 10 mins.</span>
                </div>
              </a>

              {/* Email direct row */}
              <div className="flex items-center gap-3.5 text-left p-2.5">
                <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700 text-slate-350">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">EMAIL INBOX</div>
                  <strong className="text-xs sm:text-sm text-slate-200">hello@webstudioagency.com</strong>
                </div>
              </div>

              {/* Call direct row */}
              <div className="flex items-center gap-3.5 text-left p-2.5">
                <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700 text-slate-350">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">CALL SUPPORT LINE</div>
                  <strong className="text-xs sm:text-sm text-slate-200">+91 98765 43210</strong>
                </div>
              </div>

              {/* Location direct row */}
              <div className="flex items-center gap-3.5 text-left p-2.5">
                <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700 text-slate-350">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">OUR BASE STATION</div>
                  <strong className="text-xs sm:text-sm text-slate-200">HSR Layout, Bangalore, Karnataka</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Block */}
          <div className="lg:col-span-7">
            
            {/* Form Wrap Container */}
            <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Visual header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-100">Send an Enquiry Proposal</h3>
                  <p className="text-[11px] text-slate-450 mt-1">We prepare completely free layout mock proposals.</p>
                </div>
                <div className="bg-blue-600/10 text-blue-400 border border-blue-500/25 px-2.5 py-1 rounded-lg text-[9px] uppercase tracking-wider font-mono font-bold flex items-center gap-1 shrink-0">
                  <Clock className="w-3.5 h-3.5" /> 3-Day Turnaround
                </div>
              </div>

              {/* Success Banner message */}
              {success && (
                <div className="bg-emerald-500/10 border border-emerald-500/35 p-4 rounded-2xl flex items-start gap-3 text-emerald-300 animate-slide-up">
                  <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <Check className="w-5 h-5 stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-200">Enquiry Submitted & Logged Locally!</h4>
                    <p className="text-[11px] text-emerald-400 mt-1 leading-relaxed">
                      Your business request is registered in mock storage list below. Our project designer has scheduled a call.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Full Name / Merchant</label>
                    <input
                      type="text"
                      placeholder="Ex. Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-850 p-3 rounded-xl text-xs text-slate-200 placeholder-slate-550 focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Mail Input */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="rajesh@yourshop.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-850 p-3 rounded-xl text-xs text-slate-200 placeholder-slate-550 focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Whatsapp Mobile Input */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-sans">WhatsApp Mobile / Phone No</label>
                    <input
                      type="tel"
                      placeholder="Ex. +91 99009 88776"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-850 p-3 rounded-xl text-xs text-slate-200 placeholder-slate-550 focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Business Category Input Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Business Roster Category</label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-850 p-3 rounded-xl text-xs text-slate-200 focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="restaurant">Bistro / Dine & Restaurant</option>
                      <option value="gym">Gym / Health Fitness Center</option>
                      <option value="salon">Salon Shop & Stylist Spa</option>
                      <option value="tutor">Local Academy Tutor / Education</option>
                      <option value="other">Other Local Shop Services</option>
                    </select>
                  </div>
                </div>

                {/* Message input */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Describe Your Business / Goals</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about your current menu offerings, specific address, or any dynamic interactive layouts you prefer for your business shop!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-850 p-3 rounded-xl text-xs text-slate-200 placeholder-slate-550 focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit action Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/15"
                >
                  <Send className="w-4 h-4" /> Verify & Log Enquiry Proposal
                </button>
              </form>

            </div>

            {/* Simulated Leads Logs Storage Container */}
            {submissions.length > 0 && (
              <div className="mt-8 bg-slate-950 p-6 rounded-3xl border border-slate-800 animate-slide-up space-y-4">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-850">
                  <h4 className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400 fill-blue-500/20" /> Captured Enquiries Logged locally ({submissions.length})
                  </h4>
                  <button
                    onClick={clearSubmissions}
                    className="text-[10px] text-rose-450 hover:text-rose-400 flex items-center gap-1 font-bold cursor-pointer transition-colors"
                  >
                    <Trash className="w-3.5 h-3.5" /> Clear Client Log
                  </button>
                </div>

                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {submissions.map((sub, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-850 text-left text-xs space-y-1">
                      <div className="flex justify-between items-center text-[10px] text-slate-500">
                        <span>Submitted: <strong>{sub.submittedAt}</strong></span>
                        <span className="font-mono bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded-sm capitalize font-bold">
                          {sub.businessType}
                        </span>
                      </div>
                      <div className="font-semibold text-slate-200">{sub.name} <span className="text-slate-450 font-normal">({sub.email} · {sub.phone})</span></div>
                      <p className="text-slate-450 italic line-clamp-2 mt-1">"{sub.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
