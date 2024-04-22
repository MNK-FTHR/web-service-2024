"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("./http"));
function handleFilmRoutes(filmService) {
    const router = express_1.default.Router();
    const http = new http_1.default(filmService);
    /**
     * @swagger
     * components:
     *   schemas:
     *     Film:
     *       additionalProperties: false
     *       properties:
     *         id:
     *           type: string
     *         nom:
     *           type: string
     *         description:
     *           type: string
     *         date:
     *           type: string
     *         note:
     *           type: number
     *       required:
     *         - id
     *         - nom
     *         - description
     *         - date
     *         - note
     *       type: object
     * /films:
     *   post:
     *     summary: Ajoute un film à la liste des films
     *     responses:
     *       200:
     *         description: Ajoute un film à la liste des films
     *         content:
     *           application/json:
     *             schema:
     *               type: string
     *               items:
     *                 $ref: '#/components/schemas/Film'
     */
    router.post('/', (req, res) => http.add(req, res));
    /**
     * @swagger
     * /films:
     *   get:
     *     summary: Liste des films
     *     responses:
     *       200:
     *         description: Liste des films.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Film'
     */
    router.get('/', (req, res) => http.getAll(req, res));
    /**
     * @swagger
     * /films/id:
     *   get:
     *     summary: Un film spécifique
     *     responses:
     *       200:
     *         description: Un film spécifique
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               items:
     *                  $ref: '#/components/schemas/Film'
     */
    router.get('/:id', (req, res) => http.getById(req, res));
    /**
     * @swagger
     * /films/id:
     *   put:
     *     summary: Mofifie un film spécifique
     *     responses:
     *       200:
     *         description: Mofifie un film spécifique
     *         content:
     *           application/json:
     *             schema:
     *               type: string
     *               items:
     *                 $ref: '#/components/schemas/Film'
     */
    router.put('/:id', (req, res) => http.update(req, res));
    /**
     * @swagger
     * /films/id:
     *   delete:
     *     summary: Supprime un film spécifique
     *     responses:
     *       200:
     *         description: Supprime un film spécifique
     *         content:
     *           application/json:
     *             schema:
     *               type: string
     *               items:
     *                 $ref: '#/components/schemas/Film'
     */
    router.delete('/:id', (req, res) => http.delete(req, res));
    return router;
}
exports.default = handleFilmRoutes;
