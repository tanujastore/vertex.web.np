import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Demo Portfolios', href: '#demos' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight">
                Web<span className="text-blue-600">Studio</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 text-sm font-semibold tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hello,%20I'd%20love%20to%20get%20a%20website%20for%20my%20business!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-xs font-bold tracking-wide transition-colors bg-emerald-50 px-3.5 py-2 rounded-xl"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-100" />
              WhatsApp Direct
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/15 transition-all flex items-center gap-1.5 hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-50 focus:outline-hidden cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-slide-down">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-blue-600 text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100 mt-2 space-y-2 px-3">
              <a
                href="https://wa.me/919876543210?text=Hello,%20I'd%20love%20to%20get%20a%2520website%2520for%2520my%2520business!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-emerald-700 bg-emerald-50 w-full py-2.5 rounded-xl text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-100" />
                WhatsApp Direct Link
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                Get Custom Quote <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
