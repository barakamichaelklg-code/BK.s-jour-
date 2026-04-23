import React from 'react';
import { useBooking } from '../context/BookingContext';
import { CalendarHeart, MapPin, Calendar, Clock, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const MyBookings = () => {
  const { reservations, cancelReservation } = useBooking();

  return (
    <div className="w-full py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <CalendarHeart className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Mes Réservations</h1>
        </div>

        {reservations.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-[15px] p-12 text-center rounded-3xl border border-white/10 flex flex-col items-center shadow-lg">
            <Calendar className="w-16 h-16 text-white/30 mb-6" />
            <h2 className="text-2xl font-bold text-white mb-3">Aucune réservation</h2>
            <p className="text-white/60 mb-8 max-w-md">Vous n'avez pas encore effectué de réservation. Explorez nos hôtels et planifiez votre prochain séjour à Bukavu.</p>
            <Link to="/" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-blue-400/50">
              Découvrir les hôtels
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {reservations.map((res, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={res.id} 
                className={`bg-white/5 backdrop-blur-[15px] p-6 rounded-3xl border flex flex-col md:flex-row justify-between gap-6 shadow-lg ${res.status === 'cancelled' ? 'border-red-500/30 opacity-75 grayscale-[0.5]' : 'border-white/10'}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{res.hotelName}</h3>
                    {res.status === 'confirmed' ? (
                      <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">Confirmée</span>
                    ) : (
                      <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30">Annulée</span>
                    )}
                  </div>
                  
                  <p className="text-white/70 font-medium mb-6">{res.roomName}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm text-white/60">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Arrivée: {new Date(res.checkIn).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Départ: {new Date(res.checkOut).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <Link to={`/hotel/${res.hotelId}`} className="text-white hover:text-blue-400 transition">Voir l'hôtel</Link>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>Réservé le: {new Date(res.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end min-w-[200px] border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                  <div className="text-right w-full flex md:flex-col justify-between items-center md:items-end md:mb-6">
                    <span className="text-white/50 text-sm mb-1 uppercase tracking-wider text-[10px]">Total payé</span>
                    <span className="text-3xl font-black text-blue-400">${res.totalPrice}</span>
                  </div>
                  
                  {res.status === 'confirmed' && (
                    <button 
                      onClick={() => {
                        if(window.confirm('Voulez-vous vraiment annuler cette réservation ?')) {
                          cancelReservation(res.id);
                        }
                      }}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition flex items-center gap-2 border border-transparent hover:border-red-500/20"
                    >
                      <XCircle className="w-4 h-4" />
                      Annuler
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
