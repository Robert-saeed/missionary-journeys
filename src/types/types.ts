type CardType = {
  link: string;
  name: string;
  human: string;
  stations: string[];
};

type MapType = {
  mapNumber: number;
  points: { name: string; x: number; y: number; description: string }[];
  pointsNumber: number;
  elment: React.RefObject<HTMLDivElement>;
};

type pointType = {
  name: string;
  x: number;
  y: number;
  description: string;
  index: number;
  pointsNumber: number;
};



export type { CardType, MapType, pointType };
