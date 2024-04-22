import { IFilm } from '../../interfaces/models/film';
import { IFilmRepository } from '../../interfaces/repositories/film';
import { IFilmService } from '../../interfaces/services/film';

interface schema {
  filmRepository: IFilmRepository;
}
export default class FilmService implements IFilmService {
  private filmRepository: schema['filmRepository'];

  constructor(repos: schema) {
    this.filmRepository = repos.filmRepository;
  }

  public async add(film: IFilm): Promise<string | null> {
    return this.filmRepository.add(film);
  }

  public async get(): Promise<IFilm[]> {
    return this.filmRepository.getAll();
  }

  public async getById(id: number): Promise<IFilm> {
    return this.filmRepository.getById(id);
  }

  public async update(id: number, updatedFilm: IFilm): Promise<string> {
    return this.filmRepository.update(id, updatedFilm);
  }

  public async delete(id: number): Promise<string> {
    return this.filmRepository.delete(id);
  }
}
