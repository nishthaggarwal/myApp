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
exports.getPersonById = void 0;
const getPersonById = (pool, id) => __awaiter(void 0, void 0, void 0, function* () {
    return pool.connect().then(client => client.query('select profile from person where id=$1', [id]).catch(error => {
        console.log(`Client error:${error}`);
    }));
});
exports.getPersonById = getPersonById;
//# sourceMappingURL=db.js.map