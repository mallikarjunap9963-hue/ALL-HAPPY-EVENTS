export type VendorStat = {
  label: string;   // e.g. "Shot In 6 Cities"
  value?: string;  // optional extra value
};

export type Vendor = {
  id: string;
  name: string;
  image: string;

  location: string;
  service: string;        // "Photo + Video"
  pricePerDay: number;    // 25000

  rating: number;         // 4.5
  reviews: number;        // 42

  bookings: number;       // 450
  stats: VendorStat[];    // hover list

  verified?: boolean;
  featured?: boolean;
};