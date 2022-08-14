"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const express_1 = require("express");
const CategoryRoutes_1 = require("../routes/CategoryRoutes");
class CategoryController {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.categoryRoutes = new CategoryRoutes_1.CategoryRoutes();
        this.configRoutes = this.configRoutes.bind(this);
        this.configRoutes();
    }
    configRoutes() {
        this.routes.post('/create', this.categoryRoutes.create);
        this.routes.get('/getAll/:userId', this.categoryRoutes.getAllByUserId);
    }
}
exports.CategoryController = CategoryController;
