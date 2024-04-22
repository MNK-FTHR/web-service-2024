import { IFilm, IFilmNoID } from '../../interfaces/models/film';

export default function checkIfItsNotADuplicate(film: IFilmNoID, films: IFilm[]) {
  let lastID = films[films.length - 1].id;

  let filmToCheck: IFilm = { id: ++lastID, ...film };
  for (let x in films) {
    if (films.hasOwnProperty(x) && films[x].nom === filmToCheck.nom) {
      if (films.hasOwnProperty(x) && films[x].description === filmToCheck.description) {
        return null;
      }
    }
  }
  return filmToCheck;
}
