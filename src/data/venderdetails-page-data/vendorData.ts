import type{ VendorData } from "../../types/vender-detailed -page/vendorTypes";

export const vendorData: VendorData = {
  info: {
    name: "ISHA Banquets",
    location: "Hyderabad, Telangana",
    rating: 4.8,
    reviews: 152,
  },

  media: {
    gallery: [
      "src/images/vendors/banquet_1.jpg",
      "/src/images/vendors/banquet_2.jpg",
      "/src/images/vendors/banquet_3.jpg",
    ],

    gridImages: [
      "/images/vendors/banquet_1.jpg",
      "/src/images/vendors/banquet_2.jpg",
      "/src/images/vendors/banquet_3.jpg",
    ],

    streetViewUrl:
      "https://www.google.com/maps/embed?pb=!4v1764654410608!6m8!1m7!1sjfFrzWD4X3D4jCWveZdvXw!2m2!1d17.45515876648743!2d78.38496891752943!3f38.58882873682919!4f0.6843922959634057!5f0.7820865974627469",

    videoUrl:
      "https://www.youtube.com/embed/ufyi9-AqBb0?autoplay=1&mute=1&start=10",

    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5835565570997!2d78.31745080994246!3d17.4857364833491",
  },
};