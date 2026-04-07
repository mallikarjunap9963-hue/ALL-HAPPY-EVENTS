export interface VendorMedia {
  gallery: string[];
  gridImages: string[];
  streetViewUrl: string;
  videoUrl: string;
  mapUrl: string;
}

export interface VendorInfo {
  name: string;
  location: string;
  rating: number;
  reviews: number;
}

export interface VendorData {
  info: VendorInfo;
  media: VendorMedia;
}