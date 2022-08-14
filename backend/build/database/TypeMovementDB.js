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
exports.TypeMovementDB = void 0;
const ConnectionDB_1 = require("../connection/ConnectionDB");
class TypeMovementDB {
    getTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            const connectionDB = new ConnectionDB_1.ConnectionDB();
            let connection = yield connectionDB.open();
            return yield connection.query('SELECT * FROM type_movement AS tm ORDER BY tm.id ASC');
        });
    }
}
exports.TypeMovementDB = TypeMovementDB;
