import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { hotelsData } from '../data/hotels';
import { MapPin, Phone, Mail, Globe, Check, ArrowLeft, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

export const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotelsData.find(h => h.id === id);

  if (!hotel) {
    return <div className="p-20 text-center text-white/50">Hôtel introuvable</div>;
  }

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="relative h-[400px]">
        <img src={hotel.coverImage} alt={hotel.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/60 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-4 w-fit bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-md">
              <ArrowLeft className="w-4 h-4" /> Retour
            </Link>
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{hotel.name}</h1>
                <p className="text-white/70 flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  {hotel.address}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-[15px] px-4 py-2 rounded-2xl flex items-center gap-2 text-white border border-white/20 shadow-lg">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-lg">{hotel.rating}</span>
                <span className="text-sm opacity-60">/ 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <section className="bg-white/5 backdrop-blur-[15px] p-8 rounded-3xl border border-white/10 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">À propos de cet hôtel</h2>
            <p className="text-white/70 leading-relaxed text-lg">{hotel.description}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Nos Chambres</h2>
            <div className="flex flex-col gap-6">
              {hotel.rooms.map((room, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={room.id} 
                  className="bg-white/5 backdrop-blur-[15px] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-lg p-3 gap-6"
                >
                  <div className="md:w-2/5 h-64 md:h-auto relative rounded-2xl overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="py-4 pr-6 pl-2 md:w-3/5 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-400">${room.pricePerNight}</span>
                        <span className="text-[10px] uppercase text-white/50 block ml-1">/nuit</span>
                      </div>
                    </div>
                    <p className="text-white/60 mb-6 flex-1">{room.description}</p>
                    
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-2 text-sm text-white/80 bg-white/5 w-fit px-4 py-2 rounded-xl border border-white/10">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>Jusqu'à {room.capacity} personnes</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.amenities.map((amenity, i) => (
                          <span key={i} className="text-[10px] tracking-wide uppercase font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/booking/${hotel.id}/${room.id}`}
                        className="bg-blue-600 hover:bg-blue-500 text-white text-center px-6 py-3.5 rounded-xl font-semibold transition shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-blue-400/50 mt-auto"
                      >
                        Réserver cette chambre
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Galerie</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hotel.images.map((img, i) => (
                <div key={i} className="h-48 rounded-2xl overflow-hidden border border-white/10">
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="lg:w-1/3">
          <div className="bg-white/5 backdrop-blur-[15px] p-8 rounded-3xl border border-white/10 sticky top-24 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Informations Pratiques</h3>
            
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-4 text-white/70">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{hotel.address}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{hotel.contact.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`mailto:${hotel.contact.email}`} className="hover:text-blue-400 transition">{hotel.contact.email}</a>
              </div>
              {hotel.contact.website && (
                <div className="flex items-center gap-4 text-white/70">
                  <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                  <a href={`https://${hotel.contact.website}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">{hotel.contact.website}</a>
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-6 border-t border-white/10 pt-8">Services de l'hôtel</h3>
            <ul className="flex flex-col gap-4">
              {hotel.services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80">
                  <div className="bg-blue-500/20 p-1.5 rounded-full border border-blue-500/30"><Check className="w-3.5 h-3.5 text-blue-400" /></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
