"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkIfItsNotADuplicate_1 = __importDefault(require("./checkIfItsNotADuplicate"));
class FilmRepository {
    constructor() {
        this.films = [
            {
                id: 0,
                nom: 'No country for old men',
                description: "A la frontière qui sépare le Texas du Mexique, les trafiquants de drogue ont depuis longtemps remplacé les voleurs de bétail. Lorsque Llewelyn Moss tombe sur une camionnette abandonnée, cernée de cadavres, il ne sait rien de ce qui a conduit à ce drame. Quand il prend les deux millions de dollars qu'il découvre à l'intérieur du véhicule, il n'a pas la moindre idée de ce que cela va provoquer. Moss a déclenché une réaction en chaîne d'une violence inouïe.",
                date: '23 janvier 2008',
                note: 5,
            },
        ];
    }
    async getAll() {
        const films = this.films;
        return films;
    }
    async add(film) {
        const films = this.films;
        const filmToCheck = film;
        const filmToPush = (0, checkIfItsNotADuplicate_1.default)(filmToCheck, this.films);
        if (filmToPush === null) {
            return filmToPush;
        }
        else {
            films.push(filmToPush);
            return `'${filmToPush.nom}' a été ajouté avec succès`;
        }
    }
    async getById(id) {
        const film = this.films.filter((film) => film.id === id)[0];
        return film;
    }
    async update(id, updatedFilm) {
        let film = this.films.findIndex((film) => film.id === id);
        this.films[film] = updatedFilm;
        return `'${updatedFilm.nom}' a été mis à jour avec succès`;
    }
    async delete(id) {
        const film = this.films.filter((film) => film.id === id)[0];
        this.films.splice(this.films.indexOf(film), 1);
        return `'${film.nom}' a été supprimé avec succès`;
    }
}
exports.default = FilmRepository;
