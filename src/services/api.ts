// services/api.ts

// This is a placeholder for your API service module.
// In a real application, you would have functions to fetch data from your backend.

// Example of a type for a product
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'frango' | 'acompanhamento' | 'bebida';
}

// Example of a function to fetch the menu
export async function getMenu(): Promise<Product[]> {
  console.log('Fetching menu from API...');
  
  // In a real app, this would be a fetch() call to your backend, e.g., `fetch('/api/products')`
  // For now, we return mock data after a short delay to simulate a network request.
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockMenu: Product[] = [
    {
      id: 'prod_001',
      name: 'Frango Assado Clássico',
      description: 'Nosso famoso frango, temperado com ervas finas e assado à perfeição.',
      price: 45.90,
      imageUrl: '/images/frango-classico.jpg',
      category: 'frango'
    },
    {
      id: 'prod_002',
      name: 'Batata Assada com Alecrim',
      description: 'Batatas douradas e crocantes, temperadas com alecrim fresco e azeite.',
      price: 15.50,
      imageUrl: '/images/batata-alecrim.jpg',
      category: 'acompanhamento'
    },
    {
      id: 'prod_003',
      name: 'Farofa Especial da Casa',
      description: 'Uma farofa rica e saborosa para acompanhar seu frango.',
      price: 12.00,
      imageUrl: '/images/farofa-especial.jpg',
      category: 'acompanhamento'
    },
    {
        id: 'prod_004',
        name: 'Refrigerante 2L',
        description: 'Escolha seu sabor preferido.',
        price: 9.00,
        imageUrl: '/images/refrigerante.jpg',
        category: 'bebida'
    },
  ];

  return mockMenu;
}
