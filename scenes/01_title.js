import terminal from '../lib/terminal.js'

const drawTitle = () => {
    terminal.writeWithFormat('X==============================================================================X\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                                                                            ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||  ######    ####     ###########     ##########       #########             ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||  #### ##   ####    ####     ####    ####    ####     ####                  ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||  ####  ##  ####    ####     ####    ####     ####    ####                  ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||  ####   ## ####    ####     ####    ####     ####    #########             ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||  ####    ######    ####     ####    ####     ####    ####                  ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||  ####     #####    ####     ####    ####    ####     ####                  ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||  ####      ####     ###########     ##########       #########             ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                                                                            ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                                                                            ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                            ###########     ###########      ########       ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                            ####    ####    ####    ####    ####  ####      ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                            ####    ####    ####    ####   ####             ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                            ###########     ###########    ####   ####      ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                            ####  ####      ####           ####    ####     ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                            ####   ####     ####            ####  ####      ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                            ####    ####    ####              ######        ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('||                                                                            ||\n', terminal.colors.text.green)
    terminal.writeWithFormat('X==============================================================================X\n', terminal.colors.text.green)
}

export default async () => {
    let option = -1
    drawTitle()
    console.log('')
    console.log('')
    await terminal.awaitInput(`${terminal.colors.special.blink}                           Press ENTER to continue.${terminal.colors.special.reset}`)
    while (!['1', '2', '3'].includes(option)) {
        console.clear()
        drawTitle()
        console.log('')
        console.log('1. New Game   2. Load Data   3. Exit')
        console.log('')
        option = await terminal.awaitInput('Choose a numerical option: ')
    }
    return option
}