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
        name: "Clásicos",
        items: [
          { name: "Boquerones en vinagre", description: "6 unidades", price: 2.50 },
          { name: "Ensaladilla rusa", price: 2.50 },
          { name: "Ensaladilla de marisco", price: 3.50 },
          { name: "Ensaladilla de cangrejo", price: 3.50 },
          { name: "Marineras", description: "Unidad", price: 2.50 },
          { name: "Rollitos de salmón", description: "Unidad", price: 2.50 },
          { name: "Sepia", description: "Plato", price: 10.00 },
          { name: "Caballitos", description: "Unidad", price: 2.00 },
          { name: "Calamares a la romana", description: "6 unidades", price: 5.00 },
          { name: "Almejas", price: 7.00 },
          { name: "Pinzas de cangrejo", price: 3.00 },
          { name: "Seta y champiñón", description: "Por persona", price: 1.50 },
          { name: "Oreja a la plancha", description: "Por persona", price: 2.00 },
          { name: "Piruletas de chicho", description: "Unidad", price: 2.00 },
          { name: "Tigres", description: "Unidad", price: 1.50 },
          { name: "Chorizo a la sidra", price: 2.00 },
        ]
      },
      {
        name: "Montaditos",
        items: [
          { name: "Montadito de lomo", price: 1.50 },
          { name: "Montadito de salchicha", price: 1.50 },
          { name: "Montadito de morcilla", price: 1.50 },
          { name: "Montadito de tocino", price: 1.50 },
          { name: "Montadito de bacón", price: 1.50 },
        ]
      },
      {
        name: "Croquetas",
        items: [
          { name: "Croquetas de jamón", description: "6 unidades", price: 3.00 },
          { name: "Croquetas de pollo", description: "6 unidades", price: 3.00 },
          { name: "Croquetas de york-queso", description: "6 unidades", price: 3.00 },
          { name: "Croquetas de merluza", description: "6 unidades", price: 3.00 },
          { name: "Croquetas de marisco", description: "6 unidades", price: 3.00 },
          { name: "Croquetas de gambas al ajillo", description: "6 unidades", price: 3.00 },
        ]
      },
      {
        name: "Tostas y Quesadillas",
        items: [
          { name: "Tosta de rulo de cabra", description: "Con confitura de tomate", price: 2.00 },
          { name: "Tosta de foie (micuit)", description: "Con reducción de oporto", price: 2.00 },
          { name: "Quesadilla de pollo", description: "Pollo, queso, salsa", price: 5.00 },
          { name: "Quesadilla de tomate", description: "Tomate, queso, especias", price: 5.00 },
          { name: "Quesadilla imperial", description: "Pollo, queso, especias, salsa kebab", price: 5.00 },
        ]
      },
      {
        name: "Fingers y Nuggets",
        items: [
          { name: "Nuggets de pollo", description: "6 unidades, con salsa barbacoa", price: 4.00 },
          { name: "Nuggets vegetales", description: "6 unidades, con crema de piquillos", price: 4.00 },
          { name: "Fingers de pollo", description: "6 unidades", price: 4.00 },
          { name: "Fingers de queso", description: "6 unidades", price: 4.00 },
        ]
      },
      {
        name: "Alitas y Snacks",
        items: [
          { name: "Alitas de pollo barbacoa", description: "3 unidades", price: 3.00 },
          { name: "Alitas de pollo tex-mex", description: "3 unidades, ligeramente picantes", price: 3.00 },
          { name: "Aros de cebolla", price: 3.00 },
          { name: "Nachos", description: "Con una salsa a elegir", price: 3.00 },
        ]
      },
      {
        name: "Salsas",
        items: [
          { name: "Salsas para nachos", description: "Chédar, roja mejicana, ranchera", price: 1.00 },
          { name: "Salsas para acompañar", description: "Barbacoa, alioli, brava, miel y mostaza, kebab, argentina, americana, cóctel", price: 1.00 },
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
        name: "Pizzas Básicas",
        items: [
          { name: "Jamón", description: "Tomate, queso, orégano, jamón york, bacón", prices: { small: 4.50, medium: 7.00, large: 9.50 } },
          { name: "Margarita", description: "Tomate, queso, orégano", prices: { small: 4.50, medium: 7.00, large: 9.50 } },
          { name: "Salami", description: "Tomate, queso, orégano, salami", prices: { small: 4.50, medium: 7.00, large: 9.50 } },
          { name: "Fungi", description: "Tomate, queso, orégano, champiñón", prices: { small: 4.50, medium: 7.00, large: 9.50 } },
        ]
      },
      {
        name: "Pizzas Clásicas",
        items: [
          { name: "4 Quesos", description: "Tomate, orégano, mozzarella, emmental, chédar, gouda", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Tonno", description: "Tomate, queso, orégano, atún, cebolla", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Napolitana", description: "Tomate, queso, orégano, anchoas, aceitunas, pimiento morrón", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Barakaldo", description: "Tomate, queso, orégano, atún, anchoas, cebolla, aceitunas", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Pepperoni", description: "Tomate, queso, orégano, jamón york, pepperoni", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Mallorquina", description: "Tomate, queso, orégano, sobrasada", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Roquefort", description: "Tomate, queso, orégano, queso roquefort", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Cangrejo", description: "Tomate, queso, orégano, pinzas de cangrejo, bocas de mar", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Bacón", description: "Tomate, queso, orégano, bacón, cebolla", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Barbacoa", description: "Salsa barbacoa, queso, orégano, carne picada", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Pollo", description: "Tomate, queso, orégano, pollo salteado con especias", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Pollocream", description: "Nata, queso, orégano, pollo salteado con especias", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Mazorquita", description: "Salsa barbacoa, queso, orégano, bacón, maíz", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Cipolla", description: "Tomate, queso, orégano, cebolla asada", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Hawaiana", description: "Tomate, queso, orégano, jamón york, piña", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Bolognesa", description: "Tomate, queso, orégano, salsa boloñesa", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Carbonara", description: "Nata, queso, orégano, jamón york, cebolla, champiñón", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Carbonara clásica", description: "Nata, queso, orégano, bacón, cebolla, champiñón", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Florentina", description: "Tomate, queso, orégano, jamón york, champiñón, aceitunas", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Espinacas", description: "Nata, queso, orégano, salteado de espinacas con piñones", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Vegetal", description: "Tomate, queso, orégano, rodajas de tomate, calabacín, pimiento, cebolla, champiñón, alcaparras", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Rústica", description: "Tomate, queso, orégano, alcachofas, aceitunas, champiñón, pimiento morrón", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Al-yovo", description: "Tomate, queso, orégano, jamón york, huevo", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Mixta", description: "Tomate, queso, orégano, jamón york, atún", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Simpática", description: "Tomate, queso, orégano, jamón york, champiñón", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Fusión", description: "Tomate, queso, orégano, atún, bacón", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Alemana", description: "Tomate, queso, orégano, salchichas frankfurt, bacón, salsa miel y mostaza", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Mediterránea", description: "Tomate, queso, orégano, lomo, huevo, pimiento", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
        ]
      },
      {
        name: "Pizzas Especiales",
        items: [
          { name: "Sabrosa", description: "Tomate, queso, orégano, sobrasada, roquefort, alcaparras", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Especial", description: "Tomate, queso, orégano, jamón york, atún, salami, cebolla, ajo, picante", prices: { small: 5.00, medium: 7.75, large: 10.50 } },
          { name: "Kebab", description: "Tomate, queso, orégano, cebolla, carne y salsa kebab", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Caprichosa", description: "Tomate, queso, orégano, jamón york, atún, anchoas, alcaparras, aceitunas", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "4 Estaciones", description: "Tomate, queso, orégano, jamón york, bacón, champiñón, alcachofas, aceitunas, pimiento morrón", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
        ]
      },
      {
        name: "Pizzas de Marisco",
        items: [
          { name: "Marisco", description: "Tomate, queso, orégano, calamar, mejillones, gambas, bocas de mar", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Frutti di mare", description: "Nata, orégano, calamar, bocas, gambas, mezcla de 4 quesos", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Marinera", description: "Tomate, queso, orégano, atún, gambas, bocas de mar, aceitunas", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Salmón", description: "Nata, queso, orégano, salmón fresco, gambas", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
        ]
      },
      {
        name: "Pizzas Premium",
        items: [
          { name: "Española", description: "Tomate, queso, orégano, jamón serrano, huevo, pimiento rojo y verde", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Romántica", description: "Tomate, queso, orégano, jamón york, gambas, cebolla", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Picante", description: "Tomate, queso, orégano, lomo, aceite picante", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Primavera", description: "Tomate, queso, orégano, jamón serrano, gambas", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Chori-nata", description: "Nata, orégano, chorizo, mezcla de 4 quesos", prices: { small: 5.50, medium: 8.50, large: 11.50 } },
          { name: "Mexicana", description: "Tomate, queso, orégano, fríjoles, cebolla, lomo, aceite picante", prices: { small: 6.00, medium: 9.00, large: 12.50 } },
          { name: "Murciana", description: "Tomate, queso, orégano, lomo, salchicha, morcilla, chorizo", prices: { small: 6.00, medium: 9.00, large: 12.50 } },
          { name: "Pirata", description: "Tomate, queso, orégano, salteado de champiñón, cebolla y pimiento rojo", prices: { small: 6.00, medium: 9.00, large: 12.50 } },
          { name: "Zíngara", description: "Tomate, queso, orégano, salteado de lomo, pimiento y cebolla", prices: { small: 6.00, medium: 9.00, large: 12.50 } },
        ]
      },
      {
        name: "Pizzas Panadas",
        items: [
          { name: "Panada vegetal", description: "Tomate, queso, orégano, salteado de berenjena, calabacín, cebolla y parmesano. Para 2 personas", price: 12.50 },
          { name: "Panada de carne", description: "Tomate, queso, orégano, salteado de lomo, pimiento, cebolla y parmesano, ajo, aceite picante. Para 2 personas", price: 12.50 },
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
