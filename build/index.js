"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const film_1 = __importDefault(require("./repositories/film"));
const film_2 = __importDefault(require("./services/film"));
const routes_1 = __importDefault(require("./handlers/film/routes"));
const swaggerOptions_1 = require("./swaggerOptions");
const server = (0, express_1.default)();
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.swaggerOptions);
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
function main() {
    const filmRepository = new film_1.default();
    const filmService = new film_2.default({ filmRepository });
    const filmRoutes = (0, routes_1.default)(filmService);
    server.use('/films', filmRoutes);
    server.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    server.listen(3000, () => {
        console.log('Listening at 3000');
    });
}
main();
