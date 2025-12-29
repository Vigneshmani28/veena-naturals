// /app/ingredients-data.ts
export interface Ingredient {
  id: string;
  tamilName: string;
  englishName: string;
  scientificName?: string;
  slug: string;
  category: 'hair' | 'skin' | 'wellness' | 'all';
  benefits: string[];
  uses: string[];
  preparation?: string;
  icon: string;
  color: string;
  featured: boolean;
  content: {
    title: string;
    excerpt: string;
    sections: {
      title: string;
      content: string;
    }[];
    traditionalUses: string[];
    modernApplications: string[];
    recipe?: {
      title: string;
      ingredients: string[];
      steps: string[];
    };
  };
}

export const allIngredients: Ingredient[] = [
  {
    id: '1',
    tamilName: 'செம்பருத்தி பூ & இலை',
    englishName: 'Hibiscus Flower & Leaves',
    scientificName: 'Hibiscus rosa-sinensis',
    slug: 'hibiscus-hair-benefits',
    category: 'hair',
    benefits: ['Hair Growth', 'Prevents Hair Fall', 'Adds Shine', 'Natural Conditioner', 'Prevents Premature Greying'],
    uses: ['Hair Oil', 'Hair Pack', 'Hair Rinse'],
    preparation: 'Fresh flowers and leaves are ground into paste or infused in oils',
    icon: '🌸',
    color: 'bg-gradient-to-br from-pink-100 to-rose-200',
    featured: true,
    content: {
      title: 'Hibiscus for Hair: The Ancient Secret for Luscious Locks',
      excerpt: 'Discover how Tamil women have used hibiscus for centuries to maintain thick, shiny, and healthy hair naturally.',
      sections: [
        {
          title: 'Introduction to Hibiscus',
          content: 'Hibiscus, known as Semparuthi in Tamil, has been a cornerstone of traditional hair care in South India for generations. Both the vibrant red flowers and the green leaves contain essential nutrients that promote hair health.'
        },
        {
          title: 'Traditional Preparation Methods',
          content: 'Traditionally, fresh hibiscus flowers and leaves are collected in the morning when their potency is highest. They are either ground into a fine paste with other ingredients or soaked in coconut oil for 7-10 days to create a potent hair oil.'
        },
        {
          title: 'Scientific Benefits',
          content: 'Modern research confirms that hibiscus is rich in amino acids, vitamins A and C, and alpha-hydroxy acids. These compounds strengthen hair follicles, stimulate circulation in the scalp, and maintain the hair\'s natural pH balance.'
        }
      ],
      traditionalUses: [
        'Weekly hair pack mixed with coconut milk',
        'Infused oil for daily scalp massage',
        'Post-wash rinse with hibiscus water'
      ],
      modernApplications: [
        'Natural hair dye alternative',
        'Scalp treatment for dandruff',
        'Hair thickening serum base'
      ],
      recipe: {
        title: 'Traditional Hibiscus Hair Pack',
        ingredients: [
          '10-12 fresh hibiscus flowers',
          'Handful of hibiscus leaves',
          '2 tablespoons coconut oil',
          '1 tablespoon fenugreek seeds (soaked)',
          '1 tablespoon yogurt (optional)'
        ],
        steps: [
          'Clean and grind hibiscus flowers and leaves into a smooth paste',
          'Add soaked fenugreek seeds and grind together',
          'Mix with coconut oil to form a consistent paste',
          'Apply to hair and scalp, leave for 45 minutes',
          'Rinse with mild shampoo'
        ]
      }
    }
  },
  {
    id: '2',
    tamilName: 'கரிசலங்கண்ணி',
    englishName: 'Bhringraj',
    scientificName: 'Eclipta prostrata',
    slug: 'bhringraj-hair-care',
    category: 'hair',
    benefits: ['Hair Regrowth', 'Scalp Health', 'Prevents Baldness', 'Darkens Hair', 'Reduces Dandruff'],
    uses: ['Hair Oil', 'Hair Tonic', 'Scalp Treatment'],
    icon: '🌿',
    color: 'bg-gradient-to-br from-emerald-100 to-green-200',
    featured: true,
    content: {
      title: 'Bhringraj: The King of Herbs for Hair Regrowth',
      excerpt: 'Learn why Bhringraj, whose name literally means "king of hair," has been revered in Ayurveda for reversing hair loss.',
      sections: [
        {
          title: 'Historical Significance',
          content: 'Mentioned in ancient Ayurvedic texts like Charaka Samhita, Bhringraj has been used for over 3000 years to treat various hair and scalp conditions.'
        }
      ],
      traditionalUses: [],
      modernApplications: []
    }
  },
  // Add similar objects for all 25 ingredients...
  {
    id: '3',
    tamilName: 'நெல்லிக்காய்',
    englishName: 'Amla',
    slug: 'amla-health-benefits',
    category: 'hair',
    benefits: ['Vitamin C Rich', 'Antioxidant', 'Hair Strength', 'Prevents Greying'],
    uses: ['Hair Oil', 'Hair Wash', 'Dietary Supplement'],
    icon: '🍃',
    color: 'bg-gradient-to-br from-lime-100 to-green-100',
    featured: true,
    content: {
      title: 'Amla: The Vitamin C Powerhouse',
      excerpt: 'Discover how this sour fruit provides more Vitamin C than oranges and benefits both hair and overall health.',
      sections: [],
      traditionalUses: [],
      modernApplications: []
    }
  }
];

// Helper functions
export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return allIngredients.find(ingredient => ingredient.slug === slug);
}

export function getIngredientsByCategory(category: string): Ingredient[] {
  return allIngredients.filter(ingredient => ingredient.category === category);
}

export function getFeaturedIngredients(): Ingredient[] {
  return allIngredients.filter(ingredient => ingredient.featured);
}

export function getAllSlugs(): string[] {
  return allIngredients.map(ingredient => ingredient.slug);
}