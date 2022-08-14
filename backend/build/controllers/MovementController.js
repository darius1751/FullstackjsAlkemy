"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementController = void 0;
const express_1 = require("express");
const MovementRoutes_1 = require("../routes/MovementRoutes");
class MovementController {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.movementRoutes = new MovementRoutes_1.MovementRoutes();
        this.configRoutes = this.configRoutes.bind(this);
        this.configRoutes();
    }
    configRoutes() {
        this.routes.get('/getAll/:userId', this.movementRoutes.getAllByUserId);
        this.routes.post('/create/', this.movementRoutes.create);
    }
}
exports.MovementController = MovementController;
