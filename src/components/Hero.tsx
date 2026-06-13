import React from 'react';
import { ArrowRight, Star, ShieldCheck, Zap, Laptop, Smartphone, Users } from 'lucide-react';

export default function Hero() {
  const clients = [
    { name: 'Gourmet Bistro', logoText: '🍕 Gourmet Bistro', type: 'Restaurant' },
    { name: 'IronGym Gyms', logoText: '🏋️ IronGym Studio', type: 'Fitness' },
    { name: 'Aura Hair Care', logoText: '✂️ Aura Salon', type: 'Beauty Care' },
    { name: 'Alpha Academy', logoText: '🎓 Veda Academy', type: 'Tutors' },
    { name: 'Apex Repairs', logoText: '🔧 Apex Garage', type: 'Services' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/60 pt-10 pb-16 sm:pb-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-blue-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 left-12 w-[24rem] h-[24rem] bg-emerald-50/10 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left select-none">
            {/* Live Indicator Promo */}
            <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-600">
                Active for New Collaborations
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6.2xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              We Build Modern <br className="hidden sm:inline" />
              Websites for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Local Businesses.</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-650 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Fast, mobile-friendly websites that help you get more customers online. Start growing your digital presence today.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-705 text-white font-bold text-sm rounded-lg shadow-xl hover:shadow-blue-200/85 transition-all flex items-center justify-center gap-2 cursor-pointer duration-200 shrink-0"
              >
                Get Your Website <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#demos"
                className="bg-white hover:bg-slate-50 text-slate-850 font-bold text-sm px-8 py-4 rounded-lg border border-slate-200 shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer duration-200"
              >
                Explore Live Demo Portfolio
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-800">4.9/5 Average Rating</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% On-Time 3-Day Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: UI Design Showcase mock */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[320px] sm:max-w-[360px] bg-slate-900 rounded-[35px] p-3.5 shadow-2xl border-[3px] border-slate-850">
              {/* Camera Lens */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-10"></div>
              
              {/* Inner screen simulation card mockup */}
              <div className="bg-slate-950 rounded-[28px] overflow-hidden border border-slate-800 p-2 text-white h-[450px] flex flex-col justify-between">
                
                {/* Status Bar simulation */}
                <div className="flex justify-between items-center text-[9px] text-slate-450 px-3 pt-1">
                  <span>09:41 AM</span>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span>LQE 5G</span>
                  </div>
                </div>

                {/* Simulated Business Site Home screen */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex-1 my-3 flex flex-col justify-between text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>
                  
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-bold text-blue-400 flex items-center gap-1">🌐 localgym.in</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-semibold">Online Booker</span>
                  </div>

                  <div className="space-y-2 my-auto">
                    <h4 className="font-display uppercase font-extrabold text-base tracking-tight leading-tight">
                      Crush Your Goals.<br />
                      Start Training.
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      Book a free personal training session instantly. Only 4 slots remaining today!
                    </p>
                    <div className="flex gap-1">
                      <span className="text-[8px] bg-slate-800 py-1 px-1.5 rounded-md border border-slate-700 font-mono text-slate-300">Fast Speed</span>
                      <span className="text-[8px] bg-slate-800 py-1 px-1.5 rounded-md border border-slate-700 font-mono text-slate-350">Responsive</span>
                    </div>
                  </div>

                  {/* Booking input demo mock button */}
                  <div className="bg-slate-950 border border-slate-800 p-2 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-[7px] text-slate-500 font-bold uppercase tracking-wide">CHALLENGE PASS</div>
                      <div className="text-[9px] text-slate-300 font-semibold mt-0.5">3-Day Free Membership</div>
                    </div>
                    <div className="bg-blue-600 px-2 py-1 rounded-md text-[8px] font-bold uppercase tracking-wider text-white">
                      Grab Box
                    </div>
                  </div>
                </div>

                {/* Bottom Bar simulation */}
                <div className="flex justify-center py-1">
                  <div className="w-24 h-1 bg-slate-850 rounded-full"></div>
                </div>
              </div>

              {/* Decorative Floating Floating Badges */}
              <div className="absolute -bottom-4 -left-6 bg-white p-3 rounded-xl border border-slate-100 shadow-lg flex items-center gap-2.5 animate-slide-up">
                <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[11px] text-slate-900">Mobile First</div>
                  <div className="text-[9px] text-slate-400">100% Fluid Screen</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-6 bg-white p-3 rounded-xl border border-slate-100 shadow-lg flex items-center gap-2.5 animate-slide-up">
                <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600 animate-pulse">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[11px] text-slate-900">Conversion Focused</div>
                  <div className="text-[9px] text-slate-400">Ready Leads Intake</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Client Trust Badges Section */}
        <div id="trust-banners" className="mt-16 pt-8 border-t border-slate-100">
          <div className="text-center mb-6">
            <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest block mb-1">
              PROVEN TRACK RECORD
            </span>
            <h3 className="font-display font-semibold text-lg text-slate-700">
              Trusted by <span className="font-extrabold text-slate-900 border-b-2 border-blue-400 py-0.5">120+ Businesses</span> Across the Region
            </h3>
          </div>
          
          {/* Scrolling logo track placeholder row */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-8 px-4 opacity-85">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-white/80 border border-slate-150 rounded-2xl px-4.5 py-2.5 shadow-2xs hover:shadow-xs transition-all hover:-translate-y-0.5 flex flex-col items-center select-none"
              >
                <span className="font-sans font-bold text-slate-800 text-xs sm:text-sm tracking-tight">
                  {c.logoText}
                </span>
                <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider font-mono mt-0.5">
                  {c.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
