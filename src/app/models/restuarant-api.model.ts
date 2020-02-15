export class Category {
  name: string;
  image: string;
}

export class Recipe {
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  details: string;
  isFavourite: boolean;
}

export class RestuarantObjectModel {
  categories: Category[];
  recipes: Recipe[];
}

