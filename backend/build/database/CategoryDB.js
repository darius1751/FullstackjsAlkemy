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
exports.CategoryDB = void 0;
const ConnectionDB_1 = require("../connection/ConnectionDB");
class CategoryDB {
    constructor() {
        this.connectionDB = new ConnectionDB_1.ConnectionDB();
        this.create = this.create.bind(this);
    }
    create(category) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield this.connectionDB.open();
                yield connection.query('INSERT INTO categories_personal(name,person_id) VALUES(?,?)', [category.name, (_a = category.user) === null || _a === void 0 ? void 0 : _a.id]);
                let newCategory = yield connection.query('SELECT * FROM categories_personal WHERE name = ? AND person_id', [category.name, (_b = category.user) === null || _b === void 0 ? void 0 : _b.id]);
                return newCategory;
            }
            catch (ex) {
                throw { id: -1 };
            }
        });
    }
    getAllByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield this.connectionDB.open();
                const data = yield connection.query('SELECT id,name,created_at AS createdAt FROM categories_personal WHERE person_id = ?', [id]);
                connection.destroy();
                return data;
            }
            catch (ex) {
                console.log(ex);
                throw [];
            }
        });
    }
}
exports.CategoryDB = CategoryDB;
