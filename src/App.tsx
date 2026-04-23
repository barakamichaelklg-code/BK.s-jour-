/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HotelDetails } from './pages/HotelDetails';
import { Booking } from './pages/Booking';
import { MyBookings } from './pages/MyBookings';
import { BookingProvider } from './context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hotel/:id" element={<HotelDetails />} />
            <Route path="booking/:hotelId/:roomId" element={<Booking />} />
            <Route path="bookings" element={<MyBookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}
