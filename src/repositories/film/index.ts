import { IFilm, IFilmNoID } from '../../interfaces/models/film';
import { IFilmRepository } from '../../interfaces/repositories/film';
import Film from '../../models/film';
import checkIfItsNotADuplicate from './checkIfItsNotADuplicate';

export default class FilmRepository implements IFilmRepository {
  films: IFilm[];
  constructor() {
    this.films = [
      {
        id: 0,
        nom: 'No country for old men',
        description:
          "A la frontière qui sépare le Texas du Mexique, les trafiquants de drogue ont depuis longtemps remplacé les voleurs de bétail. Lorsque Llewelyn Moss tombe sur une camionnette abandonnée, cernée de cadavres, il ne sait rien de ce qui a conduit à ce drame. Quand il prend les deux millions de dollars qu'il découvre à l'intérieur du véhicule, il n'a pas la moindre idée de ce que cela va provoquer. Moss a déclenché une réaction en chaîne d'une violence inouïe.",
        date: '23 janvier 2008',
        note: 5,
      },
    ];
  }

  public async getAll(): Promise<IFilm[]> {
    const films: IFilm[] = this.films;
    return films;
  }

  public async add(film: IFilmNoID): Promise<string | null> {
    const films: IFilm[] = this.films;
    const filmToCheck: IFilmNoID = film;
    const filmToPush = checkIfItsNotADuplicate(filmToCheck, this.films);
    if (filmToPush === null) {
      return filmToPush;
    } else {
      films.push(filmToPush);
      return `'${filmToPush.nom}' a été ajouté avec succès`;
    }
  }

  public async getById(id: number): Promise<IFilm> {
    const film: IFilm = this.films.filter((film) => film.id === id)[0];
    return film;
  }

  public async update(id: number, updatedFilm: IFilm): Promise<string> {
    let film = this.films.findIndex((film) => film.id === id);
    this.films[film] = updatedFilm;
    return `'${updatedFilm.nom}' a été mis à jour avec succès`;
  }

  public async delete(id: number): Promise<string> {
    const film: IFilm = this.films.filter((film) => film.id === id)[0];
    this.films.splice(this.films.indexOf(film), 1);
    return `'${film.nom}' a été supprimé avec succès`;
  }
}
