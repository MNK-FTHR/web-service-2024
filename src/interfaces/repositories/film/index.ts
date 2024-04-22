import { IFilm } from '../../models/film';

export interface IFilmRepository {
  add(film: IFilm): Promise<string | null>;
  getAll(): Promise<IFilm[]>;
  getById(id: number): Promise<IFilm>;
  update(id: number, updatedFilm: IFilm): Promise<string>;
  delete(id: number): Promise<string>;
}
