export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Unwired  Mouse",
    price: 750.00,
    originalPrice: 349.99,
    image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t1.15752-9/649461207_918501024267586_8598063549943008471_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=DjcqLdXvziIQ7kNvwGQm-0h&_nc_oc=Adp_ayHjXN9zgNIGEB9gsWN-PutEA0VxzunV_4BIJ8YyYW3zwtqvOOF5qjoiAnFFg0c&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_ss=7a32e&oh=03_Q7cD4wEOUTNVT9LeGYyLm2JdRH4bn4sbepv08-S2-saHX62Q9w&oe=69EEDD3A",
    category: "Computers",
    description: "High-quality wireless Titan Mouse with 24-hours battery life.",
    rating: 5.0,
    reviews: 998,
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Asus ko Pro Gaming Laptop",
    price: 61000.00,
    image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t1.15752-9/655594633_817388078065013_6443164741745409066_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=nsGa2QGXIS8Q7kNvwHymGCo&_nc_oc=AdoWbJ7qwkpelVkimCQ-7e7t2aHwb5NGH34vehgA8lJjJMA0gsKbc7--E9bHm1Ccu70&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_ss=7a32e&oh=03_Q7cD4wFi7FCng3XV1IoJ3dYZMGWu-4vlPx1yOfVBrcIf-J89jA&oe=69EED2CE",
    category: "Loptops",
    description: "Transcend your day with the ASUS Pro Gaming Laptop.",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "New Release Smartphone",
    price: 3399.99,
    originalPrice: 4449.99,
    image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/653822539_1645139963279166_5395989738741423572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=oqcjsF2qdgEQ7kNvwGkUHMs&_nc_oc=Adp0cA-YmLfC3eg5FqlWmM0l2sOwZJDpmEdXjcoUGvOlcpoToQI2afLYIFdqg9ds-F4&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_ss=7a32e&oh=03_Q7cD4wGL-jJXnyKHPHpo0QEmPrPpMNLuAMQ1YZLaNZxMe6yEeQ&oe=69EEE78E",
    category: "Phones",
    description: "Advanced smartphone uphold the world up-side down.",
    rating: 4.9,
    reviews: 312,
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Ultra Mini Fan Pro",
    price: 799.99,
    image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/655086006_1435818064939384_7696414371564960228_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=YbD_gbdSdXkQ7kNvwEBr-hj&_nc_oc=Ado0RG3V9cbJdzoVtZuheh3CNi-sh3A7-xuJtmcvp-aRVoekgSG7CcXioXb4W5T0ivk&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_ss=7a32e&oh=03_Q7cD4wEPOF9c6x7Z9jXmCE-ksyFm0kiyUFH1v5aI2Kt9wCYkWg&oe=69EECD9C",
    category: "Others",
    description: "Long lasting performance and let you unwind freely.",
    rating: 4.7,
    reviews: 1156,
    inStock: true,
  },
  {
    id: 5,
    name: "Bran Dead RMX 2022",
    price: 4899.99,
    originalPrice: 6999.99,
    image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t1.15752-9/655750858_1989471758667713_1818661374772783897_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=e6DPhYk7mLAQ7kNvwFqLSXQ&_nc_oc=AdqrLzp01rMbhqjEpXJA4lm4qAZYcM4mjVl-6gkZxy2jNNVh-B_puiow1YSoRvJM9ws&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_ss=7a32e&oh=03_Q7cD4wEm8oyhIU9DH1rYhHAZZzq6jUI0lsPu6qFQ-Udc_8LIMw&oe=69EEF482",
    category: "Phones",
    description: "Professional phone with camera with multiple lenses perfect for photography enthusiasts.",
    rating: 4.8,
    reviews: 2203,
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: "Flagship Deskstop PC",
    price: 11999.99,
    image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/655077757_1940406309897404_2860600695225748263_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=V-jN3vgDorkQ7kNvwGfCC5r&_nc_oc=Adpuzj-GB-0wAjyP1jbSZt1aHNWRDmRtNujU1ry4G8U5w4m79OPHtH4OrPLtKjXHhlg&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_ss=7a32e&oh=03_Q7cD4wG4O7Kv-0eSk_7vR0qdujwIbF3eb7V6aG73y9Hxzsrevg&oe=69EEF7F3",
    category: "Computers",
    description: "Latest flagship desktop computer with cutting-edge features and premium design.",
    rating: 4.9,
    reviews: 3421,
    inStock: true,
  },
  {
    id: 7,
    name: "Premium Air Buds",
    price: 899.99,
    image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/655094416_2788848268136464_1804403919749588483_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=-jObA5RpgUkQ7kNvwG-eZkC&_nc_oc=Adp0LemhPpbIhUvIfpCkHgDwFdZrm77f5qV6XT_1QZRJyC9q9x0nk1-yX5A58sP-MVI&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_ss=7a32e&oh=03_Q7cD4wHyzvYpslypLlNxYBQ57LIW9EnvTReMybWHiMFx6Ucd2Q&oe=69EED4CA",
    category: "Audio",
    description: "Chill and Relax yourself with the Premium Air Buds.",
    rating: 4.6,
    reviews: 1178,
    inStock: true,
  },
  {
    id: 9,
    name: "0.00001% Rarest Ultra Mini Fan",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/653638101_1295723125818077_148698151759491606_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Y05xMRquHckQ7kNvwGlt99M&_nc_oc=AdolOjNF9O7qQ3BzXhIesqbwTuVEw0UAki3hOC2Cp2rBTdnFQXB312pPMdfe9e0Cs0I&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_ss=7a32e&oh=03_Q7cD4wHmpM0dP6rYQ65Plclxqpsl9W0s2IuUQGAu66P5tZ5nYg&oe=69EEF2B7",
    category: "Others",
    description: "Let wind cool you down.",
    rating: 4.7,
    reviews: 1267,
    inStock: true,
  },
  {
    id: 8,
    name: "Elite AVRX 5000",
    price: 8149.99,
    originalPrice: 9999.99,
    image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.15752-9/658891880_1482378120177027_1649354097484333464_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=3gU_PkOMEY0Q7kNvwGtZCeQ&_nc_oc=AdrueklgPfKTPmc2XFbfpU5oEhjFL5TLmxHSDHr8dLB1hg8TIx5Cidv4ApZw0RnQ4Zk&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_ss=7a32e&oh=03_Q7cD4wE-9gtL65uphSsMBDzJxdrOo0gpbhdniXNxUxZ8a-R3MA&oe=69EEDCE9",
    category: "Computers",
    description: "Let supply unit power your system.",
    rating: 4.7,
    reviews: 2167,
    inStock: true,
  },
];

export const categories = [
  "All",
  "Audio",
  "Computers",
  "Cameras",
  "Phones",
  "Tablets",
  "Loptops",
  "Others"
];
