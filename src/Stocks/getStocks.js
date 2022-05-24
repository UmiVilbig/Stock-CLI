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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const yahoo_finance2_1 = __importDefault(require("yahoo-finance2"));
const chalk_1 = __importDefault(require("chalk"));
const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));
function getStocks() {
    return __awaiter(this, void 0, void 0, function* () {
        const stocks = JSON.parse(fs_1.default.readFileSync('./Stocks/stocks.json').toString());
        const iterator = stocks.keys();
        for (const keys of iterator) {
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            try {
                const result = yield yahoo_finance2_1.default.quote(`${stocks[keys]}`);
                const price = result.regularMarketPrice;
                console.log(chalk_1.default.magentaBright(`[${time}]`), stocks[keys], price);
            }
            catch (err) {
                console.log(chalk_1.default.redBright(`An error occured looking up ${stocks[keys]}`));
            }
        }
        yield sleep();
    });
}
exports.default = getStocks;
