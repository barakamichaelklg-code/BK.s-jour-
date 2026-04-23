import { Hotel } from '../types';

export const hotelsData: Hotel[] = [
  {
    id: 'h2',
    name: 'Hotel Panorama',
    description: 'Bénéficiant d\'une vue imprenable sur le lac Kivu, l\'Hotel Panorama propose des chambres luxueuses, une cuisine raffinée et un service exceptionnel en plein cœur de Bukavu.',
    address: 'Avenue de la Résidence, La Botte, Bukavu, Sud-Kivu, RDC',
    contact: {
      phone: '+243 970 000 001',
      email: 'info@panoramabukavu.com',
      website: 'www.panoramabukavu.com'
    },
    services: ['Wi-Fi Gratuit', 'Restaurant', 'Bar', 'Piscine', 'Service d\'étage', 'Salles de conférence', 'Navette aéroport', 'Vue sur le lac'],
    rating: 4.8,
    coverImage: 'https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80'
    ],
    rooms: [
      {
        id: 'r2-1',
        name: 'Chambre Standard',
        description: 'Chambre élégante avec tout le confort nécessaire pour un séjour agréable.',
        pricePerNight: 120,
        capacity: 2,
        amenities: ['Lit Queen Size', 'Wi-Fi', 'TV Écran Plat', 'Climatisation', 'Minibar'],
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
      },
      {
        id: 'r2-2',
        name: 'Suite Panoramique',
        description: 'Spacieuse suite offrant une vue spectaculaire sur le lac Kivu depuis un balcon privé.',
        pricePerNight: 250,
        capacity: 2,
        amenities: ['Lit King Size', 'Balcon Privé', 'Espace Salon', 'Machine à café', 'Peignoirs'],
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80'
      }
    ]
  },
  {
    id: 'h1',
    name: 'Orchids Safari Club',
    description: 'L\'Orchids Safari Club est un hôtel de charme situé sur les rives du lac Kivu. Un mélange harmonieux de nature, d\'élégance et de tranquillité.',
    address: 'Avenue du Lac, Muhumba, Bukavu, Sud-Kivu, RDC',
    contact: {
      phone: '+243 999 123 456',
      email: 'reservations@orchidssafari.com',
      website: 'www.orchidssafari.com'
    },
    services: ['Wi-Fi Gratuit', 'Restaurant Gastronomique', 'Jardin Tropical', 'Accès direct au lac', 'Organisation de safaris', 'Parking privé'],
    rating: 4.9,
    coverImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c0d5e9af?w=800&q=80',
      'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
    ],
    rooms: [
      {
        id: 'r1-1',
        name: 'Chambre avec Vue sur Lac',
        description: 'Chambre lumineuse avec vue directe sur les eaux paisibles du lac Kivu.',
        pricePerNight: 150,
        capacity: 2,
        amenities: ['Vue Lac', 'Wi-Fi', 'Air conditionné', 'Coffre-fort', 'Salle de bain privative'],
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80'
      },
      {
        id: 'r1-2',
        name: 'Villa Privée',
        description: 'Idéale pour les familles, cette villa offre un espace exclusif entouré de jardins.',
        pricePerNight: 350,
        capacity: 4,
        amenities: ['2 Chambres', 'Salon', 'Terrasse', 'Accès direct plage', 'Service personnalisé'],
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80'
      }
    ]
  },
  {
    id: 'h3',
    name: 'Hotel Résidence',
    description: 'Un hôtel classique et historique offrant charme et confort traditionnel au centre de la ville, proche des commerces et des institutions.',
    address: 'Avenue de la Cathédrale, Ndendere, Bukavu, Sud-Kivu, RDC',
    contact: {
      phone: '+243 812 345 678',
      email: 'contact@hotelresidence.cd'
    },
    services: ['Wi-Fi', 'Restaurant Traditionnel', 'Salle de sport', 'Blanchisserie', 'Réception 24h/24'],
    rating: 4.2,
    coverImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80'
    ],
    rooms: [
      {
        id: 'r3-1',
        name: 'Chambre Classique',
        description: 'Un espace chaleureux idéal pour les voyageurs d\'affaires ou les courts séjours.',
        pricePerNight: 80,
        capacity: 2,
        amenities: ['Lit Double', 'Wi-Fi', 'Bureau', 'TV'],
        image: 'https://images.unsplash.com/photo-1553456558-aff63285aad1?w=800&q=80'
      },
      {
        id: 'r3-2',
        name: 'Suite Familiale',
        description: 'Deux chambres communicantes pour accueillir toute la famille.',
        pricePerNight: 160,
        capacity: 4,
        amenities: ['2 Lits Doubles', 'Espace enfants', 'Baignoire', 'Wi-Fi'],
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
      }
    ]
  },
  {
    id: 'h4',
    name: 'Hotel Mont Kahuzi',
    description: 'Situé dans un quartier calme, c\'est le point de départ parfait pour visiter le Parc National de Kahuzi-Biega et ses gorilles.',
    address: 'Quartier Nyawera, Ibanda, Bukavu, Sud-Kivu, RDC',
    contact: {
      phone: '+243 850 111 222',
      email: 'booking@montkahuzi.com'
    },
    services: ['Wi-Fi', 'Restaurant', 'Excursions Gorilles', 'Parking', 'Jardin'],
    rating: 4.5,
    coverImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80'
    ],
    rooms: [
      {
        id: 'r4-1',
        name: 'Chambre Explorateur',
        description: 'Chambre confortable au décor inspiré de la nature congolaise.',
        pricePerNight: 90,
        capacity: 2,
        amenities: ['Lit Queen Size', 'Moustiquaire', 'Ventilateur', 'TV'],
        image: 'https://images.unsplash.com/photo-1618773928120-2946c10eb820?w=800&q=80'
      }
    ]
  },
  {
    id: 'h5',
    name: 'Hotel Begonias',
    description: 'Un charmant hôtel avec piscine, parfait pour se détendre après une journée de travail ou de découverte à Bukavu.',
    address: 'Avenue Fizi, Nguba, Bukavu, Sud-Kivu, RDC',
    contact: {
      phone: '+243 971 222 333',
      email: 'reservation@begonias.cd'
    },
    services: ['Wi-Fi Gratuit', 'Piscine Extérieure', 'Restaurant', 'Barbecue', 'Espaces Verts'],
    rating: 4.3,
    coverImage: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'
    ],
    rooms: [
      {
        id: 'r5-1',
        name: 'Chambre Côté Piscine',
        description: 'Chambre lumineuse avec accès direct au jardin et à la piscine.',
        pricePerNight: 100,
        capacity: 2,
        amenities: ['Lit Double', 'Climatisation', 'Accès Piscine', 'Salle de bain attenante'],
        image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&q=80'
      }
    ]
  }
];
