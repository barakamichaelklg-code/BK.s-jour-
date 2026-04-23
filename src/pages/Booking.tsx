import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { hotelsData } from '../data/hotels';
import { useBooking } from '../context/BookingContext';
import { ArrowLeft, Calendar, User, Mail, Phone, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

export const Booking = () => {
  const { hotelId, roomId } = useParams<{ hotelId: string, roomId: string }>();
  const navigate = useNavigate();
  const { addReservation } = useBooking();

  const hotel = hotelsData.find(h => h.id === hotelId);
  const room = hotel?.rooms.find(r => r.id === roomId);

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (formData.checkIn && formData.checkOut && room) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      if (diffDays > 0) {
        setTotalPrice(diffDays * room.pricePerNight);
      } else {
        setTotalPrice(0);
      }
    } else {
      setTotalPrice(0);
    }
  }, [formData.checkIn, formData.checkOut, room]);

  if (!hotel || !room) {
    return <div className="p-20 text-center text-white/50">Informations de réservation introuvables.</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalPrice <= 0) {
      alert("Veuillez sélectionner des dates valides.");
      return;
    }
    
    addReservation({
      hotelId: hotel.id,
      roomId: room.id,
      hotelName: hotel.name,
      roomName: room.name,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: Number(formData.guests),
      totalPrice,
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
    });
    
    navigate('/bookings');
  };

  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/hotel/${hotel.id}`} className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-6 w-fit bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-md">
          <ArrowLeft className="w-4 h-4" /> Retour à l'hôtel
        </Link>
        
        <h1 className="text-3xl font-bold text-white mb-8">Finaliser la réservation</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-white/5 backdrop-blur-[15px] p-8 rounded-3xl border border-white/10 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Vos informations</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Nom complet</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input required type="text" name="customerName" value={formData.customerName} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-white/30" placeholder="Jean Dupont" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input required type="email" name="customerEmail" value={formData.customerEmail} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-white/30" placeholder="jean@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input required type="tel" name="customerPhone" value={formData.customerPhone} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-white/30" placeholder="+243 000 000 000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Détails du séjour</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Date d'arrivée</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input required type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-white/30 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Date de départ</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input required type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} min={formData.checkIn || new Date().toISOString().split('T')[0]} className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-white/30 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Nombre de voyageurs</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white">
                      {[...Array(room.capacity)].map((_, i) => (
                        <option key={i + 1} value={i + 1} className="text-gray-900">{i + 1} Voyageur{i > 0 && 's'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl flex justify-center items-center gap-2 transition shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-blue-400/50 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={totalPrice <= 0}
              >
                <CreditCard className="w-5 h-5" />
                Confirmer la réservation
              </button>
            </form>
          </motion.div>

          {/* Summary Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/3"
          >
            <div className="bg-white/5 backdrop-blur-[15px] p-6 rounded-3xl border border-white/10 sticky top-24 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4 pb-4 border-b border-white/10">Résumé de votre choix</h3>
              
              <img src={room.image} alt={room.name} className="w-full h-32 object-cover rounded-2xl mb-5" />
              
              <div className="mb-6">
                <p className="font-bold text-white">{hotel.name}</p>
                <p className="text-white/60 text-sm mt-1">{room.name}</p>
              </div>
              
              <div className="space-y-3 mb-6 text-sm text-white/80 border-b border-white/10 pb-6">
                <div className="flex justify-between">
                  <span className="text-white/60">Prix par nuit:</span>
                  <span className="font-medium">${room.pricePerNight}</span>
                </div>
                {formData.checkIn && formData.checkOut && totalPrice > 0 && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Nuits:</span>
                    <span>{totalPrice / room.pricePerNight}</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">Total</span>
                <span className="text-3xl font-black text-blue-400">${totalPrice}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
