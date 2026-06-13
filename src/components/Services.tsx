import React from 'react';
import { Layout, Compass, Smartphone, MessageSquare, Flame, CheckCircle, Sparkles } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 'web-design',
      title: 'Custom Website Design',
      description: 'Stunning premium layouts tailored representing your actual shop brand. Forget templated clunky builders — we code crisp layouts that convert clicks into physical visits.',
      details: ['Branded typography guides', 'Color palettes tailored for your client base', 'Professional custom assets integration', 'UX focused maps & shop routing'],
      icon: Layout,
      badge: 'POPULAR CHOICE',
      colorTheme: 'blue'
    },
    {
      id: 'landing-pages',
      title: 'Conversion Landing Pages',
      description: 'Single-page scroll funnels built exclusively to drive a single user action: get a call, register a gym pass, schedule a barber slot, or download a catalog layout.',
      details: ['Fully focused sales flow layouts', 'Integrated contact lead engines', 'A/B optimized call-to-actions', 'Perfect for local ads campaign tracking'],
      icon: Flame,
      badge: 'FAST SETUP',
      colorTheme: 'indigo'
    },
    {
      id: 'business-websites',
      title: 'Full Business Websites',
      description: 'Comprehensive multi-page online architectures showcasing your entire catalog roster, menu cards, client review galleries, trainer profiles, and location slots.',
      details: ['Multi-page internal structural grids', 'Custom CMS-like menu listings', 'Advanced staff rating listings', 'Comprehensive localized SEO basics'],
      icon: Compass,
      badge: 'MOST COVETED',
      colorTheme: 'emerald'
    },
    {
      id: 'whatsapp-integration',
      title: 'WhatsApp Automation',
      description: 'Allow clients to book tables, schedule salon sessions, or order gourmet dishes with a single click that pushes pre-filled messages on your actual business mobile!',
      details: ['Click-to-chat active buttons', 'Prewritten customized order text', 'No expensive intermediate POS required', 'Instant direct-to-owner alert line'],
      icon: MessageSquare,
      badge: 'CONVERSION ACCELERATOR',
      colorTheme: 'teal'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            WHAT WE EXCELLENTLY DELIVER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Everything Your Business Needs <br />
            to Stand Out & Thrive Online
          </h2>
          <p className="text-slate-550 text-base sm:text-md mt-3 leading-relaxed">
            We don’t just design pretty banners. We construct highly optimized digital machines that answer client questions, build trust, and drive active bookings for your local venue.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {servicesList.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-150/60 shadow-xs hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                {/* Decorative Accent Background Glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all"></div>

                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50/70 border border-blue-100 px-2.5 py-1 rounded-full uppercase">
                    {service.badge}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub Features Bullet Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Conversion Helper Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-6 sm:p-10 shadow-lg text-center relative overflow-hidden select-none">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/10 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="bg-white/15 text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
              100% TAILORED FOR MOBILE CONVERSIONS
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
              Ready to automate your inquiries directly to WhatsApp?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-lg mx-auto">
              We specilize in creating active direct channels, removing high commissions of aggregator apps.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="bg-white hover:bg-slate-50 text-blue-600 font-extrabold text-xs px-6 py-3 rounded-xl shadow-md transition-colors inline-block"
              >
                Claim Free Custom Blueprints
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
