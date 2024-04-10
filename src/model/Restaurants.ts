export interface Root {
  data: Data;
}

export interface Data {
  cards: Card[];
}

export interface Card {
  card: Card2;
}

export interface Card2 {
  card: Card3;
}

export interface Card3 {
  id: string;
  gridElements: GridElements;
}

export interface GridElements {
  infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
  restaurants: Restaurant[];
}

export interface Restaurant {
  info: Info;
}

export interface Info {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  parentId: string;
  avgRatingString: string;
  sla: Sla;
}

export interface Sla {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}
