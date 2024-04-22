import { IFilm } from '../../models/film';

export interface IFilmService {
  add(film: IFilm): Promise<string | null>;
  get(): Promise<IFilm[]>;
  getById(id: number): Promise<IFilm>;
  update(id: number, updatedFilm: IFilm): Promise<string>;
  delete(id: number): Promise<string>;
}
