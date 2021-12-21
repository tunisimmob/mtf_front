

export class Projet {
  id: number;
  nom: string;
  gouvernorat: string;
  localite: string;
  surface: number;
  description: string;
  situation_url: string;
  situation: string;
  residence_gardee: boolean;
  double_vitrage: boolean;
  michelaire_electrique: boolean;
  chauffage_central: boolean;
  climatiseur_preinstalle: boolean;
  videophone: boolean;
  etat: string;
  image_de_couverture: string;
  images_exterieur: string[] = [];
  images_interieur: string[] = [];
}

