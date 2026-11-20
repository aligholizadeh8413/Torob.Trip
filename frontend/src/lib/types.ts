export type ServiceType = 'flight-domestic' | 'flight-international' | 'train' | 'bus' | 'tour' | 'hotel' | 'stay';
export type Flight = { id: string; airline: string; code: string; from: string; fromCode: string; to: string; toCode: string; depart: string; arrive: string; duration: string; stops: string; className: string; baggage: string; price: number; accent: string };
export type Destination = { name: string; city: string; image: string; description: string; color: string };
