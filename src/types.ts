export interface Character {
  id: string;
  name: string;
  code: string;
  age: string | number;
  gender: string;
  appearance: string;
  personality: string;
  level: string;
  preferences: string;
  features: string;
  speech: string;
  faction: 'Velvet Rouge' | 'Noire' | 'Others';
  secret?: string;
}

export interface Faction {
  name: string;
  description: string;
  rules?: string[];
  tiers?: Tier[];
  games?: Game[];
  facilities?: Facility[];
}

export interface Facility {
  name: string;
  description: string;
}

export interface Tier {
  level: string;
  description: string;
  price: string;
}

export interface Game {
  name: string;
  rules: string;
  betting: string;
}
