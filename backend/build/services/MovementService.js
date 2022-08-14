"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementService = void 0;
const MovementDB_1 = require("../database/MovementDB");
class MovementService {
    constructor() {
        this.movementDB = new MovementDB_1.MovementDB;
    }
    getAllByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.movementDB.getAllByUserId(id);
        });
    }
    create(movement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.movementDB.create(movement);
        });
    }
}
exports.MovementService = MovementService;
