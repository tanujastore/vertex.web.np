import React, { useState } from 'react';
import { Utensils, Clock, MapPin, Phone, Star, Check } from 'lucide-react';

export default function RestaurantDemo() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pizza' | 'pasta' | 'dessert'>('all');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [bookingDate, setBookingDate] = useState<string>('2026-06-15');
  const [bookingTime, setBookingTime] = useState<string>('19:00');
  const [booked, setBooked] = useState<boolean>(false);

  const menuItems = [
    { id: 1, name: 'Margherita Classica', category: 'pizza', price: '₹349', desc: 'San Marzano tomatoes, fresh mozzarella, organic basil, olive oil.', popular: true },
    { id: 2, name: 'Pepperoni Supreme', category: 'pizza', price: '₹449', desc: 'Double pepperoni, hot honey drizzle, shredded mozzarella, oregano.' },
    { id: 3, name: 'Truffle Mushroom', category: 'pizza', price: '₹499', desc: 'Wild forest mushrooms, white truffle oil, caramelized onions, cream base.' },
    { id: 4, name: 'Spaghetti Carbonara', category: 'pasta', price: '₹399', desc: 'Pecorino Romano, egg yolk, crispy pancetta, cracked black pepper.', popular: true },
    { id: 5, name: 'Penne Arrabbiata', category: 'pasta', price: '₹329', desc: 'Spicy garlic tomato sauce, fresh parsley, extra virgin olive oil.' },
    { id: 6, name: 'Traditional Tiramisu', category: 'dessert', price: '₹249', desc: 'Espresso-soaked ladyfingers, whipped mascarpone, organic cocoa powder.', popular: true },
    { id: 7, name: 'Saffron Panna Cotta', category: 'dessert', price: '₹229', desc: 'Velvety cream with local saffron notes, wild forest berry coulis.' },
  ];

  const filteredMenu = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="bg-amber-50/40 text-stone-850 min-h-full font-sans pb-12">
      {/* Mini Brand Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-xs py-3 px-4 flex justify-between items-center z-10 border-b border-amber-100">
        <span className="font-display font-semibold text-lg text-amber-800 tracking-tight flex items-center gap-1.5">
          <Utensils className="w-5 h-5 text-amber-600" />
          Bella Italia
        </span>
        <a href="#booking" className="bg-amber-600 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-amber-700 transition-colors">
          Book Table
        </a>
      </header>

      {/* Hero */}
      <section className="relative px-5 py-12 text-center bg-radial from-amber-100 to-amber-50">
        <div className="max-w-md mx-auto">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-full">
            Est. 2018 · Handcrafted Pizza & Pasta
          </span>
          <h1 className="font-display text-2xl md:text-3xl font-bold mt-3 leading-tight text-amber-950">
            Artisanal Dining Prepared with Passion
          </h1>
          <p className="text-stone-600 text-xs mt-2 leading-relaxed">
            Experience real wood-fired pizza and traditional handmade pasta right in the heart of your neighborhood. Made fresh daily with organic ingredients.
          </p>
          <div className="mt-5 flex gap-2 justify-center">
            <a href="#menu" className="bg-amber-800 text-white text-xs px-4 py-2 rounded-lg font-medium shadow-xs hover:bg-amber-900 transition-colors">
              Browse Menu
            </a>
            <a href="#booking" className="bg-amber-100 text-amber-900 border border-amber-300 text-xs px-4 py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors">
              Reservations
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-amber-900 text-amber-100 py-3.5 px-4 text-center">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-[10px]">
          <div className="flex flex-col items-center">
            <Clock className="w-4 h-4 text-amber-400 mb-1" />
            <span>12:00 PM - 11:00 PM</span>
          </div>
          <div className="flex flex-col items-center border-x border-amber-800/60">
            <MapPin className="w-4 h-4 text-amber-400 mb-1" />
            <span>Koramangala, BLR</span>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-4 h-4 text-amber-400 mb-1" />
            <span>+91 98765 43210</span>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-4 py-8 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-display text-xl font-bold text-amber-950">Our Chef’s Specials</h2>
          <div className="w-8 h-0.5 bg-amber-600 mx-auto mt-2"></div>
        </div>

        {/* Categories Tab */}
        <div className="flex justify-center gap-1.5 mb-6 overflow-x-auto pb-1">
          {['all', 'pizza', 'pasta', 'dessert'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-all capitalize shadow-2xs cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-750 text-white'
                  : 'bg-white text-amber-900 hover:bg-amber-100 border border-amber-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Listings */}
        <div className="space-y-4">
          {filteredMenu.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-2xs border border-amber-100 relative overflow-hidden group">
              {item.popular && (
                <span className="absolute top-0 right-0 bg-amber-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-bl-lg tracking-wider uppercase">
                  Best Seller
                </span>
              )}
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display text-sm font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h3>
                <span className="font-mono text-sm font-bold text-amber-805 shrink-0">{item.price}</span>
              </div>
              <p className="text-stone-500 text-[11px] mt-1 line-clamp-2 leading-relaxed">{item.desc}</p>
              
              <div className="flex items-center gap-1 mt-2.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-stone-400">(4.9/5)</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Form */}
      <section id="booking" className="px-4 py-8 bg-amber-100/60 border-y border-amber-200">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-5">
            <h2 className="font-display text-xl font-bold text-amber-950">Reserve Your Spot</h2>
            <p className="text-stone-500 text-xs mt-1">Free instant booking. Cancel anytime.</p>
          </div>

          {booked ? (
            <div className="bg-white border-2 border-dashed border-amber-500 p-6 rounded-2xl text-center shadow-xs">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-display text-md font-bold text-amber-950">Table Confirmed!</h3>
              <p className="text-xs text-stone-600 mt-1">We’ve blocked a table for you at Bella Italia.</p>
              
              <div className="my-4 p-3 bg-amber-50 rounded-xl border border-amber-100 text-left text-xs space-y-1">
                <div><span className="text-stone-400">Guests:</span> <strong className="text-stone-800">{guestCount} People</strong></div>
                <div><span className="text-stone-400">Date:</span> <strong className="text-stone-800">{bookingDate}</strong></div>
                <div><span className="text-stone-400">Time:</span> <strong className="text-stone-800">{bookingTime}</strong></div>
                <div><span className="text-stone-400">Status:</span> <strong className="text-emerald-600 font-semibold">Active Booking</strong></div>
              </div>

              <button 
                onClick={() => setBooked(false)}
                className="text-amber-800 underline text-xs font-medium cursor-pointer hover:text-amber-900"
              >
                Modify or book another table
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookTable} className="bg-white p-5 rounded-xl shadow-xs border border-amber-200/50 space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">Number of Guests</label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[2, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`py-1.5 text-xs rounded-lg font-medium cursor-pointer transition-all border ${
                        guestCount === num
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {num === 8 ? '8+' : num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                    className="w-full text-xs border border-stone-200 rounded-lg p-2 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">Time Selection</label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full text-xs border border-stone-200 rounded-lg p-2 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">1:30 PM (Lunch)</option>
                    <option value="19:00">7:00 PM (Dinner)</option>
                    <option value="20:00">8:00 PM (Dinner)</option>
                    <option value="21:15">9:15 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-2 rounded-lg text-xs font-semibold hover:bg-amber-900 transition-colors shadow-2xs cursor-pointer"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center px-4 pt-8 text-stone-400 text-[10px]">
        <p>© 2026 Bella Italia. Built with 🧡 for local gastronomy.</p>
      </footer>
    </div>
  );
}
