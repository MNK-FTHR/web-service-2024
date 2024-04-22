export interface IFilmNoID {
  nom: string;
  description: string;
  date: string;
  note: number;
}
export interface IFilm extends IFilmNoID {
  id: number;
}
