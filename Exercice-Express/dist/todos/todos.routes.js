"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoutes = void 0;
const express_1 = __importStar(require("express"));
const todos_model_1 = require("./todos.model");
const todosRoutes = (0, express_1.Router)();
exports.todosRoutes = todosRoutes;
todosRoutes.get('', async (req, res) => {
    const todos = await todos_model_1.TodosModel.findAll();
    res.json(todos);
});
todosRoutes.get('/:todoId', async (req, res) => {
    const todo = await todos_model_1.TodosModel.findById(req.params.todoId);
    res.json(todo);
});
todosRoutes.post('', express_1.default.json(), async (req, res) => {
    const todoToInsert = req.body;
    const newTodo = await todos_model_1.TodosModel.create(todoToInsert);
    res.statusCode = 201;
    res.json(newTodo);
});
