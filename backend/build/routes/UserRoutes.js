"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const UserService_1 = require("../services/UserService");
class UserRoutes {
    constructor() {
        this.userService = new UserService_1.UserService();
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.getAll = this.getAll.bind(this);
    }
    register(req, res) {
        console.log(req.body);
        this.userService.register(req.body)
            .then((insert) => {
            console.log(insert);
            res.send(insert);
        })
            .catch((e) => {
            res.status(500).send(e);
        });
    }
    login(req, res) {
        this.userService.login(req.body)
            .then(v => {
            console.log(v);
            res.status(200).send(v);
        });
    }
    getAll(req, res) {
        this.userService.getAll()
            .then((users) => {
            res.send(users);
        });
    }
}
exports.UserRoutes = UserRoutes;
