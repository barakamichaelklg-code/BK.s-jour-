import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin, Wifi, Coffee, Car } from 'lucide-react';
import { hotelsData } from '../data/hotels';
import { motion } from 'motion/react';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHotels = hotelsData.filter(hotel => 
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-500/20 border border-blue-500/30 px-5 py-1.5 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Découvrez le Sud-Kivu
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Séjours d'<span className="text-blue-400">Exception</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 mb-10 font-light max-w-2xl mx-auto"
          >
            Réservez les meilleurs hôtels sur les rives du lac Kivu et vivez une expérience inoubliable au Sud-Kivu.
          </motion.p>
          
          <div className="bg-white/10 backdrop-blur-[15px] border border-white/20 p-2 rounded-2xl flex items-center max-w-2xl mx-auto shadow-lg">
            <div className="p-3 text-white/50"><Search className="w-6 h-6" /></div>
            <input 
              type="text" 
              placeholder="Rechercher un hôtel, une adresse..." 
              className="w-full flex-1 outline-none text-white bg-transparent placeholder-white/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Hotels List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Hôtels Recommandés</h2>
            <p className="text-white/50 mt-2">Trouvez l'hébergement parfait pour votre séjour.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={hotel.id} 
                className="bg-white/5 backdrop-blur-[15px] rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all group flex flex-col p-5"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                  <img 
                    src={hotel.coverImage} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow-sm z-20 border border-white/10 text-white">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1.5">{hotel.name}</h3>
                    <p className="text-white/50 text-sm flex items-start gap-1 mb-4 line-clamp-2">
                       {hotel.address}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {hotel.services.slice(0, 3).map((s, idx) => (
                         <span key={idx} className="text-[10px] font-medium text-white/70 bg-white/10 border border-white/5 px-2.5 py-1 rounded-md uppercase tracking-wide">{s}</span>
                      ))}
                      {hotel.services.length > 3 && (
                        <span className="text-[10px] font-medium text-white/70 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">+{hotel.services.length - 3}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-2xl font-bold text-blue-400">${Math.min(...hotel.rooms.map(r => r.pricePerNight))}</span>
                      <span className="text-[10px] font-normal text-white/50 ml-1 uppercase">/nuit</span>
                    </div>
                    <Link 
                      to={`/hotel/${hotel.id}`}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-400/50"
                    >
                      Voir l'hôtel
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-white/50 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-[15px]">
              Aucun hôtel ne correspond à votre recherche.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};;
