import React from 'react';
import { Clock, Smartphone, Shield, Sparkles, TrendingUp, Cpu, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Ultra-Fast 3-Day Delivery',
      desc: 'No more waiting weeks or months for lazy freelancers. We prepare your professional digital assets and launch the site within 2 to 3 working days.',
      icon: Clock,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      title: 'Mobile Optimized Layouts',
      desc: 'Over 75% of your customers visit from smartphone devices. We design beautiful mobile-first layouts that fit perfectly on any screen, ensuring rapid scroll performance.',
      icon: Smartphone,
      color: 'text-indigo-605 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Affordable Fixed Pricing',
      desc: 'Transparent pricing matches the budget of local small shop owners. No hidden maintenance charges, surprise commissions, or lock-in contracts.',
      icon: Shield,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-105',
    },
    {
      title: 'SEO Friendly Foundations',
      desc: 'Included schema markup, fast loading assets, optimized heading hierarchy, and meta-descriptions to help you appear high on Google Maps and Local Searches.',
      icon: TrendingUp,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left select-none">
            <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">
              WHY SMART SHOP OWNERS WORK WITH US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              We Code Digital Success, From Local Shops to Thriving Brands
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
              We bypass complex corporate jargon. Our mission is to supply small business owners with beautiful, incredibly fast websites that directly contribute to daily earnings.
            </p>

            <div className="pt-4 space-y-3.5 max-w-md mx-auto lg:mx-0">
              <div className="flex gap-3 text-left">
                <div className="p-1 h-fit bg-emerald-100 text-emerald-800 rounded-lg">
                  <Smile className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">No Complex Technical Setup Required</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">We handle custom domains, fast cloud hosting setup, and email forms configure routing completely for you!</p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <div className="p-1 h-fit bg-blue-100 text-blue-800 rounded-lg">
                  <Cpu className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Instant WhatsApp Link Generator</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Customers click buttons on your mobile layout and message you directly. Direct path with zero intermediates.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-150 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all text-left"
                >
                  <div className={`p-2.5 rounded-2xl border w-fit flex items-center justify-center ${benefit.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 mt-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
