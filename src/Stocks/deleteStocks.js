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
const inquirer_1 = __importDefault(require("inquirer"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const Title_1 = __importDefault(require("../utils/Title"));
const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms));
const sleep2 = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
function deleteStocks() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        yield (0, Title_1.default)();
        yield sleep();
        let stocks = JSON.parse(fs_1.default.readFileSync('./Stocks/stocks.json').toString());
        console.log(chalk_1.default.blueBright("Here are the stocks you are tracking"));
        console.log('\n', stocks, '\n');
        const answers = yield inquirer_1.default.prompt({
            name: 'ticker',
            type: 'input',
            message: 'please enter the index of the stock to delete: '
        });
        if (isNaN(answers.ticker)) {
            console.log(chalk_1.default.red("Please enter a number"));
        }
        else {
            stocks.splice(answers.ticker - 1, 1);
            fs_1.default.writeFileSync('./Stocks/stocks.json', JSON.stringify(stocks));
            console.clear();
            yield (0, Title_1.default)();
            yield sleep();
            console.log(chalk_1.default.blueBright("\nThis is the updated tracking stocks"));
            console.log('\n', stocks);
        }
        yield sleep2();
    });
}
exports.default = deleteStocks;
