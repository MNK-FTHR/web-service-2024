import { IFilm } from '../../interfaces/models/film';

export default class Film implements IFilm {
  id: number;
  nom: string;
  description: string;
  date: string;
  note: number;
  constructor(film: IFilm) {
    this.id = film.id;
    this.nom = film.nom;
    this.description = film.description;
    this.date = film.date;
    this.note = film.note;
  }
}
