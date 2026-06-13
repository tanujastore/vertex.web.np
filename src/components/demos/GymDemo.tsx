import React, { useState } from 'react';
import { Dumbbell, Calendar, Users, Award, ShieldAlert, Check } from 'lucide-react';

export default function GymDemo() {
  const [selectedDay, setSelectedDay] = useState<'Mon' | 'Wed' | 'Fri'>('Mon');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('175');
  const [bmiResult, setBmiResult] = useState<{ score: number; status: string } | null>(null);
  const [subStatus, setSubStatus] = useState<boolean>(false);

  const schedule = {
    Mon: [
      { id: 1, time: '07:00 AM', name: 'HIIT Fireblast', coach: 'Coach Rahul', level: 'Intermediate' },
      { id: 2, time: '10:00 AM', name: 'Power Yoga Flow', coach: 'Elena Rostova', level: 'Beginner' },
      { id: 3, time: '06:30 PM', name: 'Iron Core Strength', coach: 'Vikram Singh', level: 'Advanced' }
    ],
    Wed: [
      { id: 4, time: '07:00 AM', name: 'MMA Striking', coach: 'Vikram Singh', level: 'Advanced' },
      { id: 5, time: '09:30 AM', name: 'Cardio Kickboxing', coach: 'Coach Rahul', level: 'All Levels' },
      { id: 6, time: '07:00 PM', name: 'Ashtanga Pilates', coach: 'Elena Rostova', level: 'Beginner' }
    ],
    Fri: [
      { id: 7, time: '08:00 AM', name: 'Olympic Weightlifting', coach: 'Coach Rahul', level: 'Advanced' },
      { id: 8, time: '11:00 AM', name: 'Core Sculpt', coach: 'Elena Rostova', level: 'Intermediate' },
      { id: 9, time: '06:00 PM', name: 'Sunset Yoga Meditation', coach: 'Elena Rostova', level: 'Beginner' }
    ]
  };

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const score = parseFloat((w / (h * h)).toFixed(1));
      let status = 'Normal';
      if (score < 18.5) status = 'Underweight';
      else if (score >= 25 && score < 29.9) status = 'Overweight';
      else if (score >= 30) status = 'Obese';
      setBmiResult({ score, status });
    }
  };

  const currentClasses = schedule[selectedDay];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-full font-sans pb-12">
      {/* Mini Header */}
      <header className="sticky top-0 bg-slate-900/95 backdrop-blur-sm shadow-xs py-3 px-4 flex justify-between items-center z-10 border-b border-slate-800">
        <span className="font-display font-bold text-base tracking-wider text-yellow-400 flex items-center gap-1.5">
          <Dumbbell className="w-5 h-5" />
          APEX FITNESS
        </span>
        <a href="#join" className="bg-yellow-400 text-slate-950 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-yellow-500 transition-colors">
          Join Free
        </a>
      </header>

      {/* Hero */}
      <section className="px-5 py-12 text-center relative overflow-hidden bg-radial from-slate-900 to-slate-950">
        <div className="max-w-md mx-auto">
          <span className="text-[9px] uppercase tracking-widest font-semibold text-yellow-400 border border-yellow-400/30 px-2.5 py-1 rounded-sm">
            No Join Fee This Week Only
          </span>
          <h1 className="font-display uppercase text-2xl md:text-3xl font-extrabold mt-3 leading-tight tracking-tight">
            Stop Staring. <span className="text-yellow-400 block sm:inline">Start Sweating.</span>
          </h1>
          <p className="text-slate-400 text-xs mt-2 leading-relaxed">
            Get access to standard modern high-powered weight zones, dynamic instructor-led fitness clubs, and precision recovery health suites.
          </p>
          <div className="mt-5 flex gap-2 justify-center">
            <a href="#schedule" className="bg-yellow-400 text-slate-950 text-xs px-4 py-2 rounded-md font-bold shadow-xs hover:bg-yellow-500 transition-colors">
              Class Schedule
            </a>
            <a href="#bmi" className="bg-transparent border border-slate-700 text-slate-300 text-xs px-4 py-2 rounded-md font-bold hover:bg-slate-800 transition-colors">
              BMI Tracker
            </a>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-slate-900 py-3 px-4 border-y border-slate-800/80">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center text-[10px]">
          <div>
            <div className="text-yellow-400 font-bold text-sm">2,500+</div>
            <div className="text-slate-400">Sq. Ft. Grid</div>
          </div>
          <div className="border-x border-slate-800">
            <div className="text-yellow-400 font-bold text-sm">15+</div>
            <div className="text-slate-400">Pro Coaches</div>
          </div>
          <div>
            <div className="text-yellow-400 font-bold text-sm">24/7</div>
            <div className="text-slate-400">Secure Access</div>
          </div>
        </div>
      </section>

      {/* Classes Toggler */}
      <section id="schedule" className="px-4 py-8 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-display text-lg uppercase font-bold text-slate-100 flex items-center justify-center gap-1.5">
            <Calendar className="w-4 h-4 text-yellow-400" />
            Weekly Classes
          </h2>
          <div className="w-10 h-0.5 bg-yellow-400 mx-auto mt-1.5"></div>
        </div>

        {/* Day Selectors */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {(['Mon', 'Wed', 'Fri'] as const).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`py-1.5 text-xs rounded-md font-semibold transition-all cursor-pointer ${
                selectedDay === day
                  ? 'bg-yellow-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {day === 'Mon' ? 'Monday' : day === 'Wed' ? 'Wednesday' : 'Friday'}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-3">
          {currentClasses.map((cl) => (
            <div key={cl.id} className="bg-slate-900 p-3.5 rounded-lg border border-slate-800/60 flex justify-between items-center">
              <div>
                <span className="text-yellow-400 text-[10px] uppercase font-bold tracking-wider">{cl.time}</span>
                <h4 className="font-bold text-xs text-slate-200 mt-0.5">{cl.name}</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1">
                  <span>{cl.coach}</span>
                </div>
              </div>
              <span className="text-[10px] uppercase bg-slate-800 border border-slate-700 text-slate-300 font-medium px-2 py-0.5 rounded">
                {cl.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BMI Calculator Widget */}
      <section id="bmi" className="px-4 py-8 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-5">
            <h2 className="font-display text-lg uppercase font-bold text-slate-100 flex items-center justify-center gap-1.5">
              <Users className="w-4 h-4 text-yellow-400" />
              Fitness BMI Calculator
            </h2>
            <p className="text-slate-400 text-[11px] mt-1">Quickly check your health ratio metrics.</p>
          </div>

          <form onSubmit={calculateBMI} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">Weight (KG)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-slate-900 text-slate-100 text-xs border border-slate-800 rounded-md p-2 focus:border-yellow-400 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">Height (CM)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-slate-900 text-slate-100 text-xs border border-slate-800 rounded-md p-2 focus:border-yellow-400 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-850 hover:bg-slate-800 border border-slate-700 text-yellow-400 py-1.5 px-3 rounded-md text-xs font-semibold cursor-pointer transition-colors"
            >
              Calculate BMI Now
            </button>

            {bmiResult && (
              <div className="mt-3 p-3 bg-slate-900 rounded-md border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Result status</span>
                  <span className="font-bold text-sm text-yellow-400">{bmiResult.status}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">BMI score</span>
                  <span className="font-mono font-bold text-slate-100 text-base">{bmiResult.score}</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Simple Sign Up */}
      <section id="join" className="px-4 py-8 max-w-sm mx-auto">
        {subStatus ? (
          <div className="bg-slate-900 p-6 rounded-xl border border-yellow-400/40 text-center">
            <Check className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-display font-bold uppercase text-slate-100">Starter Pass Created!</h3>
            <p className="text-xs text-slate-400 mt-1">Check email. Show digital pass at reception desk for zero-cost entry!</p>
            <button onClick={() => setSubStatus(false)} className="text-yellow-400 underline text-[11px] mt-4 font-semibold block mx-auto cursor-pointer">
              Go back
            </button>
          </div>
        ) : (
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
            <h3 className="font-display font-bold uppercase text-slate-200 text-center text-sm">Grab 3-Day Free Full Access</h3>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-950 text-slate-100 text-xs border border-slate-800 p-2.5 rounded-md focus:outline-hidden focus:border-yellow-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-950 text-slate-100 text-xs border border-slate-800 p-2.5 rounded-md focus:outline-hidden focus:border-yellow-400"
                required
              />
            </div>
            <button
              onClick={() => setSubStatus(true)}
              className="w-full bg-yellow-400 text-slate-950 font-bold py-2.5 rounded-md text-xs cursor-pointer hover:bg-yellow-500 transition-colors uppercase tracking-wider"
            >
              Receive Invitation Link
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center px-4 pt-4 text-slate-600 text-[10px]">
        <p>© 2026 APEX FITNESS. High Performance Arena.</p>
      </footer>
    </div>
  );
}
