"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoutes = void 0;
class IndexRoutes {
    welcome(req, res) {
        res.status(200).send({ message: 'Welcome to the API Rest' });
    }
}
exports.IndexRoutes = IndexRoutes;
