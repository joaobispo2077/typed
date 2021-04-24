"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circumference_1 = require("./circumference");
const rectangle_1 = __importDefault(require("./rectangle"));
console.log(circumference_1.getCircleCircumferenceByRadius(2));
console.log(rectangle_1.default(2, 4));
const { sayHiToPerson } = require('./greetings');
console.log(sayHiToPerson('JOAO'));
//# sourceMappingURL=index.js.map