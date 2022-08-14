"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementRoutes = void 0;
const MovementService_1 = require("../services/MovementService");
class MovementRoutes {
    constructor() {
        this.movementService = new MovementService_1.MovementService();
        this.getAllByUserId = this.getAllByUserId.bind(this);
        this.create = this.create.bind(this);
    }
    getAllByUserId(req, res) {
        this.movementService.getAllByUserId(parseInt(req.params.userId))
            .then(v => {
            console.log(v);
            res.send(v);
        }).catch(ex => {
            res.status(500).send(ex);
        });
    }
    create(req, res) {
        this.movementService.create(req.body)
            .then((v) => {
            console.log(v);
            res.send(v);
        })
            .catch((ex) => {
            res.status(500).send(ex);
        });
    }
}
exports.MovementRoutes = MovementRoutes;
