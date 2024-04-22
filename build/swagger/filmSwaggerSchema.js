"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmSchema = void 0;
exports.FilmSchema = {
    components: {
        schemas: {
            Film: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        description: 'id',
                    },
                    nom: {
                        type: 'string',
                        description: 'Nom du film',
                        minimum: 1,
                        maximum: 128,
                    },
                    description: {
                        type: 'string',
                        description: 'Description du film',
                        minimum: 1,
                        maximum: 2048,
                    },
                    date: {
                        type: 'string',
                        description: 'Date de parution du film',
                        format: 'date',
                    },
                    note: {
                        type: 'number',
                        description: 'Note du film',
                        minimum: 0,
                        maximum: 5,
                    },
                },
                required: ['id', 'nom', 'description', 'date', 'note'],
            },
        },
    },
};
