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
  categories: MenuCategory[];
}

export const menuZones: MenuZone[] = [
  {
    id: "pizzas",
    name: "Pizzas",
    slug: "pizzas",
    emoji: "🍕",
    description: "Pizzas artesanales con masa casera",
    color: "from-orange-500 to-red-600",
    categories: [
      {
        name: "Pizzas Clásicas",
        items: [
          { name: "Margarita", description: "Tomate y mozzarella", prices: { small: 6.50, medium: 9.50, large: 12.50 } },
          { name: "4 Quesos", description: "Mozzarella, gorgonzola, parmesano, emmental", prices: { small: 8.00, medium: 11.00, large: 14.00 } },
          { name: "Jamón York", description: "Tomate, mozzarella y jamón york", prices: { small: 7.00, medium: 10.00, large: 13.00 } },
          { name: "Jamón Serrano", description: "Tomate, mozzarella y jamón serrano", prices: { small: 8.00, medium: 11.00, large: 14.00 } },
          { name: "Bacon y Queso", description: "Tomate, mozzarella, bacon crujiente", prices: { small: 7.50, medium: 10.50, large: 13.50 } },
          { name: "Atún", description: "Tomate, mozzarella y atún", prices: { small: 7.50, medium: 10.50, large: 13.50 } },
          { name: "Vegetal", description: "Tomate, mozzarella, pimiento, cebolla, champiñón", prices: { small: 7.50, medium: 10.50, large: 13.50 } },
          { name: "Hawaiana", description: "Tomate, mozzarella, jamón, piña", prices: { small: 7.50, medium: 10.50, large: 13.50 } },
        ]
      },
      {
        name: "Pizzas Especiales",
        items: [
          { name: "Barbacoa", description: "Pollo, bacon, cebolla caramelizada, salsa BBQ", prices: { small: 8.50, medium: 11.50, large: 14.50 } },
          { name: "Carbonara", description: "Nata, bacon, cebolla, champiñón", prices: { small: 8.00, medium: 11.00, large: 14.00 } },
          { name: "Diávola", description: "Tomate, mozzarella, salami picante, guindilla", prices: { small: 8.00, medium: 11.00, large: 14.00 } },
          { name: "Chicho Special", description: "La favorita del chef - sorpresa del día", prices: { small: 9.00, medium: 12.00, large: 15.00 } },
          { name: "Kebab", description: "Carne kebab, salsa especial, cebolla, tomate", prices: { small: 8.50, medium: 11.50, large: 14.50 } },
          { name: "Pulled Pork", description: "Cerdo desmechado, BBQ, cebolla crujiente", prices: { small: 9.00, medium: 12.00, large: 15.00 } },
        ]
      }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    slug: "pasta",
    emoji: "🍝",
    description: "Pasta fresca y panpizzas",
    color: "from-yellow-500 to-orange-500",
    categories: [
      {
        name: "Pasta Fresca",
        items: [
          { name: "Espaguetis Boloñesa", description: "Salsa de carne casera", price: 8.50 },
          { name: "Espaguetis Carbonara", description: "Nata, bacon, parmesano", price: 8.50 },
          { name: "Macarrones Gratinados", description: "Con bechamel y queso fundido", price: 8.00 },
          { name: "Lasaña Casera", description: "Capas de pasta, carne y bechamel", price: 9.50 },
          { name: "Tallarines al Pesto", description: "Salsa pesto genovés casera", price: 8.50 },
          { name: "Raviolis de Ricotta", description: "Con salsa de tomate y albahaca", price: 9.00 },
        ]
      },
      {
        name: "Panpizzas",
        items: [
          { name: "Panpizza Jamón y Queso", description: "Clásico irresistible", price: 5.50 },
          { name: "Panpizza Bacon", description: "Con bacon crujiente", price: 5.50 },
          { name: "Panpizza Vegetal", description: "Verduras de temporada", price: 5.50 },
          { name: "Panpizza Barbacoa", description: "Pollo BBQ y cebolla", price: 6.00 },
        ]
      }
    ]
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    slug: "hamburguesas",
    emoji: "🍔",
    description: "Burgers artesanales y perritos",
    color: "from-amber-600 to-red-700",
    categories: [
      {
        name: "Hamburguesas Clásicas",
        items: [
          { name: "Clásica", description: "Carne 150g, lechuga, tomate, cebolla", price: 6.50 },
          { name: "Con Queso", description: "Carne, queso cheddar fundido", price: 7.00 },
          { name: "Bacon Burger", description: "Carne, bacon crujiente, queso", price: 7.50 },
          { name: "BBQ Burger", description: "Carne, bacon, cebolla caramelizada, BBQ", price: 8.00 },
        ]
      },
      {
        name: "Hamburguesas Gourmet",
        items: [
          { name: "Chicho Burger", description: "Doble carne, doble queso, bacon, huevo", price: 10.50 },
          { name: "Pulled Pork Burger", description: "Cerdo desmechado BBQ, coleslaw", price: 9.50 },
          { name: "Crispy Chicken", description: "Pollo crujiente, salsa especial", price: 8.50 },
          { name: "Veggie Burger", description: "Hamburguesa vegetal, aguacate", price: 8.00 },
          { name: "Blue Cheese", description: "Carne, queso azul, rúcula, nueces", price: 9.00 },
        ]
      },
      {
        name: "Perritos Calientes",
        items: [
          { name: "Perrito Clásico", description: "Salchicha, ketchup, mostaza", price: 4.50 },
          { name: "Perrito Completo", description: "Con bacon, queso, cebolla frita", price: 5.50 },
          { name: "Perrito BBQ", description: "Salsa BBQ, bacon, jalapeños", price: 5.50 },
        ]
      }
    ]
  },
  {
    id: "bocadillos",
    name: "Bocadillos",
    slug: "bocadillos",
    emoji: "🥖",
    description: "Bocatas y sándwiches",
    color: "from-amber-400 to-yellow-600",
    categories: [
      {
        name: "Bocadillos Fríos",
        items: [
          { name: "Jamón Serrano", price: 5.00 },
          { name: "Jamón y Queso", price: 4.50 },
          { name: "Tortilla Española", price: 4.50 },
          { name: "Atún con Tomate", price: 4.50 },
          { name: "Vegetal", description: "Lechuga, tomate, huevo, atún, mayonesa", price: 5.00 },
        ]
      },
      {
        name: "Bocadillos Calientes",
        items: [
          { name: "Lomo con Queso", price: 5.50 },
          { name: "Pepito de Ternera", price: 6.00 },
          { name: "Bacon con Queso", price: 5.00 },
          { name: "Pollo Crujiente", price: 5.50 },
          { name: "Kebab en Bocadillo", price: 6.00 },
        ]
      },
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
    id: "patatas",
    name: "Patatas",
    slug: "patatas",
    emoji: "🍟",
    description: "Patatas locas y raciones",
    color: "from-yellow-400 to-amber-500",
    categories: [
      {
        name: "Patatas Locas",
        items: [
          { name: "Patatas Bravas", description: "Con salsa brava casera", price: 4.50 },
          { name: "Patatas Alioli", description: "Con alioli casero", price: 4.50 },
          { name: "Patatas Mixtas", description: "Brava y alioli", price: 4.50 },
          { name: "Patatas con Queso", description: "Queso cheddar fundido", price: 5.00 },
          { name: "Patatas Bacon-Queso", description: "Con bacon y queso fundido", price: 5.50 },
          { name: "Patatas Deluxe", description: "Todo: queso, bacon, cebolla, salsas", price: 6.50 },
        ]
      },
      {
        name: "Raciones de Patatas",
        items: [
          { name: "Ración Patatas Fritas", description: "Para compartir", price: 4.00 },
          { name: "Patatas Gajo", description: "Estilo rústico con especias", price: 4.50 },
          { name: "Boniato Frito", description: "Batata dulce crujiente", price: 5.00 },
        ]
      }
    ]
  },
  {
    id: "tapas",
    name: "Tapeo",
    slug: "tapas",
    emoji: "🍤",
    description: "Tapas y raciones para compartir",
    color: "from-rose-500 to-pink-600",
    categories: [
      {
        name: "Tapas Calientes",
        items: [
          { name: "Croquetas Caseras", description: "4 unidades - Jamón o bacalao", price: 5.00 },
          { name: "Calamares a la Romana", price: 7.50 },
          { name: "Gambas al Ajillo", price: 8.50 },
          { name: "Pulpo a la Gallega", price: 12.00 },
          { name: "Champiñones al Ajillo", price: 5.50 },
          { name: "Alitas de Pollo BBQ", price: 6.50 },
          { name: "Nachos con Queso", description: "Con guacamole y pico de gallo", price: 7.00 },
          { name: "Tequeños", description: "Palitos de queso venezolanos", price: 5.50 },
        ]
      },
      {
        name: "Tapas Frías",
        items: [
          { name: "Tabla de Quesos", price: 9.00 },
          { name: "Tabla de Ibéricos", price: 12.00 },
          { name: "Tabla Mixta", description: "Quesos e ibéricos", price: 14.00 },
          { name: "Gazpacho Andaluz", price: 4.00 },
          { name: "Salmorejo Cordobés", price: 4.50 },
        ]
      },
      {
        name: "Ensaladas",
        items: [
          { name: "Ensalada Mixta", price: 5.50 },
          { name: "Ensalada César", description: "Pollo, parmesano, picatostes", price: 7.50 },
          { name: "Ensalada de Queso de Cabra", description: "Con frutos secos y miel", price: 8.00 },
        ]
      }
    ]
  },
  {
    id: "carnes",
    name: "Carnes",
    slug: "carnes",
    emoji: "🥩",
    description: "Carnes y platos combinados",
    color: "from-red-600 to-rose-700",
    categories: [
      {
        name: "Carnes a la Brasa",
        items: [
          { name: "Secreto Ibérico", description: "Con patatas y pimientos", price: 14.00 },
          { name: "Entrecot de Ternera", description: "300g con guarnición", price: 16.00 },
          { name: "Costillas BBQ", description: "Con salsa casera", price: 12.00 },
          { name: "Pollo al Limón", description: "Con patatas asadas", price: 10.00 },
        ]
      },
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
    id: "postres",
    name: "Postres",
    slug: "postres",
    emoji: "🍰",
    description: "Dulces y helados",
    color: "from-pink-400 to-purple-500",
    categories: [
      {
        name: "Tartas y Dulces",
        items: [
          { name: "Tarta de Queso", description: "Casera al horno", price: 4.50 },
          { name: "Brownie con Helado", description: "Chocolate caliente", price: 5.00 },
          { name: "Tiramisú", description: "Receta italiana", price: 4.50 },
          { name: "Coulant de Chocolate", description: "Con helado de vainilla", price: 5.50 },
          { name: "Natillas Caseras", price: 3.50 },
        ]
      },
      {
        name: "Helados",
        items: [
          { name: "Copa de Helado", description: "2 bolas a elegir", price: 3.50 },
          { name: "Banana Split", price: 5.50 },
          { name: "Copa del Chicho", description: "3 bolas, nata, sirope, toppings", price: 6.00 },
        ]
      },
      {
        name: "Especiales",
        items: [
          { name: "Pizza de Nutella", description: "Con fresas y plátano", prices: { small: 7.00, medium: 10.00, large: 13.00 } },
          { name: "Crepe de Nutella", price: 4.50 },
          { name: "Churros con Chocolate", description: "6 unidades", price: 4.00 },
        ]
      }
    ]
  }
];

export const getZoneBySlug = (slug: string): MenuZone | undefined => {
  return menuZones.find(zone => zone.slug === slug);
};

export const PHONE_NUMBER = "644 36 10 27";
export const RESTAURANT_NAME = "La Tapizzería de Chicho";
