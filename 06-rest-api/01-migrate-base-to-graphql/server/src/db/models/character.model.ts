export interface Character {

  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  },
  location: {
    name: string;
    url: string;
  },
  image: string;
  episode: string[];
  url: string;
  created: string;
  comment?: string;

}

export interface CharacterEdit {
  id: number;
  name: string
  image: string
  status: string
  species: string
  gender: string
  type: string
  comment?: string
}