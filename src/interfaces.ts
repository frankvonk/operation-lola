export interface Note {
  id: string;
  name: string;
  description: string;
  image?: URL | string | null;
}