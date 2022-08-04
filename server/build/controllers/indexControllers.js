"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    index(request, response) {
        response.json({ text: 'API los productos estab en api/controllers' });
    }
}
exports.indexControllers = new IndexControllers();
