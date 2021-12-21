import { Projet } from "./projet";



export class Appartement {
  id: number;
  numerodappartement: number;
  nombrechambre: string;
  etage: string;
  surfacetotale: number;
  surfacehorsoeuvre: number;
  surfacecommune: number;
  terrasse: string;
  nombloc: string;
  images: string[] = [];
  plan: string;
  emplacement: string;
  projet: Projet;
}

