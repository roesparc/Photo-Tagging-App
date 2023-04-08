export interface FoundCharacters {
  burns: boolean;
  flanders: boolean;
  krusty: boolean;
  apu: boolean;
  doctor: boolean;
}

export interface Coordinates {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface CharactersLocation {
  [key: string]: Coordinates;
}

export interface LeaderboardData {
  name: string;
  time: number;
  id: string;
}
