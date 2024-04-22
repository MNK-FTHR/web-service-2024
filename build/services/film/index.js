"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FilmService {
    constructor(repos) {
        this.filmRepository = repos.filmRepository;
    }
    async add(film) {
        return this.filmRepository.add(film);
    }
    async get() {
        return this.filmRepository.getAll();
    }
    async getById(id) {
        return this.filmRepository.getById(id);
    }
    async update(id, updatedFilm) {
        return this.filmRepository.update(id, updatedFilm);
    }
    async delete(id) {
        return this.filmRepository.delete(id);
    }
}
exports.default = FilmService;
