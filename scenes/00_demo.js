import terminal from '../lib/terminal.js'

export default async () => {
    await terminal.typewriterOutput('Hello, and welcome to the game!', 75)
    await terminal.awaitInput('')
    await terminal.typewriterOutput(`${terminal.colors.text.red}this text is red :)${terminal.colors.special.reset}`, 100)
    await terminal.awaitInput('')
    await terminal.typewriterOutput('This text is white?', 75)
    await terminal.awaitInput('')
    const formatter = `${terminal.colors.special.blink}${terminal.colors.text.green}${terminal.colors.bg.magenta}`
    terminal.writeWithFormat('BLINKING GREEN TEXT!', formatter)
    console.log('hi')
}