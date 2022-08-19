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
exports.MovementDB = void 0;
const ConnectionDB_1 = require("../connection/ConnectionDB");
class MovementDB {
    constructor() {
        this.connectionDB = new ConnectionDB_1.ConnectionDB();
    }
    getAllByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield this.connectionDB.open();
                let results = (yield connection.query('CALL get_movements_by_user_id(?)', [id]))[0];
                let movements = [];
                if (results.length > 0) {
                    results.forEach((movement) => {
                        //m.id, m.description, m.balance, m.created_at AS createdAt, tm.id AS 'tmId', tm.name AS 'tmName', cp.id AS 'categoryId', cp.name AS 'categoryName'
                        const { id, description, balance, created_at: createdAt, tmId, tmName, categoryId, categoryName } = movement;
                        movements.push({
                            id,
                            balance,
                            createdAt,
                            description,
                            typeMovement: {
                                id: tmId,
                                name: tmName
                            },
                            category: {
                                id: categoryId,
                                name: categoryName
                            }
                        });
                    });
                }
                connection.destroy();
                return movements;
            }
            catch (ex) {
                throw ex;
            }
        });
    }
    create(movement) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield this.connectionDB.open();
                yield connection.query('CALL create_movement(?,?,?,?,?)', [movement.description, movement.balance, movement.typeMovement.id, (_a = movement.category) === null || _a === void 0 ? void 0 : _a.id, (_b = movement.user) === null || _b === void 0 ? void 0 : _b.id]);
                return movement;
                /*IN new_description VARCHAR(255),
        IN new_balance DECIMAL(12,2),
        IN new_type_movement_id INT,
        IN new_category_personal_id INT,
        IN new_person_id INT */
            }
            catch (ex) {
                throw ex;
            }
        });
    }
}
exports.MovementDB = MovementDB;
