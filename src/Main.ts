import inquirer from 'inquirer'

import title from './utils/Title';
import addStocks from "./Stocks/addStocks";
import getStocks from './Stocks/getStocks';
import deleteStocks from './Stocks/deleteStocks';

const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms))

export default async function Main(){
    console.clear()
    await title()
    await sleep()
    console.log('\n')
    const answers = await inquirer.prompt({
        name: 'MainQuestion',
        type: 'list',
        message: 'Select Task',
        choices: [
            'Check Stocks',
            'Add Stocks',
            'Delete Stocks'
        ]
    })
    if(answers.MainQuestion === 'Check Stocks'){
        await getStocks()
        Main()
    } else if(answers.MainQuestion === 'Add Stocks') {
        await addStocks()
        Main()
    } else if(answers.MainQuestion === 'Delete Stocks') {
        await deleteStocks()
        Main()
    }
}