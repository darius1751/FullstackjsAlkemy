"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const express_1 = require("express");
const IndexRoutes_1 = require("../routes/IndexRoutes");
class IndexController {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.indexRoutes = new IndexRoutes_1.IndexRoutes();
        this.configRoutes();
    }
    configRoutes() {
        this.routes.get('', this.indexRoutes.welcome);
    }
}
exports.IndexController = IndexController;
