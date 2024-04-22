"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Film {
    constructor(film) {
        this.id = film.id;
        this.nom = film.nom;
        this.description = film.description;
        this.date = film.date;
        this.note = film.note;
    }
}
exports.default = Film;
