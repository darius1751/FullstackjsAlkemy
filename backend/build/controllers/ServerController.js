"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerController = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const IndexController_1 = require("./IndexController");
const AuthController_1 = require("./AuthController");
const UserController_1 = require("./UserController");
const CategoryController_1 = require("./CategoryController");
const MovementController_1 = require("./MovementController");
class ServerController {
    constructor() {
        this.app = (0, express_1.default)();
        this.indexController = new IndexController_1.IndexController();
        this.authController = new AuthController_1.AuthController();
        this.userController = new UserController_1.UserController();
        this.categoryController = new CategoryController_1.CategoryController();
        this.movementController = new MovementController_1.MovementController();
        this.useResources();
        this.createRoutes();
    }
    useResources() {
        dotenv_1.default.config();
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.set('port', process.env.PORT || 8080);
    }
    createRoutes() {
        this.app.use('', this.indexController.routes);
        this.app.use('/auth/', this.authController.routes);
        this.app.use('/user/', this.userController.routes);
        this.app.use('/category/', this.categoryController.routes);
        this.app.use('/movement/', this.movementController.routes);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Run Server in port ${this.app.get('port')}`);
        });
    }
}
exports.ServerController = ServerController;
