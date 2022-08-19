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
exports.UserDB = void 0;
const ConnectionDB_1 = require("../connection/ConnectionDB");
const MovementDB_1 = require("./MovementDB");
class UserDB {
    constructor() {
        this.connectionDB = new ConnectionDB_1.ConnectionDB();
    }
    register(user) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.connectionDB.open();
            yield connection.query('CALL create_credential(?,?);', [(_a = user.credential) === null || _a === void 0 ? void 0 : _a.email, (_b = user.credential) === null || _b === void 0 ? void 0 : _b.password]);
            let credentialId = (yield connection.query('SELECT id FROM credential WHERE email = ?', [(_c = user.credential) === null || _c === void 0 ? void 0 : _c.email]))[0].id;
            yield connection.query('INSERT INTO person(name,birthday,credential_id) VALUES(?,?,?)', [user.name, user.birthday, credentialId]);
            const userId = yield connection.query(`SELECT id FROM person WHERE credential_id = ?`, [credentialId]);
            connection.destroy();
            user.id = userId || -1;
            return user;
        });
    }
    login(credential) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.connectionDB.open();
            const validateCredential = (yield connection.query('CALL validate_credential(?,?)', [credential.email, credential.password]))[0][0];
            if (validateCredential) {
                let user = (yield connection.query('CALL get_user(?)', [validateCredential.id]))[0][0];
                /*user.credential = {};
                user.credential.id = validateCredential.id;*/
                connection.destroy();
                user.movements = yield new MovementDB_1.MovementDB().getAllByUserId(user.id || -1);
                if (user.id)
                    user.balance = yield this.getBalanceByUserId(user.id);
                return user;
            }
            else
                return { id: -1 };
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.connectionDB.open();
            let users = yield connection.query('SELECT id, name,birthday,created_at FROM person');
            connection.destroy();
            return users;
        });
    }
    getBalanceByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let balance = 0;
            const connection = yield this.connectionDB.open();
            (yield new MovementDB_1.MovementDB().getAllByUserId(id))
                .forEach((movement) => {
                if (movement.typeMovement.id === 1)
                    balance += movement.balance || 0;
                else
                    balance -= movement.balance || 0;
            });
            return balance;
        });
    }
}
exports.UserDB = UserDB;
