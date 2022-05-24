import inquirer from "inquirer"
import fs from 'fs'
import chalk from 'chalk'

const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms))
const sleep2 = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

export default async function addStocks() {
    await sleep()
    const ticker = await inquirer.prompt({
        name: 'ticker',
        type: 'input',
        message: 'Input Ticker: '
    })
    const stocks = JSON.parse(fs.readFileSync('./Stocks/stocks.json').toString())
    stocks.push(ticker.ticker)
    fs.writeFileSync('./Stocks/stocks.json', JSON.stringify(stocks))
    console.log(chalk.greenBright("\n   Ticker added!\n"))
    await sleep2()
}