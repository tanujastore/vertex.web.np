import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import ContactSection from './components/ContactSection';
import DemoViewer from './components/DemoViewer';
import { ArrowUp, Sparkles, HelpCircle, ChevronRight, Github, Twitter, Facebook, Instagram } from 'lucide-react';

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState<'restaurant' | 'gym' | 'salon' | null>(null);

  const handleOpenDemo = (demoId: 'restaurant' | 'gym' | 'salon') => {
    setSelectedDemo(demoId);
  };

  const handleCloseDemo = () => {
    setSelectedDemo(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Structural Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        
        {/* Dynamic services overview */}
        <Services />

        {/* Portfolio demonstration zone with links to Device Simulator */}
        <Portfolio onSelectDemo={handleOpenDemo} />

        {/* Brand values, stats, and why work with us */}
        <WhyChooseUs />

        {/* Direct pricing metrics for local operators */}
        <Pricing />

        {/* Contact form leads capture block */}
        <ContactSection />
      </main>

      {/* Interactive FAQ Roster segment */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 select-none">
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" /> Frequently Answered Queries
            </h3>
            <p className="text-slate-500 text-xs mt-1">Direct answers with zero tech jargon.</p>
          </div>

          <div className="space-y-4 text-left">
            {[
              {
                q: 'What is really included in the 3-day turnaround delivery speed?',
                a: 'We code your website complete with content sections, high-contrast typography, and fully responsive mobile layouts. We hook up contact buttons directly to your WhatsApp. Hosting, domain, and servers are up and active in under 72 hours!'
              },
              {
                q: 'Do I need to pay any heavy commissions or software fees?',
                a: 'No. Traditional food/salon aggregators charge up to 30% on transactions. We bypass them completely by designing active booking systems. The WhatsApp buttons trigger direct texts to your private phone number for free!'
              },
              {
                q: 'Can I request edits or customize colors matching my storefront?',
                a: 'Absolutely! Every single element — from menu photos, chef specialties, booking slots, and coloring styles — is fully custom-molded to fit your local brand perfectly.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-2xl border border-slate-150 p-4.5 cursor-pointer group transition-all [&_summary::-webkit-details-marker]:hidden hover:border-slate-300"
              >
                <summary className="flex justify-between items-center font-semibold text-slate-850 text-xs sm:text-sm font-sans list-none select-none">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Segment */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-600 rounded-xl text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  Web<span className="text-blue-500">Studio</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Helping small business owners grow online with zero-hassle, professional hand-coded websites.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Service Menu</h4>
              <ul className="space-y-1.5 text-xs text-slate-450">
                <li><a href="#services" className="hover:text-white transition-colors">Website Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Landing Pages</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Business Pages</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">WhatsApp Automations</a></li>
              </ul>
            </div>

            {/* Column 3: Contact quick facts */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Office Base</h4>
              <p className="text-xs text-slate-450 leading-relaxed font-sans">
                Sector 4, HSR Layout, Bangalore<br />
                Karnataka - 560102, India
              </p>
              <div className="text-xs text-slate-450 mt-2 font-mono">
                📞 +91 98765 43210
              </div>
            </div>

            {/* Column 4: Social placeholders */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-sans">Social Channels</h4>
              <div className="flex gap-2">
                {[
                  { icon: Twitter, link: '#' },
                  { icon: Facebook, link: '#' },
                  { icon: Instagram, link: '#' },
                  { icon: Github, link: '#' },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.link}
                      className="p-2 rounded-lg bg-slate-905 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
              <div className="text-[10px] text-slate-550 mt-4 leading-relaxed font-sans">
                Active digital members since 2026. Custom assets hand-crafted manually.
              </div>
            </div>

          </div>

          <div className="pt-8 mt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <p>© 2026 WebStudio Agency. All rights and codes fully reserved.</p>
            
            {/* Quick Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-blue-500 hover:text-blue-400 font-bold flex items-center gap-1 transition-colors cursor-pointer mt-4 sm:mt-0"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Active Device Simulator overlays sandbox (Only when selectedDemo is active) */}
      {selectedDemo && (
        <DemoViewer demoId={selectedDemo} onClose={handleCloseDemo} />
      )}

    </div>
  );
}
