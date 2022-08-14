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
exports.ConnectionDB = void 0;
const promise_mysql_1 = require("promise-mysql");
const key_1 = require("./key");
class ConnectionDB {
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, promise_mysql_1.createConnection)(key_1.key);
        });
    }
}
exports.ConnectionDB = ConnectionDB;
