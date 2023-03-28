"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// OPENAI API IMPORT HERE FOR LATER
const openai_route_1 = __importDefault(require("./routes/openai.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/chat", openai_route_1.default);
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));
exports.default = app;
