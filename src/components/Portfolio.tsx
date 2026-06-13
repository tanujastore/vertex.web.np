import React from 'react';
import { Sparkles, Utensils, Scissors, Dumbbell, Smartphone, Monitor, PlayCircle, Eye } from 'lucide-react';

interface PortfolioProps {
  onSelectDemo: (demoId: 'restaurant' | 'gym' | 'salon') => void;
}

export default function Portfolio({ onSelectDemo }: PortfolioProps) {
  const demoCards = [
    {
      id: 'restaurant',
      title: 'Italian Fine Dining Demo',
      businessName: 'Bella Italia Restaurant',
      desc: 'Wood-fired gourmet pizza, handmade pastas, and a seamless reservation engine with no commission cuts.',
      category: 'Gourmet & Restaurant',
      icon: Utensils,
      color: 'bg-amber-100 text-amber-700 border-amber-200',
      accentColor: 'amber',
      features: ['Filtered Dishes Menu', 'Direct Live Booking Table Form', 'Instant digital feedback mechanism'],
      deviceType: 'Smartphone Mobile'
    },
    {
      id: 'gym',
      title: 'Apex Fitness Center Demo',
      businessName: 'Apex Gym Arena',
      desc: 'High energy website with localized schedule planners, coach files, and an online BMI diagnostic calculator.',
      category: 'Fitness & Health Studio',
      icon: Dumbbell,
      color: 'bg-slate-900 text-yellow-400 border-slate-800',
      accentColor: 'yellow',
      features: ['Weekly Trainer Workout Class Schedule', 'Functional Health BMI Calculator', '3-Day Free Invitation Grabber'],
      deviceType: 'Hydrid Tablet Screen'
    },
    {
      id: 'salon',
      title: 'Luxe Body Salon & Spa Demo',
      businessName: 'Luxe Style Sanctuary',
      desc: 'Sophisticated aesthetics catalog featuring a live styling price estimator and therapist selector.',
      category: 'Beauty Care & Spa',
      icon: Scissors,
      color: 'bg-rose-50 text-rose-700 border-rose-200',
      accentColor: 'rose',
      features: ['Interactive Treatment Pricing Cart', 'Designer Beautician Chooser', 'Instant SMS/WhatsApp Notification Mock'],
      deviceType: 'Fluid Mobile Screen'
    }
  ];

  return (
    <section id="demos" className="py-16 sm:py-24 bg-white relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">
            100% INTERACTIVE PLAYGROUND
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Click & Test our Demo Platforms
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Don't take our word for it. Try these specialized layout templates we structured for local salons, high-octane gyms, and culinary bistros. Click the <strong className="text-slate-800">"View Demo"</strong> link below to trigger our device simulator!
          </p>
        </div>

        {/* Demo Cards Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {demoCards.map((demo) => {
            const Icon = demo.icon;
            return (
              <div
                key={demo.id}
                className="bg-white rounded-3xl border border-slate-150 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:translate-y-[-4px]"
              >
                {/* Visual Top Branding Strip */}
                <div className={`p-6 border-b border-slate-100 flex items-center justify-between gap-4 ${
                  demo.id === 'restaurant' ? 'bg-amber-50/20' : demo.id === 'gym' ? 'bg-slate-950 text-white' : 'bg-rose-50/30'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border flex items-center justify-center ${demo.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider block opacity-60">
                        {demo.category}
                      </span>
                      <strong className="text-xs sm:text-sm font-semibold block leading-tight font-display">
                        {demo.businessName}
                      </strong>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-sm bg-blue-50 text-blue-600 font-bold border border-blue-100 uppercase tracking-wider hidden sm:block">
                    LIVE PREVIEW
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {demo.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {demo.desc}
                    </p>
                  </div>

                  {/* Highlighted Micro Modules */}
                  <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-150 space-y-2.5">
                    <div className="text-[9px] font-bold text-slate-450 uppercase tracking-wider font-mono">
                      CORE INTELLIGENT CAPABILITIES:
                    </div>
                    <ul className="space-y-2">
                      {demo.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          <span className="font-semibold">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Live Test Simulator Trigger Button */}
                  <div>
                    <button
                      onClick={() => onSelectDemo(demo.id as any)}
                      className="w-full py-3 px-4 rounded-xl border border-blue-200 bg-blue-50/50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:border-blue-600"
                    >
                      <Eye className="w-4 h-4" />
                      Launch Active Demo
                    </button>
                    <div className="text-center text-[9px] text-slate-400 mt-2">
                      Simulated device viewport layout: <strong>{demo.deviceType}</strong>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Warning Informational Banner */}
        <div className="mt-14 max-w-2xl mx-auto rounded-3xl bg-slate-50 p-5 border border-slate-200/60 flex items-start gap-4">
          <div className="text-2xl mt-0.5 select-none text-slate-500">💡</div>
          <div>
            <h4 className="font-bold text-xs text-slate-800">Pro Tip for Business Owners:</h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              These website designs can be customized with your own color codes, logo, pricing catalog, and operating times in just a few clicks. Request a fully free custom mockup for your shop today and we will structure a draft template matching your requirements in 48 hours!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
