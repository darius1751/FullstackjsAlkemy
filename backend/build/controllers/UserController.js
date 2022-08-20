"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
const UserRoutes_1 = require("../routes/UserRoutes");
class UserController {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.userRoutes = new UserRoutes_1.UserRoutes();
        this.configRoutes = this.configRoutes.bind(this);
        this.configRoutes();
    }
    configRoutes() {
        this.routes.post('/register', this.userRoutes.register);
        this.routes.post('/login', this.userRoutes.login);
        this.routes.get('/getAll', this.userRoutes.getAll);
        this.routes.get('/getBalance/:id', this.userRoutes.getBalance);
    }
}
exports.UserController = UserController;
