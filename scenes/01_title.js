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
    while (option < 1 || option > 3) {
        console.clear()
        drawTitle()
        console.log('')
        console.log('1. New Game')
        console.log('2. Load Data')
        console.log('3. Exit')
        option = await terminal.awaitInput('Choose a numerical option: ')
    }
    return option
}