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
const Title_1 = __importDefault(require("./utils/Title"));
const addStocks_1 = __importDefault(require("./Stocks/addStocks"));
const getStocks_1 = __importDefault(require("./Stocks/getStocks"));
const deleteStocks_1 = __importDefault(require("./Stocks/deleteStocks"));
const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms));
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        yield (0, Title_1.default)();
        yield sleep();
        console.log('\n');
        const answers = yield inquirer_1.default.prompt({
            name: 'MainQuestion',
            type: 'list',
            message: 'Select Task',
            choices: [
                'Check Stocks',
                'Add Stocks',
                'Delete Stocks'
            ]
        });
        if (answers.MainQuestion === 'Check Stocks') {
            yield (0, getStocks_1.default)();
            Main();
        }
        else if (answers.MainQuestion === 'Add Stocks') {
            yield (0, addStocks_1.default)();
            Main();
        }
        else if (answers.MainQuestion === 'Delete Stocks') {
            yield (0, deleteStocks_1.default)();
            Main();
        }
    });
}
exports.default = Main;
