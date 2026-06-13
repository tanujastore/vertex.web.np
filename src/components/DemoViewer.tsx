import React, { useState } from 'react';
import { X, Smartphone, Tablet, Monitor, RefreshCw, Star, ArrowRight, Wifi, Battery, AlertCircle } from 'lucide-react';
import RestaurantDemo from './demos/RestaurantDemo';
import GymDemo from './demos/GymDemo';
import SalonDemo from './demos/SalonDemo';

interface DemoViewerProps {
  demoId: 'restaurant' | 'gym' | 'salon' | null;
  onClose: () => void;
}

export default function DemoViewer({ demoId, onClose }: DemoViewerProps) {
  const [activeTab, setActiveTab] = useState<'restaurant' | 'gym' | 'salon'>(demoId || 'restaurant');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [key, setKey] = useState<number>(0); // For resetting state on reload click

  // Sync initial state if prop changes
  React.useEffect(() => {
    if (demoId) {
      setActiveTab(demoId);
    }
  }, [demoId]);

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  const getDemoHeading = () => {
    switch (activeTab) {
      case 'restaurant': return 'Bella Italia Modern Dining App';
      case 'gym': return 'Apex Fitness Interactive Gym Hub';
      case 'salon': return 'Luxe Salon Booking & Estimator';
    }
  };

  const getDemoSubtext = () => {
    switch (activeTab) {
      case 'restaurant': return 'High-converting interactive digital menu and instant reservation booker.';
      case 'gym': return 'Energetically styled workout schedules and customized BMI metrics.';
      case 'salon': return 'Dynamic cost calculator and real-time aesthetic service stylist chooser.';
    }
  };

  // Dimensions based on device mode
  const getDeviceStyles = () => {
    switch (deviceMode) {
      case 'mobile':
        return {
          width: '380px',
          height: '780px',
          borderRadius: '40px',
          borderWidth: '12px',
          borderColor: '#1e293b', // slate-800
        };
      case 'tablet':
        return {
          width: '768px',
          height: '920px',
          borderRadius: '32px',
          borderWidth: '16px',
          borderColor: '#1e293b',
        };
      case 'desktop':
        return {
          width: '100%',
          maxWidth: '1100px',
          height: '750px',
          borderRadius: '16px',
          borderWidth: '2px',
          borderColor: '#e2e8f0', // slate-200
        };
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex flex-col justify-between overflow-hidden animate-fade-in p-2 sm:p-4">
      {/* Top Controller Bar */}
      <div className="bg-slate-950 text-white rounded-2xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600/10 border border-blue-500/20 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-blue-400">DEMO PLAYGROUND</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-base md:text-lg text-slate-100 flex items-center gap-2">
              {getDemoHeading()}
            </h3>
            <p className="text-slate-450 text-[11px] leading-relaxed hidden sm:block">{getDemoSubtext()}</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Quick Demo Switcher */}
          <div className="bg-slate-900 p-1 rounded-xl flex border border-slate-800">
            {(['restaurant', 'gym', 'salon'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  handleReload();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Viewport Switchers */}
          <div className="bg-slate-900 p-1 rounded-xl flex border border-slate-800">
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                deviceMode === 'mobile' ? 'bg-slate-850 text-blue-400' : 'text-slate-450 hover:text-slate-200'
              }`}
              title="Simulator Viewport: Mobile"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                deviceMode === 'tablet' ? 'bg-slate-850 text-blue-400' : 'text-slate-450 hover:text-slate-200'
              }`}
              title="Simulator Viewport: Tablet"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                deviceMode === 'desktop' ? 'bg-slate-850 text-blue-400' : 'text-slate-450 hover:text-slate-200'
              }`}
              title="Simulator Viewport: Expanded Screen"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>

          {/* Refresh & Close */}
          <button
            onClick={handleReload}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-350 cursor-pointer transition-colors"
            title="Reload Simulator Session"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-rose-500/15 hover:bg-rose-500 text-rose-400 hover:text-white transition-all cursor-pointer"
            title="Leave Demo Sandbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Simulator Frame Container */}
      <div className="flex-1 flex justify-center items-center p-3 relative overflow-auto">
        <div
          style={getDeviceStyles()}
          className="relative bg-white shadow-2xl transition-all duration-300 ease-in-out border-solid overflow-hidden flex flex-col"
        >
          {/* Mobile Notch & Status Bar overlay */}
          {deviceMode === 'mobile' && (
            <div className="bg-slate-900 text-white text-[10px] px-6 py-2.5 flex justify-between items-center select-none shrink-0 relative">
              {/* Left clock */}
              <span className="font-semibold tracking-wide">10:42 AM</span>
              {/* Center camera pill */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-24 h-5 bg-black rounded-full border border-slate-800 border-t-0 z-20"></div>
              {/* Right indicators */}
              <div className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5" />
                <span className="font-mono tracking-tighter">5G</span>
                <Battery className="w-4 h-4 text-emerald-400 stroke-[2.5px]" />
              </div>
            </div>
          )}

          {/* Tablet Status Bar overlay */}
          {deviceMode === 'tablet' && (
            <div className="bg-slate-950 text-slate-300 text-[11px] px-8 py-2.5 flex justify-between items-center select-none shrink-0 border-b border-slate-900">
              <span className="font-semibold">Bella-Fi Secure Network</span>
              <div className="flex items-center gap-3">
                <span className="font-mono">10:42 AM</span>
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-4.5 h-4.5 text-emerald-400 stroke-[2.5px]" />
              </div>
            </div>
          )}

          {/* Simulated Browser Bar (Desktop only) */}
          {deviceMode === 'desktop' && (
            <div className="bg-slate-100 px-4 py-2.5 flex items-center justify-between gap-4 border-b border-slate-200 select-none shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-rose-500 rounded-full border border-rose-650"></span>
                <span className="w-3 h-3 bg-amber-400 rounded-full border border-amber-550"></span>
                <span className="w-3 h-3 bg-emerald-500 rounded-full border border-emerald-650"></span>
              </div>
              <div className="flex-1 max-w-lg bg-white px-3 py-1 rounded-md border border-slate-250 text-center font-mono text-[11px] text-slate-500 truncate select-all">
                https://demo.{activeTab}studios.com/home
              </div>
              <div className="w-16"></div>
            </div>
          )}

          {/* Embedded Simulated Site Content */}
          <div className="flex-1 overflow-y-auto relative bg-stone-50">
            {activeTab === 'restaurant' && <RestaurantDemo key={key} />}
            {activeTab === 'gym' && <GymDemo key={key} />}
            {activeTab === 'salon' && <SalonDemo key={key} />}
          </div>

          {/* Tablet & Mobile home button bar indicator */}
          {deviceMode !== 'desktop' && (
            <div className="bg-slate-950 py-2.5 flex justify-center items-center shrink-0">
              <div className="w-32 h-1 bg-slate-800 rounded-full"></div>
            </div>
          )}
        </div>
      </div>

      {/* Persistent Sticky Tips Footer */}
      <div className="bg-slate-950 text-slate-400 text-center text-[11px] py-2 border-t border-slate-800 hidden sm:flex items-center justify-center gap-2">
        <AlertCircle className="w-3.5 h-3.5 text-blue-400" />
        <span>You are currently in our conversion-focused live sandbox. Select other formats or test interactive components perfectly!</span>
      </div>
    </div>
  );
}
