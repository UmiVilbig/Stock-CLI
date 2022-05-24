import inquirer from "inquirer"
import fs from 'fs'
import chalk from 'chalk'

import title from "../utils/Title"

const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms))
const sleep2 = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

export default async function deleteStocks(){
    console.clear()
    await title()
    await sleep()
    let stocks = JSON.parse(fs.readFileSync('./Stocks/stocks.json').toString())
    console.log(chalk.blueBright("Here are the stocks you are tracking"))
    console.log('\n', stocks, '\n')
    const answers = await inquirer.prompt({
        name: 'ticker',
        type: 'input',
        message: 'please enter the index of the stock to delete: '
    })
    if(isNaN(answers.ticker)){
        console.log(chalk.red("Please enter a number"))
    } else {
        stocks.splice(answers.ticker - 1,1)
        fs.writeFileSync('./Stocks/stocks.json', JSON.stringify(stocks))
        console.clear()
        await title()
        await sleep()
        console.log(chalk.blueBright("\nThis is the updated tracking stocks"))
        console.log('\n',stocks)
    }
    await sleep2()
}