"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const AuthService_1 = require("../secure/AuthService");
class AuthRoutes {
    constructor() {
        this.getToken = this.getToken.bind(this);
        this.verifyToken = this.verifyToken.bind(this);
        this.authService = new AuthService_1.AuthService();
    }
    getToken(req, res) {
        res.status(200).send({ token: this.authService.createToken(req.body) });
    }
    verifyToken(req, res) {
        this.authService.validateToken({ authorization: req.headers.authorization })
            .then(v => res.send(v)).catch(e => {
            res.status(401).send({ code: 401, message: 'Invalid token' });
        });
    }
}
exports.AuthRoutes = AuthRoutes;
