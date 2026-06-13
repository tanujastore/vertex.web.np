import React, { useState } from 'react';
import { Sparkles, Star, Calendar, Check, ShieldCheck, Heart } from 'lucide-react';

export default function SalonDemo() {
  const [selectedServices, setSelectedServices] = useState<number[]>([1]);
  const [selectedStylist, setSelectedStylist] = useState<string>('Priya');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingName, setBookingName] = useState<string>('');

  const services = [
    { id: 1, name: 'Precision Haircut & Blowdry', category: 'hair', price: 799, duration: '45 mins' },
    { id: 2, name: 'Hydrating Keratin Hair Spa', category: 'hair', price: 1499, duration: '60 mins' },
    { id: 3, name: 'Bridal Glow Facial & Therapy', category: 'skin', price: 1999, duration: '75 mins' },
    { id: 4, name: 'Luxe Gel Manicure & Nail Art', category: 'nails', price: 599, duration: '40 mins' },
    { id: 5, name: 'Stress Relief Massage', category: 'body', price: 1199, duration: '50 mins' }
  ];

  const stylists = [
    { name: 'Priya Mehta', role: 'Hair Master', rating: '4.9', active: true },
    { name: 'Rohan Sharma', role: 'Skin Specialist', rating: '4.8', active: true },
    { name: 'Meera Sen', role: 'Nail Artist & Stylist', rating: '5.0', active: true }
  ];

  const toggleService = (id: number) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(sid => sid !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const totalPrice = services
    .filter(s => selectedServices.includes(s.id))
    .reduce((sum, s) => sum + s.price, 0);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingName.trim()) {
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="bg-stone-50 text-stone-800 min-h-full font-sans pb-12">
      {/* Mini Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-xs py-3.5 px-4 flex justify-between items-center z-10 border-b border-rose-100">
        <span className="font-display font-medium text-base tracking-tight text-rose-800 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-rose-500 fill-rose-100" />
          Luxe Salon & Spa
        </span>
        <a href="#services" className="bg-rose-700 text-white px-3.5 py-1.5 rounded-full text-xs font-medium hover:bg-rose-800 transition-colors">
          Book Session
        </a>
      </header>

      {/* Hero */}
      <section className="px-5 py-12 text-center bg-radial from-rose-50 to-stone-50">
        <div className="max-w-md mx-auto">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-rose-700 bg-rose-100/60 px-3 py-1 rounded-full">
            Premium Wellness & Styling
          </span>
          <h1 className="font-display text-2xl md:text-3xl font-light mt-3 leading-tight text-stone-900 tracking-tight">
            Reveal Your Ultimate <span className="font-medium text-rose-800">Radiance</span>
          </h1>
          <p className="text-stone-500 text-xs mt-2 leading-relaxed">
            Welcome to Luxe, where our expert designers and medical therapists sculpt custom hairstyles, skincare treatments, and nails crafted just for your aesthetic.
          </p>
        </div>
      </section>

      {/* Trust factors */}
      <div className="bg-rose-950 text-rose-100 py-3.5 px-4 flex justify-center gap-6 text-[10px] text-center">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-rose-300" /> Certified Organic Products</span>
        <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-rose-300" /> 100% Bliss Guaranteed</span>
      </div>

      {/* Interactive Pricing Estimator */}
      <section id="services" className="px-4 py-8 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-display text-lg font-bold text-stone-90 *">Services Menu & Estimator</h2>
          <p className="text-stone-500 text-[11px] mt-0.5">Select multiple styling options to view instant pricing.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-2xs border border-rose-100 space-y-3.5">
          {services.map((item) => {
            const isSelected = selectedServices.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleService(item.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                  isSelected
                    ? 'border-rose-450 bg-rose-50/40 shadow-2xs'
                    : 'border-slate-100 hover:border-slate-200 bg-stone-50/50'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                    isSelected ? 'bg-rose-600 border-rose-600' : 'border-stone-300 bg-white'
                  }`}>
                    {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-stone-850">{item.name}</h4>
                    <span className="text-[10px] text-stone-400 font-mono block mt-0.5">{item.duration} · {item.category}</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-rose-900 shrink-0">₹{item.price}</span>
              </div>
            );
          })}

          {/* Cart Total Block */}
          <div className="pt-3 border-t border-dashed border-rose-100 flex justify-between items-center">
            <span className="text-stone-500 text-xs font-medium">Selected services:</span>
            <span className="text-stone-900 text-sm font-extrabold font-mono">₹{totalPrice}</span>
          </div>
        </div>
      </section>

      {/* Stylist Selector */}
      <section className="px-4 py-6 bg-rose-50/30 border-y border-rose-100/55">
        <div className="max-w-md mx-auto">
          <h3 className="font-display text-xs font-bold text-stone-700 uppercase tracking-widest text-center mb-4">Choose Your Designer</h3>
          <div className="grid grid-cols-3 gap-2.5">
            {stylists.map((st) => (
              <button
                key={st.name}
                type="button"
                onClick={() => setSelectedStylist(st.name)}
                className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                  selectedStylist === st.name
                    ? 'border-rose-650 bg-white shadow-2xs text-rose-900 font-bold'
                    : 'border-stone-200 bg-white/60 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <div className="text-[11px] font-bold truncate">{st.name.split(' ')[0]}</div>
                <div className="text-[9px] text-stone-400 mt-0.5 whitespace-nowrap truncate">{st.role}</div>
                <div className="text-[9px] text-amber-500 font-mono mt-1 flex items-center justify-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400" /> {st.rating}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Card */}
      <section className="px-4 py-8 max-w-sm mx-auto">
        {bookingConfirmed ? (
          <div className="bg-white border-2 border-dotted border-rose-300 p-6 rounded-2xl text-center shadow-xs">
            <div className="bg-rose-150 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="font-display text-md font-bold text-stone-900">Appointment Scheduled!</h3>
            <p className="text-xs text-stone-500 mt-0.5">Thank you, {bookingName}. Your slot has been reserved.</p>

            <div className="my-4 p-3 bg-stone-50 rounded-xl border border-stone-200/50 text-left text-[11px] space-y-1">
              <div><span className="text-stone-400">Stylist:</span> <strong className="text-stone-850">{selectedStylist}</strong></div>
              <div><span className="text-stone-400">Treatment Cost:</span> <strong className="text-stone-850">₹{totalPrice}</strong></div>
              <div><span className="text-stone-400">Session Date:</span> <strong className="text-stone-850">Tomorrow (Scheduled)</strong></div>
              <div><span className="text-stone-400">Studio Phone:</span> <strong className="text-stone-850">+91 99009 88776</strong></div>
            </div>

            <button
              onClick={() => {
                setBookingConfirmed(false);
                setBookingName('');
              }}
              className="text-rose-700 underline text-xs font-semibold cursor-pointer"
            >
              Modify booking details
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="bg-white p-5 rounded-xl shadow-xs border border-rose-100 space-y-3.5">
            <h3 className="font-display font-medium text-stone-800 text-center text-xs uppercase tracking-wider">Secure Appointment</h3>
            <div>
              <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Ex. Priya Sharma"
                value={bookingName}
                onChange={(e) => setBookingName(e.target.value)}
                className="w-full bg-stone-50 text-xs border border-stone-200 p-2 rounded-md focus:outline-hidden focus:border-rose-400"
                required
              />
            </div>
            <div>
              <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-1">WhatsApp Mobile</label>
              <input
                type="tel"
                placeholder="Ex. 98765 43210"
                className="w-full bg-stone-50 text-xs border border-stone-200 p-2 rounded-md focus:outline-hidden focus:border-rose-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-750 text-white font-semibold py-2 rounded-md text-xs cursor-pointer hover:bg-rose-850 transition-colors uppercase tracking-wider shadow-2xs"
            >
              Book with {selectedStylist.split(' ')[0]}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center px-4 pt-4 text-stone-400 text-[10px]">
        <p>© 2026 LUXE SALON. Elegant Sanctuary.</p>
      </footer>
    </div>
  );
}
