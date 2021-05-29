"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const express_1 = require("express");
function createRouter(pool) {
    const router = express_1.Router();
    router.get('/api/person/:id', (req, res) => {
        console.log(req.path);
        console.log(req.params);
        res.sendStatus(200);
    });
    return router;
}
exports.createRouter = createRouter;
//# sourceMappingURL=index.js.map