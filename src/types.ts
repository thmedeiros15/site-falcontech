export interface Vehicle {
  id: string;
  type: 'car' | 'moto' | 'truck';
  name: string;
  plate: string;
  speed: number;
  lat: number;
  lng: number;
  angle: number;
  ignition: boolean;
  blocked: boolean;
  battery: number;
  lastUpdate: string;
  breadcrumbs: { lat: number; lng: number }[];
  geofenceStatus: 'inside' | 'outside';
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  vehicleType: 'car' | 'moto' | 'truck' | 'fleet';
  quantity: number;
  message: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'closed';
}

export interface PlanOption {
  id: string;
  name: string;
  priceMonthly: number;
  setupFee: number;
  icon: string;
  features: string[];
  recommended: boolean;
}
