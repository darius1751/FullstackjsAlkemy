"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const CategoryService_1 = require("../services/CategoryService");
class CategoryRoutes {
    constructor() {
        this.categoryService = new CategoryService_1.CategoryService();
        this.create = this.create.bind(this);
        this.getAllByUserId = this.getAllByUserId.bind(this);
    }
    create(req, res) {
        this.categoryService.create(req.body)
            .then(v => {
            res.send(v);
        })
            .catch((e) => {
            res.status(500).send(e);
        });
    }
    getAllByUserId(req, res) {
        let { userId } = req.params;
        this.categoryService.getAllByUserId(parseInt(userId))
            .then((v) => res.send(v))
            .catch(err => res.status(500).send(err));
    }
}
exports.CategoryRoutes = CategoryRoutes;
