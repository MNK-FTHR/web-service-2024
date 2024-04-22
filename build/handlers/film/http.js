"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xmlParser_1 = __importDefault(require("../../utils/xmlParser"));
class FilmHandler {
    constructor(service) {
        this.filmService = service;
        /* ==================>🔐Bind all methods🔐<================== */
        this.add = this.add.bind(this);
        this.getById = this.getById.bind(this);
    }
    async add(req, res) {
        try {
            const resp = await this.filmService.add(req.body);
            if (resp === null) {
                res.status(409).send('Ce film est déjà en base de donnée');
            }
            else {
                res.status(200).json({ resp });
            }
        }
        catch (error) {
            const response = error.response;
            res.status(422).json({
                response,
            });
        }
    }
    async getAll(req, res) {
        try {
            const films = await this.filmService.get();
            (0, xmlParser_1.default)(req.headers.accept === 'application/xml', { films }, res);
        }
        catch (error) {
            const response = error.response;
            res.status(500).json({
                response,
            });
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            const film = await this.filmService.getById(+id);
            if (film) {
                (0, xmlParser_1.default)(req.headers.accept === 'application/xml', { film }, res);
            }
            else {
                res.status(404).send('Film inexistant.');
            }
        }
        catch (error) {
            const response = error.response;
            res.status(500).json({
                response,
            });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedFilm = req.body;
            const resp = await this.filmService.update(+id, updatedFilm);
            res.status(200).json({ resp });
        }
        catch (error) {
            const response = error.response;
            res.status(404).json({
                response,
            });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const resp = await this.filmService.delete(+id);
            res.status(200).json({ resp });
        }
        catch (error) {
            const response = error.response;
            res.status(404).json({
                response,
            });
        }
    }
}
exports.default = FilmHandler;
