import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Hotel, CalendarHeart, MapPin } from 'lucide-react';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c1a30 0%, #173b6b 50%, #2a5298 100%)' }}>
      {/* Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(64, 182, 255, 0.2) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-[-50px] left-[100px] w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(255, 120, 0, 0.1) 0%, transparent 70%)' }}></div>
      </div>

      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-[15px] border-b border-white/10 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-500/20 border border-blue-500/30 p-2 rounded-xl group-hover:bg-blue-500/40 transition shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Hotel className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Bukavu<span className="text-blue-400">Séjour</span>
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link to="/" className="text-white/70 hover:text-white font-medium transition text-sm">Hôtels</Link>
              <Link to="/bookings" className="flex items-center gap-2 text-white/70 hover:text-white font-medium transition text-sm">
                <CalendarHeart className="w-4 h-4 text-blue-400" />
                Mes Réservations
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10 w-full">
        <Outlet />
      </main>

      <footer className="bg-white/5 backdrop-blur-[15px] border-t border-white/10 mt-12 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 rounded-full">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="font-medium text-blue-200 text-sm tracking-wide uppercase">Bukavu, Sud-Kivu, RDC</span>
          </div>
          <p className="text-sm border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-white/50">&copy; {new Date().getFullYear()} BukavuSéjour. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};
