"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const message = "Hello! TypeScript!";
console.log(message);
const main = async () => {
    const response = await axios_1.default.get("https://api.github.com/users/tktcorporation");
    console.log(`response: ${JSON.stringify(response.data)}`);
    console.log(`response.status: ${response.status}`);
    console.log(`response.data.avatar_url: ${JSON.stringify(response.data.avatar_url)}`);
    const avatar = await axios_1.default.get(response.data.avatar_url);
};
main();
