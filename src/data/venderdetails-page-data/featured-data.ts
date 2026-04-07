import type { FeaturedListing } from "../../types/vender-detailed -page/featured-list";

import img1 from "../../images/vendors/vendor_1.png";
import img2 from "../../images/vendors/vendor_5.png";
import img3 from "../../images/vendors/vendor_3.png";

export const featuredListingsData: FeaturedListing[] = [
  {
    id: 1,
    title: "Sri Lakshmi Bridal Studio",
    image: img1,
    price: "₹25,000 – ₹45,000",
    category: "Bridal Fashion",
    location: "Himayatnagar, Hyderabad",
    reviews: 12,
  },
  {
    id: 2,
    title: "Golden Frames Studios",
    image: img2,
    price: "₹40,000 – ₹75,000",
    category: "Photography",
    location: "Jubilee Hills, Hyderabad",
    reviews: 18,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Mango Leaves Wedding Decor",
    image: img3,
    price: "₹15,000 – ₹35,000",
    category: "Decor",
    location: "Gachibowli, Hyderabad",
    reviews: 10,
  },
];