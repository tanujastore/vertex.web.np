import React, { useState } from 'react';
import { Check, Info, Award, ShieldAlert, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'fixed' | 'monthly'>('fixed');

  const plans = [
    {
      name: 'Basic Setup Plan',
      price: '₹3,000',
      period: 'one-time fee',
      description: 'Perfect for local shops, salons, or tutors needing an active professional business card online.',
      deliveryTime: '2-3 Working Days',
      features: [
        'Single responsive modern layout',
        '3 clean content sections structured',
        'Direct call-to-action details button',
        'Google Maps location routing map',
        'Custom social media redirects',
        'Fully mobile optimized layout',
        '100% Secure clean coded pages'
      ],
      isPopular: false,
      ctaText: 'Get Basic Design',
    },
    {
      name: 'Pro Web Platform',
      price: '₹5,000',
      period: 'one-time fee',
      description: 'The complete deal tailored for growing restaurants, gyms, or booking centers with custom interactive features.',
      deliveryTime: '3-4 Working Days',
      features: [
        'Fully custom interactive layout',
        'Up to 5 dynamic sections structured',
        'Direct WhatsApp booking link integration',
        'Interactive menu listings or pricers',
        'Contact form leads capture engine',
        'Comprehensive local SEO foundations',
        'Premium high-contrast vector assets',
        'Up to 3 free minor revision rounds'
      ],
      isPopular: true,
      ctaText: 'Get Pro Platform',
    },
    {
      name: 'Monthly Care Pack',
      price: '₹1,000',
      period: 'per month care',
      description: 'Hands-off peace of mind. We take charge of your domain, host, security patches, and monthly card updates completely.',
      deliveryTime: 'Continuous Upkeep',
      features: [
        'Premium cloud server hosting fee included',
        'Premium fast loading custom domain (.in / .com)',
        'Unlimited security audits & SSL certificate',
        'Up to 2 layout text changes / updates monthly',
        'Continuous scheduled secure daily code database backup',
        'Direct emergency standby support line',
      ],
      isPopular: false,
      ctaText: 'Get Maintenance Guard',
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">
            SIMPLE, TRANSPARENT PRICING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Plans Formulated for Local Budget Needs
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Forget complex recurring enterprise contracts. Pick a simple flat-rate layout setup fee, or add our seamless monthly hosting upkeep pack to keep focus 100% on running your actual local venue!
          </p>

          {/* Quick billing cycle toggle filter */}
          <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setBillingCycle('fixed')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                billingCycle === 'fixed' ? 'bg-white text-blue-600 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Development Plans Only
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-blue-600 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Maintenance & Support Packages
            </button>
          </div>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans
            .filter((plan) => {
              if (billingCycle === 'fixed') {
                return plan.name.includes('Basic') || plan.name.includes('Pro');
              } else {
                return true; // Show all to allow easy comparison when they want monthly
              }
            })
            .map((plan, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'border-blue-550 bg-gradient-to-b from-blue-50/10 via-white to-white shadow-md lg:scale-105 z-10'
                    : 'border-slate-150 bg-white hover:border-slate-350 shadow-2xs'
                }`}
              >
                {/* Popularity ribbon */}
                {plan.isPopular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[9px] font-bold tracking-widest px-3.5 py-1 rounded-full uppercase flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3 fill-blue-100 animate-pulse" /> Popular choice for local brands
                  </span>
                )}

                {/* Plan Core Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900">{plan.name}</h3>
                    <p className="text-slate-500 text-xs mt-1.5 min-h-[40px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1.5 pb-4 border-b border-slate-100">
                    <span className="text-3xl sm:text-4.2xl font-bold font-display text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-slate-450 text-xs">/ {plan.period}</span>
                  </div>

                  {/* Delivery stats */}
                  <div className="flex items-center justify-between text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-150/60 font-medium">
                    <span className="text-slate-550">Turnaround Speed:</span>
                    <strong className="text-blue-600 font-bold">{plan.deliveryTime}</strong>
                  </div>

                  {/* Features Bullet List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-[9px] font-bold text-slate-450 uppercase tracking-widest font-mono">
                      What is fully included:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[2.5px]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action button wrapper */}
                <div className="pt-8">
                  <a
                    href="#contact"
                    className={`w-full py-3.5 rounded-xl text-center font-bold text-xs select-none block hover:scale-[1.01] transition-transform ${
                      plan.isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25'
                        : 'bg-slate-900 hover:bg-black text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>

              </div>
            ))}
        </div>

        {/* Interactive Comparison Tip card */}
        <div className="mt-14 max-w-xl mx-auto rounded-2xl bg-amber-50/50 p-4.5 border border-amber-200/50 flex gap-3 text-left">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-650 leading-relaxed">
            <strong>Need something unique?</strong> We support custom extensions like online bookings widgets, custom CRM/WhatsApp bots, and Google Sheets integration. Let us know during our chat and we’ll customize the package perfect for you.
          </p>
        </div>

      </div>
    </section>
  );
}
