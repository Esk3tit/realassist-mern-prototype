"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const mongodb_1 = __importDefault(require("mongodb"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MongoClient = mongodb_1.default.MongoClient;
const port = process.env.PORT || 5000;
MongoClient.connect(process.env.MONGODB_URI).catch(err => {
    console.error(err.stack);
    process.exit(1);
}).then(async (client) => {
    server_1.default.listen(port, () => {
        console.log(`⚡️[server]: Listening on port ${port}`);
    });
});
