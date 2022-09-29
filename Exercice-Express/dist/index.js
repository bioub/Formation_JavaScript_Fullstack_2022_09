"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./todos/todos.routes");
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Ajouter vos routes ici :
// ...
app.use('/api/todos', todos_routes_1.todosRoutes);
const { PORT, DB_HOST, DB_PORT, DB_NAME } = process.env;
(0, mongoose_1.connect)(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`).then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
});
