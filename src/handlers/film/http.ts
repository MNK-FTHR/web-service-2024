import { Request, Response } from 'express';
import { IFilmHandler } from '../../interfaces/handlers/film';
import { IFilm } from '../../interfaces/models/film';
import { IFilmService } from '../../interfaces/services/film';
import returnParser from '../../utils/xmlParser';

export default class FilmHandler implements IFilmHandler {
  private filmService;

  constructor(service: IFilmService) {
    this.filmService = service;

    /* ==================>🔐Bind all methods🔐<================== */
    this.add = this.add.bind(this);
    this.getById = this.getById.bind(this);
  }

  public async add(req: Request, res: Response): Promise<void> {
    try {
      const resp = await this.filmService.add(req.body as IFilm);
      if (resp === null) {
        res.status(409).send('Ce film est déjà en base de donnée');
      } else {
        res.status(200).json({ resp });
      }
    } catch (error: any) {
      const response = error.response;
      res.status(422).json({
        response,
      });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const films = await this.filmService.get();
      returnParser(req.headers.accept === 'application/xml', { films }, res);
    } catch (error: any) {
      const response = error.response;
      res.status(500).json({
        response,
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const film = await this.filmService.getById(+id);
      if (film) {
        returnParser(req.headers.accept === 'application/xml', { film }, res);
      } else {
        res.status(404).send('Film inexistant.');
      }
    } catch (error: any) {
      const response = error.response;
      res.status(500).json({
        response,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedFilm = req.body as IFilm;

      const resp = await this.filmService.update(+id, updatedFilm);

      res.status(200).json({ resp });
    } catch (error: any) {
      const response = error.response;
      res.status(404).json({
        response,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const resp = await this.filmService.delete(+id);

      res.status(200).json({ resp });
    } catch (error: any) {
      const response = error.response;
      res.status(404).json({
        response,
      });
    }
  }
}
