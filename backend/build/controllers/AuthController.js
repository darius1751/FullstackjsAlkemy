"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const express_1 = require("express");
const AuthRoutes_1 = require("../routes/AuthRoutes");
class AuthController {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.authRoutes = new AuthRoutes_1.AuthRoutes();
        this.configRoutes();
    }
    configRoutes() {
        this.routes.post('/createToken', this.authRoutes.getToken);
        this.routes.post('/verifyToken', this.authRoutes.verifyToken);
    }
}
exports.AuthController = AuthController;
