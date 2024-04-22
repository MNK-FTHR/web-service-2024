import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import FilmRepository from './repositories/film';
import FilmService from './services/film';
import handleFilmRoutes from './handlers/film/routes';

import { swaggerOptions } from './swaggerOptions';

const server = express();
const specs = swaggerJsdoc(swaggerOptions);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

function main() {
  const filmRepository = new FilmRepository();
  const filmService = new FilmService({ filmRepository });
  const filmRoutes = handleFilmRoutes(filmService);

  server.use('/films', filmRoutes);
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  server.listen(3000, () => {
    console.log('Listening at 3000');
  });
}

main();
