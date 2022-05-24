import figlet from 'figlet'
import gradient from 'gradient-string'

const sleep = (ms = 200 ) => new Promise((r) => setTimeout(r, ms))

export default async function title() {
    console.clear()
    const msg = '                         STOCK CHECKER'
    figlet(msg, (err, data) => {
        console.log(gradient.cristal.multiline(data))
    })
    await sleep()
}