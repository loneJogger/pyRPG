import terminal from '../lib/terminal.js'

export default async () => {
    console.log('')
    await terminal.typewriterOutput('Hello, and welcome to the game!', 100)
}