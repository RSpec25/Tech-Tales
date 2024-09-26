"use strict";
// export zod variables to backend and type inference to frontend
// deploying to npm 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInp = exports.createBlogInp = exports.signinInp = exports.signupInp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInp = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.signinInp = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.createBlogInp = zod_1.default.object({
    content: zod_1.default.string(),
    title: zod_1.default.string()
});
exports.updateBlogInp = zod_1.default.object({
    content: zod_1.default.string(),
    title: zod_1.default.string(),
    id: zod_1.default.string()
});
// npm login
// npm publish --access public
// name repo/medium-common
// main = dist/index.js
// .npmignore add src
// in dist we have js and ts file. ts file for types 
