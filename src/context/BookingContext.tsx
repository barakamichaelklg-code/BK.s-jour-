import React, { createContext, useContext, useState, useEffect } from 'react';
import { Reservation } from '../types';

interface BookingContextType {
  reservations: Reservation[];
  addReservation: (reservation: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => void;
  cancelReservation: (id: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reservations, setReservations] = useState<Reservation[]>(() => {
    const saved = localStorage.getItem('bukavu_reservations');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('bukavu_reservations', JSON.stringify(reservations));
  }, [reservations]);

  const addReservation = (resData: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => {
    const newReservation: Reservation = {
      ...resData,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };
    setReservations(prev => [newReservation, ...prev]);
  };

  const cancelReservation = (id: string) => {
    setReservations(prev => prev.map(res => res.id === id ? { ...res, status: 'cancelled' } : res));
  };

  return (
    <BookingContext.Provider value={{ reservations, addReservation, cancelReservation }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
