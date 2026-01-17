export interface MenuItem {
  name: string;
  description?: string;
  prices?: {
    small?: number;
    medium?: number;
    large?: number;
  };
  price?: number;
  ingredients?: string[];
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuZone {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  description: string;
  color: string;
  image: string;
  categories: MenuCategory[];
}

export const menuZones: MenuZone[] = [
  {
    id: "entrantes",
    name: "Entrantes",
    slug: "entrantes",
    emoji: "🍤",
    description: "Para empezar con buen pie",
    color: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Entrantes",
        items: [
          { name: "Croquetas Caseras", description: "4 unidades - Jamón o bacalao", price: 5.00 },
          { name: "Nachos con Queso", description: "Con guacamole y pico de gallo", price: 7.00 },
          { name: "Tequeños", description: "Palitos de queso venezolanos", price: 5.50 },
          { name: "Alitas de Pollo BBQ", price: 6.50 },
          { name: "Tabla de Quesos", price: 9.00 },
          { name: "Tabla de Ibéricos", price: 12.00 },
        ]
      }
    ]
  },
  {
    id: "pizzas",
    name: "Pizzas",
    slug: "pizzas",
    emoji: "🍕",
    description: "Pizzas artesanales con masa casera",
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Pizzas Clásicas",
        items: [
          { name: "Margarita", description: "Tomate y mozzarella", prices: { small: 6.50, medium: 9.50, large: 12.50 } },
          { name: "4 Quesos", description: "Mozzarella, gorgonzola, parmesano, emmental", prices: { small: 8.00, medium: 11.00, large: 14.00 } },
          { name: "Jamón York", description: "Tomate, mozzarella y jamón york", prices: { small: 7.00, medium: 10.00, large: 13.00 } },
          { name: "Hawaiana", description: "Tomate, mozzarella, jamón, piña", prices: { small: 7.50, medium: 10.50, large: 13.50 } },
        ]
      },
      {
        name: "Pizzas Especiales",
        items: [
          { name: "Barbacoa", description: "Pollo, bacon, cebolla caramelizada, salsa BBQ", prices: { small: 8.50, medium: 11.50, large: 14.50 } },
          { name: "Carbonara", description: "Nata, bacon, cebolla, champiñón", prices: { small: 8.00, medium: 11.00, large: 14.00 } },
          { name: "Chicho Special", description: "La favorita del chef - sorpresa del día", prices: { small: 9.00, medium: 12.00, large: 15.00 } },
        ]
      }
    ]
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    slug: "hamburguesas",
    emoji: "🍔",
    description: "Burgers artesanales",
    color: "from-amber-600 to-red-700",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Hamburguesas",
        items: [
          { name: "Clásica", description: "Carne 150g, lechuga, tomate, cebolla", price: 6.50 },
          { name: "Con Queso", description: "Carne, queso cheddar fundido", price: 7.00 },
          { name: "Bacon Burger", description: "Carne, bacon crujiente, queso", price: 7.50 },
          { name: "Chicho Burger", description: "Doble carne, doble queso, bacon, huevo", price: 10.50 },
        ]
      }
    ]
  },
  {
    id: "patatas",
    name: "Patatas",
    slug: "patatas",
    emoji: "🍟",
    description: "Patatas locas y raciones",
    color: "from-yellow-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Patatas",
        items: [
          { name: "Patatas Bravas", description: "Con salsa brava casera", price: 4.50 },
          { name: "Patatas Alioli", description: "Con alioli casero", price: 4.50 },
          { name: "Patatas con Queso", description: "Queso cheddar fundido", price: 5.00 },
          { name: "Patatas Deluxe", description: "Todo: queso, bacon, cebolla, salsas", price: 6.50 },
        ]
      }
    ]
  },
  {
    id: "bocadillos",
    name: "Bocadillos",
    slug: "bocadillos",
    emoji: "🥖",
    description: "Bocatas tradicionales",
    color: "from-amber-400 to-yellow-600",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Bocadillos",
        items: [
          { name: "Jamón Serrano", price: 5.00 },
          { name: "Jamón y Queso", price: 4.50 },
          { name: "Lomo con Queso", price: 5.50 },
          { name: "Pepito de Ternera", price: 6.00 },
        ]
      }
    ]
  },
  {
    id: "perritos",
    name: "Perritos",
    slug: "perritos",
    emoji: "🌭",
    description: "Hot dogs al estilo Chicho",
    color: "from-red-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Perritos",
        items: [
          { name: "Perrito Clásico", description: "Salchicha, ketchup, mostaza", price: 4.50 },
          { name: "Perrito Completo", description: "Con bacon, queso, cebolla frita", price: 5.50 },
          { name: "Perrito BBQ", description: "Salsa BBQ, bacon, jalapeños", price: 5.50 },
        ]
      }
    ]
  },
  {
    id: "sandwich",
    name: "Sandwich",
    slug: "sandwich",
    emoji: "🥪",
    description: "Sándwiches variados",
    color: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Sándwiches",
        items: [
          { name: "Sándwich Mixto", price: 3.50 },
          { name: "Sándwich Vegetal", price: 4.50 },
          { name: "Sándwich Club", description: "Pollo, bacon, huevo, lechuga, tomate", price: 6.50 },
        ]
      }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    slug: "pasta",
    emoji: "🍝",
    description: "Pasta fresca italiana",
    color: "from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Pasta",
        items: [
          { name: "Espaguetis Boloñesa", description: "Salsa de carne casera", price: 8.50 },
          { name: "Espaguetis Carbonara", description: "Nata, bacon, parmesano", price: 8.50 },
          { name: "Macarrones Gratinados", description: "Con bechamel y queso fundido", price: 8.00 },
          { name: "Lasaña Casera", description: "Capas de pasta, carne y bechamel", price: 9.50 },
        ]
      }
    ]
  },
  {
    id: "combinados",
    name: "Combinados",
    slug: "combinados",
    emoji: "🍽️",
    description: "Platos combinados completos",
    color: "from-indigo-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Platos Combinados",
        items: [
          { name: "Combinado 1", description: "Lomo, huevo, patatas, ensalada", price: 8.50 },
          { name: "Combinado 2", description: "Pollo, patatas, ensalada, huevo", price: 8.50 },
          { name: "Combinado 3", description: "Hamburguesa, patatas, huevo, ensalada", price: 8.50 },
          { name: "Combinado Chicho", description: "Secreto, patatas, pimientos, huevo", price: 11.00 },
        ]
      }
    ]
  },
  {
    id: "carnes",
    name: "Carnes",
    slug: "carnes",
    emoji: "🥩",
    description: "Carnes a la brasa",
    color: "from-red-600 to-rose-700",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Carnes",
        items: [
          { name: "Secreto Ibérico", description: "Con patatas y pimientos", price: 14.00 },
          { name: "Entrecot de Ternera", description: "300g con guarnición", price: 16.00 },
          { name: "Costillas BBQ", description: "Con salsa casera", price: 12.00 },
          { name: "Pollo al Limón", description: "Con patatas asadas", price: 10.00 },
        ]
      }
    ]
  },
  {
    id: "pescados",
    name: "Pescados",
    slug: "pescados",
    emoji: "🐟",
    description: "Del mar a tu mesa",
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Pescados",
        items: [
          { name: "Calamares a la Romana", price: 8.50 },
          { name: "Gambas al Ajillo", price: 9.50 },
          { name: "Pescado del Día", description: "Consultar disponibilidad", price: 12.00 },
          { name: "Pulpo a la Gallega", price: 14.00 },
        ]
      }
    ]
  },
  {
    id: "postres",
    name: "Postres",
    slug: "postres",
    emoji: "🍰",
    description: "Dulces y helados",
    color: "from-pink-400 to-purple-500",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    categories: [
      {
        name: "Postres",
        items: [
          { name: "Tarta de Queso", description: "Casera al horno", price: 4.50 },
          { name: "Brownie con Helado", description: "Chocolate caliente", price: 5.00 },
          { name: "Tiramisú", description: "Receta italiana", price: 4.50 },
          { name: "Copa de Helado", description: "2 bolas a elegir", price: 3.50 },
        ]
      }
    ]
  }
];

export const getZoneBySlug = (slug: string): MenuZone | undefined => {
  return menuZones.find(zone => zone.slug === slug);
};

export const PHONE_NUMBER = "968 742 743";
export const RESTAURANT_NAME = "La Tapizzería de Chicho";
