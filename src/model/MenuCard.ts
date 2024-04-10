export interface MenuCard {
  data: Data;
}

export interface Data {
  cards: Card[];
}

export interface Card {
  groupedCard: GroupedCard;
}

export interface GroupedCard {
  cardGroupMap: CardGroupMap;
}

export interface CardGroupMap {
  REGULAR: Regular;
}

export interface Regular {
  cards: Card2[];
}

export interface Card2 {
  card: Card3;
}

export interface Card3 {
  card: Card4;
}

export interface Card4 {
  '@type': string;
  title: string;
  itemCards: ItemCard[];
  type: string;
}

export interface ItemCard {
  card: Card5;
}

export interface Card5 {
  '@type': string;
  info: Info;
  analytics?: Analytics;
  hideRestaurantDetails?: boolean;
}

export interface Info {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: string;
  inStock: number;
  isVeg: number;
  price: number;
  variants: Variants;
  variantsV2: VariantsV2;
  addons: Addon[];
  itemAttribute: ItemAttribute;
  defaultPrice: number;
  ribbon: Ribbon;
  showImage: boolean;
  itemBadge: ItemBadge;
  badgesV2: BadgesV2;
  ratings: Ratings;
}

export interface Variants {}

export interface VariantsV2 {}

export interface Addon {
  groupId: string;
  groupName: string;
  choices: Choice[];
  maxAddons: number;
  maxFreeAddons: number;
  minAddons?: number;
}

export interface Choice {
  id: string;
  name: string;
  inStock: number;
  isVeg?: number;
  isEnabled: number;
  price?: number;
}

export interface ItemAttribute {
  vegClassifier: string;
}

export interface Ribbon {}

export interface ItemBadge {}

export interface BadgesV2 {}

export interface Ratings {
  aggregatedRating: AggregatedRating;
}

export interface AggregatedRating {}

export interface Analytics {}
