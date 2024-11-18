export interface Film {
  episode_id: number;
  title: string;
  release_date: string;
  director: string;
  opening_crawl: string;
  characters: string[];
  planets: string[];
  species: string[];
}

export interface Character {
  name: string;
  gender: string;
  birth_year: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
}

export interface Species {
  name: string;
  classification: string;
  language: string;
}