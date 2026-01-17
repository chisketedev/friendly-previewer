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
        name: "Ensaladas",
        items: [
          { name: "De la casa", description: "Tomate, lechuga, atún, maíz, aceitunas, salsa rosa", price: 3.50 },
          { name: "Mixta", description: "Tomate, lechuga, jamón york, queso, salsa rosa", price: 3.50 },
          { name: "César", description: "Lechuga, croutons, nueces, parmesano, salsa césar", price: 4.50 },
          { name: "César con pollo", description: "Lechuga, croutons, nueces, parmesano, pechuga de pollo a la plancha, salsa césar", price: 6.00 },
        ]
      },
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
      },
      {
        name: "Panpizza",
        items: [
          { name: "Bolognesa", description: "Queso, orégano, salsa boloñesa con carne picada", price: 2.50 },
          { name: "Jamón", description: "Tomate, queso, orégano, jamón york", price: 2.50 },
          { name: "Atún", description: "Tomate, queso, orégano, atún", price: 2.50 },
          { name: "Anchoas", description: "Tomate, queso, orégano, anchoas", price: 2.50 },
          { name: "Sobrasada", description: "Tomate, queso, orégano, sobrasada", price: 2.50 },
          { name: "Salami", description: "Tomate, queso, orégano, salami", price: 2.50 },
          { name: "Barbacoa", description: "Queso, orégano, carne picada, salsa barbacoa", price: 2.50 },
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
        name: "Clásicas",
        items: [
          { name: "Normal", description: "Tomate, lechuga, cebolla", price: 3.50 },
          { name: "Queso", description: "Tomate, lechuga, cebolla, queso", price: 4.00 },
          { name: "Especial", description: "Tomate, lechuga, cebolla, queso, bacón", price: 4.50 },
          { name: "Completa", description: "Tomate, lechuga, cebolla, queso, bacón, huevo frito", price: 5.00 },
        ]
      },
      {
        name: "Especiales",
        items: [
          { name: "Pollo crujiente", description: "Tomate, lechuga, mahonesa, pollo rebozado", price: 5.00 },
          { name: "Pescado crujiente", description: "Tomate, lechuga, mahonesa, pescado rebozado", price: 5.00 },
          { name: "Picantona", description: "Tomate, lechuga, cebolla, chipotle, queso chédar, pepinillos, 150gr paleta de cerdo", price: 6.50 },
          { name: "Concabra", description: "Tomate, lechuga, cebolla, confitura de tomate, 150gr de carne rellena de rulo de cabra", price: 6.50 },
        ]
      },
      {
        name: "Gourmets",
        items: [
          { name: "Buey", description: "200gr carne de buey, tomate, lechuga, cebolla, chédar fundido, pepinillos", price: 7.50 },
          { name: "Americana", description: "150gr ternera macerada con barbacoa y mostaza, tomate, lechuga, cebolla, queso chédar fundido, pepinillos", price: 7.50 },
          { name: "Chori-burguer", description: "150gr mezcla de chorizo fresco y paleta de cerdo, tomate, lechuga, cebolla rebozada, huevo frito, queso manchego, salsa argentina", price: 7.50 },
          { name: "Baconcita", description: "150gr mezcla de bacón y paleta de cerdo, tomate, lechuga, salsa queso chédar, huevo duro, cebolla rebozada, tira de bacón crujiente", price: 7.50 },
          { name: "Jamburguesa", description: "150gr mezcla de jamón serrano y paleta de cerdo, tomate, huevo frito, queso manchego, pimiento morrón", price: 7.50 },
          { name: "Vegetal crujiente", description: "Mezcla de garbanzos, berenjena, calabacín, cebolla, crema de pimientos del piquillo", price: 6.00 },
          { name: "Murciana", description: "150gr mezcla de lomo adobado y longaniza fresca, tomate, lechuga, pimientos asados, queso manchego, huevo frito, fiambre de lomo a la plancha", price: 7.50 },
          { name: "Parmesana crujiente", description: "Mezcla de patata y queso parmesano, salsa de queso parmesano trufada, huevo frito", price: 6.00 },
          { name: "Foie", description: "180gr paleta de cerdo rellena con mousse de pato, cebolla caramelizada al oporto", price: 7.50 },
          { name: "Otomana", description: "150gr mezcla de carne kebab y paleta de cerdo, tomate, lechuga, pimiento, salsa de yogurt, maíz, queso feta", price: 7.50 },
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
        name: "Patatas Locas",
        items: [
          { name: "Clásicas", description: "Patata, queso, bacón, salsa clásica", price: 6.00 },
          { name: "Pollo", description: "Patata, queso, pollo asado, salsa barbacoa", price: 6.00 },
          { name: "Turkas", description: "Patata, queso, cebolla, carne kebab, salsa kebab", price: 6.00 },
          { name: "Salchilocas", description: "Patata, queso, salchichas frankfurt, cebolla crujiente, salsa miel y mostaza", price: 6.00 },
          { name: "Calabacín", description: "Patata, queso, calabacín, salsa clásica", price: 6.00 },
          { name: "Vegetales", description: "Patata, queso, pimiento rojo y verde, cebolla, calabacín, berenjena, salsa clásica", price: 6.00 },
        ]
      },
      {
        name: "Raciones de Patatas",
        items: [
          { name: "Patatas fritas", price: 2.00 },
          { name: "Patatas bravas", price: 2.50 },
          { name: "Patatas alioli", price: 2.50 },
          { name: "Patatas diablo", description: "Muy picantes", price: 3.00 },
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
          { name: "Trifásico", description: "Lomo, bacón, queso", price: 5.00 },
          { name: "Serranito", description: "Lomo, jamón serrano a la plancha, pimiento frito", price: 5.00 },
          { name: "Catalana", description: "Pan tostado, ajo, aceite, tomate, jamón serrano", price: 5.00 },
          { name: "Don pepito", description: "Ternera a la plancha, mahonesa", price: 6.00 },
          { name: "Vegetal", description: "Tomate, lechuga, atún, huevo duro, mahonesa", price: 6.00 },
          { name: "Navarro", description: "Atún, anchoas, pimiento morrón", price: 5.00 },
          { name: "Astur", description: "Carne de chorizo, huevo frito", price: 5.00 },
          { name: "Sabroso", description: "Tortilla de queso, bacón, tomate", price: 6.00 },
          { name: "Mallorquín", description: "Sobrasada, queso (bocadillo gratinado)", price: 5.00 },
          { name: "Madrileño", description: "Calamares a la romana, mahonesa", price: 6.00 },
          { name: "Crujiente", description: "Pollo adobado rebozado, mahonesa", price: 6.00 },
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
    image: "/src/assets/hotdog-zone.png",
    categories: [
      {
        name: "Perritos",
        items: [
          { name: "Normal", description: "Tomate, lechuga, cebolla", price: 3.00 },
          { name: "Queso", description: "Tomate, lechuga, cebolla, queso", price: 3.50 },
          { name: "Especial", description: "Tomate, lechuga, cebolla, queso, bacón", price: 4.00 },
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
          { name: "Normal", description: "Tomate, lechuga, cebolla", price: 3.00 },
          { name: "Queso", description: "Tomate, lechuga, cebolla, queso", price: 3.50 },
          { name: "Especial", description: "Tomate, lechuga, cebolla, queso, bacón", price: 4.00 },
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
        name: "Macarrones y Spaguetis",
        items: [
          { name: "Atún", description: "Salsa de tomate, atún", price: 6.50 },
          { name: "Bolognesa", description: "Salsa de tomate, carne", price: 6.50 },
          { name: "4 Quesos", description: "Salsa de 4 quesos", price: 6.50 },
          { name: "Carbonara", description: "Nata, champiñón, cebolla, bacón", price: 6.50 },
          { name: "Los de Chicho", description: "Nata, pollo especiado", price: 6.50 },
          { name: "Roquefort", description: "Nata, bacón, queso roquefort", price: 6.50 },
          { name: "Salmón", description: "Nata, salmón fresco", price: 7.50 },
        ]
      },
      {
        name: "Especialidades",
        items: [
          { name: "Lasaña de carne", price: 7.00 },
          { name: "Lasaña barbacoa", price: 7.00 },
          { name: "Canelones de carne", price: 8.00 },
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
        name: "Combinados",
        items: [
          { name: "Combinado de lomo", description: "2 huevos fritos, patatas fritas, lomo a la plancha", price: 6.00 },
          { name: "Combinado de salchicha", description: "2 huevos fritos, patatas fritas, salchicha a la plancha", price: 6.00 },
          { name: "Combinado de tocino", description: "2 huevos fritos, patatas fritas, tocino a la plancha", price: 6.00 },
          { name: "Combinado de pollo", description: "2 huevos fritos, patatas fritas, pechuga a la plancha", price: 6.00 },
          { name: "Combinado de bacón", description: "2 huevos fritos, patatas fritas, bacón a la plancha", price: 6.00 },
          { name: "Combinado de morcilla", description: "2 huevos fritos, patatas fritas, morcilla a la plancha", price: 6.00 },
          { name: "Combinado de verduras", description: "2 huevos fritos, patatas fritas, pimiento rojo y verde, cebolla, calabacín, berenjena a la plancha", price: 6.00 },
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
          { name: "Solomillo de cerdo a la plancha", description: "Con patatas", price: 9.00 },
          { name: "Solomillo de cerdo a la pimienta", description: "Con patatas", price: 9.50 },
          { name: "Solomillo de cerdo al roquefort", description: "Con patatas", price: 9.50 },
          { name: "Codillo de cerdo en salsa", description: "Con patatas", price: 10.00 },
          { name: "Costillar de cerdo a la barbacoa (medio)", description: "Con patatas", price: 10.00 },
          { name: "Costillar de cerdo a la barbacoa (entero)", description: "Con patatas", price: 18.00 },
          { name: "Pechuga de pollo a la plancha", description: "Con patatas", price: 7.00 },
          { name: "Berenjenas rellenas de carne", description: "Gratinadas con queso", price: 8.00 },
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
          { name: "Salmón a la plancha", description: "Con patatas", price: 10.00 },
          { name: "Emperador a la plancha", description: "Con patatas", price: 10.00 },
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
        name: "Postres Caseros",
        items: [
          { name: "Tarta de queso", price: 2.50 },
          { name: "Mousse de chocolate", price: 2.50 },
          { name: "Pan de calatraba", price: 2.50 },
          { name: "Pizza de nutella y kiwi", price: 4.00 },
          { name: "Tarta al whisky", description: "Helado", price: 2.50 },
          { name: "Contesa", description: "Helado choco-nata", price: 2.50 },
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
