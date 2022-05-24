import fs from 'fs'
import yahooFinance from 'yahoo-finance2'
import chalk from 'chalk'

const sleep = (ms = 5000 ) => new Promise((r) => setTimeout(r, ms))

export default async function getStocks(){
    const stocks = JSON.parse(fs.readFileSync('./Stocks/stocks.json').toString())
    const iterator = stocks.keys()
    for(const keys of iterator){
        var today = new Date()
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        try{
            const result = await yahooFinance.quote(`${stocks[keys]}`)
            const price = result.regularMarketPrice
            console.log(chalk.magentaBright(`[${time}]`), stocks[keys], price)
        } catch(err){
            console.log(chalk.redBright(`An error occured looking up ${stocks[keys]}`))
        }
    }
    await sleep()
}
