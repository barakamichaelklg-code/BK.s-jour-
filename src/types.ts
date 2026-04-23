export interface Hotel {
  id: string;
  name: string;
  description: string;
  address: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  services: string[];
  rating: number;
  coverImage: string;
  images: string[];
  rooms: Room[];
}

export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  amenities: string[];
  image: string;
}

export interface Reservation {
  id: string;
  hotelId: string;
  roomId: string;
  hotelName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}
