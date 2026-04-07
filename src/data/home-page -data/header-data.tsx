import type{ MegaMenuItem } from "../../types/vender-type/header-type";

export const headerMenu: MegaMenuItem[] = [
  {
    title: "Venues",
    megaClass: "venues-mega fix-mega",
    columns: [
      {
        heading: "By Type",
        links: [
          "Banquet Halls",
          "Marriage Garden / Lawns",
          "Event Resorts",
          "Small Function / Party Halls",
          "Destination Event Venues",
          "Kalyana Mandapams",
          "4 Star & Above Hotels",
          "Event Farmhouses",
          "View all Venues",
        ],
      },
      {
        heading: "By City",
        links: ["Hyderabad", "Vijayawada", "Tirupati", "Rajahmundry", "Vizag", "Warangal"],
      },
      {
        heading: "Popular Picks",
        links: [
          "Luxury 5-Star Venues",
          "Beach Event Venues",
          "Fort / Palace Venues",
          "Poolside Venues",
          "Budget-Friendly Venues",
          "Intimate Venues",
          "Hill-station Venues",
          "Outdoor Venues",
        ],
      },
    ],
  },

  {
    title: "Vendors",
    megaClass: "vendors-mega fix-mega",
    columns: [
      {
        heading: "Photographers",
        links: ["Photographers", "Videographers"],
      },
      {
        heading: "Makeup",
        links: ["Bridal Makeup Artists", "Family Makeup"],
      },
      {
        heading: "Planning & Decor",
        links: ["Event Planners", "Decorators"],
      },
      {
        heading: "Mehndi",
        links: ["Mehendi Artists"],
      },
    ],
  },

  {
    title: "Photos",
    megaClass: "photos-mega",
    columns: [
      {
        heading: "Outfit",
        links: ["Bridal Lehenga", "Event Sarees", "Engagement", "Mehndi"],
      },
      {
        heading: "Decor & Ideas",
        links: ["Event Decor", "Bridal Entry", "Groom Entry"],
      },
    ],
  },

  {
    title: "Real Weddings",
    megaClass: "real-wedding-mega",
    columns: [
      {
        heading: "By City",
        links: ["Hyderabad", "Vijayawada", "Tirupati", "Vizag"],
      },
      {
        heading: "By Culture",
        links: ["Punjabi", "Gujarati", "Telugu", "Bengali"],
      },
    ],
  },

  {
    title: "Blog",
    megaClass: "blog-mega fix-mega",
    columns: [
      {
        heading: "Browse by Category",
        links: ["Bridal Makeup", "Event Decor Ideas", "Budget Events"],
      },
      {
        heading: "Popular Sections",
        links: ["Real Wedding", "Mehendi Ideas"],
      },
    ],
  },

  {
    title: "Services",
    megaClass: "einvites-mega fix-mega-einv",
    columns: [
      {
        heading: "Inhouse",
        links: ["Event Management", "Virtual Planners"],
      },
    ],
  },
];
